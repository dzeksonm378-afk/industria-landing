import { siteContent } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCtaSection() {
  return (
    <section id="contacts" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="premium-panel mx-auto max-w-7xl rounded-lg p-6 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-gold-soft">{siteContent.finalCta.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-mist sm:text-4xl">
              {siteContent.finalCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-silver/75">{siteContent.finalCta.text}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {siteContent.company.contacts.people.map((person) => (
                <div key={person.name} className="rounded-md border border-silver/10 bg-ink/55 p-3 text-sm text-silver/75">
                  <p className="font-semibold text-mist">{person.name}</p>
                  <div className="mt-3 grid gap-2">
                    <a
                      className="inline-flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-md border border-gold/35 bg-gold/10 px-3 py-2 transition hover:border-gold-soft hover:bg-gold/15 hover:text-mist focus-visible:outline-gold-soft"
                      href={person.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={person.telegramAriaLabel}
                    >
                      <span className="min-w-0">
                        <span className="block font-semibold text-mist">{person.telegramButtonLabel} <span aria-hidden="true">↗</span></span>
                        <span className="mt-0.5 block truncate text-xs text-silver/70">{person.telegramLabel}</span>
                      </span>
                      <span className="rounded-sm border border-gold/25 bg-ink/70 px-2 py-1 text-xs uppercase text-gold-soft" aria-hidden="true">
                        TG
                      </span>
                    </a>
                    <a
                      className="inline-flex min-h-12 cursor-pointer items-center rounded-md border border-silver/10 bg-ink/70 px-3 py-2 transition hover:border-gold/40 hover:text-mist focus-visible:outline-gold-soft"
                      href={person.phoneHref}
                      aria-label={person.phoneAriaLabel}
                    >
                      <span>
                        <span className="block font-semibold text-mist">{person.phoneButtonLabel}</span>
                        <span className="mt-0.5 block text-xs text-silver/70">{person.phone}</span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink
              href={siteContent.company.contacts.primary.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Отправить фото объекта Илье в Telegram"
            >
              {siteContent.finalCta.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={siteContent.company.contacts.primary.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              aria-label="Уточнить стоимость демонтажа у Ильи в Telegram"
            >
              {siteContent.finalCta.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
