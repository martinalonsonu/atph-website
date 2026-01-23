import React from "react";
import Footer from "../shared/structured/footer";
import ContactSection from "./components/ContactSection";
import HeaderNav from "../shared/structured/headerNav";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col bg-[#fff8f5]">
      <HeaderNav />
      <main className="w-full">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
