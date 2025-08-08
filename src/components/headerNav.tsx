import React from "react";
import Wrapper from "./wrapper";
import { HEADER_NAV_INFORMATION } from "@/utils/models";
import Image from "next/image";
import Link from "next/link";

const HeaderNav = () => {
  return (
    <header className="bg-white">
      <Wrapper>
        <nav className="flex h-20 items-center">
          <div className="w-full flex justify-between items-center space-x-4">
            <Link href="/" className="text-lg font-bold">
              <Image
                src="/assets/logo-atph.png"
                alt="Logo"
                width={70}
                height={70}
                priority
              />
            </Link>
            <ul className="space-x-6 hidden lg:flex">
              {HEADER_NAV_INFORMATION.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-[#8b0000] hover:text-[#cca21c] font-work font-bold"
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
