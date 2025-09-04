"use client";

import useScroll from "@/hooks/useScroll";
import clsx from "clsx";
import React from "react";

const ArrowButton = () => {
  const { isScrolled } = useScroll({ height: 250 });
  return (
    <div
      className={clsx(
        "cursor-pointer fixed bg-white rounded-full p-2 shadow-md/80 shadow-amber-900 right-4 bottom-5 z-[45] transition-opacity duration-300 hover:scale-110",
        "lg:right-10 lg:bottom-10",
        !isScrolled && "hidden"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        width={25}
        height={25}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="#8b0000"
      >
        <path d="M0 0h48v48H0z" fill="none" />
        <path d="m6.586 30.586 2.828 2.828L24 18.828l14.586 14.586 2.828-2.828L24 13.172z" />
      </svg>
    </div>
  );
};

export default ArrowButton;
