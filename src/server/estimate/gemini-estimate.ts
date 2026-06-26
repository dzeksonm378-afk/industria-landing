export type GeminiEstimateAnalysis = {
  objectType: "apartment" | "commercial" | "private_house" | "industrial" | "unknown";
  visibleMaterials: string[];
  complexity: "low" | "medium" | "high" | "unknown";
  accessDifficulty: "low" | "medium" | "high" | "unknown";
  wasteVolume: "low" | "medium" | "high" | "unknown";
  visibleRisks: string[];
  confidence: number;
  shortComment: string;
};

type GeminiEstimateResult = {
  ok: boolean;
  analysis: GeminiEstimateAnalysis;
  source: "gemini" | "fallback";
  errorMessage?: string;
};

type GeminiPart = {
  text?: string;
  inline_data?: {
    mime_type: string;
    data: string;
  };
};

const fallbackAnalysis: GeminiEstimateAnalysis = {
  objectType: "unknown",
  visibleMaterials: [],
  complexity: "unknown",
  accessDifficulty: "unknown",
  wasteVolume: "unknown",
  visibleRisks: ["AI-анализ недоступен, требуется ручная проверка"],
  confidence: 0,
  shortComment: "AI-анализ временно недоступен. Расчёт выполнен по базовым правилам и ответам пользователя.",
};

const objectTypeValues = ["apartment", "commercial", "private_house", "industrial", "unknown"] as const;
const levelValues = ["low", "medium", "high", "unknown"] as const;
const GEMINI_TIMEOUT_MS = 22000;

function getFallbackResult(errorMessage?: string): GeminiEstimateResult {
  return {
    ok: false,
    analysis: fallbackAnalysis,
    source: "fallback",
    errorMessage,
  };
}

function sanitizeText(value: string, maxLength: number) {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function sanitizeCommentForAi(value: string) {
  return sanitizeText(value, 500)
    .replace(/\+?\d[\d\s()\-]{7,}\d/g, "[контакт скрыт]")
    .replace(/@[a-zA-Z0-9_]{3,}/g, "[контакт скрыт]")
    .slice(0, 500);
}

function normalizeModelId(value: string) {
  const model = sanitizeText(value, 80) || "gemini-2.5-flash";

  return model.replace(/^models\//, "");
}

function normalizeEnum<T extends readonly string[]>(value: unknown, allowedValues: T, fallback: T[number]): T[number] {
  return typeof value === "string" && (allowedValues as readonly string[]).includes(value) ? value : fallback;
}

function normalizeStringArray(value: unknown, maxItems: number, maxLength: number) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => sanitizeText(item, maxLength))
    .filter(Boolean)
    .slice(0, maxItems);
}

function normalizeConfidence(value: unknown) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return 0;
  }

  return Math.min(1, Math.max(0, value));
}

function extractGeminiText(value: unknown): string {
  if (!value || typeof value !== "object") {
    return "";
  }

  const response = value as {
    candidates?: Array<{
      content?: {
        parts?: Array<{
          text?: unknown;
        }>;
      };
    }>;
  };

  const part = response.candidates?.[0]?.content?.parts?.find((item) => typeof item.text === "string");

  return typeof part?.text === "string" ? part.text : "";
}

function parseJsonText(text: string) {
  const trimmed = text.trim().replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  return JSON.parse(trimmed) as unknown;
}

function normalizeAnalysis(value: unknown): GeminiEstimateAnalysis | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Record<string, unknown>;
  const analysis: GeminiEstimateAnalysis = {
    objectType: normalizeEnum(candidate.objectType, objectTypeValues, "unknown"),
    visibleMaterials: normalizeStringArray(candidate.visibleMaterials, 8, 60),
    complexity: normalizeEnum(candidate.complexity, levelValues, "unknown"),
    accessDifficulty: normalizeEnum(candidate.accessDifficulty, levelValues, "unknown"),
    wasteVolume: normalizeEnum(candidate.wasteVolume, levelValues, "unknown"),
    visibleRisks: normalizeStringArray(candidate.visibleRisks, 8, 90),
    confidence: normalizeConfidence(candidate.confidence),
    shortComment:
      typeof candidate.shortComment === "string"
        ? sanitizeText(candidate.shortComment, 260)
        : "AI-анализ фото выполнен. Финальную стоимость подтвердит специалист после осмотра.",
  };

  if (!analysis.shortComment) {
    analysis.shortComment = "AI-анализ фото выполнен. Финальную стоимость подтвердит специалист после осмотра.";
  }

  return analysis;
}

