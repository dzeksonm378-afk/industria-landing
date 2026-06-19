import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section id="about" eyebrow={siteContent.about.eyebrow} title={siteContent.about.title} description={siteContent.about.text}>
      <div className="premium-panel rounded-lg p-5 lg:p-7">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.about.facts.map((fact) => (
            <div key={fact.value} className="rounded-lg border border-silver/10 bg-ink/58 p-5 transition hover:border-gold/35">
              <p className="text-xl font-semibold text-mist">{fact.value}</p>
              <p className="mt-3 text-sm leading-6 text-silver/75">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
