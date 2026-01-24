import HeaderNav from "@/features/shared/structured/headerNav";
import React from "react";
import Footer from "../shared/structured/footer";
import HeroSection from "./sections/HeroSection";
import HistorySection from "./sections/HistorySection";
import FoundationSection from "./sections/FoundationSection";
import EssenceSection from "./sections/EssenceSection";
import TeamSection from "./sections/TeamSection";
import PresentSection from "./sections/PresentSection";
import FounderMemorialSection from "./sections/FounderMemorial";

const AboutPageIndex = () => {
  return (
    <div className="w-full flex flex-col bg-[#fff8f5]">
      <HeaderNav />
      <main className="w-full">
        <HeroSection />
        <HistorySection />
        <FoundationSection />
        <FounderMemorialSection />
        <EssenceSection />
        <TeamSection />
        <PresentSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPageIndex;
