"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto rounded-t-2xl overflow-hidden shadow-lg bg-white lg:sticky lg:top-[95px]">
      {/* Banner superior */}
      <div className="h-28 bg-gradient-to-r from-black via-blue-900 to-red-900"></div>

      {/* Imagen de perfil */}
      <div className="flex justify-center -mt-14">
        <Image
          src="/assets/logo-atph.png"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full border-[#3D7793] bg-white border-2 object-cover"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">A Tus Pies Humilde - Huacho</h2>
        <p className="text-sky-600 text-sm mb-3">
          7,4 mil Me gusta • 11 mil seguidores
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Un portal de difusión de manifestaciones de costumbre, fe, amor y
          devoción de nuestra provincia.
        </p>

        {/* Botón */}
        <Link
          href="https://www.facebook.com/ATusPiesHumilde/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="m-auto flex items-center gap-1 bg-sky-700 text-white px-5 py-2 rounded-md hover:bg-sky-800 transition">
            Síguenos en
            <svg
              width={15}
              height={15}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path
                fillRule="evenodd"
                d="M15.174 5.32H17V2.14A24 24 0 0 0 14.34 2c-2.632 0-4.435 1.656-4.435 4.7v2.8H7v3.555h2.905V22h3.56v-8.945h2.789l.443-3.555h-3.231V7.05c0-1.027.276-1.73 1.708-1.73"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
