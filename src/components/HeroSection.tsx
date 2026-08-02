import { siteContent } from "@/data/siteContent";
import { BrandLogoMark } from "@/components/BrandLogoMark";
import { BrandWordmark } from "@/components/BrandWordmark";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HeroSection() {
  const [titleBeforeHighlight, titleAfterHighlight] = siteContent.hero.title.split(
    siteContent.hero.titleHighlight,
  );

  return (
    <section id="top" className="px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-sm border border-gold/25 bg-gold/10 px-3 py-1 text-sm font-semibold text-gold-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            {siteContent.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-[2rem] font-semibold leading-[1.06] text-mist sm:text-5xl lg:text-6xl">
            {titleBeforeHighlight}
            <span className="text-gold-soft drop-shadow-[0_0_24px_rgba(200,155,60,0.22)]">{siteContent.hero.titleHighlight}</span>
            {titleAfterHighlight}
          </h1>
          <div className="gold-divider mt-4 max-w-2xl sm:mt-5" />
          <p className="mt-4 max-w-3xl text-base leading-7 text-silver/80 sm:text-lg">{siteContent.hero.subtitle}</p>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3 lg:max-w-2xl">
            {siteContent.hero.badges.map((badge) => (
              <div key={badge} className="metal-card rounded-md px-3 py-2.5 text-xs leading-5 text-mist transition hover:border-gold/35 sm:px-4 sm:py-3 sm:text-sm">
                {badge}
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:gap-3">
            <ButtonLink href={siteContent.hero.primaryCtaHref} className="px-3 sm:px-5" aria-label="Перейти к предварительному расчету по фото">
              {siteContent.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={siteContent.hero.secondaryCtaHref} variant="secondary" className="px-3 sm:px-5" aria-label="Перейти к примерам работ">
              {siteContent.hero.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-6 hidden items-center gap-4 text-xs uppercase text-silver/55 sm:flex">
            <span className="h-px w-16 bg-gold/60" />
            <span>AI estimate / contract / CRM control</span>
          </div>
        </div>

        <aside
          className="industrial-surface hidden min-h-[28rem] rounded-lg border border-gold/25 p-6 shadow-premium lg:block"
          aria-label={siteContent.hero.visual.ariaLabel}
        >
            <div className="relative flex min-h-[25rem] flex-col justify-between gap-8">
              <div className="flex flex-wrap items-start justify-between gap-3 text-xs uppercase text-silver/70">
                <div className="flex min-w-0 items-center gap-3">
                  <BrandLogoMark className="h-12 w-12" />
                  <span className="flex min-w-0 flex-col">
                    <BrandWordmark tone="hero" />
                    <span className="brand-slogan mt-1 normal-case">{siteContent.brandSlogan}</span>
                  </span>
                </div>
                <span className="rounded-sm border border-gold/25 bg-gold/10 px-2 py-1 text-gold-soft">
                  {siteContent.company.editableStats.contract}
                </span>
              </div>

              <div>
                <p className="text-sm uppercase text-gold-soft">{siteContent.hero.visual.label}</p>
                <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-mist sm:text-3xl">
                  {siteContent.hero.visual.title}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-silver/75">{siteContent.hero.visual.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {siteContent.hero.visual.details.map((detail) => (
                    <span key={detail} className="rounded-md border border-silver/10 bg-ink/70 px-3 py-2 text-xs text-silver/70">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
        </aside>
      </div>
    </section>
  );
}
