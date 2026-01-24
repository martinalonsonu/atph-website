"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/utils/models";

const CARD_WIDTH = 280;
const GAP = 32;
const AUTOPLAY_DELAY = 6000;

export default function TeamSlider() {
  const [active, setActive] = useState(0);
  const total = TEAM_MEMBERS.length;
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [total]);

  const prev = () => {
    setActive((prev) => (prev - 1 + total) % total);
    startAutoplay(); // 🔁 reset timer
  };

  const next = () => {
    setActive((prev) => (prev + 1) % total);
    startAutoplay(); // 🔁 reset timer
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden p-5">
      <div className="relative flex items-center justify-center h-[300px] md:h-[250px]">
        {TEAM_MEMBERS.map((member, i) => {
          let offset = i - active;

          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          if (Math.abs(offset) > 1) return null;

          const isActive = offset === 0;

          return (
            <div
              key={member.name}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(${offset * (CARD_WIDTH + GAP)}px)
                            scale(${isActive ? 1 : 0.92})`,
                zIndex: isActive ? 10 : 1,
                width: CARD_WIDTH,
              }}
            >
              <div
                className={`bg-white rounded-2xl border border-[#ffe0d0] shadow-md`}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border border-[#f0e0d8]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-cinzel font-bold text-[#8b0000]">
                    {member.name}
                  </h3>
                  <p className="text-sm font-mulish text-[#666] mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón Izq */}
      <button
        onClick={prev}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2
                   w-10 h-10 rounded-full bg-white border border-[#ffe0d0]
                   text-[#8b0000] hover:bg-[#fff1ea]
                   transition shadow-sm"
      >
        ‹
      </button>

      {/* Botón Der */}
      <button
        onClick={next}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2
                   w-10 h-10 rounded-full bg-white border border-[#ffe0d0]
                   text-[#8b0000] hover:bg-[#fff1ea]
                   transition shadow-sm"
      >
        ›
      </button>
    </div>
  );
}
