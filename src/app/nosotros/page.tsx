import AboutPageIndex from "@/features/about";
import { Metadata } from "next";

const CANONICAL_URL =
  process.env.NEXT_PUBLIC_URL || "https://www.atuspieshumilde.com/";

export const metadata: Metadata = {
  title: "A Tus Pies Humilde | Nosotros",
  description:
    "Conoce acerca de nosotros, nuestra historia y quienes hacen posible nuestra labor.",
  keywords: ["blog", "artículos", "religión", "devoción", "#ATPH", "Iglesia"],
  openGraph: {
    type: "website",
    url: `${CANONICAL_URL}nosotros`,
    title: "A Tus Pies Humilde | Nosotros",
    description:
      "Conoce acerca de nosotros, nuestra historia y quienes hacen posible nuestra labor.",
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
    title: "A Tus Pies Humilde | Nosotros",
    description:
      "Conoce acerca de nosotros, nuestra historia y quienes hacen posible nuestra labor.",
    images: ["https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png"],
  },
  alternates: {
    canonical: `${CANONICAL_URL}nosotros`,
  },
};

export default function AboutPage() {
  return <AboutPageIndex />;
}
