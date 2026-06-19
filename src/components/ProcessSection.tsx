import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function ProcessSection() {
  return (
    <Section
      id="process"
      eyebrow={siteContent.processSection.eyebrow}
      title={siteContent.processSection.title}
      description={siteContent.processSection.description}
    >
      <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {siteContent.processSection.steps.map((step, index) => (
          <li
            key={step.title}
            className="metal-card group rounded-lg p-5 transition hover:-translate-y-1 hover:border-gold/35"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-sm font-semibold text-gold-soft group-hover:border-gold-soft">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 text-base font-semibold leading-6 text-mist">{step.title}</p>
            <p className="mt-3 text-sm leading-6 text-silver/75">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
