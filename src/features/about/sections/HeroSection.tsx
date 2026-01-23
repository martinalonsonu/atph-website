import React from "react";

import Wrapper from "@/features/shared/layout/wrapper";
import Image from "next/image";
import { ABOUT_MODEL } from "@/utils/models";
import Title from "@/features/home/components/title";
const HeroSection = () => {
  return (
    <section className="w-full relative py-6 lg:py-20" id="about">
      <Wrapper>
        <div className="w-full gap-5 relative flex flex-col items-center lg:flex-row px-4 lg:px-0">
          <div className="lg:max-w-[50%] w-full gap-2.5 xl:ml-24 flex flex-col lg:gap-5 items-start">
            <Image
              src={ABOUT_MODEL.image}
              alt={ABOUT_MODEL.alt}
              width={500}
              height={600}
              className="w-full lg:w-[500px] h-[300px] lg:h-[550px] object-cover rounded-br-4xl rounded-tl-4xl rotate-y-180"
              loading="lazy"
              quality={75}
            />
          </div>
          <div className="lg:max-w-[50%] w-full">
            <Title
              type="primary"
              title={ABOUT_MODEL.title}
              subtitle={ABOUT_MODEL.tooltip}
            />
            <p className="w-full text-[15px] lg:max-w-[500px] sm:text-2xl font-mulish">
              {ABOUT_MODEL.description}
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
