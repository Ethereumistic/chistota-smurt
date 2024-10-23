"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export function MobileCoverT() {
  const bg = "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/mobilecover.png";
  const overlayImage = "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/montain.png"; // New overlay image



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
      {/* <Image 
        src={overlayImage} 
        alt="Overlay" 
        layout="intrinsic"
        width={overlayWidth} 
        height={100} 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 overlay-image" 
      /> */}
    </div>
    
      </div>
  );
}