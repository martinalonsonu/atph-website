"use client";

import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#ffe0d0] bg-white shadow-sm lg:sticky lg:top-[100px]">
      <div className="h-24 bg-gradient-to-r from-[#8b0000] to-[#cca21c]" />

      <div className="flex justify-center -mt-12">
        <Image
          src="https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png"
          alt="A Tus Pies Humilde"
          width={96}
          height={96}
          className="rounded-full border-4 border-white bg-white"
        />
      </div>

      <div className="p-6 text-center">
        <h2 className="font-cinzel font-bold text-[#8b0000] text-lg mb-1">
          A Tus Pies Humilde
        </h2>

        <p className="text-sm font-mulish text-[#666] mb-4">
          Portal de fe, tradición y devoción.
        </p>

        <Link href="https://www.facebook.com/ATusPiesHumilde/" target="_blank">
          <button className="bg-[#8b0000] text-white px-6 py-2 rounded-full text-sm hover:bg-[#6f0000] transition">
            Síguenos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
