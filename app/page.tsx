'use client'

import { useEffect, useRef, useState } from 'react'
import { MobileCover } from './components/cover/MobileCover'
import { TestScroll } from './components/cover/TestScroll'
import Cause from './components/ui/Cause'
import ScrollTracker from './components/cover/ScrollTracker'
import WrappedScrollButton from './components/ui/ScrollButton'

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const [isMobile, setIsMobile] = useState(false);
  const causeRef = useRef<HTMLDivElement | null>(null); // Create a ref

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* <Cover /> */}
      {!isMobile && <TestScroll />}
      {isMobile && <MobileCover />}
      {/* <TestScroll /> */}
      <div ref={causeRef}>
        <Cause causeRef={causeRef} />
      </div>
      {/* <ScrollTracker /> */}
      <WrappedScrollButton causeRef={causeRef} />
    </div>
  );
}