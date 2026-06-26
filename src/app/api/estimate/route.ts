import { NextResponse } from "next/server";
import {
  calculateEstimate,
  type EstimateInput,
  type EstimateObjectType,
} from "@/server/estimate/estimate-rules";

export const runtime = "nodejs";

const allowedObjectTypes = new Set<EstimateObjectType>([
  "apartment",
  "commercial",
  "private_house",
  "industrial",
  "unknown",
]);
const allowedAccess = new Set<EstimateInput["accessDifficulty"]>(["low", "medium", "high", "unknown"]);
const allowedWasteRemoval = new Set<EstimateInput["wasteRemoval"]>(["yes", "no", "unknown"]);
const allowedUrgency = new Set<EstimateInput["urgency"]>(["standard", "urgent", "unknown"]);
const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

const MAX_PHOTOS = 5;
const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_SIZE = 20 * 1024 * 1024;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;

type EstimateApiResponse = {
  ok: boolean;
  estimate?: {
    minPrice: number;
    maxPrice: number;
    needsManualReview: boolean;
    reasons: string[];
    aiComment: string;
    confidence: number;
  };
  message: string;
};

type RateLimitState = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitState>();

function jsonResponse(body: EstimateApiResponse, status: number, headers?: HeadersInit) {
  return NextResponse.json(body, { status, headers });
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();

  return (forwardedFor || realIp || "unknown").slice(0, 80);
}

function checkRateLimit(clientIp: string) {
  const now = Date.now();

  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const state = rateLimitStore.get(clientIp);

  if (!state || state.resetAt <= now) {
    rateLimitStore.set(clientIp, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, retryAfter: 0 };
  }

  if (state.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((state.resetAt - now) / 1000)),
    };
  }

  state.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function getTextField(formData: FormData, name: string) {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim() : "";
}

function isFile(value: FormDataEntryValue): value is File {
  return typeof File !== "undefined" && value instanceof File;
}

function validateFormData(formData: FormData) {
  const errors: string[] = [];
  const name = getTextField(formData, "name");
  const contact = getTextField(formData, "contact");
  const objectType = getTextField(formData, "objectType") as EstimateObjectType;
  const areaRaw = getTextField(formData, "area");
  const access = getTextField(formData, "access") as EstimateInput["accessDifficulty"];
  const wasteRemoval = getTextField(formData, "wasteRemoval") as EstimateInput["wasteRemoval"];
  const urgency = getTextField(formData, "urgency") as EstimateInput["urgency"];
  const comment = getTextField(formData, "comment");
  const area = Number(areaRaw);
  const photos = formData.getAll("photos").filter((item): item is File => isFile(item) && item.size > 0);
  const totalSize = photos.reduce((sum, photo) => sum + photo.size, 0);

  if (name.length < 2 || name.length > 80) {
    errors.push("имя должно быть от 2 до 80 символов");
  }

  if (contact.length < 3 || contact.length > 120) {
    errors.push("контакт должен быть от 3 до 120 символов");
  }

  if (!allowedObjectTypes.has(objectType)) {
    errors.push("выберите корректный тип объекта");
  }

  if (!Number.isFinite(area) || area < 1 || area > 5000) {
    errors.push("площадь должна быть числом от 1 до 5000 м2");
  }

  if (!allowedAccess.has(access)) {
    errors.push("выберите корректный доступ к объекту");
  }

  if (!allowedWasteRemoval.has(wasteRemoval)) {
    errors.push("выберите корректный вариант вывоза мусора");
  }

  if (!allowedUrgency.has(urgency)) {
    errors.push("выберите корректную срочность");
  }

  if (comment.length > 1000) {
    errors.push("комментарий должен быть до 1000 символов");
  }

  if (photos.length < 1) {
    errors.push("загрузите от 1 до 5 фото");
  }

  if (photos.length > MAX_PHOTOS) {
    errors.push("можно загрузить не больше 5 фото");
  }

  for (const photo of photos) {
    if (!allowedMimeTypes.has(photo.type)) {
      errors.push("допустимы только JPG, PNG или WebP фото");
      break;
    }

    if (photo.size > MAX_PHOTO_SIZE) {
      errors.push("каждое фото должно быть не больше 5 MB");
      break;
    }
  }

  if (totalSize > MAX_TOTAL_SIZE) {
    errors.push("общий размер фото должен быть не больше 20 MB");
  }

  if (errors.length > 0) {
    return { errors };
  }

  const input: EstimateInput = {
    objectType,
    area,
    accessDifficulty: access,
    wasteRemoval,
    urgency,
  };

  return { errors, input };
}

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(getClientIp(request));

  if (!rateLimit.allowed) {
    return jsonResponse(
      {
        ok: false,
        message: "Слишком много запросов. Попробуйте немного позже.",
      },
      429,
      { "Retry-After": String(rateLimit.retryAfter) },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("multipart/form-data")) {
    return jsonResponse(
      {
        ok: false,
        message: "Нужно отправить форму с фото.",
      },
      400,
    );
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return jsonResponse(
      {
        ok: false,
        message: "Не удалось прочитать форму. Проверьте фото и попробуйте снова.",
      },
      400,
    );
  }

  const validation = validateFormData(formData);

  if (!validation.input) {
    return jsonResponse(
      {
        ok: false,
        message: `Проверьте данные: ${validation.errors.join("; ")}.`,
      },
      400,
    );
  }

  const estimate = calculateEstimate(validation.input);
  const confidence = estimate.needsManualReview ? 0.45 : 0.62;
  const aiEstimateEnabled = process.env.AI_ESTIMATE_ENABLED === "true";

  return jsonResponse(
    {
      ok: true,
      estimate: {
        ...estimate,
        aiComment: aiEstimateEnabled
          ? "AI-анализ фото подготовлен к подключению, но на Stage 5.0 расчет пока выполнен по базовым правилам и ответам пользователя."
          : "AI-анализ фото будет подключён на следующем этапе. Сейчас расчёт выполнен по базовым правилам и ответам пользователя.",
        confidence,
      },
      message: "Предварительный расчет готов.",
    },
    200,
  );
}
