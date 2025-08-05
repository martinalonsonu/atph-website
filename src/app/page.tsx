import HeaderNav from "@/components/headerNav";
import HeroSection from "@/components/heroSection";
import ServicesSection from "@/components/servicesSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeaderNav />
      <main className="w-full">
        <HeroSection />
        <ServicesSection />
      </main>
    </div>
  );
}
