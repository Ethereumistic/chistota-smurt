'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DotEffectProps {
  dotSize?: number;
  spacing?: number;
}

const DotEffect: React.FC<DotEffectProps> = ({
  dotSize = 2,
  spacing = 20,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Define mousePosition state
  const radius = 20; // Hardcoded radius

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY }); // Update mouse position
      });
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]; // Get the first touch point
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: touch.clientX, y: touch.clientY }); // Update mouse position
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove); // Add touchmove event listener

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove); // Clean up touchmove event listener
      cancelAnimationFrame(animationFrameId); // Clean up the animation frame
    };
  }, []);

  const generateDots = () => {
    const dots = [];
    const columns = Math.ceil(window.innerWidth / spacing);
    const rows = Math.ceil(window.innerHeight / spacing);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const dotX = x * spacing;
        const dotY = y * spacing;
        const distance = Math.sqrt(
          Math.pow(dotX - mousePosition.x, 2) + Math.pow(dotY - mousePosition.y, 2)
        );

        // Calculate opacity based on distance from the center of the circle
        const opacity = Math.max(0, 1 - distance / (radius * spacing / 2));

        if (distance <= radius * spacing / 2) {
          dots.push(
            <motion.div
              key={`${x}-${y}`}
              className={`absolute bg-black dark:bg-white`} // Hardcoded color
              style={{
                width: dotSize,
                height: dotSize,
                left: dotX,
                top: dotY,
                transform: 'translate(-50%, -50%)',
                opacity: opacity, // Set opacity based on distance
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          );
        }
      }
    }

    return dots;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30 translate-x-[10px] translate-y-[10px]">
      {generateDots()}
    </div>
  );
};

export default DotEffect;