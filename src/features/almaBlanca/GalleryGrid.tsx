import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export default function GalleryGrid({
  images,
  onImageClick,
}: GalleryGridProps) {
  const getImageLayout = (index: number) => {
    const layouts: { [key: number]: { col: string; row: string } } = {
      0: { col: "col-span-2", row: "row-span-2" },
      1: { col: "col-span-1", row: "row-span-1" },
      2: { col: "col-span-1", row: "row-span-1" },
      3: { col: "col-span-1", row: "row-span-1" },
      4: { col: "col-span-1", row: "row-span-2" },
      5: { col: "col-span-1", row: "row-span-1" },
      6: { col: "col-span-2", row: "row-span-1" },
      7: { col: "col-span-1", row: "row-span-1" },
      8: { col: "col-span-1", row: "row-span-1" },
      9: { col: "col-span-2", row: "row-span-1" },
    };
    return layouts[index] || { col: "col-span-1", row: "row-span-1" };
  };

  return (
    <>
      {/* Desktop - Mosaico */}
      <div className="hidden md:grid grid-cols-4 auto-rows-[200px] gap-0">
        {images.map((image, index) => {
          const layout = getImageLayout(index);

          return (
            <button
              key={image.id}
              onClick={() => onImageClick(image)}
              className={`group relative overflow-hidden cursor-pointer ${layout.col} ${layout.row}`}
            >
              {/* Imagen */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Información sobre la imagen */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-sm md:text-base font-cinzel font-bold text-white mb-1">
                  {image.title}
                </h3>
                <p className="text-xs font-mulish text-white/90 line-clamp-2">
                  {image.description}
                </p>
                <p className="text-xs text-[#d4af37] font-semibold mt-1">
                  Click para ver →
                </p>
              </div>

              {/* Borde dorado en hover */}
              <div className="absolute inset-0 border-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          );
        })}
      </div>

      {/* Mobile - Grid simple 2 columnas */}
      <div className="md:hidden grid grid-cols-2 gap-0 auto-rows-[150px]">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => onImageClick(image)}
            className="group relative overflow-hidden cursor-pointer"
          >
            {/* Imagen */}
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />

            {/* Información sobre la imagen */}
            <div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xs font-cinzel font-bold text-white">
                {image.title}
              </h3>
              <p className="text-[10px] text-[#d4af37] font-semibold">
                Click →
              </p>
            </div>

            {/* Borde dorado en hover */}
            <div className="absolute inset-0 border border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </>
  );
}
