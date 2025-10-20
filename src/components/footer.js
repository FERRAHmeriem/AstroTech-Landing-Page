"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#141C33] grid grid-cols-1 md:grid-cols-2 gap-10 mx-2 pt-16 px-6 pb-6 rounded-t-2xl mb-0"
    >
      {/* LEFT SIDE */}
      <div className="pb-5 px-4 md:pl-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
          <Image src="/Logo.svg" width={90} height={90} alt="AstroTech Logo" />
          <p className="font-nasa text-3xl text-[#EBEEFF] mt-2 md:mt-6">
            AstroTech
          </p>
        </div>

        <p className="font-tommyMed text-base md:text-xl leading-relaxed text-[#EFF5FA] my-8 max-w-md mx-auto md:mx-0">
          “Aim towards the end and you might land on a star or Jupiter“
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-[#EFF5FA] mt-4 justify-center md:justify-start">
          <FaMapMarkerAlt className="text-white mt-1 w-7 h-7 md:w-8 md:h-8" />
          <p className="font-tommyMed text-sm md:text-md text-center md:text-left">
            École Nationale Supérieure d’Informatique <br />
            16270, Oued Smar, Algiers, Algeria
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="font-tommyMed text-white text-lg sm:text-xl md:text-2xl pb-8 text-center md:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
          {/* Contact */}
          <div className="space-y-3">
            <h1 className="font-nasa text-2xl md:text-3xl mb-3 tracking-wide">
              CONTACT
            </h1>
            <a
              href="mailto:astrotech@esi.dz"
              className="hover:underline transition duration-200 block"
            >
              astrotech@esi.dz
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h1 className="font-nasa text-2xl md:text-3xl mb-3 tracking-wide">
              NAVIGATION
            </h1>
            <a
              href="/our_events"
              className="hover:underline transition duration-200 block"
            >
              Events
            </a>
            <a
              href="/about_us"
              className="hover:underline transition duration-200 block"
            >
              About us
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start flex-wrap gap-5 md:gap-7 mt-10">
          {[
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/company/astrotech-esi/",
            },
            {
              Icon: FaFacebook,
              href: "https://www.facebook.com/profile.php?id=100088700419699&mibextid=ZbWKwL",
            },
            {
              Icon: FaInstagram,
              href: "https://www.instagram.com/astrotech_esi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            },
            { Icon: FaTiktok, href: "https://www.tiktok.com/@astrotech_esi" },
            { Icon: FaDiscord, href: "https://discord.gg/cSeM6Eg3" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-[#141C33] p-3 rounded-full"
            >
              <Icon size={26} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
