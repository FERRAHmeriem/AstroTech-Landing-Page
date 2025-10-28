import Planet from "./planet";
import Image from "next/image";

export default function OurEventsHeroSection() {
  return (
    <div className="relative pt-20 w-full h-screen overflow-x-hidden">
      {/* -------- Large screens (unchanged) -------- */}
      <div className="hidden lg:flex flex-col md:flex-row justify-around items-center p-6 md:p-8 space-y-6 md:space-y-0">
        {/* Texte et logo */}
        <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 z-50">
          <div className="border-b-2 border-[#EBEEFF] relative w-xs h-[120px] md:w-2xl md:h-[200px]">
            <Image
              src="/Logo.svg"
              width={100}
              height={100}
              alt="AstroTech Logo"
              className="absolute bottom-0 left-[-30px] md:left-[-50px]"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold font-nasa text-[#EBEEFF] uppercase">
            explore astrotech events
          </h1>

          <p className="text-lg md:text-2xl font-nasa text-[#EBEEFF]">
            join our journeys through space and time
          </p>
        </div>

        {/* Planète principale */}
        <div className="hidden lg:block z-10">
          <Planet width="450px" height="450px" imageUrl="/earth.svg" />
        </div>
      </div>

      {/* -------- Small screens (new centered layout) -------- */}
      <div className="flex lg:hidden flex-col justify-center items-center h-full relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center md:scale-150 z-10">
          <Planet
            width="250px"
            height="250px"
            imageUrl="/moon.svg"
            shadowColor="#717171"
          />
        </div>

        <div className="relative z-50  text-center text-[#EBEEFF] px-4">
          <Image
            src="/Logo.svg"
            width={70}
            height={70}
            alt="AstroTech Logo"
            className="mx-auto mb-4 md:scale-115"
          />
          <h1 className="text-2xl md:text-5xl font-semibold font-nasa uppercase">
            explore astrotech events
          </h1>
          <p className="text-base md:text-2xl font-nasa">
            join our journeys through space and time
          </p>
        </div>
      </div>

      {/* -------- Other planets (unchanged) -------- */}
      <div className="hidden lg:block absolute bottom-[10px] left-1/4 z-10">
        <Planet
          width="220px"
          height="220px"
          imageUrl="/moon.svg"
          shadowColor="#717171"
        />
      </div>

      <div className="hidden lg:block absolute bottom-[50px] right-[-50px] z-10">
        <Planet
          width="200px"
          height="200px"
          imageUrl="/jupyter.svg"
          shadowColor="#717171"
        />
      </div>
    </div>
  );
}
