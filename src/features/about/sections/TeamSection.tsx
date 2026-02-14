import Wrapper from "@/features/shared/layout/wrapper";
import React from "react";
import TeamSlider from "./TeamSlider";

const TeamSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#fff8f5] to-[#ffecdd] py-12 md:py-16">
      <Wrapper>
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#cca21c] uppercase mb-3">
            Nuestro Equipo
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#8b0000] mb-4">
            Miembros Actuales
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#8b0000] to-[#cca21c] rounded-full mb-4" />
          <p className="text-sm sm:text-base text-[#666] font-mulish max-w-2xl mx-auto">
            Rostros y manos que sostienen este proyecto con fe, compromiso y
            servicio.
            <br />
            <span className="text-xs text-[#cca21c] mt-2 block">
              Haz click en cualquier imagen para conocer más
            </span>
          </p>
        </div>

        <TeamSlider />
      </Wrapper>
    </section>
  );
};

export default TeamSection;
