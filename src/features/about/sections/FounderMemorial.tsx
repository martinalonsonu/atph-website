import Wrapper from "@/features/shared/layout/wrapper";
import Image from "next/image";
import React from "react";

const FounderMemorialSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#fffcfa] to-[#fff4ee] py-12 md:py-16">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto */}
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#cca21c] uppercase">
              Memorial
            </p>

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

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              Partió a la Casa del Padre el{" "}
              <span className="font-semibold">26 de noviembre de 2020</span>,
              dejando como legado una obra que hoy continúa viva, guiada por los
              valores de humildad, servicio y perseverancia que él sembró.
            </p>

            {/* Línea simbólica */}
            <div className="mt-4">
              <span className="block h-px w-24 bg-gradient-to-r from-transparent via-[#cca21c] to-transparent" />
            </div>
          </div>

          {/* Imagen */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#cca21c]/10 to-[#8b0000]/10 rounded-3xl blur-lg" />
            <div className="relative overflow-hidden rounded-2xl">
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
