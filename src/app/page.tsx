import Image from "next/image";
import Wrapper from "@/components/wrapper";
import Scroller from "@/components/scroller";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <main className="w-full">
        <Scroller />
      </main>
    </div>
  );
}
