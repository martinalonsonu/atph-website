import HeaderNav from "@/features/shared/structured/headerNav";
import Footer from "@/features/shared/structured/footer";
import AlmaBlancaIndex from "@/features/almaBlanca";

export default function AlmaBlancaPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <HeaderNav />
      <main className="w-full">
        <AlmaBlancaIndex />
      </main>
      <Footer />
    </div>
  );
}
