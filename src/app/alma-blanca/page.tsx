import HeaderNav from "@/features/shared/structured/headerNav";
import Footer from "@/features/shared/structured/footer";
import AlmaBlancaIndex from "@/features/almaBlanca";
import { Metadata } from "next";

const CANONICAL_URL =
  process.env.NEXT_PUBLIC_URL || "https://www.atuspieshumilde.com/";

export const metadata: Metadata = {
  title: "A Tus Pies Humilde | Alma Blanca",
  description:
    "Información sobre Alma Blanca en A Tus Pies Humilde: eventos, galería y contacto.",
  keywords: ["alma blanca", "evento", "devoción"],
  openGraph: {
    type: "website",
    url: `${CANONICAL_URL}alma-blanca`,
    title: "A Tus Pies Humilde | Alma Blanca",
    description:
      "Información sobre Alma Blanca en A Tus Pies Humilde: eventos, galería y contacto.",
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
    title: "A Tus Pies Humilde | Alma Blanca",
    description:
      "Información sobre Alma Blanca en A Tus Pies Humilde: eventos, galería y contacto.",
    images: ["https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png"],
  },
  alternates: {
    canonical: `${CANONICAL_URL}alma-blanca`,
  },
};

export default function AlmaBlancaPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <HeaderNav />
      <main className="w-full">
        <AlmaBlancaIndex />
      </main>
      <Footer />
    </div>
  );
}
