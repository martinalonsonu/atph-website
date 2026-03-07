import Wrapper from "@/features/shared/layout/wrapper";
import { presentSectionLabels } from "@/utils/models";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PresentSection = () => {
  return (
    <section className="w-full py-8 md:py-16 border-t-2 border-b-2 border-[#d4af37] relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-[#fffcf0] to-white opacity-100" />

      {/* Orbes de color */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black rounded-full blur-3xl" />
      </div>

      {/* Contenido */}
      <Wrapper>
        <Link href="/alma-blanca">
          <div className="group cursor-pointer relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center">
              {/* Logo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-48 md:w-56 aspect-square overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105 shadow-lg">
                  <Image
                    src="https://atphdev.wordpress.com/wp-content/uploads/2026/02/diseno-sin-titulo-3.png"
                    alt="Alma Blanca - Bordaduría Religiosa"
                    width={192}
                    height={192}
                    className="w-full h-full object-contain bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] p-4"
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#d4af37] uppercase opacity-90">
                  {presentSectionLabels.tooltip}
                </p>
                <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-black">
                  {presentSectionLabels.title}
                </h3>
                <p className="text-base md:text-lg font-mulish text-[#d4af37] font-semibold">
                  {presentSectionLabels.description}
                </p>
                <p className="text-sm md:text-base font-mulish text-[#333] max-w-md mx-auto md:mx-0">
                  {presentSectionLabels.text}
                </p>
                <div className="flex justify-center md:justify-start mt-2">
                  <span className="inline-block px-6 py-2 bg-[#d4af37] text-black rounded-lg font-mulish font-semibold group-hover:bg-black group-hover:text-[#d4af37] transition-all duration-300">
                    Conocer más →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Wrapper>
    </section>
  );
};

export default PresentSection;
