import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
      {children}
    </div>
  );
};

export default Wrapper;
