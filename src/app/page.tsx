import AboutSection from "@/components/aboutSection";
import Footer from "@/components/footer";
import HeaderNav from "@/components/headerNav";
import HeroSection from "@/components/heroSection";
import BlogSection from "@/components/blogSection";
import ServicesSection from "@/components/servicesSection";
import SocialsSection from "@/components/socialsSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeaderNav />
      <main className="w-full">
        <HeroSection />
        <ServicesSection />
        <BlogSection />
        <SocialsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
