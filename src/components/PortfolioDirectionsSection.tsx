import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function PortfolioDirectionsSection() {
  const content = siteContent.portfolioDirections;
  return (
    <Section
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      className="border-y border-silver/5 bg-surface/35"
    >
      <div className="space-y-5 sm:space-y-7">
        {content.items.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            aria-label={`${item.title}: открыть страницу направления`}
            className="group relative isolate block min-h-[21rem] overflow-hidden rounded-[1.5rem] border border-gold/25 bg-ink shadow-premium transition duration-300 hover:-translate-y-1 hover:border-gold/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-soft sm:min-h-96 sm:rounded-[1.75rem] lg:min-h-[28rem]"
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 1280px) 1280px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 32px)"
              className="z-0 object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/65 to-ink/10 transition duration-300 group-hover:via-ink/55"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-ink/35 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-6 sm:p-9 lg:p-12">
              <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft sm:text-sm">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px w-10 bg-gold-soft/70" aria-hidden="true" />
                <span>Направление</span>
              </div>
              <h3 className="max-w-4xl text-3xl font-semibold leading-[1.08] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)] sm:text-4xl lg:text-5xl">
                {item.title}
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft sm:text-base">
                Подробнее о направлении <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
