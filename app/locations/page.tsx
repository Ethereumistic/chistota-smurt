'use client'

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import { therapyCenters, TherapyCenter } from './therapyCenters';
import Accordion from '../components/Accordion';
import Loader from '../components/ui/Loader';

type CenterType = 'Терапевтични общности' | 'Програми за непълнолетни' | 'Дневни центрове' | 'Вечерни програми' | 'All';

// Dynamically import the TherapyMap component with SSR disabled
const TherapyMap = dynamic(() => import("./map"), {
    ssr: false,
    loading: () => <div><Loader /></div>
});

export default function Locations() {
    const [filter, setFilter] = useState<CenterType>('All');
    const [selectedCenter, setSelectedCenter] = useState<TherapyCenter | null>(null);




    const lastScrollTop = useRef(0);
    const controls = useAnimation();

    const filteredCenters = filter === 'All' 
        ? therapyCenters 
        : therapyCenters.filter(center => center.type === filter);

        // Function to count centers by type
        const countCenters = (type: CenterType) => {
            return type === 'All' ? therapyCenters.length : therapyCenters.filter(center => center.type === type).length;
        };


    useEffect(() => {
        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop.current) {
                // Scrolling down
                controls.start({ opacity: 0, y: -50 });
            } else {
                // Scrolling up
                controls.start({ opacity: 1, y: 0 });
            }
            lastScrollTop.current = st <= 0 ? 0 : st;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

        // Function to handle address click
        const handleAddressClick = useCallback((center: TherapyCenter) => {
            setSelectedCenter(center);
        }, []);

    return (
        <div className="flex flex-col">
            <div className="mt-10 grid grid-cols-3 justify-items-center min-h-screen p-8 pb-24 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="col-span-1 flex-col flex gap-4">
                <motion.div 
    className="sticky top-[130px] flex gap-2 mb-4 p-2 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg"
    initial={{ opacity: 1, y: 0 }}
    animate={controls}
    transition={{ duration: 0.2 }}
>
    <button 
        onClick={() => setFilter('All')}
        className={`relative flex items-center justify-start pl-1 pr-8 py-2 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
        <span className="text-left">Всички</span>
        <span className="absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {countCenters('All')}
        </span>
    </button>
    <button 
        onClick={() => setFilter('Терапевтични общности')}
        className={`relative flex items-center justify-start pl-1 pr-8 py-2 rounded ${filter === 'Терапевтични общности' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
        <span className="text-left">Терапевтична общност</span>
        <span className="absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {countCenters('Терапевтични общности')}
        </span>
    </button>
    <button 
        onClick={() => setFilter('Програми за непълнолетни')}
        className={`relative flex items-center justify-start pl-1 pr-6 py-2 rounded ${filter === 'Програми за непълнолетни' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
        <span className="text-left">Програми за непълнолетни</span>
        <span className="absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {countCenters('Програми за непълнолетни')}
        </span>
    </button>
    <button 
        onClick={() => setFilter('Дневни центрове')}
        className={`relative flex items-center justify-start pl-1 pr-5 py-2 rounded ${filter === 'Дневни центрове' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
        <span className="text-left">Дневни центрове</span>
        <span className="absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {countCenters('Дневни центрове')}
        </span>
    </button>
    <button 
        onClick={() => setFilter('Вечерни програми')}
        className={`relative flex items-center justify-start pl-1 pr-7 py-2 rounded ${filter === 'Вечерни програми' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
        <span className="text-left">Вечерни програми</span>
        <span className="absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {countCenters('Вечерни програми')}
        </span>
    </button>
</motion.div>

                    <div className="mt-4">
                    {filteredCenters.map((center, index) => (
                            <Accordion key={index} title={center.name}>
                                {/* ADDRESS */}
                                <p className='border-b border-gray-300 mb-4 pb-4 '>
                                    <strong className='mr-8'>📌Адрес:</strong> 
                                    <button 
                                        className='text-gray-500 underline cursor-pointer'
                                        onClick={() => handleAddressClick(center)}
                                    >
                                        {center.address}
                                    </button>
                                </p>

                                {/* PHONE */}
                                <div className='flex flex-row border-b border-gray-300 mb-4 pb-4'>
                                <p ><strong>📞Телефон:</strong></p>
                                <ul className='flex flex-row '>
                                    {center.phone.map((phone: string, idx: number) => (
                                        <li className='mx-8' key={idx}>{phone}</li>
                                    ))}
                                </ul>
                                </div>

                                {/* EMAIL */}
                                <div className='flex flex-row border-b border-gray-300 mb-4 pb-4'>
                                <p><strong>📧Email:</strong></p>
                                <ul className='flex flex-row '>
                                    {center.email.map((email: string, idx: number) => (
                                        <li className='mx-8' key={idx}>{email}</li>
                                    ))}
                                </ul>
                                </div>
              
                                {/* WEBSITE */}
                                <p className='border-b border-gray-300 mb-4 pb-4'><strong>🌎Уебсайт:</strong> <a href={center.website} target="_blank" rel="noopener noreferrer">{center.website}</a></p>
                                {center.activities && center.activities.length > 0 && (
                                    <>
                                        <h4 className="font-bold mt-2">🏐Дейности:</h4>
                                        <ul className="list-disc list-inside border-b border-gray-300 mb-4 pb-4 ">
                                            {center.activities.map((activity, idx) => (
                                                <li key={idx}>{activity}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                
                                {/* Conditions */}
                                {center.conditions && center.conditions.length > 0 && (
                                    <>
                                        <h4 className="font-bold mt-2">✅Условия за прием:</h4>
                                        <ul className="list-disc list-inside">
                                            {center.conditions.map((condition, idx) => (
                                                <li key={idx}>{condition}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}


                                {/* Conditionally render the workin hours section */}
                                {center.workingHours && center.workingHours.length > 0 && (
                                    <>
                                        <h4 className="font-bold mt-2">📆Работно време:</h4>
                                        <ul className="list-disc list-inside">
                                            {center.workingHours.map((workingHours, idx) => (
                                                <li className="" key={idx}>{workingHours}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                            </Accordion>
                                

                            
                        ))}
                        
                    </div>
                </div> {/* 1/3 width */}

                <TherapyMap className="col-span-2"  filter={filter} selectedCenter={selectedCenter} /> {/* 2/3 width */}
            </div>
        </div>
    );
}