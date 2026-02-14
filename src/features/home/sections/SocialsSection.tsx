import React from "react";
import Wrapper from "../../shared/layout/wrapper";

const SocialsSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#fff8f5] to-[#ffecdd] relative py-8 md:py-10">
      <Wrapper>
        {/* Encabezado de sección */}
        <div className="flex flex-col items-center text-center   mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-[#cca21c] uppercase mb-2 sm:mb-3 md:mb-4">
            Conéctate Con Nosotros
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-cinzel font-bold text-[#8b0000] mb-3 sm:mb-4">
            Síguenos en Redes
          </h2>
          <div className="h-1 w-16 sm:w-18 md:w-20 bg-gradient-to-r from-[#8b0000] to-[#cca21c] rounded-full mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-[#666] font-mulish max-w-2xl px-4">
            Accede a contenido exclusivo, actualizaciones y momentos especiales
          </p>
        </div>

        <div className="w-full relative flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 lg:px-0">
          {/* Video */}
          <div className="w-full lg:w-[50%] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 group">
            <div className="relative bg-black">
              <iframe
                className="w-full aspect-video"
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FATusPiesHumilde%2Fvideos%2F761028893060931%2F&show_text=false&width=560&t=0"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Contenido de redes */}
          <div className="w-full lg:w-[50%] flex flex-col gap-4 sm:gap-5 md:gap-6">
            {/* Cards de redes */}
            <div className="space-y-3 sm:space-y-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ATusPiesHumilde"
                target="_blank"
                rel="noopener noreferrer"
                className="group/card flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl border border-[#ffe0d0] hover:border-[#8b0000] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-11 sm:h-12 md:h-14 w-11 sm:w-12 md:w-14 rounded-md sm:rounded-lg bg-[#1877F2] group-hover/card:scale-110 transition-transform">
                    <svg
                      className="h-5 sm:h-6 md:h-7 w-5 sm:w-6 md:w-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-[#333] font-work">
                    Facebook
                  </h3>
                  <p className="text-xs sm:text-sm text-[#888] font-mulish">
                    +11K seguidores
                  </p>
                </div>
                <svg
                  className="h-4 sm:h-5 w-4 sm:w-5 text-[#8b0000] group-hover/card:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/51960642409"
                target="_blank"
                rel="noopener noreferrer"
                className="group/card flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl border border-[#ffe0d0] hover:border-[#25D366] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-11 sm:h-12 md:h-14 w-11 sm:w-12 md:w-14 rounded-md sm:rounded-lg bg-[#25D366] group-hover/card:scale-110 transition-transform">
                    <svg
                      fill="#fff"
                      width={30}
                      height={30}
                      viewBox="-2 -2 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                      className="jam jam-whatsapp"
                    >
                      <path d="M9.516.012C4.206.262.017 4.652.033 9.929a9.8 9.8 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a10 10 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.78 7.78 0 0 1-5.52 2.27 7.8 7.8 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.6 7.6 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.67 7.67 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z" />
                      <path d="m14.842 12.045-1.931-.55a.72.72 0 0 0-.713.186l-.472.478a.71.71 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.69.69 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-[#333] font-work">
                    WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-[#888] font-mulish">
                    Respuesta rápida
                  </p>
                </div>
                <svg
                  className="h-4 sm:h-5 w-4 sm:w-5 text-[#25D366] group-hover/card:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SocialsSection;
