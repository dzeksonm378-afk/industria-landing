import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function FaqSection() {
  return (
    <Section
      eyebrow={siteContent.faqSection.eyebrow}
      title={siteContent.faqSection.title}
      description={siteContent.faqSection.description}
      className="border-y border-silver/5 bg-surface/55"
    >
      <div className="grid gap-3 lg:grid-cols-2">
        {siteContent.faqSection.items.map((item) => (
          <details
            key={item.question}
            className="metal-card rounded-lg p-5 transition open:border-gold/35 hover:border-gold/30"
          >
            <summary className="cursor-pointer text-base font-semibold text-mist">{item.question}</summary>
            <p className="mt-4 text-sm leading-6 text-silver/75">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
