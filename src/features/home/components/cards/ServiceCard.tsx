import React from "react";
import Image from "next/image";
import Title from "../title";

interface CardServiceProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const CardService: React.FC<CardServiceProps> = (props) => {
  const { image, alt, title, description } = props;
  return (
    <div className="max-w-[450px] sm:max-w-[500px] w-full bg-white shadow-xl rounded-3xl flex flex-col items-center relative z-40 max-lg:m-auto group overflow-hidden hover:shadow-2xl transition-all duration-500 border border-[#ffe0d0]/30">
      <div className="relative overflow-hidden w-full h-[180px] lg:h-[340px] rounded-t-3xl">
        <Image
          src={image}
          alt={alt}
          width={500}
          height={340}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#8b0000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="w-full p-5 lg:py-8 lg:px-10 bg-gradient-to-br from-white to-[#fffbf9]">
        <Title type="tertiary" title={title} />
        <p className="text-[13px] lg:text-base font-mulish text-[#555] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardService;
