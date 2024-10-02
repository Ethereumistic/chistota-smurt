"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
      <div className="h-[40rem] rounded-md flex antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={images}
          direction="right"
          speed="slow"
        />
      </div>
    );
  }
  
  const images = [
    {
      image: "https://credissimo.bg/frontend/images/credissimo-logo.svg",
      alt: "Credissimo logo",
      type: "rectangular" as "rectangular", // Explicitly set type
    },
    {
      image: "https://www.easypay.bg/site/img/logo-easypay-sm.svg",
      alt: "Square logo example",
      type: "square" as "square", // Explicitly set type
    },
    {
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/foundation-logo.png",
      alt: "Credissimo logo",
      type: "rectangular" as "rectangular", // Explicitly set type
    },
    {
      image: "https://cashcredit.bg/web/images/logo.svg",
      alt: "Another square logo example",
      type: "square" as "square", // Explicitly set type
    },
  ];