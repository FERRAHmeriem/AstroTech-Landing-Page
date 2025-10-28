"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Planet from "./planet"
import { useRouter } from "next/navigation"

export default function OldestEvents() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-center space-y-8 px-4 sm:px-6 md:px-8">
      {/* Title Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-2 border-t-2 border-[#EBEEFF] px-4 py-4 text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
      >
        <h1 className="font-nasa text-3xl sm:text-4xl md:text-5xl uppercase text-[#EBEEFF]">
          older events
        </h1>
        <p className="font-nasa text-lg sm:text-xl md:text-2xl text-[#EBEEFF]">
          journeys through the cosmos
        </p>
      </motion.div>

      {/* Events Cards */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-6 mb-6">
        {/* Card 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="p-4 border-8 sm:border-12 border-[#2F456F] rounded-3xl sm:rounded-4xl text-center w-full sm:w-[300px]"
        >
          <div className="relative w-full h-[220px] sm:h-[300px] mb-4">
            <Image
              src="/astrocamp.svg"
              alt="Astro Camp"
              fill
              className="object-cover rounded-3xl sm:rounded-4xl"
            />
          </div>
          <h1 className="font-nasa text-2xl sm:text-3xl uppercase text-[#EBEEFF]">Astro Camp</h1>
          <p className="font-tommyMed text-lg sm:text-xl text-[#EBEEFF] mb-6">February 2024</p>
          <button
            onClick={() => router.push("/event/astro_camp")}
            className="py-2 px-4 rounded-2xl font-nasa text-lg sm:text-2xl text-[#EBEEFF] border-2 border-[#EBEEFF] hover:bg-[#EBEEFF] hover:text-black cursor-pointer transition"
          >
            learn more
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="p-4 border-8 sm:border-12 border-[#2F456F] rounded-3xl sm:rounded-4xl text-center w-full sm:w-[300px]"
        >
          <div className="relative w-full h-[220px] sm:h-[300px] mb-4">
            <Image
              src="/starryVerse.svg"
              alt="StarryVerse"
              fill
              className="object-cover rounded-3xl sm:rounded-4xl"
            />
          </div>
          <h1 className="font-nasa text-2xl sm:text-3xl uppercase text-[#EBEEFF]">StarryVerse</h1>
          <p className="font-tommyMed text-lg sm:text-xl text-[#EBEEFF] mb-6">March 2024</p>
          <button
            onClick={() => router.push("/event/starry_verse")}
            className="py-2 px-4 rounded-2xl font-nasa text-lg sm:text-2xl text-[#EBEEFF] border-2 border-[#EBEEFF] hover:bg-[#EBEEFF] hover:text-black cursor-pointer transition"
          >
            learn more
          </button>
        </motion.div>
      </div>

      {/* Planet Decoration */}
      <div className="hidden md:block absolute top-[-50px] left-[-50px]">
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
