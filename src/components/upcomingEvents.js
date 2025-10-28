"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const events = [
  {
    date: "October 2025",
    title: "Welcome Day",
    icon: "/group.png",
    description:
      "Discover and get to know AstroTech! Through fun and engaging activities, as well as a talk from our core team members ",
  },
  {
    date: "November 2025",
    title: "Astro Hackathon",
    icon: "/graduation.png",
    description:
      " Learn how to apply your development skills to real astronomy challenges,form teams and compete for the best solution",
  },
  {
    date: "January 2026",
    title: "Astro Camp",
    icon: "/astronaut.png",
    description: "learn and acquire technical skills to get started in different field, and join workshop that are organized by professionals",
  },
  {
    date: "February 2026",
    title: "Starry Verse",
    icon: "/telescope.png",
    description:
      " Unite under one starry sky, and spend an unforgettable night under the stars to explore the cosmos! Join us to observe distant galaxies.",
  },
];

export default function UpcomingEvents() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideIn = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  });

  return (
    <section className="relative bg-cover bg-center text-white py-24 flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-2 border-t-2 border-[#EBEEFF] px-6 sm:px-8 py-4 text-center w-full sm:w-3/4 md:w-1/2 mb-6"
      >
        <h1 className="font-nasa text-2xl sm:text-4xl md:text-5xl uppercase text-[#EBEEFF]">
          Upcoming Events
        </h1>
        <p className="font-nasa text-md sm:text-xl md:text-2xl text-[#EBEEFF] mt-2">
          Join our next adventures
        </p>
      </motion.div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* ligne centrale */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#EBEEFF] z-0" />

        <div className="flex flex-col items-center justify-center space-y-16 sm:space-y-20 relative z-10">
          {events.map((event, index) => {
            const isLeft = index % 2 === 1;
            return (
              <motion.div
                key={index}
                variants={slideIn(isLeft ? "left" : "right")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`w-full flex flex-col md:flex-row items-center md:justify-around md:gap-x-44 ${
                  isLeft ? "md:flex-row-reverse md:pl-16" : "md:pr-16"
                }`}
              >
                <div
                  className={`w-full md:w-[45%] ${
                    isLeft
                      ? "text-left md:text-left text-center"
                      : "text-right md:text-right text-center"
                  } px-4 sm:px-6 md:px-0`}
                >
                  {/* ✅ nouveau style pour petit écran */}
                  <div className="p-4 sm:p-6 md:p-0 md:bg-transparent bg-white/10 rounded-2xl shadow-md backdrop-blur-md border border-white/10 md:border-none md:shadow-none">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-nasa text-[#EBEEFF] mb-1">
                      {event.date}
                    </h3>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-nasa font-semibold uppercase mb-2">
                      {event.title}
                    </h2>
                    <p className="text-gray-300 font-tommyMed text-sm sm:text-base md:text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="shadow-2xl shadow-[#d6d8e3] w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-[#EBEEFF] flex items-center justify-center border-4 z-10 mx-4 sm:mx-6 shrink-0 hover:scale-110 transition-transform duration-500"
                >
                  <Image src={event.icon} alt={event.title} width={100} height={100} />
                </motion.div>

                {/* ligne mobile */}
                <div className="block md:hidden w-1 h-16 bg-[#EBEEFF] mx-auto mt-4 rounded-full" />
              </motion.div>
            );
          })}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-[-15px] z-20 hidden sm:block"
          >
            <Image src="/arrow.svg" alt="Down arrow" width={60} height={60} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
