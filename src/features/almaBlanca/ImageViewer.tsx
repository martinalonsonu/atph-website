"use client";

import Image from "next/image";

interface ImageViewerProps {
  image: {
    id: number;
    src: string;
    title: string;
    description: string;
  };
  onClose: () => void;
}

export default function ImageViewer({ image, onClose }: ImageViewerProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-[#d4af37] transition-colors z-10"
      >
        ✕
      </button>

      <div
        className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-2xl w-full animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen */}
        <div className="relative w-full aspect-square overflow-hidden bg-white">
          <Image
            src={image.src}
            alt={image.title}
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Información */}
        <div className="p-6 md:p-8">
          <div className="border-l-4 border-[#d4af37] pl-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-black mb-2">
              {image.title}
            </h2>
            <div className="w-12 h-1 bg-[#d4af37] rounded-full" />
          </div>

          <p className="text-base md:text-lg font-mulish text-[#555] leading-relaxed mb-6">
            {image.description}
          </p>

          <div className="bg-[#f5f5f5] p-4 rounded-lg border border-[#e0e0e0]">
            <p className="text-xs font-mulish text-[#999]">
              Esta obra es parte de nuestra colección exclusiva de bordaduría
              religiosa.
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full px-6 py-3 bg-[#d4af37] text-black font-cinzel font-bold rounded-lg hover:bg-black hover:text-[#d4af37] transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
