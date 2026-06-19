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
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a className="rounded-md border border-silver/10 bg-ink/70 px-3 py-2 transition hover:border-gold/40 hover:text-mist" href={person.phoneHref}>
                      {person.phone}
                    </a>
                    <a className="rounded-md border border-silver/10 bg-ink/70 px-3 py-2 transition hover:border-gold/40 hover:text-mist" href={person.telegramUrl}>
                      {person.telegramLabel}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="#photo-estimate" aria-label="Отправить фото объекта для предварительной оценки демонтажа">
              {siteContent.finalCta.primaryCta}
            </ButtonLink>
            <ButtonLink href={siteContent.company.contacts.primary.telegramUrl} variant="secondary" aria-label="Уточнить стоимость демонтажа в Telegram">
              {siteContent.finalCta.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
