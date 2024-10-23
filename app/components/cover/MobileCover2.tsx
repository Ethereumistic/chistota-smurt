"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import ReactLenis from 'lenis/react';
import React, { useEffect, useRef, useState } from "react";
import Countdown from '../calendar/Countdown';
import Trailer from '@/app/movie/Trailer';



export function MobileCover2() {
  return (
    <div className="">
        {/* <ReactLenis root options={{ lerp: 0.05 }}> */}
        <MobileHero />
        <div className="bg-gradient-to-t from-black/0 to-black/[0.5] w-full h-12"></div>
        <Trailer />
        <Countdown />
    {/* </ReactLenis> */}
      </div>
  );
}

const MobileHero = () => {
  const { scrollY } = useScroll();
  const [sectionHeight, setSectionHeight] = useState(800); // Default height

  useEffect(() => {
    const updateSectionHeight = () => {
      const height = window.innerWidth < 660 ? 0 : 
        (keyframes => {
          if (keyframes) {
            return keyframes[0].height; // Use the first keyframe height as default
          }
          return 800; // Fallback height
        })([
          { width: 1080, height: 800 },
          { width: 1020, height: 400 },
          { width: 960, height: 200 },
          { width: 900, height: 100 },
          { width: 830, height: 0 },
          { width: 763, height: -100 },
          { width: 700, height: -150 },
        ]);
      setSectionHeight(height);
    };

    updateSectionHeight(); // Set initial height
    window.addEventListener('resize', updateSectionHeight); // Update on resize

    return () => {
      window.removeEventListener('resize', updateSectionHeight); // Cleanup
    };
  }, []);
  
  const dynamicSectionHeight = useTransform(
    scrollY,
    [0, sectionHeight + 800], // Updated to use sectionHeight state
    [sectionHeight, sectionHeight + 800] // Updated to use sectionHeight state
  );

  return (
    <div
      style={{ height: `calc(${dynamicSectionHeight}px + 50vh)` }}
      className="relative w-full"
    >
      <MobileCenterImage />
      <MobileParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-black/0 to-black/[0.5]" />
    </div>
  );
};

const MobileCenterImage = () => {
  const { scrollY } = useScroll();

  const clipStart = 500;
  const clipEnd = 500;

  const clip1 = useTransform(scrollY, [clipStart, clipEnd], [25, 0]);
  const clip2 = useTransform(scrollY, [clipStart, clipEnd], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize: "cover",
        backgroundImage: "url(https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg-s.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const MobileParallaxImages = () => {
  const { scrollY } = useScroll();

  const [sectionHeight, setSectionHeight] = useState(800); // Default height

  useEffect(() => {
    const updateSectionHeight = () => {
      const height = window.innerWidth < 660 ? 0 : 
        (keyframes => {
          if (keyframes) {
            return keyframes[0].height; // Use the first keyframe height as default
          }
          return 800; // Fallback height
        })([
          { width: 1080, height: 800 },
          { width: 1020, height: 400 },
          { width: 960, height: 200 },
          { width: 900, height: 100 },
          { width: 830, height: 0 },
          { width: 763, height: -100 },
          { width: 700, height: -150 },
        ]);
      setSectionHeight(height);
    };

    updateSectionHeight(); // Set initial height
    window.addEventListener('resize', updateSectionHeight); // Update on resize

    return () => {
      window.removeEventListener('resize', updateSectionHeight); // Cleanup
    };
  }, []);
  
  const centerImageHeight = useTransform(
    scrollY,
    [0, sectionHeight + 800], // Updated to use sectionHeight state
    [sectionHeight, sectionHeight + 800] // Updated to use sectionHeight state
  );

  return (
    <motion.div 
      className="mx-auto max-w-full px-4 pt-[0px] sticky top-0 h-screen flex items-end"
      style={{ height: centerImageHeight }}
    >


      {/* Parallax Image */}
      <MobileParallaxImg
        src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/montain.png"
        alt="Mountain"
        start={0}
        end={0}
        stopAt={1000}
        initialScale={1}
        finalScale={0.3}
        className="w-full"
      />

    </motion.div>
  );
};

const MobileParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
  stopAt,
  initialScale,
  finalScale,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
  stopAt: number;
  initialScale: number;
  finalScale: number;
}) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const scale = useTransform(
    scrollY,
    [0, stopAt],
    [initialScale, finalScale],
    { clamp: true }
  );

  const y = useTransform(
    scrollY,
    [0, stopAt],
    [start, end],
    { clamp: true }
  );

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{
        y,
        scale,
        transformOrigin: 'bottom center',
      }}
    />
  );
};