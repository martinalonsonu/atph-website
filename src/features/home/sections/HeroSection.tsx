"use client";

import React from "react";
import Image from "next/image";
import { HERO_INFORMATION } from "@/utils/models";

const HeroSection = () => {
  return (
    <section
      className="
        w-full
        relative
        overflow-hidden
        bg-gradient-to-br from-[#fff8f5] via-[#fffcf9] to-[#fff3ed]
        flex flex-col
        lg:grid lg:grid-cols-2
        lg:min-h-[85vh]
      "
    >
      {/* Decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8b0000]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#cca21c]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido */}
      <div
        className="
          flex flex-col justify-center items-start
          px-4 sm:px-8 md:px-12 lg:px-16
          py-10 lg:py-0
          relative z-10
          order-2 lg:order-1
        "
      >
        {/* Línea decorativa */}
        <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#8b0000] to-[#cca21c] mb-4 sm:mb-6 rounded-full" />

        {/* Subtítulo */}
        <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-[#cca21c] uppercase mb-2 sm:mb-4">
          Bienvenidos a...
        </p>

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-cinzel font-bold leading-tight mb-4 sm:mb-6 text-[#8b0000]">
          A TUS PIES
          <br />
          <span className="text-[#cca21c] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            HUMILDE
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-sm sm:text-base md:text-lg font-mulish text-[#555] max-w-xs sm:max-w-md leading-relaxed mb-6 sm:mb-8">
          Nacimos del deseo sincero de servir a Dios y poner nuestros dones al
          servicio de los demás. Inspirados por nuestra fe, llevamos la devoción
          y la tradición al mundo digital.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#services"
            className="
              inline-flex items-center justify-center
              px-6 sm:px-8 py-3 sm:py-4
              bg-[#8b0000] text-white
              font-semibold text-sm sm:text-base
              rounded-xl
              hover:bg-[#a01010]
              transition-all duration-300
              hover:shadow-xl hover:scale-105
            "
          >
            Conoce Nuestros Servicios
          </a>
          <a
            href="#contact"
            className="
              inline-flex items-center justify-center
              px-6 sm:px-8 py-3 sm:py-4
              border-2 border-[#8b0000]
              text-[#8b0000]
              font-semibold text-sm sm:text-base
              rounded-xl
              hover:bg-[#8b0000] hover:text-white
              transition-all duration-300
            "
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Imagen */}
      <div
        className="
          relative
          h-64 sm:h-80 md:h-[650px]
          overflow-hidden
          order-1 lg:order-2
        "
      >
        <div className="relative group">
          <Image
            src={HERO_INFORMATION[0].image}
            alt={HERO_INFORMATION[0].alt}
            width={600}
            height={800}
            priority
            quality={85}
            fetchPriority="high"
            className="
              hidden lg:block
              w-full h-full
              object-cover object-center
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          <Image
            src={HERO_INFORMATION[0].imageMobile}
            alt={HERO_INFORMATION[0].alt}
            width={400}
            height={480}
            priority
            quality={85}
            fetchPriority="high"
            className="
              block lg:hidden
              w-full h-full
              object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f5] via-transparent to-transparent lg:from-[#fff8f5]/40" />

          {/* Badge */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
            <p className="text-sm font-semibold text-[#8b0000] font-cinzel tracking-wide">
              ✨ A Sus Pies
            </p>
            <p className="text-xs text-[#666] font-mulish mt-1 leading-relaxed">
              Para servir con fe y humildad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
