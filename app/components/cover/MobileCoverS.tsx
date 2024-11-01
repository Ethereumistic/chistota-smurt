"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import Trailer from "@/app/movie/Trailer";
import Countdown from "../calendar/Countdown";

export function MobileCoverS() {
  const images = [
    "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/mobilecover.webp",

  ];
  return (
    <div>
        <div className="mt-24"/>
    <ImagesSlider className="aspect-[9/16] " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: 0,
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

      </motion.div>
    </ImagesSlider>

    <div className="-translate-y-12">
    <div className="bg-gradient-to-b from-black/0 to-black/[0.5] w-full h-12"></div>
    <div className="bg-gradient-to-t from-black/0 to-black/[0.5] w-full h-12"></div>
    </div>

              <p className="px-12 text-2xl max-w-3xl mx-auto font-montserrat text-black mb-16 text-center ">
            История за живота и пътя на шестима резиденти в терапевтична общност за зависими в България. Въпреки че много хора са чували за такива общности, малцина знаят как всъщност изглеждат и какво се случва в тях.
          </p>

    <Trailer />
    <Countdown />
    </div>
  );
}
