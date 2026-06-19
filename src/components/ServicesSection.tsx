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
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.servicesSection.items.map((service) => (
          <article
            key={service.title}
            className="metal-card group flex rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="flex w-full flex-col">
              <div className="mb-5 h-1 w-16 rounded-full bg-gold-soft/80 transition group-hover:w-24" />
              <h3 className="text-lg font-semibold text-mist">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-silver/75">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-silver/75">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft shadow-[0_0_14px_rgba(200,155,60,0.38)]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#photo-estimate"
                variant="ghost"
                className="mt-6 w-full"
                aria-label={`Предварительно оценить по фото услугу: ${service.title}`}
              >
                {siteContent.servicesSection.ctaLabel}
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
