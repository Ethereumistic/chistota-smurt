"use client";
import { TextGenerateEffect } from "./text-gen";

const words = `ИЛИ
`;

export function Ili() {
  return <TextGenerateEffect words={words} delay={1.6}
            className="text-black text-[25px] font-montserrat "/>;
}
