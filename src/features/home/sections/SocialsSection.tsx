import React from "react";

import Wrapper from "../../shared/layout/wrapper";
import Button from "@/features/shared/components/Button";
import Title from "../components/title";

const SocialsSection = () => {
  return (
    <section className="w-full bg-[#fff8f5] relative py-6 lg:py-20">
      <Wrapper>
        <div className="w-full relative flex flex-col-reverse items-center gap-5 lg:flex-row px-4 lg:px-14">
          <iframe
            className="w-full lg:w-[50%] aspect-video"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FATusPiesHumilde%2Fvideos%2F761028893060931%2F&show_text=false&width=560&t=0"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="lg:w-[50%] w-full gap-2.5 xl:ml-14 flex flex-col lg:gap-5 items-start">
            <Title
              type="primary"
              title="Nuestras redes"
              subtitle="Síguenos en Facebook"
            />
            <p className="w-full text-[15px] max-w-[500px] sm:text-2xl font-mulish">
              Te invitamos a seguirnos, donde podrás visualizar nuestros
              trabajo, coberturas y mucho más.
            </p>
            <Button
              href="https://www.facebook.com/ATusPiesHumilde"
              text="Ver más"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SocialsSection;
