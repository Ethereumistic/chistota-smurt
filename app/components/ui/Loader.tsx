"use client"

import { motion } from "framer-motion";

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const, // Ensure this is a literal type
      duration: 1,
      ease: "circIn" as const, // Ensure this is a literal type
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1 mx-auto "
    >
      <motion.div variants={variants} className="h-12 w-2 bg-slate-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-slate-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-slate-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-slate-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-slate-500" />
    </motion.div>
  );
};

export default Loader;