"use client";
import { TextGenerateEffect } from "./text-gen";


const words = `ЧИСТОТА ИЛИ СМЪРТ
`;

export function Logo() {

  return (

    <div className="flex flex-col items-center">

      <TextGenerateEffect words="ЧИСТОТА" className="text-white text-[40px] font-montserrat tracking-custom" filter={false} /> {/* First row */}

    <div className="flex flex-row items-center justify-center -translate-y-2 text-nowrap">
      <TextGenerateEffect words="ИЛИ СМЪР" className="text-black text-center  text-[25px] tracking-custom font-montserrat" filter={false} /> {/* Second row */}

      <TextGenerateEffect words="Т" className="text-black text-center text-[25px] rotate-[50deg] translate-y-1 -translate-x-1 tracking-custom font-montserrat" filter={false} /> {/* Rotated T */}
    </div>
    </div>
  );

}
