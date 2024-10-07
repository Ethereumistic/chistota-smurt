'use client';
import React, { ReactElement, useEffect, useState } from 'react'
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

    // const endDate = DateTime.fromObject({ year: 2024, month: 12, day: 8, hour: 18 })

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

const Countdown = (): ReactElement | null => {
  const isMounted = useIsMounted()

  // Define end dates for each premiere location
  const endDates = [
      DateTime.fromObject({ year: 2024, month: 12, day: 8, hour: 18 }), // Sofia
      DateTime.fromObject({ year: 2024, month: 12, day: 15, hour: 18 }), // Plovdiv
      DateTime.fromObject({ year: 2024, month: 12, day: 22, hour: 18 }), // Varna
      DateTime.fromObject({ year: 2024, month: 12, day: 29, hour: 18 })  // Zagora
  ];

  const cities = ["София", "Пловдив", "Варна", "Загорa"];


  // Find the next active end date
  const currentDateTime = DateTime.local();
  const activeEndDateIndex = endDates.findIndex(endDate => endDate > currentDateTime);
  const activeEndDate = activeEndDateIndex !== -1 ? endDates[activeEndDateIndex] : endDates[endDates.length - 1];
  const activeCity = cities[activeEndDateIndex !== -1 ? activeEndDateIndex : cities.length - 1];

  const { current, previous } = useCountdown(activeEndDate)

  if (!isMounted || (current.days === 0 && current.hours === 0 && current.minutes === 0 && current.seconds === 0)) {
      return null // Stop rendering if the countdown has finished
  }

  return (
  <div className="flex flex-col items-center justify-center space-y-10">
    <div className="flex space-x-1 lg:space-x-10 ">
      <CountdownCard id={`days${current.days}-${previous?.days}`} label="ДНИ" key={`days${current.days}-${previous?.days}`} current={current.days} previous={previous?.days} />
      <CountdownCard id={`hours${current.hours}-${previous?.hours}`} label="ЧАСА" key={`hours${current.hours}-${previous?.hours}`} current={current.hours} previous={previous?.hours} />
      <CountdownCard id={`minutes${current.minutes}-${previous?.minutes}`} label="МИНУТИ" key={`minutes${current.minutes}-${previous?.minutes}`} current={current.minutes} previous={previous?.minutes} />
      <CountdownCard id={`seconds${current.seconds}-${previous?.seconds}`} label="СЕКУНДИ" key={`seconds${current.seconds}-${previous?.seconds}`} current={current.seconds} previous={previous?.seconds} />
    </div>
    <h2 className="text-4xl font-bold">Остават до премиерата ни в {activeCity}</h2> {/* Display the city name */}

  </div>
  )
}

export default Countdown