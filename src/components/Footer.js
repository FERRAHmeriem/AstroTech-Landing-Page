import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaDiscord, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[url('/spaceBg.svg')] bg-cover bg-center">
    <div className="bg-[#141C33] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-1 mx-4 md:mx-8 pt-10 rounded-2xl">
      
      {/* Left Section */}
      <div className="pb-5 px-6 md:pl-10 text-center md:text-left">
        <div className="flex justify-center md:justify-start">
          <Image 
            src="/astrotechLogo.svg"
            alt="AstroTech Logo" 
            width={384} 
            height={90}
            className="max-w-full h-auto"
          />
        </div>
        <p className="max-w-md text-base md:text-lg leading-relaxed text-[#EFF5FA] mt-4 mx-auto md:mx-0">
          “ Aim towards the end and you might land on a star or Jupiter “
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-[#EFF5FA] mt-4 justify-center md:justify-start">
          <FaMapMarkerAlt className="text-white mt-1 flex-shrink-0 w-7 h-7 md:w-9 md:h-9" />
          <p className="text-sm md:text-md text-center md:text-left">
            École Nationale Supérieure d’Informatique <br />
            16270, Oued Smar, Algiers, Algeria
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="p-4 text-white text-xl md:text-2xl pb-8">
        {/* Contact & Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-8 sm:gap-4">
          <div>
            <h1 className="font-nasalization text-2xl md:text-3xl mb-3 tracking-wide">
              CONTACT
            </h1>
            <a href="mailto:astrotech@esi.dz" className="hover:underline transition duration-200 block">astrotech@esi.dz</a>
            <a href="tel:+213xxxxxxxxx" className="hover:underline transition duration-200 block">+213 xx xx xx xx xx</a>
          </div>

          <div>
            <h1 className="font-nasalization text-2xl md:text-3xl mb-3 tracking-wide">
              NAVIGATION
            </h1>
            <a href="#events" className="hover:underline transition duration-200 block">Events</a>
            <a href="#aboutus" className="hover:underline transition duration-200 block">About us</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center flex-wrap gap-5 md:gap-7 mt-6">
          <a className="bg-white text-[#141C33] p-3 rounded-full" href="https://www.linkedin.com/company/astrotech-esi/">
            <FaLinkedin size={26} />
          </a>
          <a className="bg-white text-[#141C33] p-3 rounded-full" href="https://www.facebook.com/profile.php?id=100088700419699&mibextid=ZbWKwL">
            <FaFacebook size={26} />
          </a>
          <a className="bg-white text-[#141C33] p-3 rounded-full" href="https://www.instagram.com/astrotech_esi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <FaInstagram size={26} />
          </a>
          <a className="bg-white text-[#141C33] p-3 rounded-full">
            <FaTiktok size={26} />
          </a>
          <a className="bg-white text-[#141C33] p-3 rounded-full">
            <FaDiscord size={26} />
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
