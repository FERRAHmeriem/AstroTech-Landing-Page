import Image from "next/image";
import Planet from "./planet";

export default function EventHeroSection({ event }) {
  return (
    <div>
      <div className="relative pt-20 w-full h-screen overflow-x-hidden">
        {/* ---- Desktop & Large Screens ---- */}
        <div className="hidden md:flex justify-around items-center p-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="mt-8 border-2 border-[#EBEEFF] w-2xl relative">
              <Image
                src="/Logo.svg"
                width={100}
                height={100}
                alt="AstroTech Logo"
                className="absolute bottom-0 left-[-50px]"
              />
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-5xl font-semibold font-nasa text-[#EBEEFF] uppercase text-center">
                {event.title}
              </h1>
              <p className="text-2xl font-nasa text-[#EBEEFF] text-center">
                look at the stars among like minded people
              </p>
            </div>
          </div>

          <div className="z-10">
            <Planet
              width="450px"
              height="450px"
              imageUrl={event.planet}
              shadowColor="#717171"
            />
          </div>
        </div>

        {/* ---- Mobile & Tablet ---- */}
        <div className="flex md:hidden flex-col justify-center items-center h-full relative overflow-hidden">
          {/* Centered Planet */}
          <div className="absolute inset-0 flex items-center justify-center z-0 scale-125">
            <Planet
              width="260px"
              height="260px"
              imageUrl={event.planet}
              shadowColor="#717171"
            />
          </div>

          {/* Content overlayed on planet */}
          <div className="relative z-10 text-center text-[#EBEEFF] px-6 space-y-4">
            <Image
              src="/Logo.svg"
              width={70}
              height={70}
              alt="AstroTech Logo"
              className="mx-auto mb-2"
            />
            <h1 className="text-3xl font-semibold font-nasa uppercase">
              {event.title}
            </h1>
            <p className="text-lg font-nasa">
              look at the stars among like minded people
            </p>

            <div className="text-sm font-nasa space-y-1 mt-4">
              <p>Date: {event.date}</p>
              <p>Setting: {event.setting}</p>
              <p>Time: {event.time}</p>
              <p>Participation: {event.participation}</p>
            </div>
          </div>
        </div>

        {/* ---- Event Info (desktop only) ---- */}
        <div className="hidden md:block absolute p-6 left-10 bottom-10 text-2xl font-nasa text-[#EBEEFF] text-left space-y-4">
          <p>Date: {event.date}</p>
          <p>Setting: {event.setting}</p>
          <p>Time: {event.time}</p>
          <p>Participation: {event.participation}</p>
        </div>
      </div>
    </div>
  );
}
