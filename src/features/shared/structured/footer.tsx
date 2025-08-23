import React from "react";
import Wrapper from "../layout/wrapper";

const Footer = () => {
  return (
    <footer className="w-full bg-[#8b0000]">
      <Wrapper>
        <div className="w-full h-20 flex items-center justify-center text-white">
          <p className="text-[11px] lg:text-sm ml-4 lg:ml-0 font-mulish">
            © {new Date().getFullYear()} A Tus Pies Humilde - Todos los derechos
            reservados.
          </p>
        </div>
      </Wrapper>
      <div className="w-full h-5 flex items-center justify-center bg-black text-white text-[9px]">
        <p className="font-mulish">Hecho con ❤️ por @martinalonsonu</p>
      </div>
    </footer>
  );
};

export default Footer;
