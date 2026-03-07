import Wrapper from "@/features/shared/layout/wrapper";
import { foundationLabels, imageATPH } from "@/utils/models";
import Image from "next/image";
import React from "react";

const FoundationSection = () => {
  return (
    <section className="w-full py-12 md:py-20 relative">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#cca21c]/10 to-[#8b0000]/10 rounded-3xl blur-lg" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={imageATPH.group}
                alt="Fundación A Tus Pies Humilde"
                width={600}
                height={500}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-5 order-1 lg:order-2 md:pl-0 pl-6">
            {/* Timeline indicator */}
            <div className="flex items-start gap-4 md:gap-4 -ml-6 md:ml-0">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-[#cca21c] ring-4 ring-[#cca21c]/20" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#cca21c] uppercase">
                  {foundationLabels.title}
                </p>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#8b0000]">
              {foundationLabels.description}
            </h2>
            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              {foundationLabels.firstText}
            </p>
            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              {foundationLabels.secondText}
            </p>
            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              {foundationLabels.thirdText}
            </p>
          </div>
        </div>
      </Wrapper>

      {/* Connecting line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-[#cca21c] to-[#cca21c]/0 bottom-0 hidden lg:block" />
    </section>
  );
};

export default FoundationSection;
