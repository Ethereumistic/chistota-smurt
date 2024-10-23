"use client";
import React from "react";
import Image from "next/image";

export function MobileCoverT() {
  const bg = "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg-s.png";
  const overlayImage = "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/montain.png"; // New overlay image

  return (
    <div>
    <div className="relative h-screen overflow-hidden"> {/* Full height for mobile/tablet */}
      <Image 
        src={bg} 
        alt="Background" 
        layout="fill" // Fill the parent container
        objectFit="cover" // Cover the entire area
        className="z-0" // Background image behind other elements
      />
      <Image 
        src={overlayImage} 
        alt="Overlay" 
        layout="intrinsic" // Use intrinsic layout for responsive sizing
        width={350} // Set width to half of the background image width (adjust as needed)
        height={100} // Set height to half of the background image height (adjust as needed)
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 " // Center the overlay image
      />
    </div>
    
      </div>
  );
}