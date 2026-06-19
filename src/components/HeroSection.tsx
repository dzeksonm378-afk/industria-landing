import { siteContent } from "@/data/siteContent";
import { BrandLogoMark } from "@/components/BrandLogoMark";
import { BrandWordmark } from "@/components/BrandWordmark";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HeroSection() {
  const [titleBeforeHighlight, titleAfterHighlight] = siteContent.hero.title.split(
    siteContent.hero.titleHighlight,
  );

  return (
    <section id="top" className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-sm border border-gold/25 bg-gold/10 px-3 py-1 text-sm font-semibold text-gold-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            {siteContent.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-mist sm:text-5xl lg:text-7xl">
            {titleBeforeHighlight}
            <span className="text-gold-soft drop-shadow-[0_0_24px_rgba(200,155,60,0.22)]">{siteContent.hero.titleHighlight}</span>
            {titleAfterHighlight}
          </h1>
          <div className="gold-divider mt-6 max-w-2xl" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-silver/80">{siteContent.hero.subtitle}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
            {siteContent.hero.badges.map((badge) => (
              <div key={badge} className="metal-card rounded-md px-4 py-3 text-sm text-mist transition hover:border-gold/35">
                {badge}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteContent.hero.primaryCtaHref} aria-label="Перейти к предварительному расчету по фото">
              {siteContent.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={siteContent.hero.secondaryCtaHref} variant="secondary" aria-label="Перейти к примерам работ">
              {siteContent.hero.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center gap-4 text-xs uppercase text-silver/55">
            <span className="h-px w-16 bg-gold/60" />
            <span>demolition / loading / clean handoff</span>
          </div>
        </div>

        <div className="grid gap-5">
          <aside
            className="industrial-surface min-h-64 rounded-lg border border-gold/25 p-5 shadow-premium sm:min-h-80 sm:p-6"
            aria-label={siteContent.hero.visual.ariaLabel}
          >
            <div className="relative flex h-full min-h-52 flex-col justify-between gap-8 sm:min-h-64">
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

          <div id={siteContent.hero.contactCard.id} className="premium-panel scroll-mt-32 rounded-lg p-5 ring-1 ring-silver/5">
            <div className="mb-5">
              <p className="text-sm font-semibold uppercase text-gold-soft">{siteContent.hero.contactCard.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-mist">
                {siteContent.hero.contactCard.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-silver/75">{siteContent.hero.contactCard.text}</p>
            </div>

            <ol className="grid gap-3">
              {siteContent.hero.contactCard.steps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-md border border-silver/10 bg-ink/70 p-3 text-sm text-silver/75">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-xs font-semibold text-gold-soft">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {siteContent.company.contacts.people.map((person) => (
                <div key={person.name} className="rounded-md border border-silver/10 bg-ink/70 p-3">
                  <p className="text-sm font-semibold text-mist">{person.name}</p>
                  <div className="mt-3 grid gap-2">
                    <a
                      href={person.telegramUrl}
                      aria-label={`Написать в Telegram: ${person.name}`}
                      className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold-soft/70 bg-gold-soft px-4 py-3 text-center text-sm font-semibold text-ink shadow-gold-soft transition hover:border-gold hover:bg-gold"
                    >
                      Telegram
                    </a>
                    <a
                      href={person.phoneHref}
                      aria-label={`Позвонить: ${person.name}`}
                      className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold/45 bg-card-soft/80 px-4 py-3 text-center text-sm font-semibold text-mist transition hover:border-gold-soft hover:bg-gold/15"
                    >
                      Позвонить
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
