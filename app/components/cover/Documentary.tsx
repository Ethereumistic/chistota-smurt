"use client";
import { TextGenerateEffect } from "./words-gen";

const words = `Документален филм на Даниел Ненов
`;

export function Documentary() {
  return <TextGenerateEffect words={words} 
            className="text-black scale-75 xs:scale-100 text-[40px] font-montserrat text-nowrap "/>;
}
