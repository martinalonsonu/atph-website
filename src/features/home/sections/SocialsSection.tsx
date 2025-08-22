import React from "react";

import Link from "next/link";
import Wrapper from "../../shared/wrapper";
import Image from "next/image";
import { ABOUT_MODEL } from "@/utils/models";
const SocialsSection = () => {
  return (
    <section className="w-full bg-[#fff8f5] relative py-6 lg:py-20">
      <Wrapper>
        <div className="w-full relative flex flex-col-reverse items-center gap-5 lg:flex-row px-4 lg:px-0">
          <iframe
            className="w-full lg:w-[50%] aspect-video"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FATusPiesHumilde%2Fvideos%2F761028893060931%2F&show_text=false&width=560&t=0"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="lg:w-[50%] w-full gap-2.5 xl:ml-24 flex flex-col lg:gap-5 items-start">
            <p className="font-work text-base sm:text-xl font-bold text-[#cca21c]">
              NUESTRAS REDES
            </p>
            <h3 className="font-cinzel text-2xl sm:text-4xl lg:text-6xl font-bold text-[#8b0000]">
              SÍGUENOS EN FACEBOOK
            </h3>
            <p className="w-full text-[15px] max-w-[500px] sm:text-2xl font-mulish">
              Te invitamos a seguirnos en nuestra página de Facebook, donde
              podrás visualizar nuestros trabajo, coberturas y mucho más.
            </p>
            <button className="bg-[#8b0000] text-white px-6 py-3 text-base">
              <Link href="https://www.facebook.com/ATusPiesHumilde">
                Ver más
              </Link>
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SocialsSection;
