'use client'
import React, { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
  gridSize?: number;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children, gridSize = 10 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let animationFrameId: number;
    let targetScrollTop = 0;

    const smoothScroll = () => {
      const currentScrollTop = container.scrollTop;
      const diff = targetScrollTop - currentScrollTop;
      const easing = 0.1;

      if (Math.abs(diff) > 0.5) {
        container.scrollTop += diff * easing;
        animationFrameId = requestAnimationFrame(smoothScroll);
      } else {
        container.scrollTop = Math.round(targetScrollTop / gridSize) * gridSize;
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      targetScrollTop = container.scrollTop;
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      // Allow default scrolling behavior
      targetScrollTop = Math.max(0, Math.min(targetScrollTop + e.deltaY, content.clientHeight - container.clientHeight));
      handleScroll(); // Call handleScroll to update the smooth scroll
    };

    container.addEventListener('wheel', handleWheel, { passive: true }); // Use passive: true to allow default scrolling
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridSize]);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll">
      <div ref={contentRef} className="min-h-screen"> {/* Ensure content is tall enough */}
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;