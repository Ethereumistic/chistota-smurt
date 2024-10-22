"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://cdn.discordapp.com/attachments/1293519006715613204/1297917994126676058/image_50773505-2048x1564.jpg?ex=67185493&is=67170313&hm=8f1f253753e4b94c870ca22784d2a8229abff23ada5a1738b48ea33395b20def&",
    "https://cdn.discordapp.com/attachments/1293519006715613204/1297918016691900426/image_67509249-2048x1536.jpg?ex=67185499&is=67170319&hm=449dc2daceaa1aa33f11f1a759532f0e9852d0bde5ca891230e06a883356552f&",
  ];
  return (
    <ImagesSlider className="h-[32rem]" images={images}>
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
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}
