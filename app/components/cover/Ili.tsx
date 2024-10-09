"use client";
import { TextGenerateEffect } from "./text-gen";

const words = `ИЛИ
`;

export function Ili() {
  return <TextGenerateEffect words={words} delay={1.6}
            className="text-black text-[60px] font-montserrat drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]"/>;
}
