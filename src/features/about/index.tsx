import HeaderNav from "@/features/shared/structured/headerNav";
import React from "react";
import Footer from "../shared/structured/footer";
import HeroSection from "./sections/HeroSection";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col bg-[#fff8f5]">
      <HeaderNav />
      <main className="w-full">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
