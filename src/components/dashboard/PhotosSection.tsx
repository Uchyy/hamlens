import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import harbourImg from "@/assets/photos/portsmouth-harbour.jpg";
import dockyardImg from "@/assets/photos/portsmouth-dockyard.jpg";
import southseaImg from "@/assets/photos/portsmouth-southsea.jpg";
import gunwharfImg from "@/assets/photos/portsmouth-gunwharf.jpg";

const photos = [
  { src: harbourImg, alt: "Portsmouth Harbour and Spinnaker Tower", caption: "Portsmouth Harbour" },
  { src: dockyardImg, alt: "HMS Victory at Portsmouth Historic Dockyard", caption: "Historic Dockyard" },
  { src: southseaImg, alt: "Southsea seafront promenade", caption: "Southsea Seafront" },
  { src: gunwharfImg, alt: "Gunwharf Quays waterfront shopping", caption: "Gunwharf Quays" },
  { src: harbourImg, alt: "Portsmouth Harbour evening view", caption: "Harbour at Dusk" },
  { src: dockyardImg, alt: "Historic Dockyard panorama", caption: "Dockyard Panorama" },
  { src: southseaImg, alt: "Southsea beach sunset", caption: "Southsea Beach" },
  { src: gunwharfImg, alt: "Gunwharf Quays at night", caption: "Gunwharf by Night" },
];

const PhotosSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [emblaApi, autoScroll]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Camera className="h-5 w-5 text-accent" />
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Photos</h2>
      </div>

      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {photos.map((photo) => (
            <div
              key={photo.caption}
              className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/4 pl-3 first:pl-0"
            >
              <div
                className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-xs sm:text-sm font-body font-medium text-white drop-shadow-md">
                    {photo.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PhotosSection;
