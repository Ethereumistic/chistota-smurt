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

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const [isMobile, setIsMobile] = useState(false);
  const causeRef = useRef<HTMLDivElement | null>(null); // Create a ref
  const [isModalOpen, setIsModalOpen] = useState(true);

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
      <ReactLenis root options={{ lerp: 0.05 }}>
      {!isMobile && <TestScroll />}
      {isMobile && <MobileCover />}
      </ReactLenis>
      {/* <TestScroll /> */}
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