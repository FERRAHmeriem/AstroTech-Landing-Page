"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Planet from "./planet"

export default function EventGallery({ event }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    // Ajout de overflow-x-hidden ici ⬇️
    <div className="relative flex flex-col items-center justify-center space-y-16 overflow-x-hidden pb-16">
      {/* Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="z-30 space-y-2 border-t-2 border-[#EBEEFF] md:px-8 py-4 text-center w-[85%] md:w-1/2"
      >
        <h1 className="font-nasa text-3xl lg:text-5xl uppercase text-[#EBEEFF]">Event Gallery</h1>
        <p className="font-nasa text-lg lg:text-2xl text-[#EBEEFF]">Explore the beauty of our event</p>
      </motion.div>

      {/* 🌌 Gallery 1 – images alternées */}
      {/* 🌌 Gallery 1 – images alternées / slider on mobile */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="
    flex flex-wrap justify-center gap-6 w-full px-4
    max-md:flex-nowrap max-md:overflow-x-auto max-md:space-x-4
    max-md:snap-x max-md:snap-mandatory
    scrollbar-hide relative
  "
>
  {event.galery1?.map((img, index) => (
    <motion.div
      key={index}
      className={`z-30 scale-105 relative overflow-hidden rounded-xl shadow-lg cursor-pointer w-60 h-64 transition-all duration-500 
        md:${index % 2 === 0 ? "translate-y-8" : "-translate-y-8"}
        flex-shrink-0 snap-center
      `}
    >
      <Image
        src={img}
        alt={`Gallery 1 image ${index + 1}`}
        fill
        className="object-cover"
      />
    </motion.div>
  ))}

  {/* 🔹 gradient hints to show it's scrollable */}
  <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#0a0a1a] to-transparent pointer-events-none md:hidden" />
  <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#0a0a1a] to-transparent pointer-events-none md:hidden" />
</motion.div>


      {/* 🧩 Gallery 2 – grille décalée */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="z-10 grid grid-cols-2 gap-6 w-full max-w-5xl mt-8 px-4 relative "
      >
        {event.galery2?.map((img, index) => (
          <motion.div
            key={index}
            className={`z-30 relative overflow-hidden rounded-xl shadow-lg cursor-pointer w-full h-72 transition-all duration-500 
              ${index % 2 === 0 ? "translate-y-8" : "-translate-y-8"}`}
          >
            <Image
              src={img}
              alt={`Gallery 2 image ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ☀️ Planets */}
      <div className="scale-90 md:scale-100 absolute top-16 left-[-50px] pl-6">
        <Planet
          width="150px"
          height="150px"
          imageUrl="/sun.svg"
          shadowColor="rgba(255,220,150,0.5)"
        />
      </div>

      <div className="absolute top-1/2 right-[-150px] pr-6 rotate-[16deg]">
        <Planet
          width="250px"
          height="250px"
          imageUrl="/jupyter.svg"
          shadowColor="rgba(255,220,150,0.5)"
        />
      </div>

      {/* 🌍 Earth – 3/5 visible */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end overflow-hidden">
        <div className="scale-50 md:scale-100 relative w-[650px] h-[650px] translate-y-[40%]">
          <Planet
            width="650px"
            height="650px"
            imageUrl="/earth.svg"
          />
        </div>
      </div>
    </div>
  )
}
