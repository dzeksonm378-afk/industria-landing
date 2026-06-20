import { siteContent } from "@/data/siteContent";
import { BrandLogoMark } from "@/components/BrandLogoMark";
import { BrandWordmark } from "@/components/BrandWordmark";
import { ButtonLink } from "@/components/ui/ButtonLink";

type HeaderProps = {
  homeHrefPrefix?: "" | "/";
};

export function Header({ homeHrefPrefix = "" }: HeaderProps) {
  const getAnchorHref = (href: string) => href.startsWith("#") ? `${homeHrefPrefix}${href}` : href;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] border-b border-gold/20 bg-ink/92 px-4 shadow-[0_20px_70px_rgba(0,0,0,0.46)] backdrop-blur-xl sm:px-6 lg:sticky lg:px-8">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 sm:min-h-20 sm:gap-4">
          <a href={getAnchorHref("#top")} className="group flex min-w-0 items-center gap-3" aria-label={`${siteContent.brandName}, перейти к началу страницы`}>
            <BrandLogoMark
              className="h-10 w-10 transition group-hover:border-gold/35 sm:h-12 sm:w-12"
              imageSrc={siteContent.fullLogoPath}
              priority
              variant="headerFullBlack"
            />
            <span className="flex min-w-0 flex-col">
              <BrandWordmark />
              <span className="brand-slogan hidden sm:block">{siteContent.brandSlogan}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 text-sm text-silver/75 lg:flex" aria-label="Основная навигация">
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={getAnchorHref(item.href)}
                className="rounded-sm px-1 py-2 transition hover:text-gold-soft"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a href={siteContent.company.contacts.primary.phoneHref} className="text-sm font-semibold text-mist" aria-label={siteContent.company.contacts.phoneLabel}>
              {siteContent.company.phone}
            </a>
            <a
              href={getAnchorHref("#photo-estimate")}
              className="rounded-md border border-silver/10 bg-card-soft/70 px-3 py-2 text-xs font-semibold text-silver/75 transition hover:border-gold/50 hover:text-mist"
              aria-label={siteContent.company.contactNote}
            >
              {siteContent.company.contacts.messengerLabel}
            </a>
            <ButtonLink href={getAnchorHref(siteContent.hero.primaryCtaHref)} aria-label="Перейти к предварительному расчету по фото">
              {siteContent.hero.primaryCta}
            </ButtonLink>
          </div>

          <ButtonLink
            href={getAnchorHref(siteContent.hero.primaryCtaHref)}
            className="shrink-0 px-3 py-2 text-sm sm:px-4 xl:hidden"
            aria-label="Перейти к предварительному расчету по фото"
          >
            Рассчитать
          </ButtonLink>
        </div>

        <nav
          className="mobile-scroll-nav mx-auto flex max-w-7xl gap-2 overflow-x-auto overscroll-x-contain border-t border-silver/10 py-2 text-sm text-silver/75 lg:hidden"
          aria-label="Мобильная навигация"
        >
          {siteContent.mobileNav.map((item) => (
            <a
              key={item.href}
              href={getAnchorHref(item.href)}
              className="min-h-10 whitespace-nowrap rounded-md border border-silver/10 bg-card-soft/80 px-3 py-2 transition hover:border-gold/50 hover:bg-gold/10 hover:text-mist"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <div className="h-[7.75rem] sm:h-[8.75rem] lg:hidden" aria-hidden="true" />
    </>
  );
}
