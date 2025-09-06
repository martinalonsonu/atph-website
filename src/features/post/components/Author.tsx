import { formatAuthor } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

const Author = ({ authorId }: { authorId: number }) => {
  const author = formatAuthor(authorId);
  return (
    <div className="bg-white max-w-[384px] mx-auto rounded-t-2xl shadow-md p-4">
      {/* Encabezado */}
      <h2 className="text-sm font-semibold font-cinzel text-[#8B0000] mb-2">
        Acerca del autor
      </h2>

      {/* Perfil */}
      <div className="flex items-center gap-4 lg:gap-2 mb-4">
        <Image
          src={author.avatar || "/assets/logo-atph.png"}
          alt="Autor"
          width={60}
          height={60}
          className="rounded-full border border-gray-200 shadow-sm hover:scale-105 transition"
          quality={75}
        />
        <div>
          <p className="font-bold text-lg whitespace-nowrap font-mulish text-gray-800">
            {author.name}
          </p>
          <p className="text-[12px] font-mulish text-gray-500">
            @{author.nick}
          </p>
          <p className="text-[10px] font-mulish text-gray-500">
            {author.ocupation}
          </p>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-sm font-mulish text-left text-gray-600 leading-relaxed">
        {author.description}
      </p>
    </div>
  );
};

export default Author;
