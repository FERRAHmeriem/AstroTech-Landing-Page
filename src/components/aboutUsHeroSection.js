import Image from "next/image";
import Planet from "./planet";
import AnimatedCounter from "./animatedCounter.js";

export default function AboutUsHeroSection() {
  return (
    <div className="relative mb-[400px] md:mb-[500px] lg:mb-[600px]">
      
      <div className="pt-64 h-screen flex flex-col items-center justify-center">
        <div className="w-[85%] z-10 bg-[#d9d9d951] rounded-4xl flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-16 gap-12 xl:gap-24 text-center md:text-left">
          
          {/* Image */}
          <div className="basis-1/3 relative pl-2 hidden xl:block">
            <Image
              src="/aboutUs.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="About us"
              className="w-[35vw] max-w-[400px] h-auto rounded-4xl absolute bottom-[-140px]"
            />
          </div>

          <div className="basis-2/3 text-[#eff2ff] space-y-8 md:space-y-12">
            <div className="py-2 mx-auto md:mx-0 w-[90%] md:w-[550px] border-b-4 border-[#EBEEFF] text-2xl lg:text-3xl font-nasa">
              <p>Who Are We ?</p>
            </div>

            <h1 className="text-3xl lg:text-5xl font-nasa">
              A Community of Astronomy passionate Students
            </h1>

            <p className="text-xl lg:text-3xl font-tommyMed font-medium">
              AstroTech is a scientific club that brings together young technology and astronomy enthusiasts from different universities in one place.
              Based at École Nationale Supérieure D informatique (ESI ex INI), AstroTech was founded in 2022, with the objective of building a community of students, motivated to learn and apply IT skills to astronomy and astrophysics, study the field’s fundamentals, conducting their own research, and create tools that make learning and exploring astronomy more engaging and accessible.

            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-350px] md:bottom-[-460px] lg:bottom-[-570px] left-1/2 -translate-x-1/2 w-full">
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 lg:gap-32 px-4">
          
          {/* Counter */}
          <div className="relative z-10 bg-[#8dc1fc54] text-[#EBEEFF] text-center space-y-4 p-6 md:p-8 rounded-2xl w-full sm:w-[80%] md:w-auto mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-nasa">
              +<AnimatedCounter target={250} duration={2000} />
            </h1>
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-tommyMed">
              Active Members
            </p>
          </div>

          {/* Planet (large screens) */}
          <div className="hidden 2xl:block scale-[0.6] sm:scale-[0.8] md:scale-90 lg:scale-100">
            <Planet
              width="500px"
              height="500px"
              imageUrl="/moon.svg"
              shadowColor="#717171"
            />
          </div>
        </div>
      </div>

      {/* Planet (small & medium screens) */}
      <div className="block 2xl:hidden absolute right-[-30%] xl:right-[-5%] bottom-[-50px] xl:bottom-[-150px] opacity-80 scale-[0.9] md:scale-[1] z-0">
        <Planet
          width="500px"
          height="500px"
          imageUrl="/moon.svg"
          shadowColor="#717171"
        />
      </div>
    </div>
  );
}
