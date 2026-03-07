import Wrapper from "@/features/shared/layout/wrapper";
import { historySectionLabels } from "@/utils/models";
import Image from "next/image";
import React from "react";

const HistorySection = () => {
  return (
    <section className="w-full py-12 md:py-20 relative">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Timeline node - Left */}
          <div className="flex flex-col gap-5 md:pl-0 pl-6">
            {/* Timeline indicator */}
            <div className="flex items-start gap-4 md:gap-4 -ml-6 md:ml-0">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-[#8b0000] ring-4 ring-[#8b0000]/20" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#cca21c] uppercase">
                  {historySectionLabels.chapterTitle}
                </p>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#8b0000]">
              {historySectionLabels.title}
            </h2>
            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              {historySectionLabels.firstParagraph}
            </p>
            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              {historySectionLabels.secondParagraph}
            </p>
            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              {historySectionLabels.thirdParagraph}
            </p>
          </div>

          {/* imagen */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#8b0000]/10 to-[#cca21c]/10 rounded-3xl blur-lg" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={historySectionLabels.image}
                alt={historySectionLabels.imageAlt}
                width={600}
                height={500}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Connecting line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-[#8b0000] to-[#8b0000]/0 bottom-0 hidden lg:block" />
    </section>
  );
};

export default HistorySection;
