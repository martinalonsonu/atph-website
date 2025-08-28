import Footer from "@/features/shared/structured/footer";
import HeaderNav from "@/features/shared/structured/headerNav";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "A Tus Pies Humilde | 404 No Encontrada",
  description:
    "Portal religioso católico y devocional | Transmisiones en vivo | Alfombras de Aserrín y Viruta teñida",
};

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f5]">
      <HeaderNav />
      <main className="flex-grow max-w-[1200px] w-full mx-auto py-12 lg:py-20 px-4 lg:px-14 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-12">
          {/* Sección 404 */}
          <div className="text-center">
            <h2 className="text-6xl font-mulish font-light text-gray-400 mb-4">
              404
            </h2>
            <div className="h-px w-16 bg-gray-300 mx-auto mb-6"></div>
            <h1 className="text-3xl font-cinzel text-[#8b0000] mb-6">
              Página No Encontrada
            </h1>
            <p className="text-gray-600 mb-8 font-mulish">
              Parece que la página que estás buscando no existe o ha sido movida
            </p>
            <Link
              href="/"
              className="font-semibold font-mulish text-[#8b0000] hover:underline"
            >
              Regresar al Inicio →
            </Link>
          </div>
        </div>
      </main>

      {/* Utiliza tu componente Footer existente */}
      <Footer />
    </div>
  );
};

export default NotFound;
