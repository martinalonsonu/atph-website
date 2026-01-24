import BlogPage from "@/features/blog";
import { Metadata } from "next";
import React from "react";

const CANONICAL_URL =
  process.env.NEXT_PUBLIC_URL || "https://www.atuspieshumilde.com/";

export const metadata: Metadata = {
  title: "A Tus Pies Humilde | Blog",
  description:
    "Lee las últimas publicaciones de #ATusPiesHumilde sobre nuestras devociones y la Iglesia.",
  keywords: ["blog", "artículos", "religión", "devoción", "#ATPH", "Iglesia"],
  openGraph: {
    type: "website",
    url: `${CANONICAL_URL}blog` || "https://www.atuspieshumilde.com/blog",
    title: "A Tus Pies Humilde | Blog",
    description:
      "Lee las últimas publicaciones de #ATusPiesHumilde sobre nuestras devociones y la Iglesia.",
    siteName: "A Tus Pies Humilde",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Tus Pies Humilde | Blog",
    description:
      "Lee las últimas publicaciones de #ATusPiesHumilde sobre nuestras devociones y la Iglesia.",
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
};

const Blog = () => {
  return <BlogPage />;
};

export default Blog;
