import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteContent } from "@/data/siteContent";
import { getBrandLogoPath } from "@/lib/brandLogo";
import "./globals.css";

const pageTitle = `${siteContent.brandName} — демонтаж помещений, зданий и сооружений под ключ`;
const pageDescription =
  "Демонтажные работы в квартирах, коммерческих помещениях, зданиях и сооружениях под ключ. Предварительный расчет по фото, финальная смета после осмотра, вывоз строительного мусора.";
const brandLogoPath = getBrandLogoPath();

export const metadata: Metadata = {
  metadataBase: new URL("https://industria-demo.example"),
  applicationName: siteContent.brandName,
  title: {
    default: pageTitle,
    template: `%s | ${siteContent.brandName}`,
  },
  description: pageDescription,
  keywords: [
    "демонтаж СПб",
    "демонтажные работы в квартирах",
    "подготовка квартиры под ремонт",
    "демонтаж стен и перегородок",
    "демонтаж домов",
    "демонтаж коммерческих помещений",
    "демонтаж зданий",
    "демонтаж сооружений",
    "расчистка участка",
    "демонтаж объектов под ключ",
    "вывоз строительного мусора",
    "демонтаж Санкт-Петербург",
    "демонтаж Ленобласть",
    siteContent.brandName,
    siteContent.brandSlogan,
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    siteName: siteContent.brandName,
    images: [
      {
        url: brandLogoPath,
        width: 1200,
        height: 1200,
        alt: siteContent.brandName,
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [brandLogoPath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
