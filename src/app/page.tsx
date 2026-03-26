import Home from "@/features/home";
import { Metadata } from "next";
import React from "react";

const CANONICAL_URL =
  process.env.NEXT_PUBLIC_URL || "https://www.atuspieshumilde.com/";

export const metadata: Metadata = {
  title: "A Tus Pies Humilde | Inicio",
  description:
    "Portal religioso católico y devocional | Transmisiones en vivo | Alfombras de Aserrín y Viruta teñida",
  keywords: ["católico", "devoción", "Alfombra de aserrín", "ATPH", "Huacho"],
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    title: "A Tus Pies Humilde | Inicio",
    description:
      "Portal religioso católico y devocional | Transmisiones en vivo | Alfombras de Aserrín y Viruta teñida",
    siteName: "A Tus Pies Humilde",
    images: [
      {
        url: "https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png",
        width: 1200,
        height: 630,
        alt: "Logo A Tus Pies Humilde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Tus Pies Humilde | Inicio",
    description:
      "Portal religioso católico y devocional | Transmisiones en vivo | Alfombras de Aserrín y Viruta teñida",
    images: ["https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png"],
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
};

const Index = () => {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "A Tus Pies Humilde",
    url: CANONICAL_URL,
    description:
      "Portal religioso católico y devocional en Huacho, Perú. Transmisiones en vivo y eventos comunitarios.",
    publisher: {
      "@type": "Organization",
      name: "A Tus Pies Humilde",
      logo: {
        "@type": "ImageObject",
        url: "https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${CANONICAL_URL}?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
      <Home />
    </>
  );
};

export default Index;
