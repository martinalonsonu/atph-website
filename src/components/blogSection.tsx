"use client";

import { useEffect, useState } from "react";
import type { Post } from "@/lib/interface";
import Wrapper from "./wrapper";
import Image from "next/image";
import Link from "next/link";

function stripHtml(html: string) {
  if (!html) return "";
  const text = html.replace(/<[^>]+>/g, "");
  if (typeof window !== "undefined") {
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent || "";
  }
  return text;
}

function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/publicaciones/${post.slug}`}
      className="flex flex-row gap-2 justify-end"
    >
      <Image
        src={post.jetpack_featured_media_url || ""}
        alt={stripHtml(post.title.rendered)}
        width={160}
        height={100}
        className="w-[160px] h-auto object-cover rounded-lg"
      />
      <h3 className="font-cinzel text-base font-bold text-[#8b0000] lg:max-w-[calc(100%-250px)]">
        {stripHtml(post.title.rendered)}
      </h3>
    </Link>
  );
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (!posts.length) return null;

  const [mainPost, ...otherPosts] = posts;

  return (
    <section className="w-full bg-[#fff8f5] relative py-6 lg:py-20">
      <Wrapper>
        <h2 className="font-cinzel font-bold text-xl lg:text-2xl mb-2.5 text-[#8b0000] px-4 lg:px-0">
          Últimas publicaciones
        </h2>
        <div className="w-full max-w-[1200px] justify-center m-auto gap-5 relative flex flex-col lg:flex-row px-4 lg:px-0">
          <Link
            href={`/publicaciones/${mainPost.slug}`}
            className="lg:max-w-[45%] w-full gap-2.5 flex flex-col lg:gap-3 items-center"
          >
            <Image
              src={mainPost.jetpack_featured_media_url || ""}
              alt={stripHtml(mainPost.title.rendered)}
              width={500}
              height={400}
              className="w-full h-[200px] lg:h-[300px] object-cover rounded-br-4xl rounded-tl-4xl"
            />
            <h2 className="font-cinzel hover:underline text-[#8b0000] text-xl lg:text-2xl font-bold">
              {stripHtml(mainPost.title.rendered)}
            </h2>
            <p className="text-base font-work hover:underline">
              {stripHtml(mainPost.excerpt.rendered)}
            </p>
          </Link>
          <div className="lg:max-w-[45%] w-full">
            <div className="flex flex-col gap-5">
              {otherPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
