"use client";

import React, { useEffect } from "react";
import Wrapper from "../layout/wrapper";
import { HEADER_NAV_INFORMATION } from "@/utils/models";
import Image from "next/image";
import Link from "next/link";

const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <Wrapper>
        <nav
          className={`flex items-center transition-all duration-300 ease-in-out ${
            isScrolled ? "h-20" : "h-[60px]"
          }`}
        >
          <div className="w-full flex justify-between items-center space-x-4">
            <Link href="/" className="text-lg font-bold">
              <Image
                src="/assets/logo-atph.png"
                alt="Logo"
                width={isScrolled ? 70 : 50}
                height={isScrolled ? 70 : 50}
                priority
                className="transition-all duration-300 ease-in-out"
              />
            </Link>
            <ul className="space-x-6 hidden lg:flex">
              {HEADER_NAV_INFORMATION.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-[#8b0000] hover:text-[#cca21c] font-mulish uppercase transition-all duration-200 hover:underline underline-offset-4 text-sm lg:text-base"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default HeaderNav;
