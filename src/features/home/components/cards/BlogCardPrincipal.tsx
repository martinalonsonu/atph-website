import { Post } from "@/lib/interface";
import { formatAuthor, stripHtml } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "../title";
import Badge from "@/features/shared/components/Badge";

const BlogCardPrincipal = ({ mainPost }: { mainPost: Post }) => {
  return (
    <Link
      href={`/blog/${mainPost.slug}`}
      className="bg-white rounded-t-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row mb-10 hover:shadow-xl transition hover:scale-102"
    >
      {/* Imagen izquierda */}
      <Image
        src={mainPost.jetpack_featured_media_url || ""}
        alt={stripHtml(mainPost.title.rendered)}
        width={500}
        height={400}
        className="w-full lg:w-1/2 h-[250px] lg:h-auto object-cover"
        loading="lazy"
      />

      {/* Contenido derecha */}
      <div className="p-6 flex flex-col gap-3 lg:w-1/2 justify-center">
        <div className="flex gap-2 text-xs">
          <Image
            src={formatAuthor(mainPost.author).avatar}
            width={25}
            height={25}
            alt={formatAuthor(mainPost.author).name}
            className="rounded-full hover:scale-105 transition"
            loading="lazy"
          />
          <Badge categoryId={mainPost.categories[0]} tagId={mainPost.tags[0]} />
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
