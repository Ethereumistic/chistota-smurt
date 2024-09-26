'use client'

import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import i18next from './i18n'
import Countdown from './components/calendar/Countdown'

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation()

  useEffect(() => {
    i18next.changeLanguage(lng)
  }, [lng])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div className="mt-[620px] ">
      <Countdown />
      </div>
      <div className="mt-[620px] ">
      <h1 className="text-6xl mb-20 mt-20">{t('hello')}</h1>
      </div>

      {/* ... other elements ... */}
    </div>
  );
}