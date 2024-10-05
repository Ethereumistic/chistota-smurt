import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Countdown from "../calendar/Countdown";

const MOUNTAIN_IMAGE_URL = "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/montain.png";
const BACKGROUND_IMAGE_URL = "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg.png";


export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    // Static background
    const backgroundY = "0%"; // Keep the background static
  
    // Rubberband effect for the mountain layer
    const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Adjust the range for the effect
  
    return (
      <div
        ref={ref}
        className="w-full h-[2688px] overflow-hidden relative grid place-items-center border-2 border-red-500" // Added border for debugging
      >
        <motion.h1
          style={{ y: 0 }} // Keep the text static
          className="font-bold text-white text-7xl md:text-9xl relative z-10"
        >
          PARALLAX
        </motion.h1>
  
        <motion.div
          className="absolute inset-0 z-0 border-2 border-blue-500" // Added border for debugging
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY, // Static background
          }}
        />
        <motion.div
          className="absolute inset-0 z-20 border-2 border-green-500" // Added border for debugging
          style={{
            backgroundImage: `url(${MOUNTAIN_IMAGE_URL})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountainY, // Apply rubberband effect
          }}
        />
        <Countdown />
      </div>
    );
  }