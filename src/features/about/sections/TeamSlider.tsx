"use client";

import { useState } from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/utils/models";

export default function TeamSlider() {
  const [selectedMember, setSelectedMember] = useState(TEAM_MEMBERS[0]);

  return (
    <div className="space-y-8 md:space-y-0 md:flex md:items-center md:gap-3 md:justify-center">
      {/* Imagen destacada */}
      <div className="flex flex-col items-center md:w-96 md:min-h-96">
        <div className="relative w-64 aspect-square overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={selectedMember.image}
            alt={selectedMember.name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Nombre y rol */}
        <div className="text-center mt-6 w-full">
          <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-[#8b0000]">
            {selectedMember.name}
          </h3>
          <p className="text-base font-mulish text-[#cca21c] font-semibold mt-1">
            {selectedMember.role}
          </p>
          {selectedMember.description && (
            <p className="text-sm md:text-base font-mulish text-[#555] leading-relaxed mt-4">
              {selectedMember.description}
            </p>
          )}
        </div>
      </div>

      {/* Grid de 3 columnas con miniaturas */}
      <div className="flex justify-center md:justify-start">
        <div className="grid grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <button
              key={member.name}
              onClick={() => setSelectedMember(member)}
              onMouseEnter={() => setSelectedMember(member)}
              className={`relative group aspect-square overflow-hidden rounded-lg transition-all duration-300 cursor-pointer w-16 h-16 ${
                selectedMember.name === member.name
                  ? "ring-2 ring-[#8b0000] ring-offset-1 scale-110"
                  : "hover:scale-110"
              }`}
            >
              {/* Imagen en blanco y negro */}
              <Image
                src={member.image}
                alt={member.name}
                width={64}
                height={64}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  selectedMember.name === member.name
                    ? "grayscale-0"
                    : "grayscale"
                } group-hover:grayscale-0`}
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-[#8b0000]/0 group-hover:bg-[#8b0000]/10 transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
