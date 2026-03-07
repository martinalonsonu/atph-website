import Wrapper from "@/features/shared/layout/wrapper";
import { textDescription } from "@/utils/models";
import React from "react";

const EssenceSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#fff8f5] to-[#ffecdd] py-12 md:py-16">
      <Wrapper>
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#cca21c] uppercase mb-3">
            Nuestra Esencia
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#8b0000]">
            Lo que nos define
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#8b0000] to-[#cca21c] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {textDescription.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-[#ffe0d0] hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-cinzel font-bold text-[#8b0000] mb-3">
                {item.title}
              </h3>
              <p className="text-sm font-mulish text-[#555] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default EssenceSection;
