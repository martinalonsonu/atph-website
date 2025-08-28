"use client";

// import useScroller from "@/hooks/useScroller";
import React from "react";
import { HERO_INFORMATION } from "@/utils/models";
import Image from "next/image";

const HeroSection = () => {
  // const { currentItem } = useScroller(HERO_INFORMATION);
  return (
    <section className="w-full h-auto lg:h-[720px] flex flex-col lg:flex-row bg-[#fff8f5]">
      <div className="lg:w-[33%] h-full">
        <Image
          // src={currentItem.image}
          src={HERO_INFORMATION[0].image}
          className="hidden lg:block w-full h-[285px] lg:h-full object-cover"
          // alt={currentItem.alt}
          alt={HERO_INFORMATION[0].alt}
          width={419}
          height={720}
          priority
        />
        <Image
          src={HERO_INFORMATION[0].imageMobile}
          className="block lg:hidden w-full h-[285px] lg:h-full object-cover"
          alt={HERO_INFORMATION[0].alt}
          width={400}
          height={285}
          priority
        />
      </div>
      <div className="flex flex-col lg:w-[100%] flex-1">
        <div className="w-full h-full flex flex-col px-4 py-6 sm:py-14 sm:pl-24 justify-center gap-8 relative overflow-hidden">
          <h1 className="text-3xl sm:text-[78px] sm:leading-[60px] z-10 text-[#cca21c] font-cinzel">
            A TUS PIES <br />
            <span className="text-4xl sm:text-[86px] text-[#8b0000] font-bold">
              HUMILDE
            </span>
          </h1>
          <p className="text-[15px] sm:text-2xl max-w-[280px] sm:max-w-[520px] font-mulish">
            Nacimos del deseo sincero de servir a Dios y de poner nuestros dones
            al servicio de los demás. Inspirados por nuestra fe, decidimos
            llevar nuestras devociones a través del mundo digital.
          </p>
          <Image
            priority
            src="/assets/atph-logo2.png"
            alt="A Tus Pies Humilde"
            width={750}
            height={750}
            className="w-[300px] sm:w-[450px] right-[-40%] sm:right-[-15%] absolute lg:w-[650px] lg:right-[-30%] opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
