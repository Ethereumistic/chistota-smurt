"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { DateTime } from 'luxon';

interface CountdownContextType {
  countdownEnded: boolean;
  endDates: DateTime[];
}

const CountdownContext = createContext<CountdownContextType>({ countdownEnded: false, endDates: [] });

export const CountdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const endDatess = [
    DateTime.fromObject({ year: 2024, month: 10, day: 29, hour: 21 }), // Sofia
    DateTime.fromObject({ year: 2024, month: 10, day: 29, hour: 21 }), // Plovdiv
    DateTime.fromObject({ year: 2024, month: 10, day: 29, hour: 21 }),  // Burgas
    DateTime.fromObject({ year: 2024, month: 10, day: 29, hour: 21 }), // Varna
  ];
  const endDates = [
    DateTime.fromObject({ year: 2024, month: 12, day: 6, hour: 19 }), // Sofia
    DateTime.fromObject({ year: 2024, month: 12, day: 11, hour: 18, minute: 30 }), // Plovdiv
    DateTime.fromObject({ year: 2024, month: 12, day: 12, hour: 19 }),  // Burgas
    DateTime.fromObject({ year: 2024, month: 12, day: 13, hour: 19 }), // Varna
  ];

  const [countdownEnded, setCountdownEnded] = useState(false);

  useEffect(() => {
    const checkCountdownStatus = () => {
      const currentDateTime = DateTime.local();
      const activeEndDateIndex = endDates.findIndex(endDate => endDate > currentDateTime);
      const countdownHasEnded = activeEndDateIndex === -1;
      setCountdownEnded(countdownHasEnded);
    };

    checkCountdownStatus();
    const timer = setInterval(checkCountdownStatus, 1000);

    return () => clearInterval(timer);
  }, [endDates]);

  return (
    <CountdownContext.Provider value={{ countdownEnded, endDates }}>
      {children}
    </CountdownContext.Provider>
  );
};

// Renamed from useCountdown to useCountdownContext
export const useCountdownContext = () => {
  return useContext(CountdownContext);
};