import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function MaterialsSection() {
  return (
    <Section
      eyebrow={siteContent.materialsSection.eyebrow}
      title={siteContent.materialsSection.title}
      description={siteContent.materialsSection.description}
    >
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {siteContent.materialsSection.items.map((material) => (
          <div
            key={material}
            className="blueprint-grid rounded-md border border-silver/10 px-5 py-4 text-sm font-semibold uppercase text-silver/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-mist"
          >
            {material}
          </div>
        ))}
      </div>
    </Section>
  );
}
