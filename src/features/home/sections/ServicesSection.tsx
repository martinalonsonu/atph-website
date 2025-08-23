import React from "react";
import CardService from "../components/cards/ServiceCard";

import { SERVICES_MODEL } from "@/utils/models";
import Title from "../components/title";

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#fff8f5] relative">
      <div className="w-full sm:gap-10 sm:max-w-[1000px] xl:max-w-[1200px] flex flex-col xl:gap-0 lg:flex-row mx-auto justify-center items-center py-6 px-4 lg:px-0 lg:py-20">
        <div className="w-full flex flex-col items-center lg:w-[50%] relative">
          <div className="w-full mb-9 xl:ml-24">
            <Title
              type="primary"
              title={SERVICES_MODEL.title}
              subtitle={SERVICES_MODEL.title}
            />
          </div>
          <CardService
            image={SERVICES_MODEL.coverages[0].image}
            alt={SERVICES_MODEL.coverages[0].alt}
            title={SERVICES_MODEL.coverages[0].title}
            description={SERVICES_MODEL.coverages[0].description}
          />
          {/* <img src="/assets/logo-atph-letras.png" alt="A Tus Pies Humilde"  className='w-[200px] sm:w-[250px] left-[-40%] sm:left-[-15%] bottom-[-245px] absolute lg:w-[450px] lg:left-[-30%] opacity-15'/> */}
        </div>
        <div className="w-full lg:w-[50%] flex flex-col items-center mt-10 sm:mt-0 gap-9 lg:gap-24">
          <CardService
            image={SERVICES_MODEL.coverages[1].image}
            alt={SERVICES_MODEL.coverages[1].alt}
            title={SERVICES_MODEL.coverages[1].title}
            description={SERVICES_MODEL.coverages[1].description}
          />
          <CardService
            image={SERVICES_MODEL.coverages[2].image}
            alt={SERVICES_MODEL.coverages[2].alt}
            title={SERVICES_MODEL.coverages[2].title}
            description={SERVICES_MODEL.coverages[2].description}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
