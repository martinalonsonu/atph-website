import Image from "next/image";
import { formatAuthor, stripHtml } from "@/utils/helpers";
import Share from "./Share";

export interface HeadingProps {
  title: string;
  subtitle: string;
  author: number;
  date: string;
  image?: string;
  loading: boolean;
  slug: string;
  timeReading: number;
}

const Heading = ({
  title,
  subtitle,
  author,
  date,
  image,
  slug,
  timeReading,
}: HeadingProps) => {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-center text-[#8b0000] mb-4">
        {stripHtml(title)}
      </h1>

      <p className="text-center font-mulish text-[#555] max-w-2xl mx-auto mb-6">
        {stripHtml(subtitle)}
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-[#666] mb-6">
        <div className="flex items-center gap-2">
          <Image
            src={formatAuthor(author).avatar}
            width={28}
            height={28}
            alt={formatAuthor(author).name}
            className="rounded-full"
          />
          <span className="font-mulish font-semibold">
            {formatAuthor(author).name}
          </span>
        </div>

        <span>•</span>

        <span className="font-mulish">
          {new Date(date).toLocaleDateString("es-PE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>

        <span>•</span>

        <span className="font-mulish">⏱ {timeReading} min lectura</span>
      </div>

      <Share slug={slug} isDesktop={false} />

      <div className="relative mt-8 mb-10">
        <div className="absolute -inset-3 bg-gradient-to-br from-[#8b0000]/10 to-[#cca21c]/10 rounded-3xl blur-lg" />
        <Image
          src={image ?? "/assets/apth-logo2.png"}
          alt={stripHtml(title)}
          width={1200}
          height={600}
          className="relative rounded-2xl"
          priority
        />
      </div>
    </>
  );
};

export default Heading;
