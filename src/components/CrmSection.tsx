import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function CrmSection() {
  const content = siteContent.crmSection;
  return (
    <Section eyebrow={content.eyebrow} title={content.title} description={content.description} className="border-y border-silver/5 bg-surface/55">
      <div className="premium-panel overflow-hidden rounded-lg p-5 sm:p-7" aria-label="Макет личного кабинета объекта">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-silver/10 pb-5">
          <div><p className="text-xs uppercase text-gold-soft">Личный кабинет</p><p className="mt-2 text-xl font-semibold text-mist">Объект клиента</p></div>
          <span className="rounded-md border border-gold/30 bg-gold/10 px-3 py-2 text-sm text-gold-soft">Работы по договору</span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.features.map((feature, index) => (
            <div key={feature} className="rounded-md border border-silver/10 bg-ink/70 p-4">
              <span className="text-xs text-gold-soft">0{index + 1}</span><p className="mt-3 text-sm font-semibold text-mist">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
