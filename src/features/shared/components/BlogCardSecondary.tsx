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
      className="bg-white rounded-t-2xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col hover:scale-102"
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
          <Image
            src={formatAuthor(post.author).avatar}
            width={25}
            height={25}
            alt={formatAuthor(post.author).name}
            className="rounded-full hover:scale-105 transition"
            loading="lazy"
          />
          <Badge categoryId={post.categories[0]} tagId={post.tags[0]} />
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
