import type { Metadata } from "next";
import { EstimateForm } from "@/components/estimate/EstimateForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: {
    absolute: `${siteContent.estimate.title} — ${siteContent.brandName}`,
  },
  description: siteContent.estimate.description,
  alternates: {
    canonical: "/estimate",
  },
};

export default function EstimatePage() {
  return (
    <>
      <Header homeHrefPrefix="/" mobileVariant="compactEstimate" />
      <main>
        <section className="px-4 pb-12 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-16 lg:pt-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 inline-flex rounded-sm border border-gold/20 bg-gold/10 px-3 py-1 text-sm font-semibold uppercase text-gold-soft">
                {siteContent.estimate.eyebrow}
              </p>
              <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-mist sm:text-5xl">
                {siteContent.estimate.title}
              </h1>
              <div className="gold-divider mt-6 max-w-sm" />
              <p className="mt-6 max-w-3xl text-base leading-7 text-silver/75">{siteContent.estimate.description}</p>
              <p className="mt-5 rounded-md border border-gold/20 bg-gold/10 p-4 text-sm leading-6 text-silver/80">
                {siteContent.estimate.disclaimer}
              </p>

              <div className="mt-6 grid gap-3">
                {siteContent.estimate.notes.map((note) => (
                  <div key={note} className="metal-card rounded-md px-4 py-3 text-sm leading-6 text-silver/75">
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <EstimateForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
