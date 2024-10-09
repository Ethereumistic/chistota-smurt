'use client';
import React, { ReactElement, useEffect, useState } from 'react'
import { DateTime, Settings } from 'luxon'
import { motion } from 'framer-motion';
import CountdownCard from './CountdownCard'
import useIsMounted from './hooks/useIsMounted'
import { IconMapPin } from '@tabler/icons-react';


Settings.defaultLocale = "bg";

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
      DateTime.fromObject({ year: 2024, month: 12, day: 6, hour: 18 }), // Sofia
      DateTime.fromObject({ year: 2024, month: 12, day: 11, hour: 18 }), // Plovdiv
      DateTime.fromObject({ year: 2024, month: 12, day: 12, hour: 18 }),  // Burgas
      DateTime.fromObject({ year: 2024, month: 12, day: 13, hour: 18 }), // Varna
  ];

  const scheduleInfo = [
    { title: "София", location: "Кино Люмиер" },
    { title: "Пловдив", location: "Кино Лъки" },
    { title: "Бургас", location: "Ne se znae" },
    { title: "Варна", location: "Зала Европа ФКЦ Варна" },
  ];

  const cities = ["София", "Пловдив", "Бургас", "Варна"];


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
    <h2 className="text-3xl font-bold font-montserrat text-center px-6">ТРЕЙЛЪР</h2>
    <div className="relative aspect-video w-[85%] cst:w-[43%]"> {/* 16:9 Aspect Ratio */}
        <iframe 
            className="absolute top-0 left-0 w-full h-full" 
            src="https://www.youtube.com/embed/c1nYtX-NUsc" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
        ></iframe>
    </div>
    <div className="flex space-x-1 lg:space-x-10 ">
      <CountdownCard id={`days${current.days}-${previous?.days}`} label="ДНИ" key={`days${current.days}-${previous?.days}`} current={current.days} previous={previous?.days} />
      <CountdownCard id={`hours${current.hours}-${previous?.hours}`} label="ЧАСА" key={`hours${current.hours}-${previous?.hours}`} current={current.hours} previous={previous?.hours} />
      <CountdownCard id={`minutes${current.minutes}-${previous?.minutes}`} label="МИНУТИ" key={`minutes${current.minutes}-${previous?.minutes}`} current={current.minutes} previous={previous?.minutes} />
      <CountdownCard id={`seconds${current.seconds}-${previous?.seconds}`} label="СЕКУНДИ" key={`seconds${current.seconds}-${previous?.seconds}`} current={current.seconds} previous={previous?.seconds} />
    </div>
    <h2 className="text-3xl font-bold font-montserrat text-center px-6">Остават до премиерата ни в {activeCity}</h2> {/* Display the city name */}
    <div className="w-full">
    <Schedule endDates={endDates} scheduleInfo={scheduleInfo} />
    </div>
  </div>
  )
}

const Schedule = ({ endDates, scheduleInfo }: { endDates: DateTime[], scheduleInfo: { title: string, location: string }[] }) => {
  const currentDateTime = DateTime.local();

  const activeScheduleItems = endDates.map((endDate, index) => ({
    ...scheduleInfo[index],
    date: endDate.toFormat('d MMMM').toUpperCase(),
    time: endDate.toFormat('HH:mm'),
    endDate
  })).filter(item => item.endDate > currentDateTime);

  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="my-20 text-4xl text-center font-black uppercase text-black"
      >
        ПРЕМИЕРИ
      </motion.h1>
      {activeScheduleItems.map((item, index) => (
        <ScheduleItem
          key={index}
          title={item.title}
          date={item.date}
          time={item.time}
          location={item.location}
        />
      ))}
    </section>
  );
};

const ScheduleItem = ({
  title,
  date,
  location,
  time,
}: {
  title: string;
  date: string;
  location: string;
  time: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-gray-900 font-montserrat">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
        <p className="text-sm uppercase text-zinc-500">{time}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-gray-900">
        <p>{location}</p>
        <IconMapPin />
      </div>
    </motion.div>
  );
};

export default Countdown



