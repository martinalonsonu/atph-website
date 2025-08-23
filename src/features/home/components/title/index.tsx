import React from "react";
import clsx from "clsx";

interface TitleProps {
  type: "primary" | "secondary" | "tertiary";
  title: string;
  subtitle?: string;
}

const Title = (props: TitleProps) => {
  const { type, title, subtitle } = props;

  return (
    <React.Fragment>
      {type === "primary" && subtitle && (
        <p className="font-work uppercase text-base sm:text-xl font-bold text-[#cca21c]">
          {subtitle}
        </p>
      )}
      <h3
        className={clsx(
          "font-cinzel font-bold text-[#8b0000]",
          type === "primary" && "text-2xl sm:text-4xl lg:text-6xl uppercase",
          type === "secondary" && "text-xl lg:text-3xl uppercase",
          type === "tertiary" && "text-xl font-cinzel"
        )}
      >
        {title}
      </h3>
    </React.Fragment>
  );
};

export default Title;
