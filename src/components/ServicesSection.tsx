import { siteContent } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow={siteContent.servicesSection.eyebrow}
      title={siteContent.servicesSection.title}
      description={siteContent.servicesSection.description}
      className="border-y border-silver/5 bg-surface/55"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {siteContent.servicesSection.directions.map((direction, index) => (
          <article
            key={direction}
            className="metal-card group relative flex min-h-44 overflow-hidden rounded-xl p-5 transition duration-200 hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-soft/70 to-transparent opacity-60 transition group-hover:opacity-100" />
            <div className="flex w-full flex-col">
              <span className="text-xs font-semibold tracking-[0.22em] text-gold-soft/75" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-5 h-px w-12 bg-gold/45 transition-all duration-200 group-hover:w-20 group-hover:bg-gold-soft" aria-hidden="true" />
              <h3 className="mt-auto pt-8 text-lg font-semibold leading-snug text-mist sm:text-xl">{direction}</h3>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-start">
        <ButtonLink href="/estimate" variant="ghost">
          {siteContent.servicesSection.ctaLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}
