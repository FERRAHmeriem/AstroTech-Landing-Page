import Image from "next/image";
import Planet from "./planet";

export default function OurGoals() {
  return (
    <div className=" w-full relative flex flex-col lg:flex-row items-center justify-center px-2 sm:px-10 lg:px-24 py-2 md:py-12 overflow-hidden">
      
      {/* Planet */}
      <div className=" hidden md:block m-0 absolute  left-1/2 lg:left-10 top-1/2 lg:top-auto -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:-translate-y-0 scale-60 sm:scale-75 md:scale-85 xl:scale-100 z-0">
        <div className="lg:-translate-x-1/2 flex justify-center lg:block">
          <Planet
            width="350px"
            height="350px"
            imageUrl="/jupyter.svg"
            shadowColor="rgba(255,220,150,0.5)"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center lg:items-end justify-between flex-grow space-y-10 w-full mt-[50px] sm:mt-[100px] lg:mt-0">
        
        {/* Title */}
        <div className="w-full sm:w-[80%] lg:w-[100%] flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-nasa text-[#EBEEFF] border-t-2 border-[#EBEEFF] pt-3 px-6 sm:px-10">
            Our Goals
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row lg:flex-row justify-center items-center gap-8 sm:gap-10 lg:gap-4 w-full sm:w-[85%] lg:w-full flex-wrap lg:flex-nowrap">
          
          <div className="w-60 md:w-64 h-60 md:h-64 rounded-3xl bg-[#fdfdfd49] backdrop-blur-sm p-4 flex flex-col space-y-3 items-center justify-center hover:scale-105 transition-transform duration-500 shadow-lg shadow-[#ffffff1a]">
            <Image src="/technology.svg" alt="image" width={100} height={100} />
            <p className="font-nasa text-lg md:text-xl text-center text-[#EBEEFF]">
              Learn how to apply IT in astronomy
            </p>
          </div>

          <div className="w-60 md:w-64 h-60 md:h-64 rounded-3xl bg-[#fdfdfd49] backdrop-blur-sm p-4 flex flex-col space-y-3 items-center justify-center hover:scale-105 transition-transform duration-500 shadow-lg shadow-[#ffffff1a]">
            <Image src="/community.svg" alt="image" width={100} height={100} />
            <p className="font-nasa text-lg md:text-xl text-center text-[#EBEEFF]">
              Create a passionate and motivated community
            </p>
          </div>

          <div className="w-60 md:w-64 h-60 md:h-64 rounded-3xl bg-[#fdfdfd49] backdrop-blur-sm p-4 flex flex-col space-y-3 items-center justify-center hover:scale-105 transition-transform duration-500 shadow-lg shadow-[#ffffff1a]">
            <Image src="/idea-exchange.svg" alt="image" width={100} height={100} />
            <p className="font-nasa text-lg md:text-xl text-center text-[#EBEEFF]">
              Share knowledge, information, and skills
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
