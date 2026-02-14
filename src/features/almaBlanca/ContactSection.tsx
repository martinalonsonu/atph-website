import Wrapper from "@/features/shared/layout/wrapper";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000] to-[#1a1a1a] text-white py-16 md:py-20 relative overflow-hidden">
      {/* Ornamento de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
      </div>

      <Wrapper>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4">
              Contáctanos
            </h2>
            <p className="text-base md:text-lg font-mulish opacity-90 max-w-2xl mx-auto">
              ¿Interesado en nuestros servicios de bordaduría? Nos encantaría
              escucharte y crear algo especial para ti.
            </p>
          </div>

          {/* Botones de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            {/* WhatsApp */}
            <Link
              href="https://wa.me/+51904829133"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-white/10 border-2 border-white rounded-lg hover:bg-[#25d366] hover:border-[#25d366] transition-all duration-300"
            >
              <span className="text-3xl">💬</span>
              <div className="text-left">
                <p className="text-xs font-mulish opacity-75 group-hover:opacity-100">
                  Escríbenos por
                </p>
                <p className="text-lg font-work font-bold">WhatsApp</p>
              </div>
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/almablanca1118"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-white/10 border-2 border-white rounded-lg hover:bg-[#1877f2] hover:border-[#1877f2] transition-all duration-300"
            >
              <span className="text-3xl">f</span>
              <div className="text-left">
                <p className="text-xs font-mulish opacity-75 group-hover:opacity-100">
                  Síguenos en
                </p>
                <p className="text-lg font-work font-bold">Facebook</p>
              </div>
            </Link>
          </div>

          {/* Información adicional */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-sm font-mulish opacity-75">
              Confecciones a medida • Entrega garantizada • Asesoría gratuita
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
