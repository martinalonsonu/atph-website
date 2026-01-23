import Wrapper from "@/features/shared/layout/wrapper";
import Image from "next/image";
import React from "react";

const FoundationSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#fff8f5] to-[#fffcfa] py-12 md:py-16">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#cca21c]/10 to-[#8b0000]/10 rounded-3xl blur-lg" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about-foundation.jpg"
                alt="Fundación A Tus Pies Humilde"
                width={600}
                height={500}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-5 order-1 lg:order-2">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#cca21c] uppercase">
              Nuestra Fundación
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#8b0000]">
              Un proyecto con propósito
            </h2>

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              A Tus Pies Humilde fue fundado con la intención de responder a una
              necesidad concreta: acercar la fe y las tradiciones religiosas a
              más personas, especialmente a quienes no podían vivirlas de manera
              presencial.
            </p>

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              Desde sus primeros pasos, el proyecto se sostuvo sobre la entrega
              voluntaria, el trabajo colaborativo y el compromiso de servir con
              respeto, responsabilidad y humildad.
            </p>

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              La fundación de este portal marcó el inicio de un camino que hoy
              sigue creciendo, siempre fiel a sus valores originales.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FoundationSection;
