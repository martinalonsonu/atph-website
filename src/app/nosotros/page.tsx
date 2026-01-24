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
    url: `${CANONICAL_URL}blog` || "https://www.atuspieshumilde.com/blog",
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

export default function AboutPage() {
  return <AboutPageIndex />;
}
