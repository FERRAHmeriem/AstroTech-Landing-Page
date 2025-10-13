"use client";

import { useState, useEffect } from "react";
import Planet from "./planet";
import { motion } from "framer-motion";

/**
 * JoinUs Component
 * 
 * Main landing page component for the AstroTech joining survey.
 * Features responsive planet decorations, centered content, countdown timer, and CTA button.
 * 
 * @component
 * 
 * @features
 * - Responsive planet sizes that scale with screen dimensions
 * - Space-themed background with animated planets
 * - Moon planet positioned at middle-left
 * - Jupiter planet positioned at bottom-right
 * - Centered content with heading, description, countdown, and action button
 * - Custom fonts: Nasalization for headings, MADE TOMMY for body text
 * - Gradient text effects and hover transitions
 * 
 * @responsive
 * - Moon size: 15% of screen width or 18% of screen height (whichever is smaller)
 * - Jupiter size: 25% of screen width or 25% of screen height (whichever is smaller)
 * - Updates dynamically on window resize
 * 
 * @example
 * // Basic usage in page
 * <JoinUs />
 */
export default function JoinUs() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate planet sizes based on screen dimensions
  console.log ('screen size is ' , screenSize)
  const moonSize = Math.min(screenSize.width * 0.15, screenSize.height * 0.18); // 30% of width, max 250px
  const jupiterSize = Math.min(screenSize.width * 0.25, screenSize.height * 0.25); // 30% of width, max 400px

  return (
    <div 
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/space.svg')" }}
    >
      {/* Background with animated stars */}
      {/* <Background /> */}
      
      {/* Moon planet - middle left */}
    <div className="absolute left-10 top-2/5 -translate-y-1/2 -translate-x-24 z-20">
       <Planet 
       imageUrl="/moon.svg"
       width={moonSize}
       height={moonSize}
       lightningColor="192, 192, 192"
       /> 
      </div>

      {/* Jupiter planet - bottom right */}
      <div className="absolute bottom-28 right-24 translate-x-32 translate-y-20 z-20">
       <Planet
       imageUrl="/jupyter.svg"
       width={jupiterSize}
       height={jupiterSize}
       lightningColor="255, 140, 66"
       /> 
      </div>
      {/* Content */}
      {/* adjust the element gap by editing the gap-y property */}
      <div className="relative z-30 flex flex-col justify-center min-h-screen gap-y-6 min-w-full">
        {/* adjust the text margin by editing the ml property */}
        <motion.div 
          className="md:ml-20 ml-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-white text-6xl font-nasalization w-fit py-3 ">
            Join us
          </h1>
          
          <hr className="border-t-2 border-white md:w-1/2  lg:border-t-4 w-full" />
          
          <div className="py-3">
            <p className="text-white text-xl font-tommy-med md:max-w-2xl sm:w-1/2">
              The joining survey is open right now for a{" "}
              <span className="bg-gradient-to-r from-[#8DC1FC] to-[#2F456F] bg-clip-text text-transparent font-tommy-med">
                limited time!
              </span>
            </p>
            
            <p className="text-white text-xl font-tommy-med ">
              Become an Astro-Technician now!
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col gap-2 mt-8 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-white text-3xl font-nasalization ">
            1 day 2 hours 25 minutes
          </h2>
          <h2 className="text-white text-3xl font-nasalization">
            left
          </h2>
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <button className="text-white text-3xl font-nasalization border-4 border-white px-8 p-3 rounded-xl hover:bg-white hover:text-black transition-colors mt-6 w-fit cursor-pointer">
            Join us now!
          </button>
        </motion.div>
      </div>
    </div>
  );
}
