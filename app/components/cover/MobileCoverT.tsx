import React from "react";
import Image from "next/image";
import Trailer from "@/app/movie/Trailer";
import Countdown from "../calendar/Countdown";

export function MobileCoverT() {
  const bg = "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/mobilecover.webp";



  return (
    <div className="mt-24">
    <div className="relative h-screen overflow-hidden">
      <Image 
        src={bg} 
        alt="Background" 
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
          

    </div>
    <div className="-translate-y-12">
    <div className="bg-gradient-to-b from-black/0 to-black/[0.5] w-full h-12"></div>
    <div className="bg-gradient-to-t from-black/0 to-black/[0.5] w-full h-12"></div>
    </div>

              <p className="px-12 text-2xl max-w-3xl mx-auto font-montserrat text-black mb-16 text-center ">
            История за живота и пътя на шестима резиденти в терапевтична общност за зависими в България. Въпреки че много хора са чували за такива общности, малцина знаят как всъщност изглеждат и какво се случва в тях.
          </p>

    <Trailer />
    <Countdown />

      </div>
  );
}