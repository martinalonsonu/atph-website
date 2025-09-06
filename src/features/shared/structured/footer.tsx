import React from "react";
import Wrapper from "../layout/wrapper";

const Footer = () => {
  return (
    <footer className="w-full bg-[#8b0000]">
      <Wrapper>
        <div className="w-full h-20 flex items-center justify-center text-white flex-col">
          <p className="text-[11px] lg:text-sm ml-4 lg:ml-0 font-mulish">
            © {new Date().getFullYear()} A Tus Pies Humilde - Todos los derechos
            reservados.
          </p>
          <p className="font-mulish text-white text-[9px] mt-2">
            Hecho con ❤️ por @martinalonsonu
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
