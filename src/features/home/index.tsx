import AboutSection from "./sections/AboutSection";
import Footer from "../shared/structured/footer";
import HeaderNav from "../shared/structured/headerNav";
import HeroSection from "./sections/HeroSection";
import BlogSection from "./sections/BlogSection";
import ServicesSection from "./sections/ServicesSection";
import SocialsSection from "./sections/SocialsSection";
import ArrowButton from "../shared/components/ArrowButton";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeaderNav />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <SocialsSection />
        <ArrowButton />
      </main>
      <Footer />
    </div>
  );
}
