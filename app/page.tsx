'use client'

import { useEffect, useRef, useState } from 'react'
import { MobileCover } from './components/cover/MobileCover'
import { TestScroll } from './components/cover/TestScroll'
import Cause from './components/ui/Cause'
import ScrollTracker from './components/cover/ScrollTracker'
import WrappedScrollButton from './components/ui/ScrollButton'
import WrappedShareButton from './components/ui/ShareButton'

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

      <h1 className="text-3xl text-black font-bold mb-6">ВСИЧКИ СЪБИТИЯ НА СЪЗДАТЕЛЯ</h1>
      <div><h1 className="text-3xl text-black font-bold mb-6">ЗА ПЛОВДИВ</h1>
                <iframe style={{ width: '100%', height: '100vh' }} src="https://bilet.bg/bg/promoters/aura-by-bamboo-146547?noframe=true" ></iframe>
                <a href="https:///bilet.bg" target="_blank">Модул за продажба на билети от Билет точка бг</a></div>
      {/* <ScrollTracker /> */}


      <div><h1 className="text-3xl text-black font-bold mb-6">ЗА СОФИЯ</h1>
                <iframe style={{ width: '100%', height: '100vh' }} 
                src="https://bilet.bg/bg/events/terra-x-yoyaku-satoshi-tomie-roger-gerressen-5586-5586?noframe=true"
                ></iframe>
                <a href="https:///bilet.bg" target="_blank">Модул за продажба на билети от Билет точка бг</a>
                </div>
      <WrappedShareButton />
      <WrappedScrollButton causeRef={causeRef} />
    </div>
  );
}