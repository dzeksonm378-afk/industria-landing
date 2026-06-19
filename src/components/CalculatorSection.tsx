import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function CalculatorSection() {
  return (
    <Section
      id="calculator"
      eyebrow={siteContent.calculator.eyebrow}
      title={siteContent.calculator.title}
      description={siteContent.calculator.description}
    >
      <div
        className="premium-panel grid gap-5 rounded-lg p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-7"
        role="form"
        aria-label="Квиз предварительного расчета"
        aria-describedby="calculator-safety-note"
      >
        <div className="space-y-5">
          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-mist">{siteContent.calculator.objectTypeLabel}</legend>
            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {siteContent.calculator.objectTypes.map((type, index) => (
                <label key={type} className="rounded-md border border-white/10 bg-ink/60 px-4 py-3 text-sm text-steel transition hover:border-gold/40 hover:bg-gold/10">
                  <input className="mr-2 inline w-auto" type="radio" name="quizObjectType" defaultChecked={index === 0} />
                  {type}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block text-sm font-semibold text-mist">
            {siteContent.calculator.areaLabel}
            <input className="mt-3" type="number" name="area" min="1" placeholder={siteContent.calculator.areaPlaceholder} />
          </label>
          <p id="calculator-safety-note" className="rounded-md border border-gold/15 bg-gold/10 p-4 text-sm leading-6 text-steel">
            {siteContent.calculator.safetyNote}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-mist">{siteContent.calculator.demolitionLabel}</legend>
            <div className="grid gap-2">
              {siteContent.calculator.demolitionItems.map((item) => (
                <label key={item} className="rounded-md border border-white/10 bg-ink/60 px-4 py-3 text-sm text-steel transition hover:border-gold/40 hover:bg-white/[0.06]">
                  <input className="mr-2 inline w-auto" type="checkbox" name="demolitionItems" value={item} />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="space-y-5">
            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-mist">{siteContent.calculator.optionsLabel}</legend>
              <div className="grid gap-2">
                {siteContent.calculator.options.map((option) => (
                  <label key={option} className="rounded-md border border-white/10 bg-ink/60 px-4 py-3 text-sm text-steel transition hover:border-gold/40 hover:bg-white/[0.06]">
                    <input className="mr-2 inline w-auto" type="checkbox" name="options" value={option} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
            <button
              type="button"
              className="min-h-11 w-full rounded-md border border-gold-soft/70 bg-gold-soft px-5 py-3 text-sm font-semibold text-ink shadow-gold-soft transition hover:bg-gold"
              aria-label="Получить предварительный расчет стоимости"
            >
              {siteContent.calculator.submitLabel}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
