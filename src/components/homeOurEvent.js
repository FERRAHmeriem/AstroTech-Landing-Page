"use client";
import Planet from "./planet";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeOurEvent() {
  const [screenSize, setScreenSize] = useState({ width: 1920, height: 1080 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({ width, height: window.innerHeight });
      setIsMobile(width < 1024); // tablette & mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const moonSize = Math.min(screenSize.width * 0.2, screenSize.height * 0.28);

  // Gestion du slider mobile
  const handleScroll = (e) => {
    const scrollX = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };

  const images = ["/i1.svg", "/i2.svg", "/i3.svg", "/i4.svg"];

  return (
    <div className="relative grid grid-rows-2 md:grid-rows-5 grid-cols-2 md:px-7 pl-1 pr-0 gap-x-3 gap-y-4 justify-center items-center h-fit overflow-hidden">
      {/* Planet */}
      <div className="absolute left-10 top-1/5 -translate-y-1/2 -translate-x-24 z-10">
        <Planet
          imageUrl="/jupyter.svg"
          width={moonSize}
          height={moonSize}
          shadowColor="rgba(255,220,150,0.5)"
        />
      </div>

      {/* Title */}
      <motion.div
        className="h-32 items-stretch grid justify-items-start rounded-xl z-30 relative col-span-2 lg:col-span-1 pr-1 sm:pr-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl text-white font-nasa self-end w-full mb-2 mt-20 text-center lg:text-left">
          Our Event
        </h1>
        <hr className="border-t-4 border-white w-full self-end" />
      </motion.div>

      {/* Desktop images */}
      {!isMobile &&
        images.map((src, i) => (
          <motion.div
            key={src}
            className="row-span-2 overflow-hidden z-30 relative"
            style={{ width: "671px", height: "440px" }}
            initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2 * (i + 1),
            }}
          >
            <Image
              src={src}
              alt={`Gallery Image ${i + 1}`}
              width={671}
              height={440}
              className="object-cover"
            />
          </motion.div>
        ))}

      {/* Mobile / tablet slider */}
      {isMobile && (
        <div className="col-span-2 w-full flex flex-col items-center z-30">
          {/* Slider */}
          <div
            className="w-full overflow-x-auto flex gap-4 px-2 snap-x snap-mandatory scrollbar-hide z-30 scroll-smooth"
            onScroll={handleScroll}
          >
            {images.map((src, i) => (
              <motion.div
                key={src}
                className="flex-shrink-0 snap-center rounded-xl overflow-hidden relative"
                style={{
                  minWidth: "75%",
                  height: "260px",
                  scrollSnapAlign: "center",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 * (i + 1),
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
                  width={665}
                  height={440}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-white scale-125" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* Button */}
      <motion.div
        className="rounded-xl justify-center items-center grid z-30 relative col-span-2 lg:col-span-1"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <button
          onClick={() => router.push("/our_events")}
          className="py-2 px-4 rounded-2xl font-nasa text-2xl md:text-4xl text-[#EBEEFF] border-2 border-[#EBEEFF] hover:bg-[#EBEEFF] hover:text-black cursor-pointer transition"
        >
          Visit our events
        </button>
      </motion.div>
    </div>
  );
}
