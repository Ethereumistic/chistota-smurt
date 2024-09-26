'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic';

type CenterType = 'Adult' | 'Underaged' | 'Mixed' | 'All';

// Dynamically import the TherapyMap component with SSR disabled
const TherapyMap = dynamic(() => import("./map"), {
    ssr: false,
    loading: () => <p>Зареждане на картата...</p>
  });

export default function Locations() {

    const [filter, setFilter] = useState<CenterType>('All');

    return (
      <div className="mt-10 grid grid-cols-3 items-center justify-items-center min-h-screen p-8 pb-24 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="col-span-1 flex  gap-4">
        <button 
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            All Centers
          </button>
          <button 
            onClick={() => setFilter('Adult')}
            className={`px-4 py-2 rounded ${filter === 'Adult' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Adult Centers
          </button>
          <button 
            onClick={() => setFilter('Underaged')}
            className={`px-4 py-2 rounded ${filter === 'Underaged' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Underaged Centers
          </button>
          <button 
            onClick={() => setFilter('Mixed')}
            className={`px-4 py-2 rounded ${filter === 'Mixed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Mixed Centers
          </button>
            
        </div> {/* 1/3 width */}




        <TherapyMap className="col-span-2" filter={filter} /> {/* 2/3 width */}
      </div>
    );
  }