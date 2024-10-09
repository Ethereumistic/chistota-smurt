"use client";
import { TextGenerateEffect } from "./text-gen";

const words = `ЧИСТОТА
`;

export function Chistota() {
  return <TextGenerateEffect words={words} delay={0.5}
            className="text-white text-[120px] font-montserrat drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]"/>;
}
