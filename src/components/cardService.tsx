import React from "react";
import Image from "next/image";

interface CardServiceProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const CardService: React.FC<CardServiceProps> = (props) => {
  const { image, alt, title, description } = props;
  return (
    <div className="max-w-[450px] sm:max-w-[500px] w-full bg-white shadow-lg rounded-t-4xl flex flex-col items-center relative z-40 max-lg:m-auto">
      <Image
        src={image}
        alt={alt}
        width={500}
        height={340}
        className="w-full h-[180px] lg:h-[340px] rounded-t-4xl object-cover"
        loading="lazy"
      />
      <div className="w-full p-5 lg:py-8 lg:px-10">
        <p className="font-cinzel font-bold text-base lg:text-2xl text-[#54290c]">
          {title}
        </p>
        <p className="text-[13px] lg:text-base font-mulish text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardService;
