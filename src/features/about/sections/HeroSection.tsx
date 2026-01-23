import React from "react";

import Wrapper from "@/features/shared/layout/wrapper";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#fff8f5] via-[#fffcf9] to-[#fff3ed] overflow-hidden">
      {/* decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8b0000]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#cca21c]/10 rounded-full blur-3xl" />
      </div>

      <Wrapper>
        <div className="relative z-10 py-16 md:py-24 flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-[#cca21c] uppercase mb-3">
            Nuestra Historia
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-cinzel font-bold text-[#8b0000] mb-6">
            A Tus Pies, <br />
            <span className="text-[#cca21c]">Humilde</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg font-mulish text-[#555] leading-relaxed">
            Somos un proyecto que nace desde la fe, el servicio y la convicción
            de que la evangelización también puede vivirse con calidad,
            creatividad y compromiso en el mundo digital.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
