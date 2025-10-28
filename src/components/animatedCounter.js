"use client";
import { useEffect, useState } from "react";

export default function AnimatedCounter({ target, duration = 4000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}</span>;
}
