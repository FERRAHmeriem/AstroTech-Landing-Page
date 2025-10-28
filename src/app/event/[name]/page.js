"use client";
import { useParams } from "next/navigation";
import  events from "@/data/events";
import EventHeroSection from "@/components/eventHeroSection";
import Header from "@/components/header";
import EventAbout from "@/components/eventAbout";
import EventGalery from "@/components/eventGalery";
import { motion } from "framer-motion"

export default function Page() {
  const { name } = useParams();
  const event = events.find(
    (e) => e.name.toLowerCase() === name.toLowerCase()
  );

  if (!event) {
    return (
      <div className="relative min-h-screen  text-white overflow-hidden flex flex-col items-center justify-center">
      <Header page="event" />

      {/* Decorative background elements */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-[#2b4eff33] rounded-full blur-3xl -top-32 -left-32"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>

      <motion.div
        className="absolute w-[400px] h-[400px] bg-[#a855f733] rounded-full blur-3xl bottom-0 right-0"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#EBEEFF] mb-4 font-nasa">
          Event Not Found
        </h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto mb-10 font-tommyMed">
          The event you’re looking for might have been removed, renamed, or is temporarily unavailable.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="py-2 px-4 rounded-2xl font-nasa text-2xl sm:text-3xl md:text-4xl text-[#EBEEFF] border-2 border-[#EBEEFF] hover:bg-[#EBEEFF] hover:text-black cursor-pointer transition"
          onClick={() => window.location.href = "/our_events"}
        >
          Back to Events
        </motion.button>
      </motion.div>
    </div>
    );
  }

  return (
    <div>
      <Header page="events" />
      <EventHeroSection event={event} />
      <EventAbout event={event} />
      <EventGalery event={event} />
    </div>
  );
}
