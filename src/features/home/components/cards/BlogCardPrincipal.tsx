import { Post } from "@/lib/interface";
import { stripHtml } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "../title";

const BlogCardPrincipal = ({ mainPost }: { mainPost: Post }) => {
  return (
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
        <Title type="tertiary" title={stripHtml(mainPost.title.rendered)} />
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
  );
};

export default BlogCardPrincipal;
