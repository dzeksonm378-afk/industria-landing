import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function AiEstimateSection() {
  const content = siteContent.aiEstimateSection;

  return (
    <Section eyebrow={content.eyebrow} title={content.title} description={content.description}>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <ol className="grid gap-3 sm:grid-cols-2">
          {content.steps.map((step, index) => (
            <li key={step} className="metal-card flex gap-4 rounded-lg p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gold/40 bg-gold/10 font-semibold text-gold-soft">
                {index + 1}
              </span>
              <span className="text-sm leading-6 text-silver/80">{step}</span>
            </li>
          ))}
        </ol>
        <div className="premium-panel rounded-lg p-5 sm:p-7" aria-label="Схема интерфейса AI-калькулятора">
          <div className="flex items-center justify-between gap-3 border-b border-silver/10 pb-4">
            <span className="text-sm font-semibold text-mist">AI-анализ объекта</span>
            <span className="rounded-sm border border-gold/30 bg-gold/10 px-2 py-1 text-xs text-gold-soft">1–5 фото</span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2" aria-hidden="true">
            {["Фото", "Параметры", "Риски"].map((item) => <div key={item} className="rounded-md border border-silver/10 bg-ink/70 p-4 text-center text-xs text-silver/65">{item}</div>)}
          </div>
          <div className="mt-4 rounded-md border border-gold/25 bg-gold/10 p-4">
            <p className="text-xs uppercase text-gold-soft">Результат</p>
            <p className="mt-2 text-lg font-semibold text-mist">Предварительный диапазон</p>
            <p className="mt-2 text-sm text-silver/70">Ориентировочная структура стоимости и факторы риска</p>
          </div>
          <Link href="/estimate" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-gold-soft px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold focus-visible:outline-gold-soft">
            {content.ctaLabel}
          </Link>
        </div>
      </div>
    </Section>
  );
}
