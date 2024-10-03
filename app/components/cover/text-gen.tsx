"use client";
import { useAnimate } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
    delay = 0,
  }: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
    delay?: number;
  }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split("");
  
    useEffect(() => {
      const staggerDelay = 0.2; // Define a fixed stagger delay
      const totalLetters = wordsArray.length;
  
      // Animate letters with the provided delay
      wordsArray.forEach((_, idx) => {
        animate(
          `span:nth-child(${idx + 1})`, 
          { opacity: 1, filter: filter ? "blur(0px)" : "none" }, 
          { duration, delay: delay + idx * staggerDelay } // Calculate delay for each letter
        );
      });
    }, [scope.current, delay]);
  
    const renderWords = () => {
      return (
        <motion.div ref={scope} style={{ display: 'inline-block' }}>
          {wordsArray.map((letter, idx) => {
            return (
              <motion.span
                key={letter + idx}
                className="opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {letter}
                {idx === 6 || idx === 9 ? " " : ""}
              </motion.span>
            );
          })}
        </motion.div>
      );
    };
  
    return (
      <div className={cn("", className)}>
        <div className="">
          <div className="leading-snug tracking-custom font-montserrat">
            {renderWords()}
          </div>
        </div>
      </div>
    );
  };