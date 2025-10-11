"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const events = [
  {
    date: "October 2025",
    title: "Welcome Day",
    icon: "/group.png",
    description:
      "A warm welcome to all new and returning members! Join us for a fun orientation and a chance to meet the team.",
  },
  {
    date: "November 2025",
    title: "Astro Hackathon",
    icon: "/graduation.png",
    description:
      "Put your coding skills to the test! Develop apps or tools to help with astronomy-related tasks.",
  },
  {
    date: "January 2026",
    title: "Astro Camp",
    icon: "/astronaut.png",
    description: "Learn and enhance your skills in both astronomy and tech!",
  },
  {
    date: "February 2026",
    title: "Starry Verse",
    icon: "/telescope.png",
    description:
      "An unforgettable night under the stars to explore the cosmos! Join us to observe distant galaxies.",
  },
];

export default function UpcomingEvents() {
  // animation variants
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
    <section className="relative bg-cover bg-center text-white py-24 flex flex-col justify-center items-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-2 border-t-2 border-[#EBEEFF] px-8 py-4 text-center w-1/2 mb-6"
      >
        <h1 className="font-nasa text-5xl uppercase text-[#EBEEFF]">
          Upcoming Events
        </h1>
        <p className="font-nasa text-2xl text-[#EBEEFF] mt-2">
          Join our next adventures
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#EBEEFF] z-0" />

        <div className="flex flex-col items-center justify-center space-y-20 relative z-10">
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
                  isLeft ? "md:flex-row-reverse pl-16" : "pr-16"
                }`}
              >
                <div
                  className={`w-full md:w-[45%] ${
                    isLeft ? "text-left" : "text-right"
                  } px-4 md:px-0`}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-nasa text-[#EBEEFF] mb-1">
                      {event.date}
                    </h3>
                    <h2 className="text-4xl font-nasa font-semibold uppercase mb-2">
                      {event.title}
                    </h2>
                    <p className="text-gray-300 font-tommyMed text-lg">
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
                  className="w-40 h-40 rounded-full bg-white flex items-center justify-center border-4 border-black shadow-lg z-10 mx-6 shrink-0"
                >
                  <Image
                    src={event.icon}
                    alt={event.title}
                    width={100}
                    height={100}
                  />
                </motion.div>
              </motion.div>
            );
          })}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-[-15px] z-20"
          >
            <Image src="/arrow.svg" alt="Down arrow" width={60} height={60} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
