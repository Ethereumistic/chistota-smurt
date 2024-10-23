'use client'

import { useEffect, useRef, useState } from 'react'
import { MobileCover } from './components/cover/MobileCover'
import { TestScroll } from './components/cover/TestScroll'
import Cause from './components/ui/Cause'
import ScrollTracker from './components/cover/ScrollTracker'
import WrappedScrollButton from './components/ui/ScrollButton'
import WrappedShareButton from './components/ui/ShareButton'
import { ReactLenis } from 'lenis/react'
import LowerThirdModal from './components/ui/LowerThirdModal'
import { TestScroll2 } from './components/cover/TestScroll2'
import { MobileCover2 } from './components/cover/MobileCover2'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const causeRef = useRef<HTMLDivElement | null>(null); // Create a ref
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Update logic to check width and height
      setIsMobile(window.innerWidth < 1080 || window.innerHeight < 780);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div >
      {/* <Cover /> */}
      <ReactLenis root options={{ lerp: 0.05 }}>
      {!isMobile && <TestScroll2 />}
      {isMobile && <MobileCover2 />}
      </ReactLenis>

      {/* <ScrollTracker /> */}
      <div ref={causeRef}>
        <Cause causeRef={causeRef} />
      </div>
      <LowerThirdModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />      <WrappedShareButton causeRef={causeRef} />
      <WrappedScrollButton causeRef={causeRef} />
    </div>
  );
}