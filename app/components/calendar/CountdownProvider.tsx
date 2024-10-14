"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { DateTime } from 'luxon';

interface CountdownContextType {
  countdownEnded: boolean;
  endDates: DateTime[];
}

const CountdownContext = createContext<CountdownContextType>({ countdownEnded: false, endDates: [] });

export const CountdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const endDates = [
    DateTime.fromObject({ year: 2024, month: 10, day: 15, hour: 9 }), // Sofia
    DateTime.fromObject({ year: 2024, month: 10, day: 15, hour: 9 }), // Plovdiv
    DateTime.fromObject({ year: 2024, month: 10, day: 15, hour: 9 }),  // Burgas
    DateTime.fromObject({ year: 2024, month: 10, day: 15, hour: 9 }), // Varna
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