import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function TrustStatsSection() {
  return (
    <Section
      eyebrow={siteContent.trustSection.eyebrow}
      title={siteContent.trustSection.title}
      description={siteContent.trustSection.description}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.trustSection.items.map((item, index) => (
          <article
            key={item.title}
            className="metal-card group rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:border-gold/35"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-sm font-semibold text-gold-soft group-hover:border-gold-soft">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-semibold text-mist">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-silver/75">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
