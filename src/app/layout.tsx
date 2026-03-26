import { Mulish, Cinzel_Decorative, Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ArrowButton from "@/features/shared/components/ArrowButton";

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "A Tus Pies Humilde | Portal Católico Devocional",
  description:
    "A Tus Pies Humilde: comunidad católica en Huacho, Perú. Alfombras de aserrín, viruta teñida, transmisiones en vivo y noticias religiosas.",
  keywords: [
    "A Tus Pies Humilde",
    "ATPH",
    "religión",
    "católico",
    "devoción",
    "iglesia",
    "Huacho"
  ],
  authors: [{ name: "A Tus Pies Humilde" }],
  creator: "A Tus Pies Humilde",
  themeColor: "#8B0000",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.atuspieshumilde.com/",
    title: "A Tus Pies Humilde | Portal Católico Devocional",
    description:
      "A Tus Pies Humilde: comunidad católica en Huacho, Perú. Alfombras de aserrín, viruta teñida, transmisiones en vivo y noticias religiosas.",
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
    title: "A Tus Pies Humilde | Portal Católico Devocional",
    description:
      "A Tus Pies Humilde: comunidad católica en Huacho, Perú. Alfombras de aserrín, viruta teñida, transmisiones en vivo y noticias religiosas.",
    images: ["https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png"],
  },
  alternates: {
    canonical: "https://www.atuspieshumilde.com/",
  },
  icons: {
    icon: "https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png",
    shortcut: "https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png",
    apple: "https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cinzelDecorative.variable} ${mulish.variable} ${workSans.variable} antialiased`}
      >
        <ArrowButton />
        {children}
      </body>
    </html>
  );
}
