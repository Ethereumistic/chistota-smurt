'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import { therapyCenters } from './therapyCenters';

type CenterType = 'Терапевтична общност' | 'Програми за непълнолетни' | 'Частни Клиники' | 'All';

// Dynamically import the TherapyMap component with SSR disabled
const TherapyMap = dynamic(() => import("./map"), {
    ssr: false,
    loading: () => <p>Зареждане на картата...</p>
});

export default function Locations() {
    const [filter, setFilter] = useState<CenterType>('All');

    const lastScrollTop = useRef(0);
    const controls = useAnimation();

    const filteredCenters = filter === 'All' 
        ? therapyCenters 
        : therapyCenters.filter(center => center.type === filter);

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

    return (
        <div className="flex flex-col">
            <div className="mt-10 grid grid-cols-3 justify-items-center min-h-screen p-8 pb-24 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="col-span-1 flex-col flex gap-4">
                    <motion.div 
                        className="sticky top-[130px] flex gap-4 mb-4 p-4 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg"
                        initial={{ opacity: 1, y: 0 }}
                        animate={controls}
                        transition={{ duration: 0.2 }}
                    >
                        <button 
                            onClick={() => setFilter('All')}
                            className={`px-4 py-2 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            Всички
                        </button>
                        <button 
                            onClick={() => setFilter('Терапевтична общност')}
                            className={`px-4 py-2 rounded ${filter === 'Терапевтична общност' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            Терапевтична общност
                        </button>
                        <button 
                            onClick={() => setFilter('Програми за непълнолетни')}
                            className={`px-4 py-2 rounded ${filter === 'Програми за непълнолетни' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            Програми за непълнолетни
                        </button>
                        <button 
                            onClick={() => setFilter('Частни Клиники')}
                            className={`px-4 py-2 rounded ${filter === 'Частни Клиники' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            Частни Клиники
                        </button>
                    </motion.div>

                    <div className="mt-4">
                        {filteredCenters.map((center, index) => (
                            <div key={index} className="mb-4 p-4 border rounded shadow">
                                <h3 className="font-bold text-lg">{center.name}</h3>
                                <p><strong>Адрес:</strong> {center.address}</p>
                                <p><strong>Телефон:</strong></p>
                                <ul>
                                    {center.phone.map((phone: string, idx: number) => (
                                        <li key={idx}>{phone}</li>
                                    ))}
                                </ul>

                                <p><strong>Email:</strong></p>
                                <ul>
                                    {center.email.map((email: string, idx: number) => (
                                        <li key={idx}><a href={`mailto:${email}`}>{email}</a></li>
                                    ))}
                                </ul>                
                                <p><strong>Уебсайт:</strong> <a href={center.website} target="_blank" rel="noopener noreferrer">{center.website}</a></p>
                                <h4 className="font-bold mt-2">Дейности:</h4>
                                <ul className="list-disc list-inside">
                                    {center.activities.map((activity, idx) => (
                                        <li key={idx}>{activity}</li>
                                    ))}
                                </ul>
                                <h4 className="font-bold mt-2">Условия за прием:</h4>
                                <ul className="list-disc list-inside">
                                    {center.conditions.map((condition, idx) => (
                                        <li key={idx}>{condition}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div> {/* 1/3 width */}

                <TherapyMap className="col-span-2" filter={filter} /> {/* 2/3 width */}
            </div>
        </div>
    );
}