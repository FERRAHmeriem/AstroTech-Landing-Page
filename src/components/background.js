"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/**
 * Background Component
 * 
 * Animated starfield background with physics-based movement.
 * Each star moves within a confined space and bounces off boundaries.
 * 
 * @component
 * 
 * @features
 * - 20 animated stars with individual movement patterns
 * - Physics-based bounce mechanics within fixed boundaries
 * - Each star confined to a 20x20% area for distributed coverage
 * - Slow, smooth movement for ambient effect
 * - Random sizes for visual depth
 * - Space.png background image
 * 
 * @performance
 * - Uses useRef to avoid unnecessary re-renders
 * - Direct DOM manipulation for smooth 60fps animation
 * - Single requestAnimationFrame loop for all stars
 * - Automatic cleanup on component unmount
 * 
 * @algorithm
 * 1. Generate 20 stars with random center positions (10-90% of screen)
 * 2. Each star has ±10% movement range from its center
 * 3. Stars move with random velocity (speedX, speedY)
 * 4. Velocity reverses on boundary collision (bounce physics)
 * 5. Position clamped to prevent overshooting boundaries
 * 
 * @example
 * // Basic usage as full-page background
 * <Background />
 * 
 * @dependencies
 * - next/image - Optimized image component
 * - /star.svg - Star icon in public directory
 * - /space.png - Background image in public directory
 */
export default function Background() {
    const [stars, setStars] = useState([]);
    const starsRef = useRef([]);

    useEffect(() => {
        // Create random stars with random positions and speeds
        const numStars = 20; // Number of stars
        const initialStars = [];

        for (let i = 0; i < numStars; i++) {
            // Define a random fixed space for each star (20x20% area)
            const centerX = Math.random() * 80 + 10; // 10-90%
            const centerY = Math.random() * 80 + 10; // 10-90%
            const range = 10; // Movement range (10% in each direction)

            initialStars.push({
                id: i,
                centerX, // Center of fixed space
                centerY,
                range, // How far from center it can move
                x: centerX, // Start at center
                y: centerY,
                speedX: (Math.random() - 0.5) * 0.02, // Very slow speed
                speedY: (Math.random() - 0.5) * 0.02,
                size: Math.random() * 0.5 + 0.5,
            });
        }

        starsRef.current = initialStars;
        setStars(initialStars); // Trigger initial render with stars

        // Animation loop
        const animate = () => {
            starsRef.current = starsRef.current.map(star => {
                let newX = star.x + star.speedX;
                let newY = star.y + star.speedY;

                // Keep star within its fixed space (bounce off boundaries)
                const minX = star.centerX - star.range;
                const maxX = star.centerX + star.range;
                const minY = star.centerY - star.range;
                const maxY = star.centerY + star.range;

                if (newX <= minX || newX >= maxX) {
                    star.speedX *= -1;
                    newX = Math.max(minX, Math.min(maxX, newX));
                }
                if (newY <= minY || newY >= maxY) {
                    star.speedY *= -1;
                    newY = Math.max(minY, Math.min(maxY, newY));
                }

                return { ...star, x: newX, y: newY };
            });

            // Update DOM elements
            starsRef.current.forEach(star => {
                const element = document.getElementById(`star-${star.id}`);
                if (element) {
                    element.style.left = `${star.x}%`;
                    element.style.top = `${star.y}%`;
                }
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{ backgroundImage: `url('/space.png')` }}
        >
            {/* Animated stars */}
            {stars.map(star => (
                <div
                    key={star.id}
                    id={`star-${star.id}`}
                    className="absolute"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        transform: `scale(${star.size})`,
                    }}
                >
                    <Image 
                        src="/star.svg" 
                        alt="star" 
                        width={80} 
                        height={80}
                        className="pointer-events-none"
                    />
                </div>
            ))}

            {/* Your content here */}
        </div>
    );
}
