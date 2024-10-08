"use client";
import { TextGenerateEffect } from "./text-gen";
import { motion } from "framer-motion";

const words = `Т
`;

export function T() {
    return (
      <motion.div
        initial={{ rotate: 0, translateY: 0 }} // Initial state
        animate={{ rotate: 50, translateY: 6 }} // Final state
        transition={{ delay: 3.5, duration: 0.5 }} // Delay and duration for the animation
      >
        <TextGenerateEffect
          words={words}
          className="text-black text-[60px] font-montserrat"
          delay={3.2} // Delay for the text animation
        />
      </motion.div>
    );
  }