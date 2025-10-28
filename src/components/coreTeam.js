"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import coreTeam from "@/data/coreTeam";

gsap.registerPlugin(ScrollTrigger);

export default function CoreTeam() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) return; // skip GSAP on mobile

    const section = sectionRef.current;
    const cards = gsap.utils.toArray(".team-card");

    gsap.set(section, { height: window.innerHeight });

    cards.forEach((card, i) => {
      gsap.set(card, { yPercent: i === 0 ? 0 : 100 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${(cards.length - 1) * window.innerHeight}`,
        onLeaveBack: () => {
          cards.forEach((card, i) => {
            gsap.set(card, { yPercent: i === 0 ? 0 : 100, scale: 1 });
          });
        },
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    cards.forEach((card, i) => {
      tl.to(card, { scale: 0.9, borderRadius: "1.5rem" });
      const next = cards[i + 1];
      if (next) {
        tl.to(next, { yPercent: 0 }, "<");
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center md:flex-row items-center md:justify-between px-6 md:px-16 h-auto md:h-screen text-[#EBEEFF] font-sans overflow-hidden"
    >
      {/* Header */}
      <div className="w-full md:w-1/2 font-nasa text-3xl sm:text-4xl md:text-5xl flex flex-col items-center justify-center text-center mb-10 md:mb-0">
        <h1 className="mb-2">AstroTech</h1>
        <h1>Core Team Members</h1>
      </div>

      {/* Desktop Scroll Stack */}
      {!isMobile && (
        <div className="relative w-full md:w-1/2 flex items-center justify-center gap-2 h-screen overflow-hidden">
          {coreTeam.map((member, i) => (
            <div
              key={i}
              className="team-card absolute inset-0 flex flex-col items-center justify-center h-full"
            >
              <div className="w-[90%] sm:w-4/5 md:w-full py-6 px-6 sm:px-10 flex flex-col items-center bg-[#2F456F] rounded-4xl shadow-2xl overflow-hidden transform transition-all duration-300">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-2xl">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center font-nasa text-[#EBEEFF] px-4 py-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    {member.name}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Mobile Slider with Equal Card Size */}
      {isMobile && (
        <motion.div
          className="flex overflow-x-auto w-full gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
          whileTap={{ cursor: "grabbing" }}
        >
          {coreTeam.map((member, i) => (
            <motion.div
              key={i}
              className="min-w-[85%]  flex-shrink-0 snap-center bg-[#2F456F] rounded-4xl py-6 px-4 flex flex-col items-center  gap-2"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] overflow-hidden rounded-2xl">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center font-nasa text-[#EBEEFF] px-2">
                <h2 className="text-xl font-bold mb-2 w-[200px]">{member.name}</h2>
                <p className="text-lg">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
