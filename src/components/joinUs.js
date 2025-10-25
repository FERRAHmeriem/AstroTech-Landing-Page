"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Planet from "./planet";
import { useRouter } from "next/navigation";

export default function JoinUs() {
  const targetDate = new Date("2025-10-26T23:59:59").getTime();
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="py-12 px-2 sm:py-12 sm:px-2 md:p-16 h-fit overflow-hidden relative">
      <div className="z-50 text-[#EBEEFF] font-nasa flex flex-col items-center justify-center gap-6">
        <div className="w-full flex flex-col items-start text-center sm:text-left">
          <h1 className="text-5xl md:text-6xl py-2 mb-4 w-full sm:w-[500px] border-b-2 border-[#EBEEFF]">
            Join us !
          </h1>
          <p className="font-tommyMed text-lg sm:text-2xl md:text-3xl">
            The joining survey is open right now for
            <span className="text-[#2F456F]"> a limited time! </span> <br className="hidden md:block" />
            Become an Astro-Technician now !
          </p>
        </div>

        <div className="w-full sm:w-2/3 md:w-1/2 flex flex-col items-center">
          {/* ✨ Timer attractif sur mobile */}
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl py-2 my-8 text-center font-nasa"
            animate={{ 
              scale: [1, 1.1, 1], 
              textShadow: [
                "0 0 10px rgba(255,255,255,0.4)",
                "0 0 20px rgba(173,216,255,0.8)",
                "0 0 10px rgba(255,255,255,0.4)"
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes left
          </motion.h1>

          <button
            onClick={() => router.push("https://tripetto.app/run/V7GC5XAF65")}
            className="py-2 px-4 rounded-2xl font-nasa text-2xl sm:text-3xl md:text-4xl text-[#EBEEFF] border-2 border-[#EBEEFF] hover:bg-[#EBEEFF] hover:text-black cursor-pointer transition"
          >
            Join us now!
          </button>
        </div>
      </div>

      {/* ✅ Planètes visibles uniquement sur desktop */}
      <div className="absolute top-1/2 left-0 scale-90 pl-6 hidden lg:block">
        <Planet
          width="450px"
          height="450px"
          imageUrl="/moon.svg"
          shadowColor="#717171"
        />
      </div>

      <div className="absolute top-[80px] right-[50px] pr-6 hidden lg:flex">
        <Planet
          width="250px"
          height="250px"
          imageUrl="/jupyter.svg"
          shadowColor="rgba(255,220,150,0.5)"
        />
      </div>
    </div>
  );
}
