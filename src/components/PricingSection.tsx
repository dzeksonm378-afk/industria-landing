import { siteContent } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

export function PricingSection() {
  return (
    <Section
      id="pricing"
      eyebrow={siteContent.pricing.eyebrow}
      title={siteContent.pricing.title}
      description={siteContent.pricing.description}
      className="border-y border-silver/5 bg-surface/55"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {siteContent.pricing.items.map((item) => (
          <article
            key={item.title}
            className="metal-card rounded-lg p-5 transition hover:-translate-y-1 hover:border-gold/40"
          >
            <h3 className="text-base font-semibold text-mist">{item.title}</h3>
            <p className="mt-5 text-2xl font-semibold text-gold-soft">{item.price}</p>
          </article>
        ))}
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-6 text-silver/75">{siteContent.pricing.note}</p>
      <ButtonLink href="#photo-estimate" className="mt-8" aria-label="Получить предварительный расчет стоимости по фото">
        {siteContent.pricing.ctaLabel}
      </ButtonLink>
    </Section>
  );
}
