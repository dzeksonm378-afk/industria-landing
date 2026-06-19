import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function PortfolioSection() {
  return (
    <Section
      id="portfolio"
      eyebrow={siteContent.portfolio.eyebrow}
      title={siteContent.portfolio.title}
      description={siteContent.portfolio.description}
      className="border-y border-silver/5 bg-surface/55"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.portfolio.items.map((item) => (
          <article
            key={item.title}
            className="metal-card group overflow-hidden rounded-lg transition duration-200 hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-gold/15 bg-ink">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: item.imagePosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/12 transition duration-300 group-hover:via-ink/38" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <span className="rounded-md border border-gold/25 bg-ink/85 px-3 py-2 text-xs font-semibold uppercase text-gold-soft backdrop-blur-sm">
                  {siteContent.portfolio.photoLabel}
                </span>
                <span className="rounded-md border border-silver/10 bg-ink/75 px-3 py-2 text-xs uppercase text-silver/80 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase text-silver/70">
                <span className="text-gold-soft">{siteContent.portfolio.caseBadge}</span>
                <span>{item.duration}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-mist">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-silver/75">{item.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.works.map((work) => (
                  <li key={work} className="rounded-md border border-silver/10 bg-ink/45 px-3 py-1 text-xs text-silver/75">
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
