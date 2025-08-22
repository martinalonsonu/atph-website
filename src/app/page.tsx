import Home from "@/features/home";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "A Tus Pies Humilde | Inicio",
  description:
    "Portal religioso católico y devocional | Transmisiones en vivo | Alfombras de Aserrín y Viruta teñida",
};
const Index = () => {
  return <Home />;
};

export default Index;
