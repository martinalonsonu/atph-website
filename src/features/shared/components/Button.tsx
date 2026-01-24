import Link from "next/link";

const Button = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="inline-block bg-[#8b0000] text-white px-6 py-3 text-base rounded-xl
                 hover:bg-amber-800 hover:scale-103 transition-all whitespace-nowrap"
    >
      {text}
    </Link>
  );
};

export default Button;
