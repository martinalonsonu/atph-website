import Wrapper from "@/features/shared/layout/wrapper";
import Image from "next/image";
import React from "react";

const HistorySection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#fefefe] to-[#fff8f5] py-12 md:py-16">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* texto */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#8b0000]">
              ¿Cómo empezó todo?
            </h2>

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              A Tus Pies Humilde surge como una iniciativa sencilla, casi
              silenciosa, impulsada por el deseo de servir. Empezamos
              acompañando celebraciones religiosas, registrando momentos de fe y
              tradición que muchas veces no podían llegar a todos.
            </p>

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              Con el tiempo, entendimos que la tecnología no reemplaza la fe,
              pero sí puede amplificarla. Así, poco a poco, este proyecto fue
              creciendo, integrando personas con distintos dones, pero con un
              mismo propósito.
            </p>

            <p className="text-sm sm:text-base font-mulish text-[#555] leading-relaxed">
              Hoy, A Tus Pies Humilde es un espacio donde la devoción, la
              tradición y la comunicación digital caminan juntas.
            </p>
          </div>

          {/* imagen */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#8b0000]/10 to-[#cca21c]/10 rounded-3xl blur-lg" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about-history.jpg"
                alt="Historia A Tus Pies Humilde"
                width={600}
                height={500}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HistorySection;
