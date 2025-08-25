import Image from "next/image";
import React, { FC } from "react";
import { formatAuthor, stripHtml } from "@/utils/helpers";
import Link from "next/link";

interface HeadingProps {
  title: string;
  subtitle: string;
  author: number;
  date: string;
  image: string | undefined;
  loading: boolean;
  slug: string;
}

const Heading: FC<HeadingProps> = ({
  title,
  subtitle,
  author,
  date,
  image,
  loading,
  slug,
}) => {
  return (
    <>
      {/* Title */}
      <h1 className="text-2xl lg:text-4xl font-cinzel text-center text-[#8b0000] mb-3">
        {stripHtml(title)}
      </h1>
      {/* Subtitle */}
      <p className="text-center font-work text-gray-600 max-w-2xl mx-auto mb-6">
        {stripHtml(subtitle)}
      </p>

      {/* Info row */}
      <div className="flex justify-center items-center gap-6 text-sm text-gray-700 mb-6">
        <div className="flex gap-2 items-center">
          <Image
            src={formatAuthor(author).avatar || "/assets/logo-atph.png"}
            width={25}
            height={25}
            alt={formatAuthor(author).name}
            className="rounded-full hover:scale-105 transition"
          />
          <span className="font-mulish font-bold">
            {formatAuthor(author).name}
          </span>
        </div>
        <span>•</span>
        <span className="text-sm font-mulish font-bold">
          {new Date(date).toLocaleDateString("es-PE", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span>•</span>
        <Link
          href={`http://www.facebook.com/sharer.php?u=${
            process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_URL
          }/publicaciones/${slug}`}
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
              <path
                d="M13.5 21.888C18.311 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.013 3.689 9.165 8.5 9.888V15H9a1.5 1.5 0 0 1 0-3h1.5v-2A3.5 3.5 0 0 1 14 6.5h.5a1.5 1.5 0 0 1 0 3H14a.5.5 0 0 0-.5.5v2H15a1.5 1.5 0 0 1 0 3h-1.5z"
                fill="#09244B"
              />
            </g>
          </svg>
        </Link>
      </div>

      {/* Image */}
      <div className="mb-8">
        <Image
          src={
            loading
              ? "/assets/apth-logo2.png"
              : image || "/assets/apth-logo2.png"
          }
          alt={stripHtml(title)}
          width={1200}
          height={600}
          className="rounded-xl"
          priority
        />
      </div>
    </>
  );
};

export default Heading;
