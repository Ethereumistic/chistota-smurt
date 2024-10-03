"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./images-slider";
import Countdown from "../calendar/Countdown";



export function Cover() {
  const images = [
    "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/v1-expanded.png",
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ImagesSlider className="h-[300vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >


        <div className="mb-[1500px]">
          <Countdown />
        </div>

      </motion.div>
    </ImagesSlider>
  );
}
