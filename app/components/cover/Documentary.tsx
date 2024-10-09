"use client";
import { TextGenerateEffect } from "./words-gen";

const words = `Документален филм от Даниел Ненов
`;

export function Documentary() {
  return <TextGenerateEffect words={words} 
            className="text-black text-[40px] font-montserrat "/>;
}
