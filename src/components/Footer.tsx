import { siteContent } from "@/data/siteContent";
import { BrandLogoMark } from "@/components/BrandLogoMark";
import { BrandWordmark } from "@/components/BrandWordmark";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink/90 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto_auto]">
        <div>
          <div className="flex items-start gap-4">
            <BrandLogoMark className="h-14 w-14" />
            <div>
              <BrandWordmark tone="footer" />
              <p className="brand-slogan mt-1">{siteContent.brandSlogan}</p>
            </div>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-silver/75">{siteContent.footer.description}</p>
        </div>

        <nav className="grid gap-2 text-sm text-silver/75" aria-label="Навигация в подвале">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-gold-soft">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-silver/75">
          <p className="font-semibold text-mist">{siteContent.company.region}</p>
          <div className="mt-3 grid gap-3">
            {siteContent.company.contacts.people.map((person) => (
              <div key={person.name}>
                <p className="font-semibold text-mist">{person.name}</p>
                <a className="mt-1 block transition hover:text-gold-soft" href={person.phoneHref}>
                  {person.phone}
                </a>
                <a className="mt-1 block transition hover:text-gold-soft" href={person.telegramUrl}>
                  {person.telegramLabel}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-2">{siteContent.company.contacts.address}</p>
          <p className="mt-2">{siteContent.company.contacts.hours}</p>
          <p className="mt-2">{siteContent.footer.privacy}</p>
        </div>
      </div>
    </footer>
  );
}
