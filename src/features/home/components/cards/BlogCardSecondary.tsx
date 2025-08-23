import { Post } from "@/lib/interface";
import { stripHtml } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import Title from "../title";

export default function BlogCardSecondary({ post }: { post: Post }) {
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
        <Title type="tertiary" title={stripHtml(post.title.rendered)} />

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
