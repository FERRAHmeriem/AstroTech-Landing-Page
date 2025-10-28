"use client";

export default function Planet({
  width = "300px",
  height = "300px",
  imageUrl = "/earth.svg",
  shadowColor = "rgba(0,150,255,0.4)", 
}) {
  return (
    <div
      className="relative rounded-full overflow-hidden bg-black"
      style={{
        width,
        height,
        boxShadow: `
          inset 15px 0px 40px rgba(0,0,0,0.7),  /* inner dark side */
          0px 0px 80px 10px ${shadowColor}     /* BIG soft outer glow */
        `,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          backgroundImage: `url(${imageUrl}), url(${imageUrl})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "0 center, 400px center",
          animation: "scrollBg 10s linear infinite",
          filter: "brightness(0.9) contrast(1.15)",
        }}
      ></div>

      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 55% 50%, rgba(255,255,255,0.25) 0%, transparent 40%, rgba(0,0,0,0.75) 100%)",
        }}
      ></div>

      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,0.6), transparent, ${shadowColor.replace(
            "0.4",
            "0.1"
          )})`,
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
