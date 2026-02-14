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
import TodaySection from "./sections/TodaySection";

const AboutPageIndex = () => {
  return (
    <div className="w-full flex flex-col bg-[#fff8f5]">
      <HeaderNav />
      <main className="w-full">
        <HeroSection />
        {/* Timeline Section */}
        <section className="w-full bg-gradient-to-b from-[#fefefe] to-[#fff8f5] relative">
          {/* Mobile timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8b0000]/30 via-[#cca21c]/30 to-[#8b0000]/30 md:hidden" />

          <div className="md:relative">
            {/* History */}
            <HistorySection />
            {/* Foundation */}
            <FoundationSection />
            {/* Today */}
            <TodaySection />
            {/* Memorial */}
            <FounderMemorialSection />
          </div>
        </section>
        <EssenceSection />
        <TeamSection />
        <PresentSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPageIndex;
