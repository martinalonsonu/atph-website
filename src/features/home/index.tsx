import AboutSection from "./sections/AboutSection";
import Footer from "../shared/footer";
import HeaderNav from "../shared/headerNav";
import HeroSection from "./sections/HeroSection";
import BlogSection from "./sections/BlogSection";
import ServicesSection from "./sections/ServicesSection";
import SocialsSection from "./sections/SocialsSection";

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
      </main>
      <Footer />
    </div>
  );
}
