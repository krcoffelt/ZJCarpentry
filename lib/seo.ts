import type { Metadata } from "next";
import { company } from "@/lib/site-data";

type MetaArgs = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetaArgs): Metadata {
  const fullTitle = `${title} | ${company.name}`;
  const url = new URL(path, company.siteUrl).toString();

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${company.siteUrl}/#business`,
    name: company.legalName,
    alternateName: [company.name, company.alternateName],
    description:
      "Deck building, remodeling, basement finishing, flooring, and interior carpentry in the Kansas City metro.",
    telephone: company.phone,
    email: company.email,
    areaServed: "Kansas City metropolitan area",
    address: {
      "@type": "PostalAddress",
      addressLocality: company.addressLocality,
      addressRegion: company.addressRegion,
      addressCountry: "US",
    },
    url: company.siteUrl,
    sameAs: company.sameAs,
    priceRange: "$$",
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.item, company.siteUrl).toString(),
    })),
  };
}

export function serviceSchema(
  name: string,
  description: string,
  areaServed: string[],
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    url: new URL(path, company.siteUrl).toString(),
    provider: {
      "@type": "LocalBusiness",
      "@id": `${company.siteUrl}/#business`,
      name: company.name,
    },
    description,
    areaServed: areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
  };
}
