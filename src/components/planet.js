"use client";

/**
 * Planet Component
 * 
 * A rotating planet component with customizable lightning/glow effects.
 * The planet image scrolls horizontally to create a spinning effect.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string|number} props.width - Width of the planet container (default: "300px")
 * @param {string|number} props.height - Height of the planet container (default: "300px")
 * @param {string} props.imageUrl - URL/path to the planet texture image (default: "/planet.svg")
 * @param {string} props.lightningColor - RGB color values for the glow effect as comma-separated string (default: "135, 206, 250")
 *                                        Example: "255, 140, 66" for orange glow
 * 
 * @example
 * // Basic usage with default blue glow
 * <Planet imageUrl="/earth.svg" width={300} height={300} />
 * 
 * @example
 * // Orange glow for Jupiter
 * <Planet imageUrl="/jupiter.svg" width={400} height={400} lightningColor="255, 140, 66" />
 * 
 * @example
 * // Gray/silver glow for Moon
 * <Planet imageUrl="/moon.svg" width={250} height={250} lightningColor="192, 192, 192" />
 */
export default function Planet({ width = "300px", height = "300px", imageUrl = "/planet.svg", lightningColor = "135, 206, 250" }) {
  return (
    <div className="relative" style={{ width, height }}>
      {/* Outer glow layers */}
      <div 
        className="absolute inset-0 rounded-full blur-xl opacity-30"
        style={{
          background: `radial-gradient(circle, rgba(${lightningColor}, 0.3) 0%, rgba(${lightningColor}, 0.2) 40%, transparent 70%)`,
          transform: "scale(1.2)"
        }}
      ></div>
      
      {/* Lightning/electric border effect */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: "transparent",
          boxShadow: `
            0 0 10px rgba(${lightningColor}, 0.4),
            0 0 20px rgba(${lightningColor}, 0.3),
            0 0 30px rgba(${lightningColor}, 0.2),
            inset 0 0 10px rgba(${lightningColor}, 0.15)
          `
        }}
      ></div>
      
      {/* Planet */}
      <div 
        className="relative rounded-full overflow-hidden bg-black"
        style={{ width: "100%", height: "100%" }}
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
      </div>
      
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