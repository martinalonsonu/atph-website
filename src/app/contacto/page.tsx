import ContactPage from "@/features/contact";
import { Metadata } from "next";
import React from "react";

const CANONICAL_URL =
  process.env.NEXT_PUBLIC_URL || "http://atph-test.netlify.app/";

export const metadata: Metadata = {
  title: "A Tus Pies Humilde | Nosotros",
  description:
    "Conoce acerca de nosotros, nuestra historia y quienes hacen posible nuestra labor.",
  keywords: ["blog", "artículos", "religión", "devoción", "#ATPH", "Iglesia"],
  openGraph: {
    type: "website",
    url: `${CANONICAL_URL}blog` || "http://atph-test.netlify.app/blog",
    title: "A Tus Pies Humilde | Blog",
    description:
      "Conoce acerca de nosotros, nuestra historia y quienes hacen posible nuestra labor.",
    siteName: "A Tus Pies Humilde",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Tus Pies Humilde | Blog",
    description:
      "Conoce acerca de nosotros, nuestra historia y quienes hacen posible nuestra labor.",
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