async function fileToGeminiPart(photo: File): Promise<GeminiPart> {
  const buffer = Buffer.from(await photo.arrayBuffer());

  return {
    inline_data: {
      mime_type: photo.type,
      data: buffer.toString("base64"),
    },
  };
}

function buildPrompt(input: {
  objectTypeFromUser: string;
  area: number;
  access: string;
  wasteRemoval: string;
  urgency: string;
  comment: string;
}) {
  return [
    "Ты помогаешь оценить фото объекта для демонтажной компании.",
    "Проанализируй только видимые признаки на фото и ответы пользователя.",
    "Не делай скрытых предположений, не определяй личные данные, не считай итоговую цену и не называй стоимость.",
    "Итоговая стоимость всегда считается серверными правилами и подтверждается специалистом после осмотра.",
    "Верни только JSON без markdown.",
    "",
    "Данные пользователя без имени и контакта:",
    `Тип объекта от пользователя: ${sanitizeText(input.objectTypeFromUser, 40)}`,
    `Площадь: ${Number.isFinite(input.area) ? input.area : 0} м2`,
    `Доступ: ${sanitizeText(input.access, 40)}`,
    `Вывоз мусора: ${sanitizeText(input.wasteRemoval, 40)}`,
    `Срочность: ${sanitizeText(input.urgency, 40)}`,
    `Комментарий: ${sanitizeCommentForAi(input.comment) || "нет"}`,
    "",
    "JSON schema по смыслу:",
    "objectType: apartment | commercial | private_house | industrial | unknown",
    "visibleMaterials: string[]",
    "complexity: low | medium | high | unknown",
    "accessDifficulty: low | medium | high | unknown",
    "wasteVolume: low | medium | high | unknown",
    "visibleRisks: string[]",
    "confidence: number от 0 до 1",
    "shortComment: короткий комментарий по-русски для клиента.",
  ].join("\n");
}

const responseSchema = {
  type: "OBJECT",
  properties: {
    objectType: {
      type: "STRING",
      enum: objectTypeValues,
    },
    visibleMaterials: {
      type: "ARRAY",
      items: { type: "STRING" },
    },
    complexity: {
      type: "STRING",
      enum: levelValues,
    },
    accessDifficulty: {
      type: "STRING",
      enum: levelValues,
    },
    wasteVolume: {
      type: "STRING",
      enum: levelValues,
    },
    visibleRisks: {
      type: "ARRAY",
      items: { type: "STRING" },
    },
    confidence: {
      type: "NUMBER",
    },
    shortComment: {
      type: "STRING",
    },
  },
  required: [
    "objectType",
    "visibleMaterials",
    "complexity",
    "accessDifficulty",
    "wasteVolume",
    "visibleRisks",
    "confidence",
    "shortComment",
  ],
};

export async function analyzeEstimateWithGemini(input: {
  objectTypeFromUser: string;
  area: number;
  access: string;
  wasteRemoval: string;
  urgency: string;
  comment: string;
  photos: File[];
}): Promise<GeminiEstimateResult> {
  if (process.env.AI_ESTIMATE_ENABLED !== "true") {
    return getFallbackResult("AI estimate disabled");
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return getFallbackResult("Gemini API key is missing");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);

  try {
    const modelId = normalizeModelId(process.env.GEMINI_MODEL || "gemini-2.5-flash");
    const imageParts = await Promise.all(input.photos.map((photo) => fileToGeminiPart(photo)));
    const parts: GeminiPart[] = [{ text: buildPrompt(input) }, ...imageParts];
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(modelId)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts,
          },
        ],
        generationConfig: {
          temperature: 0.2,
          response_mime_type: "application/json",
          response_schema: responseSchema,
        },
        store: false,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      return getFallbackResult("Gemini request failed");
    }

    const json = (await response.json()) as unknown;
    const text = extractGeminiText(json);

    if (!text) {
      return getFallbackResult("Gemini response is empty");
    }

    const analysis = normalizeAnalysis(parseJsonText(text));

    if (!analysis) {
      return getFallbackResult("Gemini response is invalid");
    }

    return {
      ok: true,
      analysis,
      source: "gemini",
    };
  } catch {
    return getFallbackResult("Gemini analysis failed");
  } finally {
    clearTimeout(timeout);
  }
}
