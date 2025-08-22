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

function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/publicaciones/${post.slug}`}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col hover:scale-102"
    >
      <Image
        src={post.jetpack_featured_media_url || ""}
        alt={stripHtml(post.title.rendered)}
        width={400}
        height={200}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        {/* Etiquetas */}
        <div className="flex gap-2 text-xs">
          <span className="bg-[#ffe6e6] text-[#8b0000] font-semibold px-2 py-0.5 rounded">
            News
          </span>
          <span className="bg-[#f0e6ff] text-[#5a2ca0] font-semibold px-2 py-0.5 rounded">
            Inspiration
          </span>
        </div>

        {/* Título */}
        <h3 className="font-cinzel text-lg font-bold text-[#8b0000] hover:underline">
          {stripHtml(post.title.rendered)}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-700 line-clamp-2">
          {stripHtml(post.excerpt.rendered)}
        </p>

        {/* Fecha */}
        <span className="text-xs text-gray-500 mt-2">
          {new Date(post.date).toLocaleDateString("es-PE", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
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
              px-4 py-2
              uppercase tracking-wide
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
        <Link
          href={`/publicaciones/${mainPost.slug}`}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row mb-10 hover:shadow-xl transition hover:scale-102"
        >
          {/* Imagen izquierda */}
          <Image
            src={mainPost.jetpack_featured_media_url || ""}
            alt={stripHtml(mainPost.title.rendered)}
            width={500}
            height={400}
            className="w-full lg:w-1/2 h-[250px] lg:h-auto object-cover"
          />

          {/* Contenido derecha */}
          <div className="p-6 flex flex-col gap-3 lg:w-1/2 justify-center">
            <div className="flex gap-2 text-xs">
              <span className="bg-[#ffe6e6] text-[#8b0000] font-semibold px-2 py-0.5 rounded">
                News
              </span>
              <span className="bg-[#f0e6ff] text-[#5a2ca0] font-semibold px-2 py-0.5 rounded">
                Inspiration
              </span>
            </div>
            <h2 className="font-cinzel text-2xl font-bold text-[#8b0000] hover:underline">
              {stripHtml(mainPost.title.rendered)}
            </h2>
            <p className="text-gray-700 text-base line-clamp-4">
              {stripHtml(mainPost.excerpt.rendered)}
            </p>
            <span className="text-xs text-gray-500 mt-2">
              {new Date(mainPost.date).toLocaleDateString("es-PE", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </Link>

        {/* Grid de 3 posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
