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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const radius = 20;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: touch.clientX, y: touch.clientY });
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const generateDots = () => {
    const dots = [];
    const columns = Math.ceil(windowSize.width / spacing);
    const rows = Math.ceil(windowSize.height / spacing);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const dotX = x * spacing;
        const dotY = y * spacing;
        const distance = Math.sqrt(
          Math.pow(dotX - mousePosition.x, 2) + Math.pow(dotY - mousePosition.y, 2)
        );

        const opacity = Math.max(0, 1 - distance / (radius * spacing / 2));

        if (distance <= radius * spacing / 2) {
          dots.push(
            <motion.div
              key={`${x}-${y}`}
              className={`absolute bg-black dark:bg-white`}
              style={{
                width: dotSize,
                height: dotSize,
                left: dotX,
                top: dotY,
                transform: 'translate(-50%, -50%)',
                opacity: opacity,
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
    <div className="fixed inset-0 pointer-events-none z-0 translate-x-[10px] translate-y-[10px]">
      {generateDots()}
    </div>
  );
};

export default DotEffect;