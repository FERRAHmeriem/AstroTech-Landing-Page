"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function HomeAboutUs() {
  const router = useRouter()

  return (
    <div className="text-[#EFF5FA] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-20 items-center overflow-hidden">
      
      {/* --- Texte --- */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="inline-block">
          <h1 className="font-nasa text-3xl sm:text-4xl md:text-5xl text-[#EFF5FA] tracking-wide">
            Get To Know AstroTech
          </h1>
          <div className="h-[3px] bg-[#EFF5FA] mt-3 rounded-full"></div>
        </div>

        <p className="font-tommyMed text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl">
          AstroTech is where Tech and astronomy enthusiasts are brought together to work on projects that enhance their careers and drive their passion for both technology and astronomy.
          Located at École Nationale Supérieure Dinformatique (ESI ex INI), AstroTech is the perfect place for everyone that wants to learn IT, or astronomy and astrophysics, or both, develop modern tools, and join a community of like minded and motivated young students

        </p>

        <motion.button
          onClick={() => router.push("/about_us")}
          className="py-2 px-6 rounded-2xl font-nasa text-2xl sm:text-3xl text-[#EBEEFF] border-2 border-[#EBEEFF] hover:bg-[#EBEEFF] hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* --- Image --- */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/2galery2.svg"
          alt="AstroTech picture" 
          width={573} 
          height={554}
          className="w-64 sm:w-80 md:w-[500px] lg:w-[550px] xl:w-[600px]"
        />
      </motion.div>
    </div>
  )
}
