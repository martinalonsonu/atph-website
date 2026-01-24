import Wrapper from "@/features/shared/layout/wrapper";
import React from "react";
import TeamSlider from "./TeamSlider";

const TeamSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#fff8f5] to-[#ffecdd] py-4">
      <Wrapper>
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#cca21c] uppercase mb-3">
            Nuestro Equipo
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#8b0000]">
            Miembros Actuales
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#8b0000] to-[#cca21c] rounded-full mt-4" />
          <p className="text-sm sm:text-base text-[#666] font-mulish max-w-2xl mx-auto mt-4">
            Rostros y manos que sostienen este proyecto con fe, compromiso y
            servicio.
          </p>
        </div>

        <TeamSlider />
      </Wrapper>
    </section>
  );
};

export default TeamSection;
