"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import Planet from "./planet"

export default function HeroSection() {
    const [screenSize, setScreenSize] = useState({ width: 1920, height: 1080 });
    useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const planetSize = Math.max(screenSize.width * 0.4 , screenSize.height * 0.4);
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Planet width={planetSize} height={planetSize} imageUrl="/earth.svg" />
      </div>

      <motion.div
        className="z-10 text-[#EFF5FA] py-6 border-y-2 border-[#EFF5FA] font-nasa text-center translate-y-24"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:7xl font-bold">
          WELCOME TO ASTROTECH
        </h1>
        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
          Where <span className="text-[#3b5482]">Tech</span> and{" "}
          <span className="text-[#365183]">astronomy</span> meet
        </p>
      </motion.div>
    </div>
  )
}
