import ContactPage from "@/features/contact";
import { Metadata } from "next";
import React from "react";

const CANONICAL_URL =
  process.env.NEXT_PUBLIC_URL || "https://www.atuspieshumilde.com/";

export const metadata: Metadata = {
  title: "A Tus Pies Humilde | Contacto",
  description: "Contáctanos si requieres alguno de nuestros servicios.",
  keywords: ["blog", "artículos", "religión", "devoción", "#ATPH", "Iglesia"],
  openGraph: {
    type: "website",
    url: `${CANONICAL_URL}blog` || "https://www.atuspieshumilde.com/blog",
    title: "A Tus Pies Humilde | Blog",
    description: "Contáctanos si requieres alguno de nuestros servicios.",
    siteName: "A Tus Pies Humilde",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Tus Pies Humilde | Blog",
    description: "Contáctanos si requieres alguno de nuestros servicios.",
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
