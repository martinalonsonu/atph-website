import Wrapper from "@/features/shared/layout/wrapper";
import Image from "next/image";
import React from "react";

const FounderMemorialSection = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-b from-[#fff8f5] to-[#fff4ee] relative">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto */}
          <div className="flex flex-col gap-5 order-1 lg:order-2 md:pl-0 pl-6">
            {/* Timeline indicator */}
            <div className="flex items-start gap-4 md:gap-4 -ml-6 md:ml-0">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-[#8b0000] ring-4 ring-[#8b0000]/30" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#cca21c] uppercase">
                  Memorial - Legado Eterno
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#8b0000]">
              Ángel Joel Villanueva Reyes
            </h2>

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              Líder y principal impulsor de la existencia de{" "}
              <span className="font-semibold text-[#8b0000]">
                A Tus Pies Humilde
              </span>
              , cuya visión, fe y entrega dieron origen a este proyecto.
            </p>

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              De él heredamos a nuestro patrón y protector, el{" "}
              <span className="font-semibold">
                Señor de Humildad y Paciencia
              </span>
              , de quien fue profundamente devoto y cuya espiritualidad marcó el
              rumbo de nuestra misión.
            </p>

            <div className="bg-[#8b0000]/5 border-l-4 border-[#8b0000] pl-4 py-3 my-2 rounded-r">
              <p className="text-sm sm:text-base font-mulish text-[#8b0000] font-semibold">
                26 de noviembre de 2020
              </p>
              <p className="text-xs sm:text-sm font-mulish text-[#555] mt-1">
                Partió a la Casa del Padre, dejando un legado de fe, humildad y
                servicio
              </p>
            </div>

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed italic">
              &ldquo;Su obra continúa viva, guiada por los valores de humildad,
              servicio y perseverancia que él sembró.&rdquo;
            </p>

            {/* Línea simbólica */}
            <div className="mt-4">
              <span className="block h-px w-32 bg-gradient-to-r from-[#8b0000] via-[#cca21c] to-transparent" />
            </div>
          </div>

          {/* Imagen */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#8b0000]/20 to-[#cca21c]/10 rounded-3xl blur-lg" />
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://atphdev.wordpress.com/wp-content/uploads/2026/01/captura-de-pantalla-2026-01-23-224537.png"
                alt="Ángel Joel Villanueva Reyes"
                width={520}
                height={620}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FounderMemorialSection;
