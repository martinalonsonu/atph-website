"use client";

import React, { useEffect } from "react";
import Wrapper from "../layout/wrapper";
import { HEADER_NAV_INFORMATION } from "@/utils/models";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import useScroll from "@/hooks/useScroll";

const HeaderNav = () => {
  const [open, setOpen] = React.useState(false);
  const { isScrolled } = useScroll({ height: 80 });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
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
              <button
                type="button"
                className="lg:hidden mr-4"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
              >
                <svg
                  width={isScrolled ? 35 : 30}
                  height={isScrolled ? 35 : 30}
                  viewBox="0 0 24 24"
                  data-name="Flat Line"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon flat-line"
                >
                  <path
                    d="M3 12h18M9 18h12M3 6h12"
                    style={{
                      fill: "none",
                      stroke: "#000",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                    }}
                  />
                </svg>
              </button>
            </div>
          </nav>
        </Wrapper>
      </header>
      <>
        {/* Overlay */}
        <button
          aria-hidden
          onClick={() => setOpen(false)}
          className={clsx(
            "fixed inset-0 z-50 bg-black/40 transition-opacity duration-300",
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        />

        {/* Panel */}
        <aside
          className={clsx(
            "fixed inset-y-0 right-0 z-50 w-2/3 max-w-sm bg-white shadow-xl",
            "transform-gpu transition-transform duration-300 ease-in-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-4 flex justify-end">
            <button onClick={() => setOpen(false)}>
              <svg
                width={25}
                height={25}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001 0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943 9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z" />
                <path d="m13.537 12 3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001-3.855 3.855-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001 3.855 3.855-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001 3.855-3.855 3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col space-y-4 p-4">
            {HEADER_NAV_INFORMATION.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-[#8b0000] hover:text-[#cca21c] font-mulish uppercase transition-all duration-200 hover:underline underline-offset-4 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </>
    </>
  );
};

export default HeaderNav;
