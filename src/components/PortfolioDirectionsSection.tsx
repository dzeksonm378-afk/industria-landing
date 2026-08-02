import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function PortfolioDirectionsSection() {
  const content = siteContent.portfolioDirections;
  return (
    <Section eyebrow={content.eyebrow} title={content.title} description={content.description}>
      <div className="grid gap-5 md:grid-cols-2">
        {content.items.map((item) => (
          <Link key={item.title} href="#portfolio" aria-label={`${item.title}: перейти к выполненным объектам`} className="group relative min-h-72 overflow-hidden rounded-lg border border-gold/30 focus-visible:outline-gold-soft">
            <Image src={item.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/20 transition group-hover:via-ink/50" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <h3 className="max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl">{item.title}</h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft">Смотреть кейсы <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
