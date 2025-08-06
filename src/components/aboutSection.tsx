import React from "react";

import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="w-full bg-[#fff8f5] relative py-6 lg:py-20">
      <Wrapper>
        <div className="w-full gap-5 relative flex flex-col items-center lg:flex-row px-4 lg:px-0">
          <div className="lg:max-w-[50%] w-full gap-2.5 xl:ml-24 flex flex-col lg:gap-5 items-start">
            <p className="font-work text-base sm:text-xl font-bold text-[#cca21c]">
              NUESTRA HISTORIA
            </p>
            <h3 className="font-cinzel text-2xl sm:text-4xl lg:text-6xl font-bold text-[#54290c]">
              ACERCA DE NOSOTROS
            </h3>
            <p className="w-full text-[15px] max-w-[500px] sm:text-2xl font-mulish">
              Nuestra historia inicia en el corazón amoroso del Señor de
              Humildad y Paciencia. Inspirados por esta devoción, surgió la idea
              de crear <b>A Tus Pies Humilde</b>, con la misión de compartir
              esta devoción con el mundo...
            </p>
            <button className="bg-[#54290c] text-white px-6 py-3 text-base">
              <Link href="/about">Seguir leyendo</Link>
            </button>
          </div>
          <div className="lg:max-w-[50%] w-full">
            {/* Imagen para mobile */}
            <Image
              src="/assets/about-mobile.jpg"
              alt="A Tus Pies Humilde"
              width={500}
              height={500}
              className="w-full h-[300px] object-cover rounded-br-4xl rounded-tl-4xl lg:hidden"
              loading="lazy"
            />
            {/* Imagen para desktop */}
            <Image
              src="/assets/about-desktop.jpg"
              alt="A Tus Pies Humilde"
              width={500}
              height={500}
              className="w-full h-[600px] object-cover rounded-br-4xl rounded-tl-4xl hidden lg:block"
              loading="lazy"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutSection;
