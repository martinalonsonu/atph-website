import Image from "next/image";
import React, { FC } from "react";
import { formatAuthor, stripHtml } from "@/utils/helpers";
import Share from "./Share";

interface HeadingProps {
  title: string;
  subtitle: string;
  author: number;
  date: string;
  image: string | undefined;
  loading: boolean;
  slug: string;
  timeReading: number;
}

const Heading: FC<HeadingProps> = ({
  title,
  subtitle,
  author,
  date,
  image,
  loading,
  slug,
  timeReading,
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
      <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-6 text-sm text-gray-700 mb-6">
        <div className="flex gap-2 items-center">
          <Image
            src={formatAuthor(author).avatar || "/assets/logo-atph.png"}
            width={25}
            height={25}
            alt={formatAuthor(author).name}
            className="rounded-full hover:scale-105 transition"
            loading="lazy"
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
        <span className="hidden lg:block">•</span>
        <span className="text-sm font-mulish font-bold">
          {timeReading} min de lectura
        </span>
      </div>

      <Share slug={slug} />

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
