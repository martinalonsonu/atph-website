import React from "react";
import Wrapper from "@/features/shared/layout/wrapper";
import Image from "next/image";
import { ABOUT_MODEL } from "@/utils/models";
import Button from "@/features/shared/components/Button";

const AboutSection = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-[#fefefe] to-[#fff8f5] relative py-8 md:py-10"
      id="about"
    >
      <Wrapper>
        {/* Encabezado de sección */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-[#cca21c] uppercase mb-2 sm:mb-3 md:mb-4">
            Nuestra Historia
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-cinzel font-bold text-[#8b0000] mb-3 sm:mb-4">
            ¿Quiénes Somos?
          </h2>
          <div className="h-1 w-16 sm:w-18 md:w-20 bg-gradient-to-r from-[#8b0000] to-[#cca21c] rounded-full"></div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Imagen con efecto */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full">
              {/* Fondo decorativo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#8b0000]/10 to-[#cca21c]/10 rounded-3xl blur-lg"></div>

              {/* Imagen principal */}
              <div className="relative overflow-hidden rounded-2xl group">
                <Image
                  src={ABOUT_MODEL.image}
                  alt={ABOUT_MODEL.alt}
                  width={500}
                  height={600}
                  className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8b0000]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 order-1 lg:order-2">
            {/* Card con descripción */}
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg border border-[#ffe0d0] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md sm:rounded-lg bg-gradient-to-br from-[#8b0000] to-[#cca21c]">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                    >
                      <path d="M3.25 9.75c3 3.5 4.75 4.5 4.75 4.5s1.75-1 4.75-4.5 1-7-1.5-7-3.25 3-3.25 3-.75-3-3.25-3-4.5 3.5-1.5 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-cinzel font-bold text-[#8b0000]">
                    Nuestra Misión
                  </h3>
                </div>
              </div>
              <p className="font-mulish text-[#555] text-sm sm:text-base leading-relaxed">
                {ABOUT_MODEL.description}
              </p>
            </div>

            {/* Valor agregado */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-[#fff8f5] to-[#ffe8e0] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-[#ffe0d0] hover:border-[#8b0000] transition-colors">
                <p className="text-xl sm:text-2xl font-bold text-[#8b0000] font-cinzel">
                  Fe
                </p>
                <p className="text-xs sm:text-sm text-[#666] font-mulish mt-1 sm:mt-2">
                  Como base de nuestro trabajo
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#fff8f5] to-[#ffe8e0] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-[#ffe0d0] hover:border-[#8b0000] transition-colors">
                <p className="text-xl sm:text-2xl font-bold text-[#8b0000] font-cinzel">
                  Servicio
                </p>
                <p className="text-xs sm:text-sm text-[#666] font-mulish mt-1 sm:mt-2">
                  Al corazón de la gente
                </p>
              </div>
            </div>

            {/* Botón CTA */}
            <Button
              href={ABOUT_MODEL.redirectLink}
              text="Conoce más de nosotros"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutSection;
