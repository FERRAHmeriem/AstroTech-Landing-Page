import Planet from "./planet";
import Image from "next/image";

export default function OurEventsHeroSection() {
  return (
    <div className="relative  pt-20 w-full h-screen overflow-x-hidden"> 
      <div className="flex justify-around items-center p-8">
        <div className="flex flex-col items-center space-y-2">
          <div className="border-2 border-[#EBEEFF] w-2xl relative">
            <Image
              src="/Logo.svg"
              width={100}
              height={100}
              alt="AstroTech Logo"
              className="absolute bottom-0 left-[-50px]"
            />
          </div>
          <h1 className="text-5xl font-semibold font-nasa text-[#EBEEFF] uppercase text-center">
            explore astrotech events
          </h1>
          <p className="text-2xl font-nasa text-[#EBEEFF] text-center">
            join our journeys through space and time
          </p>
        </div>

        <div className="z-10">
          <Planet width="450px" height="450px" imageUrl="/earth.svg" />
        </div>
      </div>

      
      <div className="absolute bottom-[10px] left-1/4">
        <Planet
          width="220px"
          height="220px"
          imageUrl="/moon.svg"
          shadowColor="#717171"
        />
      </div>

      <div className="absolute bottom-[50px] right-[-50px]">
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
