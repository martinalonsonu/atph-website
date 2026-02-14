"use client";

import { useState } from "react";
import Image from "next/image";
import Wrapper from "@/features/shared/layout/wrapper";
import GalleryGrid from "./GalleryGrid";
import ContactSection from "./ContactSection";
import ImageViewer from "./ImageViewer";

interface imageGallery {
  id: number;
  src: string;
  title: string;
  description: string;
}

export default function AlmaBlancaIndex() {
  const [selectedImage, setSelectedImage] = useState<imageGallery | null>(null);

  const galleryImages: imageGallery[] = [
    {
      id: 1,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-11.50.29-pm.jpeg",
      title: "Traje Señor Cautivo de Trinitarias",
      description:
        "✨ Túnica en terciopelo azul noche ✨ Realizada con devoción para Nuestro Padre Jesús Nazareno Cautivo de Trinitarias. Confeccionada en terciopelo azul noche y bordada a mano en hilos dorados, lleva en el frontal a San Juan Bautista de la Concepción.",
    },
    {
      id: 2,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-11.44.52-pm-1.jpeg",
      title: "Estandarte Bordado",
      description:
        "Estandarte bordado a mano sobre terciopelo negro. Enmarcan la imagen de Cristo los símbolos de la Pasión —clavos, corona de espinas y cruz con la escalera—, que evocan su sacrificio redentor y el amor que nace de la Cruz. ✨🙏🏼",
    },
    {
      id: 3,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-14-at-12.20.08-am.jpeg",
      title: "Banda y Banderín Bordados",
      description:
        "Banda y banderín bordados a mano. La banda ostenta el monograma JHS, signo del Santo Nombre de Jesús; el banderín presenta el Sagrado Corazón, expresión de su amor redentor. ✨🙏🏼",
    },
    {
      id: 4,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-11.47.18-pm.jpeg",
      title: "Corazón de Jesús Bordado",
      description:
        "Obra bordada a mano del Sagrado Corazón. Símbolo de entrega y compasión, nos recuerda que en el corazón de Cristo habita el consuelo y la salvación. ❤️✨",
    },
    {
      id: 5,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-11.44.53-pm.jpeg",
      title: "Traje Virgen del Carmen",
      description:
        "Vestido, escapulario y capa bordados para la Virgen del Carmen. El escudo carmelita y la inscripción Mater Dei proclaman a María como Madre de Dios, guía segura y amparo de quienes buscan su intercesión. ✨🙏🏼",
    },
    {
      id: 6,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-11.45.51-pm.jpeg",
      title: "Sudario Bordado",
      description:
        "Sudario negro bordado a mano para el Cristo Yacente. En el centro, el Calvario con las tres cruces evoca el misterio de la Pasión, muerte y amor redentor. ✨🙏🏼",
    },
    {
      id: 7,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-11.45.16-pm.jpeg",
      title: "Traje Santa Cecilia",
      description:
        "Vestido y capa bordados en terciopelo color melón para Santa Cecilia. Las figuras musicales evocan su patronazgo, recordándonos que la música es oración, alabanza y camino hacia Dios. 🎶🙏🏼",
    },
    {
      id: 8,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-11.46.12-pm.jpeg",
      title: "Traje Señor de la Ascensión",
      description:
        "Túnica bordada en tela brocada blanca. La custodia resplandece como expresión de devoción al Santísimo, acompañada de mantilla color conchevino, detalle de distinción y reverencia. 🙏🏼✨",
    },
    {
      id: 9,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-11.44.52-pm.jpeg",
      title: "Traje Señor de Humildad y Paciencia",
      description:
        "Túnica bordada en tono morado, signo de penitencia y esperanza. El Cordero simboliza a Cristo, pureza y entrega redentora. 💜🐑",
    },
    {
      id: 10,
      src: "https://atphdev.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-11.42.13-pm-1.jpeg",
      title: "Sudario Púrpura",
      description:
        "Sudario de terciopelo púrpura, bordado a mano con devoción, que expresa fe y gratitud. Representa los Tres Corazones Sagrados —Jesús, María y San José— y se inspira en Isaías 53:5: “Por sus heridas fuimos sanados”, recordando que en el sacrificio de Cristo hallamos consuelo y salvación.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#000] to-[#1a1a1a] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4af37] rounded-full blur-3xl" />
        </div>

        <Wrapper>
          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-20 md:w-28 bg-white rounded-full p-2">
                <Image
                  src="https://atphdev.wordpress.com/wp-content/uploads/2026/02/diseno-sin-titulo-3.png"
                  alt="Alma Blanca Logo"
                  width={112}
                  height={112}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
              Alma Blanca
            </h1>
            <p className="text-xl md:text-2xl text-[#d4af37] font-cinzel mb-6">
              Bordaduría Religiosa de Alta Calidad
            </p>
            <p className="text-base md:text-lg font-mulish opacity-90 max-w-3xl mx-auto">
              Cada puntada es una plegaria, cada diseño es devoción.
              Confeccionamos vestiduras y ornamentos religiosos con maestría, fe
              y respeto por la tradición.
            </p>
          </div>
        </Wrapper>
      </section>

      {/* Galería */}
      <section className="w-full py-16 md:py-24 bg-white">
        <Wrapper>
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#d4af37] uppercase mb-3">
              Galería
            </p>
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-black mb-4">
              Nuestro Trabajo
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#000] to-[#d4af37] rounded-full mb-4" />
            <p className="text-sm md:text-base font-mulish text-[#666]">
              Haz click en cualquier imagen para ver más detalles
            </p>
          </div>

          <GalleryGrid images={galleryImages} onImageClick={setSelectedImage} />
        </Wrapper>
      </section>

      {/* Sección de Información */}
      <section className="w-full bg-[#f5f5f5] py-16 md:py-24">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-cinzel font-bold text-black mb-2">
                Hecho a Mano
              </h3>
              <p className="text-sm font-mulish text-[#555]">
                Cada pieza es confeccionada artesanalmente con pasión y
                dedicación.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-cinzel font-bold text-black mb-2">
                Diseños Personalizados
              </h3>
              <p className="text-sm font-mulish text-[#555]">
                Creamos diseños únicos según tus necesidades y especificaciones.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⛪</div>
              <h3 className="text-xl font-cinzel font-bold text-black mb-2">
                Inspiración Religiosa
              </h3>
              <p className="text-sm font-mulish text-[#555]">
                Todos nuestros trabajos reflejan devoción y respeto por lo
                divino.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Contacto */}
      <ContactSection />

      {/* Image Viewer Modal */}
      {selectedImage && (
        <ImageViewer
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
