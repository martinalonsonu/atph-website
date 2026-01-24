import React from "react";
import CardService from "../components/cards/ServiceCard";
import Wrapper from "@/features/shared/layout/wrapper";
import { SERVICES_MODEL } from "@/utils/models";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-[#] to-[#ffe8e0] relative py-8 md:py-10"
      id="services"
    >
      <Wrapper>
        {/* Encabezado de sección */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-[#cca21c] uppercase mb-2 sm:mb-3 md:mb-4">
            Lo Que Ofrecemos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-cinzel font-bold text-[#8b0000] mb-3 sm:mb-4">
            Nuestros Servicios
          </h2>
          <div className="h-1 w-16 sm:w-18 md:w-20 bg-gradient-to-r from-[#8b0000] to-[#cca21c] rounded-full mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-[#666] font-mulish max-w-2xl px-4">
            Servicios especializados para hacer tu evento memorable
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {SERVICES_MODEL.coverages.map((service, index) => (
            <div key={index} className="group relative h-full">
              {/* Línea decorativa superior */}
              <div className="absolute -top-4 left-0 right-0 h-1 bg-gradient-to-r from-[#8b0000] via-[#cca21c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardService
                image={service.image}
                alt={service.alt}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="flex justify-center mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#8b0000] text-white font-semibold text-sm sm:text-base rounded-xl hover:bg-[#a01010] transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Solicita un presupuesto
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default ServicesSection;
