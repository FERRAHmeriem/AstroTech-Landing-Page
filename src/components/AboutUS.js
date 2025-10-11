import React from 'react'
import Image from 'next/image'

const AboutUS = () => {
  return (
    <div className="bg-[url('/spaceBg.svg')] bg-cover bg-center text-[#EFF5FA] grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 items-center">
      
      {/* Text Section */}
      <div className="space-y-8">
        <div className="inline-block">
        <h1 className="font-nasalization text-4xl md:text-5xl text-[#EFF5FA] tracking-wide">
            Get To Know AstroTech
        </h1>
        <div className="h-[3px] bg-[#EFF5FA] mt-3 rounded-full"></div>
    </div>


        <p className="text-2xl md:text-3xl leading-relaxed max-w-2xl">
          AstroTech is a scientific club based at ESI Algiers, dedicated to exploring the wonders of 
          space and technology. Our mission is to inspire curiosity and innovation through astronomy, 
          science, and tech-driven projects that reach for the stars.
        </p>

        <button className="font-nasalization text-5xl border-4 border-[#EFF5FA] px-8 py-4 rounded-3xl hover:bg-[#EFF5FA] hover:text-[#141C33] transition duration-300">
          Learn more
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src="/imageAstro1.svg"
          alt="AstroTech picture" 
          width={573} 
          height={554}
          className="w-64 sm:w-80 md:w-[450px] lg:w-[500px]"
        />
      </div>
    </div>
  )
}

export default AboutUS
