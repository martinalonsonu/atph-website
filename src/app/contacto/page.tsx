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
    url: `${CANONICAL_URL}contacto`,
    title: "A Tus Pies Humilde | Contacto",
    description: "Contáctanos si requieres alguno de nuestros servicios.",
    siteName: "A Tus Pies Humilde",
    images: [
      {
        url: "https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png",
        width: 1200,
        height: 630,
        alt: "A Tus Pies Humilde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Tus Pies Humilde | Contacto",
    description: "Contáctanos si requieres alguno de nuestros servicios.",
    images: ["https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png"],
  },
  alternates: {
    canonical: `${CANONICAL_URL}contacto`,
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
