"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ page }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (currentPage) =>
    `transition-all duration-300 hover:text-blue-400 cursor-pointer ${
      page === currentPage
        ? "bg-[#2F456F] py-2 px-3 rounded-full font-nasa"
        : "font-tommyMed"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-[calc(100%-1rem)] mx-2 flex justify-between items-center px-8 py-5 z-50 rounded-b-3xl transition-all duration-500
      ${
        scrolled
          ? "bg-[#141C33] backdrop-blur-md shadow-lg py-3"
          : " py-5"
      }
      ${visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
    `}
    >
      <div className="flex items-center gap-2">
        <Image src="/Logo.svg" width={40} height={40} alt="AstroTech Logo" />
        <p className="font-nasa text-[#EBEEFF]">AstroTech</p>
      </div>
      <div className="flex items-center justify-center gap-6 text-[#EBEEFF] text-xl">
        <Link href="/" className={linkClasses("home")}>
          Home
        </Link>
        <Link href="/events" className={linkClasses("events")}>
          Events
        </Link>
        <Link href="/about" className={linkClasses("about")}>
          About Us
        </Link>
        <Link href="/contact" className={linkClasses("contact")}>
          Contacts
        </Link>
      </div>
      <button className="cursor-pointer font-nasa bg-[#2F456F] px-4 py-2 rounded-2xl hover:scale-105 transition text-[#EBEEFF]">
        Join Us
      </button>
    </nav>
  );
}
