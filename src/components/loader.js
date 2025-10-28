"use client";
import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") setLoading(false);
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
        {/* 🔵 Animated Circle */}
        <div className="w-20 h-20 rounded-full animate-colorPulse"></div>

        <style jsx>{`
          @keyframes colorPulse {
            0% {
              background: radial-gradient(circle, #4f46e5, #1e1b4b);
              box-shadow: 0 0 20px #4f46e5;
            }
            25% {
              background: radial-gradient(circle, #06b6d4, #0e7490);
              box-shadow: 0 0 25px #06b6d4;
            }
            50% {
              background: radial-gradient(circle, #22c55e, #14532d);
              box-shadow: 0 0 25px #22c55e;
            }
            75% {
              background: radial-gradient(circle, #eab308, #78350f);
              box-shadow: 0 0 25px #eab308;
            }
            100% {
              background: radial-gradient(circle, #4f46e5, #1e1b4b);
              box-shadow: 0 0 20px #4f46e5;
            }
          }

          .animate-colorPulse {
            animation: colorPulse 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return children;
}
