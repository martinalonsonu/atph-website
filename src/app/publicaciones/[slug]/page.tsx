import PostPage from "@/features/post";
import { formatAuthor, formatCategory } from "@/utils/helpers";
import { Metadata } from "next";

async function getPost(slug: string) {
  try {
    const baseUrl =
      process.env.NEXTAUTH_URL ||
      process.env.NEXT_PUBLIC_URL ||
      "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/post/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const post = await response.json();
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post no encontrado",
      description: "El post solicitado no existe",
    };
  }

  const cleanDescription =
    post.excerpt?.rendered
      ?.replace(/<[^>]*>/g, "")
      ?.trim()
      ?.substring(0, 160) || "";

  return {
    title: post.title?.rendered || "Post sin título",
    description: cleanDescription,
    keywords: ["atph", "huacho"],
    authors: [{ name: formatAuthor(post?.author).name || "Autor desconocido" }],

    openGraph: {
      title: post.title?.rendered || "Post sin título",
      description: cleanDescription,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [formatAuthor(post?.author).name || "Autor desconocido"],
      images: post.jetpack_featured_media_url
        ? [
            {
              url: post.jetpack_featured_media_url,
              width: 1200,
              height: 630,
              alt: post.title?.rendered || "Imagen del post",
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title?.rendered || "Post sin título",
      description: cleanDescription,
      images: post.jetpack_featured_media_url
        ? [post.jetpack_featured_media_url]
        : [],
    },

    other: {
      "article:published_time": post.date,
      "article:modified_time": post.date,
      "article:author": formatAuthor(post?.author).name || "Autor desconocido",
      "article:section": formatCategory(post.categories?.[0]) || "",
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PostPage slug={slug} />;
}
