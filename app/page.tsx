'use client'

import { useEffect, useRef, useState } from 'react'
import Cause from './components/ui/Cause'
import WrappedScrollButton from './components/ui/ScrollButton'
import WrappedShareButton from './components/ui/ShareButton'
import WrappedBuyTicketButton from './components/ui/BuyTicketButton'
import { ReactLenis } from 'lenis/react'
import LowerThirdModal from './components/ui/LowerThirdModal'
import { TestScroll2 } from './components/cover/TestScroll2'
import { MobileCoverT } from './components/cover/MobileCoverT'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const causeRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080 || window.innerHeight < 767);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <ReactLenis root options={{ lerp: 0.05 }}>
        <div >
          {!isMobile && <TestScroll2 />}
          {isMobile && <MobileCoverT /> }

      <div ref={causeRef}>
        <Cause causeRef={causeRef} />
      </div>
      <LowerThirdModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        />      
            {!isMobile && <WrappedShareButton causeRef={causeRef} />}
            {isMobile && <WrappedBuyTicketButton /> }
      <WrappedScrollButton causeRef={causeRef} />
    </div>
        </ReactLenis>
  );
}