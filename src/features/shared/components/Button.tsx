import Link from "next/link";
import React from "react";

const Button = ({ href, text }: { href: string; text: string }) => {
  return (
    <button
      type="button"
      className="bg-[#8b0000] text-white px-6 py-3 text-base rounded-xl hover:bg-amber-800 hover:scale-103 transition-all whitespace-nowrap"
    >
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default Button;
