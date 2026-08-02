import Image from "next/image";
import Link from "next/link";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getCaseStudyBySlug, type CaseStudy } from "@/data/caseStudies";
import {
  serviceDirections,
  serviceDirectionSteps,
  type ServiceDirection,
} from "@/data/serviceDirections";

type ServiceDirectionPageProps = {
  direction: ServiceDirection;
};

function getRelatedCases(direction: ServiceDirection) {
  return (direction.relatedCaseSlugs ?? [])
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((caseStudy): caseStudy is CaseStudy => Boolean(caseStudy));
}

export function ServiceDirectionPage({ direction }: ServiceDirectionPageProps) {
  const relatedCases = getRelatedCases(direction);
  const otherDirections = serviceDirections.filter((item) => item.slug !== direction.slug);

  return (
    <>
      <Header homeHrefPrefix="/" mobileVariant="compactEstimate" />
      <main>
        <section id="top" className="px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Хлебные крошки">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-silver/70">
                <li>
                  <Link href="/" className="rounded-sm transition hover:text-gold-soft focus-visible:outline-gold-soft">
                    Главная
                  </Link>
                </li>
                <li aria-hidden="true" className="text-gold/60">/</li>
                <li>
                  <Link href="/#services" className="rounded-sm transition hover:text-gold-soft focus-visible:outline-gold-soft">
                    Услуги
                  </Link>
                </li>
                <li aria-hidden="true" className="text-gold/60">/</li>
                <li aria-current="page" className="text-mist">{direction.cardTitle}</li>
              </ol>
            </nav>

            <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-center">
              <div className="min-w-0">
                <p className="inline-flex rounded-sm border border-gold/20 bg-gold/10 px-3 py-1 text-sm font-semibold uppercase text-gold-soft">
                  Направление демонтажа
                </p>
                <h1 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight text-mist sm:text-5xl lg:text-6xl">
                  {direction.title}
                </h1>
                <div className="gold-divider mt-6 max-w-sm" />
                <p className="mt-6 max-w-3xl text-base leading-7 text-silver/80 sm:text-lg sm:leading-8">
                  {direction.description}
                </p>
                <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
                  <ButtonLink href="/estimate" aria-label={`Рассчитать с помощью ИИ: ${direction.cardTitle}`}>
                    Рассчитать с помощью ИИ
                  </ButtonLink>
                  <ButtonLink href="#contacts" variant="secondary" aria-label="Перейти к контактам">
                    Обсудить объект
                  </ButtonLink>
                </div>
                <Link
                  href="/#services"
                  className="mt-5 inline-flex min-h-11 items-center rounded-sm py-2 text-sm font-semibold text-silver/75 transition hover:text-gold-soft focus-visible:outline-gold-soft"
                  aria-label="Вернуться к списку услуг на главной странице"
                >
                  <span aria-hidden="true">←</span>&nbsp; Вернуться к услугам
                </Link>
              </div>

              <div className="premium-panel relative hidden aspect-[4/3] overflow-hidden rounded-lg lg:block" aria-hidden="true">
                <Image
                  src={direction.coverImage}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 0px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">Состав работ — после осмотра</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-silver/5 bg-surface/55 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-gold-soft">Кратко об услуге</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">Работы под задачу конкретного объекта</h2>
            </div>
            <div className="premium-panel rounded-lg p-5 sm:p-7">
              <p className="text-base leading-7 text-silver/80">{direction.intro}</p>
              <p className="mt-5 rounded-md border border-gold/20 bg-gold/10 p-4 text-sm leading-6 text-silver/80">
                Финальный состав работ, стоимость и этапы фиксируются только после осмотра и согласования технического задания.
              </p>
            </div>
          </div>
        </section>

        <section id="work-scope" className="scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-gold-soft">Состав услуги</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">Что может входить в работы</h2>
              <p className="mt-4 text-base leading-7 text-silver/75">Каждый пункт включается только при наличии в согласованной смете и техническом задании.</p>
            </div>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {direction.workItems.map((item, index) => (
                <li key={item} className="metal-card flex gap-4 rounded-lg p-5 text-sm leading-6 text-silver/80">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-sm font-semibold text-gold-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-silver/5 bg-surface/55 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-gold-soft">Типы объектов</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">Для каких объектов подходит</h2>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {direction.objectTypes.map((item) => (
                <li key={item} className="premium-panel rounded-lg p-5 text-sm font-semibold leading-6 text-mist">
                  <span className="mb-4 block h-1 w-12 rounded-full bg-gold-soft" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="stages" className="scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-gold-soft">Этапы</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">От исходных данных до передачи результата</h2>
              <p className="mt-4 text-base leading-7 text-silver/75">Последовательность уточняется под объект. Фиксированные сроки без исходных данных не обещаются.</p>
            </div>
            <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {serviceDirectionSteps.map((step, index) => (
                <li key={step} className="metal-card flex min-h-28 gap-4 rounded-lg p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gold/35 bg-gold/10 text-sm font-semibold text-gold-soft">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm font-semibold leading-6 text-mist">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-silver/5 bg-surface/55 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase text-gold-soft">Организация</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">Безопасность и последовательность</h2>
              <ul className="mt-7 grid gap-3">
                {direction.safetyItems.map((item) => (
                  <li key={item} className="flex gap-3 rounded-md border border-silver/10 bg-ink/65 p-4 text-sm leading-6 text-silver/80">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-soft" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase text-gold-soft">Предварительная оценка</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">Что влияет на стоимость</h2>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {direction.costFactors.map((item) => (
                  <li key={item} className="premium-panel rounded-md p-4 text-sm font-semibold leading-6 text-mist">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-silver/70">Цена и сроки не фиксируются до осмотра и согласования состава работ.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="premium-panel mx-auto max-w-7xl rounded-lg p-6 sm:p-8 lg:p-10">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-gold-soft">AI-предварительный расчёт</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">Получите предварительный расчёт по фотографиям</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-silver/80">
                  Загрузите фотографии, укажите площадь и условия объекта. Система подготовит предварительный диапазон стоимости. Финальная смета определяется после осмотра.
                </p>
              </div>
              <ButtonLink href="/estimate" className="w-full lg:w-auto" aria-label={`Открыть AI-калькулятор для направления: ${direction.cardTitle}`}>
                Рассчитать с помощью ИИ
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="border-y border-silver/5 bg-surface/55 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-gold-soft">Подтверждённые материалы</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">Проекты по этому направлению</h2>
            </div>

            {relatedCases.length > 0 ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {relatedCases.map((caseStudy) => (
                  <Link
                    key={caseStudy.slug}
                    href={`/works/${caseStudy.slug}`}
                    aria-label={`${caseStudy.title}: открыть подтверждённый кейс`}
                    className="metal-card group flex h-full flex-col overflow-hidden rounded-lg transition hover:-translate-y-1 hover:border-gold/40 focus-visible:outline-gold-soft"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-gold/15 bg-ink">
                      <Image
                        src={caseStudy.coverImage}
                        alt={caseStudy.title}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-semibold uppercase text-gold-soft">Реальный объект</p>
                      <h3 className="mt-3 text-xl font-semibold text-mist">{caseStudy.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-silver/75">{caseStudy.shortDescription}</p>
                      <span className="mt-auto pt-5 text-sm font-semibold text-gold-soft">Смотреть кейс <span aria-hidden="true">→</span></span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="premium-panel mt-8 max-w-3xl rounded-lg p-6 sm:p-8">
                <p className="text-lg font-semibold text-mist">Раздел будет дополнен подтверждёнными материалами выполненных объектов.</p>
                <p className="mt-3 text-sm leading-6 text-silver/75">Пока здесь нет карточек без подтверждённого содержания и фотографий.</p>
              </div>
            )}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-gold-soft">Вопросы и ответы</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">FAQ направления</h2>
            </div>
            <div className="mt-8 grid gap-3">
              {direction.faq.map((item) => (
                <details key={item.question} className="metal-card group rounded-lg p-5 open:border-gold/35">
                  <summary className="cursor-pointer pr-6 text-base font-semibold leading-6 text-mist marker:text-gold-soft focus-visible:outline-gold-soft">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-4xl text-sm leading-6 text-silver/75">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-silver/5 bg-surface/55 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase text-gold-soft">Другие услуги</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl">Другие направления демонтажа</h2>
              </div>
              <Link href="/#services" aria-label="Перейти ко всем услугам на главной странице" className="inline-flex min-h-11 items-center text-sm font-semibold text-gold-soft transition hover:text-mist focus-visible:outline-gold-soft">
                Все услуги <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {otherDirections.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  aria-label={`${item.cardTitle}: открыть страницу направления`}
                  className="metal-card group flex min-h-40 flex-col rounded-lg p-5 transition hover:-translate-y-1 hover:border-gold/40 focus-visible:outline-gold-soft"
                >
                  <p className="text-xs font-semibold uppercase text-gold-soft">Направление</p>
                  <h3 className="mt-3 text-xl font-semibold leading-tight text-mist">{item.cardTitle}</h3>
                  <span className="mt-auto pt-5 text-sm font-semibold text-silver/75 transition group-hover:text-gold-soft">
                    Подробнее <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCtaSection />
      </main>
      <Footer homeHrefPrefix="/" />
    </>
  );
}
