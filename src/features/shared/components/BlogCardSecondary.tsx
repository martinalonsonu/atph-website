import { Post } from "@/lib/interface";
import { formatAuthor, stripHtml } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import Title from "@/features/home/components/title";
import Badge from "@/features/shared/components/Badge";

export default function BlogCardSecondary({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-[#ffe0d0] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Imagen */}
      <div className="relative overflow-hidden">
        <Image
          src={post.jetpack_featured_media_url || ""}
          alt={stripHtml(post.title.rendered)}
          width={400}
          height={220}
          className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
          quality={75}
        />

        {/* overlay suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Autor + badge */}
        <div className="flex items-center gap-2 text-xs">
          <Image
            src={formatAuthor(post.author).avatar}
            width={26}
            height={26}
            alt={formatAuthor(post.author).name}
            className="rounded-full"
            loading="lazy"
          />
          <span className="text-[#555] font-mulish">
            {formatAuthor(post.author).name}
          </span>
          <Badge categoryId={post.categories[0]} tagId={post.tags[0]} />
        </div>

        {/* Título */}
        <Title type="tertiary" title={stripHtml(post.title.rendered)} />

        {/* Extracto */}
        <p className="text-sm text-[#555] font-mulish leading-relaxed line-clamp-3">
          {stripHtml(post?.excerpt?.rendered || "")}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-3 flex items-center justify-between text-xs text-[#777]">
          <span>
            {new Date(post.date).toLocaleDateString("es-PE", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>

          <span className="text-[#8b0000] font-semibold group-hover:underline">
            Leer →
          </span>
        </div>
      </div>
    </Link>
  );
}
