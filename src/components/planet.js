"use client";

export default function Planet({ width = "300px", height = "300px", imageUrl = "/planet.svg" }) {
  return (
    <div 
      className="relative rounded-full overflow-hidden bg-black"
      style={{ width, height }}
    >
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl}), url(${imageUrl})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "0 center, 400px center",
          animation: "scrollBg 20s linear infinite"
        }}
      ></div>
      <style jsx>{`
        @keyframes scrollBg {
          0% {
            background-position: 0 center, 400px center;
          }
          100% {
            background-position: -400px center, 0 center;
          }
        }
      `}</style>
    </div>
  );
}