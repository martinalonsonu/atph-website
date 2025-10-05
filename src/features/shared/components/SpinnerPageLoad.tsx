import Image from "next/image";
import React from "react";

const SpinnerPageLoad = () => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-[#fff8f5] spinner-content gap-5 flex flex-col justify-center items-center">
      <Image
        src="https://atphdev.wordpress.com/wp-content/uploads/2025/10/logo-atph.png"
        alt="Profile"
        width={100}
        height={100}
        loading="lazy"
      />
      <div className="spinner" />
    </div>
  );
};

export default SpinnerPageLoad;
