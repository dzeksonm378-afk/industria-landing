import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDirectionPage } from "@/components/services/ServiceDirectionPage";
import { siteContent } from "@/data/siteContent";
import { getServiceDirectionBySlug, serviceDirections } from "@/data/serviceDirections";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDirections.map((direction) => ({ slug: direction.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const direction = getServiceDirectionBySlug(params.slug);

  if (!direction) {
    return {
      title: {
        absolute: `Услуги демонтажа — ${siteContent.brandName}`,
      },
    };
  }

  const pageTitle = `${direction.title} — ${siteContent.brandName}`;
  const canonical = `/services/${direction.slug}`;

  return {
    title: {
      absolute: pageTitle,
    },
    description: direction.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description: direction.description,
      url: canonical,
      images: [
        {
          url: direction.coverImage,
          width: 1200,
          height: 900,
          alt: direction.cardTitle,
        },
      ],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const direction = getServiceDirectionBySlug(params.slug);

  if (!direction) {
    notFound();
  }

  return <ServiceDirectionPage direction={direction} />;
}
