import React from "react";

const useScroll = ({ height }: { height: number }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);
  return { isScrolled };
};

export default useScroll;
