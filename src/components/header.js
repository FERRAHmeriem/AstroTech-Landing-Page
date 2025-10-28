"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Header({ page }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
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
      className={`fixed top-0 left-0 w-[calc(100%-1rem)] mx-2 flex justify-between items-center px-6 md:px-10 py-4 z-50 rounded-b-3xl transition-all duration-500
        ${scrolled ? "bg-[#141C33]/90 backdrop-blur-md shadow-lg" : ""}
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
      `}
    >
      {/* --- Logo --- */}
      <div className="flex items-center gap-2">
        <Image src="/Logo.svg" width={55} height={55} alt="AstroTech Logo" />
        <p className="font-nasa text-xl sm:text-2xl text-[#EBEEFF]">AstroTech</p>
      </div>

      {/* --- Desktop Nav Links --- */}
      <div className="hidden lg:flex items-center justify-center gap-8 text-[#EBEEFF] text-xl">
        <Link href="/" className={linkClasses("home")}>
          Home
        </Link>
        <Link href="/our_events" className={linkClasses("events")}>
          Events
        </Link>
        <Link href="/about_us" className={linkClasses("about")}>
          About Us
        </Link>
        <Link href="/#contact" className={linkClasses("contact")}>
          Contacts
        </Link>
      </div>

      {/* --- Join Us Button (Desktop only) --- */}
      <button onClick={() => router.push("https://tripetto.app/run/V7GC5XAF65")} className="hidden lg:block text-lg cursor-pointer font-nasa border-[#2F456F] border-3 bg-[#5374AC] px-6 py-2 rounded-2xl hover:scale-105 transition text-[#EBEEFF]">
        Join Us
      </button>

      {/* --- Mobile Menu Button --- */}
      <button
        className="lg:hidden text-[#EBEEFF] text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* --- Mobile Menu --- */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#141C33]/95 backdrop-blur-md shadow-lg rounded-3xl text-center py-6 flex flex-col gap-4 text-[#EBEEFF] text-xl">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={linkClasses("home")}
          >
            Home
          </Link>
          <Link
            href="/our_events"
            onClick={() => setMenuOpen(false)}
            className={linkClasses("events")}
          >
            Events
          </Link>
          <Link
            href="/about_us"
            onClick={() => setMenuOpen(false)}
            className={linkClasses("about")}
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className={linkClasses("contact")}
          >
            Contacts
          </Link>

          <button onClick={() => router.push("https://tripetto.app/run/V7GC5XAF65")} className="mt-4 text-lg font-nasa border-[#2F456F] border-3 bg-[#5374AC] px-6 py-2 rounded-2xl hover:scale-105 transition text-[#EBEEFF] mx-auto">
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
}
