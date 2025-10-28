import React from "react";
import Image from "next/image";

const EventAbout = ({ event }) => {
  return (
    <div className="text-[#EFF5FA] px-6 sm:px-10 py-12 sm:py-16 flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10 md:gap-16">
      {/* ---- Text Section ---- */}
      <div className="space-y-6 sm:space-y-8 text-center md:text-left">
        {/* Title */}
        <div className="inline-block w-full">
          <h1 className="font-nasa text-3xl sm:text-4xl md:text-5xl text-[#EFF5FA] tracking-wide uppercase">
            About the event
          </h1>
          <div className="h-[3px] bg-[#EFF5FA] mt-3 mx-auto md:mx-0 rounded-full w-2/3 md:w-full"></div>
        </div>

        {/* Description */}
        <p className="text-med sm:text-lg md:text-2xl lg:text-3xl leading-relaxed max-w-2xl font-tommyMed mx-auto md:mx-0">
          {event.about}
        </p>
      </div>

      {/* ---- Image Section ---- */}
      <div className="flex justify-center mb-8 md:mb-0">
        <Image
          src={event.image}
          alt="AstroTech picture"
          width={573}
          height={554}
          className="w-56 sm:w-72 md:w-[500px] lg:w-[600px] drop-shadow-[0_0_15px_rgba(235,238,255,0.3)] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default EventAbout;
