'use client'

import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import i18next from './i18n'
import Countdown from './components/calendar/Countdown'
import { MobileCover } from './components/cover/MobileCover'
import { TestScroll } from './components/cover/TestScroll'

import { SmoothScrollHero } from './components/cover/SmoothScrollHero'
import ScrollTracker from './components/cover/ScrollTracker'
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
      {/* <ScrollTracker /> */}
      {/* <Cover /> */}
      {!isMobile && <TestScroll />}
      {isMobile && <MobileCover />}
    </div>
  );
}