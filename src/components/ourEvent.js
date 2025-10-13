"use client";
import Planet from "./planet";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function OurEvent() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate planet sizes based on screen dimensions
  console.log("screen size is ", screenSize);
  const moonSize = Math.min(screenSize.width * 0.15, screenSize.height * 0.18);
  const jupiterSize = Math.min(
    screenSize.width * 0.25,
    screenSize.height * 0.25
  );

  return (
    <div className="relative grid grid-rows-6 grid-cols-2 px-7 py-7 gap-x-3 gap-y-4 justify-center items-center min-h-screen bg-[url(/space.svg)]">
      <div className="absolute left-10 top-1/5 -translate-y-1/2 -translate-x-24 z-10">
        <Planet
          imageUrl="/jupyter.svg"
          width={moonSize}
          height={moonSize}
          lightningColor="255, 140, 66"
        />
      </div>

      {/* Sun planet - bottom right */}
      <div className="absolute bottom-28 right-24 translate-x-32 translate-y-20 z-10">
        <Planet
          imageUrl="/sun.svg"
          width={jupiterSize}
          height={jupiterSize}
          lightningColor="255, 223, 0"
        />
      </div>

      {/* Header - slides from top */}
      <motion.div
        className="h-32 items-stretch grid justify-items-start rounded-xl z-30 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl text-white font-nasalization self-end w-full mt-20">
          Our Event
        </h1>
        <hr className="border-t-4 border-white w-full self-end" />
      </motion.div>

      {/* Image 1 - slides from right */}
      <motion.div
        className="row-span-2 h-[300px] rounded-xl overflow-hidden z-30 relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <img src="/akef.svg" className="w-full h-full object-cover" />
      </motion.div>

      {/* Image 2 - slides from left */}
      <motion.div
        className="row-span-2 h-[300px] rounded-xl overflow-hidden z-30 relative"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <img src="/IMG_0350.svg" className="w-full h-full object-cover" />
      </motion.div>

      {/* Image 3 - slides from right */}
      <motion.div
        className="row-span-2 h-[300px] rounded-xl overflow-hidden z-30 relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <img src="/IMG_4240.svg" className="w-full h-full object-cover" />
      </motion.div>

      {/* Image 4 - slides from left */}
      <motion.div
        className="row-span-2 h-[300px] rounded-xl overflow-hidden z-30 relative"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <img src="/IMG_3774.svg" className="w-full h-full object-cover" />
      </motion.div>

      {/* Button - slides from right */}
      <motion.div
        className="rounded-xl justify-items-end items-center grid z-30 relative"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <button className="text-white text-3xl font-nasalization border-4 border-white px-8 p-3 rounded-xl hover:bg-white hover:text-black transition-colors mt-18 w-fit cursor-pointer">
          Visit our events
        </button>
      </motion.div>
    </div>
  );
}
