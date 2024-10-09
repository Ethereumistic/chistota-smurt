"use client";
import { TextGenerateEffect } from "./text-gen";

const words = `СМЪР
`;

export function Smur() {
  return <TextGenerateEffect words={words} delay={2.4}
            className="text-black text-[60px] font-montserrat drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]"/>;
}
