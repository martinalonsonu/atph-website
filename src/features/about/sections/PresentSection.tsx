import Wrapper from "@/features/shared/layout/wrapper";
import React from "react";

const PresentSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#fefefe] to-[#fff8f5] py-12 md:py-16">
      <Wrapper>
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#8b0000]">
            Nuestro compromiso hoy
          </h2>

          <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
            Seguimos creciendo, aprendiendo y perfeccionando cada detalle,
            siempre con la misma intención: servir con respeto, calidad y
            coherencia con los valores que nos inspiran.
          </p>

          <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
            A Tus Pies Humilde no es solo un portal, es una comunidad que cree
            que la fe también puede comunicarse con belleza y responsabilidad.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default PresentSection;
