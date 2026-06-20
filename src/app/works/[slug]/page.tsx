import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { siteContent } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type CasePageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export function generateMetadata({ params }: CasePageProps): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: {
        absolute: `Работы — ${siteContent.brandName}`,
      },
    };
  }

  return {
    title: {
      absolute: `${caseStudy.title} — ${siteContent.brandName}`,
    },
    description: caseStudy.shortDescription,
    openGraph: {
      title: `${caseStudy.title} — ${siteContent.brandName}`,
      description: caseStudy.shortDescription,
      images: [
        {
          url: caseStudy.coverImage,
          width: 1200,
          height: 900,
          alt: caseStudy.title,
        },
      ],
    },
  };
}

export default function CaseStudyPage({ params }: CasePageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Header homeHrefPrefix="/" />
      <main>
        <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
          <div className="mx-auto max-w-7xl">
            <a
              href="/#portfolio"
              className="inline-flex min-h-11 items-center rounded-md border border-silver/10 bg-card-soft/70 px-4 py-3 text-sm font-semibold text-silver/80 transition hover:border-gold/45 hover:bg-gold/10 hover:text-mist focus-visible:outline-gold-soft"
            >
              ← Назад к работам
            </a>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="inline-flex rounded-sm border border-gold/20 bg-gold/10 px-3 py-1 text-sm font-semibold uppercase text-gold-soft">
                  {caseStudy.category}
                </p>
                <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-mist sm:text-5xl">
                  {caseStudy.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-silver/75">{caseStudy.fullDescription}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag) => (
                    <li key={tag} className="rounded-md border border-silver/10 bg-ink/60 px-3 py-2 text-xs text-silver/75">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gold/20 bg-ink shadow-premium">
                <Image
                  src={caseStudy.coverImage}
                  alt={caseStudy.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1fr]">
            <div className="premium-panel rounded-lg p-5 lg:p-7">
              <p className="text-sm font-semibold uppercase text-gold-soft">Что выполнялось</p>
              <ul className="mt-5 grid gap-3">
                {caseStudy.workScope.map((item, index) => (
                  <li key={item} className="flex gap-3 rounded-md border border-silver/10 bg-ink/70 p-3 text-sm text-silver/75">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-xs font-semibold text-gold-soft">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="premium-panel rounded-lg p-5 lg:p-7">
              <p className="text-sm font-semibold uppercase text-gold-soft">Результат</p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-mist">{caseStudy.resultText}</p>
              <p className="mt-4 text-sm leading-6 text-silver/75">
                Для похожего объекта можно отправить фото или видео и получить предварительный ориентир по работам.
              </p>
              <ButtonLink href="/#photo-estimate" className="mt-6" aria-label="Перейти к предварительному расчету похожего объекта">
                Рассчитать похожий объект
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="border-y border-silver/5 bg-surface/55 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 inline-flex rounded-sm border border-gold/20 bg-gold/10 px-3 py-1 text-sm font-semibold uppercase text-gold-soft">
                Галерея объекта
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-mist sm:text-4xl">Все фото кейса</h2>
              <p className="mt-4 text-base leading-7 text-silver/75">
                Фото сгруппированы по одному объекту, чтобы показать последовательность и масштаб работ.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {caseStudy.images.map((image, index) => (
                <figure
                  key={image}
                  className={`metal-card overflow-hidden rounded-lg ${index === 0 ? "md:col-span-2 xl:col-span-2" : ""}`}
                >
                  <div className={`relative bg-ink ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                    <Image
                      src={image}
                      alt={`${caseStudy.title}, фото ${index + 1}`}
                      fill
                      sizes={index === 0 ? "(min-width: 1280px) 66vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"}
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="border-t border-silver/10 px-4 py-3 text-xs uppercase text-silver/60">
                    Фото {index + 1}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
