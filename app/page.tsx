'use client'

import { useEffect, useState } from 'react'
import { MobileCover } from './components/cover/MobileCover'
import { TestScroll } from './components/cover/TestScroll'

import ScrollTracker from './components/cover/ScrollTracker'
import WrappedScrollButton from './components/ui/ScrollButton'

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 932);
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
      {/* <ScrollTracker /> */}
      <WrappedScrollButton />
    </div>
  );
}