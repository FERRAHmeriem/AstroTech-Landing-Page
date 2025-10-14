import Planet from './planet';

export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center relative">
            <div className="absolute top-15 w-64 md:w-80 lg:w-96 xl:w-[422px] h-64 md:h-80 lg:h-96 xl:h-[422px]">
                <Planet 
                    width="100%"
                    height="100%" 
                    imageUrl="/earth.svg" 
                />
            </div>
            <img 
                src="/Frame 6.svg" 
                alt="WELCOME TO ASTROTECH - Where Tech and astronomy meet"
                className="w-full max-w-8xl px-4 relative z-10"
            />
        </section>
    );
}
