'use client'

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import { therapyCenters, TherapyCenter } from './therapyCenters';
import Accordion from '../components/Accordion';
import Loader from '../components/ui/Loader';
import { useRouter } from 'next/navigation'; // Update import


type CenterType = 'Терапевтични общности' | 'Програми за непълнолетни' | 'Дневни центрове' | 'Вечерни програми' | 'All';

// Dynamically import the TherapyMap component with SSR disabled
const TherapyMap = dynamic(() => import("./map"), {
    ssr: false,
    loading: () => <div><Loader /></div>
});

export default function Locations() {
    const router = useRouter(); // Initialize the router
    const [filter, setFilter] = useState<CenterType>('All');
    const [selectedCenter, setSelectedCenter] = useState<TherapyCenter | null>(null);

    const [showAllAccordions, setShowAllAccordions] = useState(false); // New state to control showing all accordions
    const [showAccordions, setShowAccordions] = useState(false); // New state to control accordion visibility
    const [isMobile, setIsMobile] = useState(false); 
    const [isToggled, setIsToggled] = useState(false);

    // Function to handle button clicks and show accordions
    const handleButtonClick = (filterType: CenterType) => {
        setFilter(filterType);
        router.push(`?filter=${filterType}`);
        setShowAccordions(true);
        setShowAllAccordions(false);
        setIsToggled(true); // Set toggle to true when a category is selected
    };

    // Updated toggleAllAccordions function
    const toggleAllAccordions = () => {
        const newToggledState = !isToggled;
        setIsToggled(newToggledState);
        
        if (newToggledState) {
            setShowAllAccordions(true);
            setFilter('All');
            router.push('?filter=All');
            setShowAccordions(true);
        } else {
            setShowAllAccordions(false);
            setShowAccordions(false);
        }
    };

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
            const handleResize = () => {
                setIsMobile(window.innerWidth < 932);
            };
    
            handleResize(); // Check on mount
            window.addEventListener('resize', handleResize); // Add event listener for resize
    
            return () => window.removeEventListener('resize', handleResize); // Cleanup
        }, []);


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

    
    useEffect(() => {
        // Set the filter based on the query parameter if it exists
        const queryFilter = new URLSearchParams(window.location.search).get('filter');
        if (queryFilter) {
            setFilter(queryFilter as CenterType);
        }
    }, []); // Run once on mount

        // Function to handle address click
        const handleAddressClick = useCallback((center: TherapyCenter) => {
            setSelectedCenter(center);
            
            // Add this new code
            if (isMobile) {
                // Find the map element
                const mapElement = document.querySelector('.col-span-2');
                if (mapElement) {
                    // Scroll to the map element with smooth behavior
                    mapElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }, [isMobile]); // Add isMobile to the dependency array

        const buttonText = showAllAccordions || (filter !== 'All' && showAccordions) 
        ? 'Скрии всички' 
        : 'Покажи всички';

    return (
        <div className="flex flex-col">
            <div className="mt-10 grid grid-cols-1 3xl:grid-cols-3 justify-items-center min-h-screen p-8 pb-24 gap-0 3xl:gap-4 space-x-0 3xl:space-x-8  font-[family-name:var(--font-geist-sans)]">
                <div className="col-span-1 flex-col flex mt-8 w-full md:w-auto ml-0 ">
                <motion.div 
                    className="sticky top-[120px] justify-center items-center flex lg:flex-row flex-col gap-2 mb-4 p-2 bg-ddblue border border-gray-700 rounded-lg z-[5001]"
                    initial={{ opacity: 1, y: 0 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                >
        {isMobile ? (
            <div className="flex items-center space-x-2">
                <label
                    htmlFor="toggleAccordions"
                    className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-lblue"
                >
                    <input
                        type="checkbox"
                        id="toggleAccordions"
                        checked={isToggled}
                        onChange={toggleAllAccordions}
                        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                    />

                    <span
                        className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-lblue"
                    >
                        <svg
                            data-unchecked-icon
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <svg
                            data-checked-icon
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </label>
                <span className="text-left">{isToggled ? 'Скрии всички' : 'Покажи всички'}</span>
            </div>
        ) : (
                        <button 
                            onClick={() => handleButtonClick('All')} // Updated to use the new function
                            className={`relative flex items-center justify-start pl-1 pr-8 py-2 rounded ${filter === 'All' ? 'bg-lblue text-cream' : 'bg-dblue'}`}
                        >
                            <span className="text-left">Всички центрове</span>
                            <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'All' ? 'bg-red-500 text-cream' : 'bg-lblue'}`}>
                                {countCenters('All')}
                            </span>
                        </button>
                    )}
    
                    <button 
                        onClick={() => handleButtonClick('Терапевтични общности')}
                        className={`relative flex items-center justify-start pl-1 pr-8 py-2 rounded ${filter === 'Терапевтични общности' ? 'bg-lblue text-cream' : 'bg-dblue'}`}
                    >
        <span className="text-left">Терапевтична общност</span>
        <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'Терапевтични общности' ? 'bg-red-500 text-cream' : 'bg-lblue'}`}>
            {countCenters('Терапевтични общности')}
        </span>
    </button>


    <button 
        onClick={() => handleButtonClick('Програми за непълнолетни')}
        className={`relative flex items-center justify-start pl-1 pr-6 py-2 rounded ${filter === 'Програми за непълнолетни' ? 'bg-lblue text-cream' : 'bg-dblue'}`}
    >
        <span className="text-left">Програми за непълнолетни</span>
        <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'Програми за непълнолетни' ? 'bg-red-500 text-cream' : 'bg-lblue'}`}>
            {countCenters('Програми за непълнолетни')}
        </span>
    </button>


    <button 
        onClick={() => handleButtonClick('Дневни центрове')}
        className={`relative flex items-center justify-start pl-1 pr-5 py-2 rounded ${filter === 'Дневни центрове' ? 'bg-lblue text-cream' : 'bg-dblue'}`}
    >
        <span className="text-left">Дневни центрове</span>
        <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'Дневни центрове' ? 'bg-red-500 text-cream' : 'bg-lblue'}`}>
            {countCenters('Дневни центрове')}
        </span>
    </button>
    <button 
        onClick={() => handleButtonClick('Вечерни програми')}
        className={`relative flex items-center justify-start pl-1 pr-7 py-2 rounded ${filter === 'Вечерни програми' ? 'bg-lblue text-cream' : 'bg-dblue'}`}
    >
        <span className="text-left">Вечерни програми</span>
        <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'Вечерни програми' ? 'bg-red-500 text-cream' : 'bg-lblue'}`}>
            {countCenters('Вечерни програми')}
        </span>
    </button>
</motion.div>

                    <div className="mt-4 w-full">
                    {(!isMobile || showAccordions) && filteredCenters.map((center, index) => ( // Conditional rendering based on isMobile
                        <Accordion key={index} title={center.name}>
                                {/* ADDRESS */}
                                <p className='border-b border-gray-600 mb-4 pb-4 '>
                                    <strong className='mr-8'>📌Адрес:</strong> 
                                    <button 
                                        className='text-llblue underline cursor-pointer'
                                        onClick={() => handleAddressClick(center)}
                                    >
                                        {center.address}
                                    </button>
                                </p>

                                {/* PHONE */}
                                <div className='flex flex-row border-b border-gray-600 mb-4 pb-4'>
                                <p ><strong>📞Телефон:</strong></p>
                                <ul className='flex flex-col cst:flex-row '>
                                    {center.phone.map((phone: string, idx: number) => (
                                        <li className='mx-8' key={idx}>{phone}</li>
                                    ))}
                                </ul>
                                </div>

                                {/* EMAIL */}
                                <div className='flex flex-row border-b border-gray-600 mb-4 pb-4'>
                                <p><strong>📧Email:</strong></p>
                                <ul className='flex flex-col cst:flex-row'>
                                    {center.email.map((email: string, idx: number) => (
                                        <li className='mx-8' key={idx}>{email}</li>
                                    ))}
                                </ul>
                                </div>
              
                                {/* WEBSITE */}
                                <p className='border-b border-gray-600 mb-4 pb-4'><strong>🌎Уебсайт:</strong> <a className='text-llblue underline cursor-pointer mx-8' href={center.website} target="_blank" rel="noopener noreferrer">{center.website}</a></p>
                                {center.activities && center.activities.length > 0 && (
                                    <>
                                        <h4 className="font-bold mt-2">🏐Дейности:</h4>
                                        <ul className="list-disc list-inside border-b border-gray-600 mb-4 pb-4 ">
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

                <TherapyMap className="col-span-2 relative z-[5001] "  filter={filter} selectedCenter={selectedCenter} />
            </div>
        </div>
    );
}