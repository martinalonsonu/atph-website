import React from "react";

import Link from "next/link";
import Wrapper from "@/features/shared/wrapper";
import Image from "next/image";
import { ABOUT_MODEL } from "@/utils/models";
const AboutSection = () => {
  return (
    <section className="w-full bg-[#fefefe] relative py-6 lg:py-20">
      <Wrapper>
        <div className="w-full gap-5 relative flex flex-col items-center lg:flex-row px-4 lg:px-0">
          <div className="lg:max-w-[50%] w-full gap-2.5 xl:ml-24 flex flex-col lg:gap-5 items-start">
            <p className="font-work text-base sm:text-xl font-bold text-[#cca21c]">
              {ABOUT_MODEL.tooltip}
            </p>
            <h3 className="font-cinzel text-2xl sm:text-4xl lg:text-6xl font-bold text-[#8b0000]">
              {ABOUT_MODEL.title}
            </h3>
            <p className="w-full text-[15px] lg:max-w-[500px] sm:text-2xl font-mulish">
              {ABOUT_MODEL.description}
            </p>
            <button className="bg-[#8b0000] text-white px-6 py-3 text-base">
              <Link href={ABOUT_MODEL.redirectLink}>Seguir leyendo</Link>
            </button>
          </div>
          <div className="lg:max-w-[50%] w-full">
            <Image
              src={ABOUT_MODEL.image}
              alt={ABOUT_MODEL.alt}
              width={500}
              height={600}
              className="w-full lg:w-[500px] h-[300px] lg:h-[550px] object-cover rounded-br-4xl rounded-tl-4xl"
              loading="lazy"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutSection;
