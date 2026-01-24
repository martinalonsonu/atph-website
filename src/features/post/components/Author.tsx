import { formatAuthor } from "@/utils/helpers";
import Image from "next/image";

interface AuthorProps {
  authorId: number;
}

const Author = ({ authorId }: AuthorProps) => {
  const author = formatAuthor(authorId);

  return (
    <div className="bg-white rounded-2xl border border-[#ffe0d0] p-5 shadow-sm">
      <h3 className="text-sm font-cinzel font-bold text-[#8b0000] mb-3">
        Sobre el autor
      </h3>

      <div className="flex items-center gap-4 mb-4">
        <Image
          src={author.avatar}
          alt={author.name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <p className="font-bold font-mulish text-[#333]">{author.name}</p>
          <p className="text-xs text-[#777]">@{author.nick}</p>
          <p className="text-xs text-[#777]">{author.ocupation}</p>
        </div>
      </div>

      <p className="text-sm font-mulish text-[#555] leading-relaxed">
        {author.description}
      </p>
    </div>
  );
};

export default Author;
