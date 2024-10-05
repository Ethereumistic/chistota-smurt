'use client'

import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import i18next from './i18n'
import Countdown from './components/calendar/Countdown'
import { Cover } from './components/cover/Cover'
import { TestScroll } from './components/cover/TestScroll'

import { SmoothScrollHero } from './components/cover/SmoothScrollHero'
import ScrollTracker from './components/cover/ScrollTracker'
export default function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = useTranslation()

  // useEffect(() => {
  //   i18next.changeLanguage(lng)
  // }, [lng])
  const MOUNTAIN_IMAGE_URL = "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/montain.png";

const BACKGROUND_IMAGE_URL = "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg.png";

  return (
    <div>
      <ScrollTracker />
      {/* <Cover /> */}
      <TestScroll />

      
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] z-50">
      
      
      <div className="mt-[620px] ">
        
      {/* <Countdown /> */}
      </div>
      <div className="mt-[620px] text-cream">
      <h1 className="text-6xl mb-20 mt-20">hello</h1>
      <h1 className="text-6xl mb-20 mt-20">hello</h1>
      <h1 className="text-6xl mb-20 mt-20">hello</h1>
      <h1 className="text-6xl mb-20 mt-20">hello</h1>
      <h1 className="text-6xl mb-20 mt-20">hello</h1>
      <h1 className="text-6xl mb-20 mt-20">hello</h1>
      </div>
      

      {/* ... other elements ... */}
    </div>
    </div>
  );
}