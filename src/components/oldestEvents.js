"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Planet from "./planet"

export default function OldestEvents() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="relative flex flex-col items-center justify-center space-y-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-2 border-t-2 border-[#EBEEFF] px-8 py-4 text-center w-1/2"
      >
        <h1 className="font-nasa text-5xl uppercase text-[#EBEEFF]">older events</h1>
        <p className="font-nasa text-2xl text-[#EBEEFF]">journeys through the cosmos</p>
      </motion.div>
      <div className="flex items-center justify-center gap-6 mb-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="p-4 border-12 border-[#2F456F] rounded-4xl text-center"
        >
          <div className="relative w-[300px] h-[300px] mb-4">
            <Image
              src="/astrocamp.png"
              alt="Astro Camp"
              fill
              className="object-cover rounded-4xl"
            />
          </div>
          <h1 className="font-nasa text-3xl uppercase text-[#EBEEFF]">Astro Camp</h1>
          <p className="font-tommyMed text-xl text-[#EBEEFF] mb-6">February 2024</p>
          <button className="py-2 px-4 rounded-2xl font-nasa text-2xl text-[#EBEEFF] border-2 border-[#EBEEFF] hover:bg-[#EBEEFF] hover:text-black cursor-pointer transition">
            learn more
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="p-4 border-12 border-[#2F456F] rounded-4xl text-center"
        >
          <div className="relative w-[300px] h-[300px] mb-4">
            <Image
              src="/starryVerse.png"
              alt="StarryVerse"
              fill
              className="object-cover rounded-4xl"
            />
          </div>
          <h1 className="font-nasa text-3xl uppercase text-[#EBEEFF]">StarryVerse</h1>
          <p className="font-tommyMed text-xl text-[#EBEEFF] mb-6">March 2024</p>
          <button className="py-2 px-4 rounded-2xl font-nasa text-2xl text-[#EBEEFF] border-2 border-[#EBEEFF] hover:bg-[#EBEEFF] hover:text-black cursor-pointer transition">
            learn more
          </button>
        </motion.div>
      </div>

      <div className="absolute top-[-50px] left-[-50px]">
        <Planet
          width="150px"
          height="150px"
          imageUrl="/sun.svg"
          shadowColor="rgba(255,220,150,0.5)"
        />
      </div>
    </div>
  )
}
