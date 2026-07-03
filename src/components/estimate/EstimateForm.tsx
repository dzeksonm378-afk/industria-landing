"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { siteContent } from "@/data/siteContent";

type EstimateApiResponse = {
  ok: boolean;
  estimate?: {
    minPrice: number;
    maxPrice: number;
    baseRate: number;
    marketAverageRate: number;
    discountPercent: number;
    objectType: "apartment" | "commercial" | "private_house" | "industrial" | "unknown";
    complexity: "low" | "medium" | "high" | "unknown";
    access: "low" | "medium" | "high" | "unknown";
    needsManualReview: boolean;
    reasons: string[];
    aiComment: string;
    confidence: number;
    aiSource: "gemini" | "fallback";
  };
  message: string;
};

const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxPhotos = 5;
const maxPhotoSize = 5 * 1024 * 1024;
const maxTotalSize = 20 * 1024 * 1024;

function getFormString(formData: FormData, name: string) {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim() : "";
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value);
}

function validateClientForm(formData: FormData, files: File[]) {
  const errors: string[] = [];
  const name = getFormString(formData, "name");
  const contact = getFormString(formData, "contact");
  const area = Number(getFormString(formData, "area"));
  const comment = getFormString(formData, "comment");
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  if (name.length < 2 || name.length > 80) {
    errors.push("Укажите имя от 2 до 80 символов.");
  }

  if (contact.length < 3 || contact.length > 120) {
    errors.push("Укажите телефон или Telegram для связи.");
  }

  if (!Number.isFinite(area) || area < 1 || area > 5000) {
    errors.push("Площадь должна быть от 1 до 5000 м2.");
  }

  if (comment.length > 1000) {
    errors.push("Комментарий должен быть до 1000 символов.");
  }

  if (files.length < 1 || files.length > maxPhotos) {
    errors.push("Загрузите от 1 до 5 фото.");
  }

  for (const file of files) {
    if (!allowedMimeTypes.has(file.type)) {
      errors.push("Фото должны быть в формате JPG, PNG или WebP.");
      break;
    }

    if (file.size > maxPhotoSize) {
      errors.push("Каждое фото должно быть не больше 5 MB.");
      break;
    }
  }

  if (totalSize > maxTotalSize) {
    errors.push("Общий размер фото должен быть не больше 20 MB.");
  }

  return errors;
}

export function EstimateForm() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState<EstimateApiResponse["estimate"] | null>(null);

  const content = siteContent.estimate;

  function handleFilesChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedFiles(Array.from(event.target.files ?? []));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const clientErrors = validateClientForm(formData, selectedFiles);

    setErrorMessage("");
    setResult(null);

    if (clientErrors.length > 0) {
      setErrorMessage(clientErrors.join(" "));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as EstimateApiResponse;

      if (!response.ok || !data.ok || !data.estimate) {
        setErrorMessage(data.message || "Не удалось подготовить расчет. Проверьте поля и попробуйте снова.");
        return;
      }

      setResult(data.estimate);
    } catch {
      setErrorMessage("Не удалось отправить данные. Проверьте соединение и попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="premium-panel rounded-lg p-5 lg:p-7" onSubmit={handleSubmit}>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase text-gold-soft">{content.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-mist">{content.form.title}</h2>
        <p className="mt-3 text-sm leading-6 text-silver/75">{content.disclaimer}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <label className="block text-sm font-semibold text-mist">
          {content.form.nameLabel}
          <input name="name" type="text" minLength={2} maxLength={80} placeholder={content.form.namePlaceholder} required className="mt-3" />
        </label>

        <label className="block text-sm font-semibold text-mist">
          {content.form.contactLabel}
          <input name="contact" type="text" minLength={3} maxLength={120} placeholder={content.form.contactPlaceholder} required className="mt-3" />
        </label>

        <label className="block text-sm font-semibold text-mist">
          {content.form.objectTypeLabel}
          <select name="objectType" required className="mt-3" defaultValue="unknown">
            {content.form.objectTypes.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-semibold text-mist">
          {content.form.areaLabel}
          <input name="area" type="number" min={1} max={5000} placeholder={content.form.areaPlaceholder} required className="mt-3" />
        </label>

        <label className="block text-sm font-semibold text-mist">
          {content.form.accessLabel}
          <select name="access" required className="mt-3" defaultValue="unknown">
            {content.form.accessOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-semibold text-mist">
          {content.form.wasteRemovalLabel}
          <select name="wasteRemoval" required className="mt-3" defaultValue="unknown">
            {content.form.wasteRemovalOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-semibold text-mist">
          {content.form.urgencyLabel}
          <select name="urgency" required className="mt-3" defaultValue="standard">
            {content.form.urgencyOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-semibold text-mist">
          {content.form.photosLabel}
          <input
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            required
            className="mt-3"
            onChange={handleFilesChange}
          />
          <span className="mt-2 block text-xs font-medium leading-5 text-silver/60">{content.form.photosHint}</span>
          <span className="mt-2 block text-xs font-semibold text-gold-soft">
            {content.form.selectedFilesLabel}: {selectedFiles.length}
          </span>
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-mist">
        {content.form.commentLabel}
        <textarea name="comment" rows={5} maxLength={1000} placeholder={content.form.commentPlaceholder} className="mt-3 resize-y" />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 min-h-12 w-full rounded-md border border-gold-soft/70 bg-gold-soft px-5 py-3 text-sm font-semibold text-ink shadow-gold-soft transition hover:border-gold hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-gold-soft"
      >
        {isSubmitting ? "Считаем..." : content.form.submitLabel}
      </button>

      {errorMessage && (
        <div className="mt-5 rounded-md border border-red-300/25 bg-red-950/30 p-4 text-sm leading-6 text-red-100" role="alert">
          {errorMessage}
        </div>
      )}

      {result && (
        <div className="mt-6 rounded-lg border border-gold/25 bg-ink/70 p-5" aria-live="polite">
          <p className="text-sm font-semibold uppercase text-gold-soft">{content.result.title}</p>
          <p className="mt-3 text-3xl font-semibold leading-tight text-mist">
            {formatPrice(result.minPrice)} - {formatPrice(result.maxPrice)} ₽
          </p>
          <p className="mt-3 text-sm leading-6 text-silver/75">{content.result.pricingBasisText}</p>
          {result.needsManualReview && (
            <p className="mt-3 rounded-md border border-gold/20 bg-gold/10 p-3 text-sm leading-6 text-silver/80">
              {content.result.manualReviewText}
            </p>
          )}

          <div className="mt-5 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold text-mist">{content.result.aiNoteTitle}</p>
              <p className="mt-2 text-sm leading-6 text-silver/75">{result.aiComment}</p>
              <p className="mt-2 text-xs font-semibold text-silver/55">Уверенность AI: {Math.round(result.confidence * 100)}%</p>
              {result.aiSource === "fallback" && (
                <p className="mt-2 text-xs font-semibold text-gold-soft/80">
                  AI-анализ временно недоступен, расчёт выполнен по базовым правилам.
                </p>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-mist">{content.result.reasonsTitle}</p>
              <ul className="mt-2 grid gap-2 text-sm leading-6 text-silver/75">
                {result.reasons.map((reason) => (
                  <li key={reason} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-soft" aria-hidden="true" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-5 border-t border-silver/10 pt-4 text-sm leading-6 text-silver/70">{content.disclaimer}</p>
        </div>
      )}
    </form>
  );
}
