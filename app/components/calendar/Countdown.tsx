import React, { ReactElement, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { DateTime } from 'luxon'

import CountdownCard from './CountdownCard'
import useIsMounted from './hooks/useIsMounted'

interface CurrentPrevious {
  current: Countdown
  previous: Countdown|null
}

interface Countdown {
  
  days: number
  hours: number
  minutes: number
  seconds: number
}

const getTimeLeft = (endDate: DateTime): Countdown => {
  const now = DateTime.local()
  const { days, hours, minutes, seconds } = endDate.diff(now, ['days', 'hours', 'minutes', 'seconds'])
  return {
    days: Math.max(0, Math.trunc(days)),
    hours: Math.max(0, Math.trunc(hours)),
    minutes: Math.max(0, Math.trunc(minutes)),
    seconds: Math.max(0, Math.trunc(seconds))
  }
}

const useCountdown = (endDate: DateTime): CurrentPrevious => {
  const initial = getTimeLeft(endDate)
  const [{ current, previous }, setCountdown] = useState<CurrentPrevious>({ current: initial, previous: null })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(({ current }) => {
        return {
          previous: current,
          current: getTimeLeft(endDate)
        }
      })
    }, 1000)
    return () => clearInterval(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { previous, current }
}

const Countdown = (): ReactElement => {
    const isMounted = useIsMounted()
    
    // Set the countdown to finish on December 8, 2024, at 18:00 Bulgarian time
    const endDate = DateTime.fromObject({ year: 2024, month: 12, day: 8, hour: 18 })

    const { current, previous } = useCountdown(endDate)

    if (!isMounted) return <></>

    return (
    <div className="flex flex-col items-center justify-center  space-y-10">
        <h1 className="text-6xl ">Остават...</h1>
      <div className="flex space-x-1 lg:space-x-10 ">
        <CountdownCard id={`days${current.days}-${previous?.days}`} label="ДНИ" key={`days${current.days}-${previous?.days}`} current={current.days} previous={previous?.days} />
        <CountdownCard id={`hours${current.hours}-${previous?.hours}`} label="ЧАСА" key={`hours${current.hours}-${previous?.hours}`} current={current.hours} previous={previous?.hours} />
        <CountdownCard id={`minutes${current.minutes}-${previous?.minutes}`} label="МИНУТИ" key={`minutes${current.minutes}-${previous?.minutes}`} current={current.minutes} previous={previous?.minutes} />
        <CountdownCard id={`seconds${current.seconds}-${previous?.seconds}`} label="СЕКУНДИ" key={`seconds${current.seconds}-${previous?.seconds}`} current={current.seconds} previous={previous?.seconds} />
      </div>
      <h1 className="text-6xl ">До премиерата ни в София</h1>

    </div>
    )
}

export default Countdown