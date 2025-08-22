"use client";

import { useEffect, useState } from "react";
import type { Post } from "@/lib/interface";
import Link from "next/link";
import BlogCardSecondary from "../components/cards/BlogCardSecondary";
import BlogCardPrincipal from "../components/cards/BlogCardPrincipal";

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
    <section className="w-full bg-[#fefefe] py-12 lg:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-14">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-cinzel font-bold text-xl lg:text-3xl text-[#8b0000]">
            Últimas publicaciones
          </h2>
          {/* Botón: Ver más publicaciones */}
          <div>
            <Link
              href="/blog"
              aria-label="Ver más publicaciones"
              className="
              inline-flex items-center
              sm:w-auto
              px-4 py-2 tracking-wide
              bg-[#8b0000] text-white
              shadow-md hover:shadow-lg
              transition
              hover:bg-[#6f0000] active:translate-y-px
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-offset-2 focus-visible:ring-[#8b0000]
              focus-visible:ring-offset-[#fff8f5]
              rounded-none
              font-mulish text-[12px] lg:text-base whitespace-nowrap
            "
            >
              Ver más
            </Link>
          </div>
        </div>

        {/* Post principal en 2 columnas */}
        <BlogCardPrincipal mainPost={mainPost} />

        {/* Grid de 3 posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.slice(0, 3).map((post) => (
            <BlogCardSecondary key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
