'use client'

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import { therapyCenters, TherapyCenter } from './therapyCenters';
import Accordion from '../components/Accordion';
import Loader from '../components/ui/Loader';
import { useRouter } from 'next/navigation'; // Update import
import Link from 'next/link';
import { IconExternalLink } from '@tabler/icons-react';


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

    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const accordionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    
    const handleMarkerClick = useCallback((center: TherapyCenter) => {
        setSelectedCenter(center);
        
        if (!isMobile) {
            setOpenAccordion(center.name);
            setShowAccordions(true);
            setIsToggled(true);
            
            setTimeout(() => {
                const accordionElement = accordionRefs.current[center.name];
                if (accordionElement) {
                    const elementPosition = accordionElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 180;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
        // On mobile, we don't open the accordion or scroll
    }, [isMobile]);

    const handleViewMoreInfo = useCallback((center: TherapyCenter) => {
        setSelectedCenter(center);
        setOpenAccordion(center.name);
        setShowAccordions(true);
        setIsToggled(true);
    
        setTimeout(() => {
            const accordionElement = accordionRefs.current[center.name];
            if (accordionElement) {
                const elementPosition = accordionElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 98;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 300);
    }, []);

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
                setIsMobile(window.innerWidth < 1780);
            };
    
            handleResize(); // Check on mount
            window.addEventListener('resize', handleResize); // Add event listener for resize
    
            return () => window.removeEventListener('resize', handleResize); // Cleanup
        }, []);


    // useEffect(() => {
    //     const handleScroll = () => {

            
    //         const st = window.pageYOffset || document.documentElement.scrollTop;
    //         if (st > lastScrollTop.current) {
    //             // Scrolling down
    //             controls.start({ opacity: 0, y: -150 });
    //         } else {
    //             // Scrolling up
    //             controls.start({ opacity: 1, y: 0 });
    //         }
    //         lastScrollTop.current = st <= 0 ? 0 : st;
    //     };

    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [controls]);

    
    useEffect(() => {
        // Set the filter based on the query parameter if it exists
        const queryFilter = new URLSearchParams(window.location.search).get('filter');
        if (queryFilter) {
            setFilter(queryFilter as CenterType);
        }
    }, []); // Run once on mount

    useEffect(() => {

        window.scrollTo(0, 0); // Scroll to top when the post is fetched
    }, []);
        

        // Function to handle address click
        const handleAddressClick = useCallback((center: TherapyCenter) => {
            setSelectedCenter(center);
            
            // Add this new code
            if (isMobile) {
                // Find the map element
                const mapElement = document.querySelector('.col-span-2');
                if (mapElement) {
                    // Calculate the position with an offset
                    const elementPosition = mapElement.getBoundingClientRect().top + window.pageYOffset - 100; // Adjust the offset as needed
                    
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }, [isMobile]); // Add isMobile to the dependency array


    return (
        <div className=" ">
        <div className="flex flex-col ">
            <div className="mt-10 grid grid-cols-1 3xl:grid-cols-3 justify-items-center min-h-screen p-8 pb-24 gap-0 3xl:gap-4 space-x-0 3xl:space-x-8  font-[family-name:var(--font-geist-sans)]">
                <div className="col-span-1 flex-col flex w-full 3xl:w-auto ml-0 ">
                <motion.div 
                    className="relative 3xl:sticky top-[40px] 3xl:top-[96px] justify-center items-center flex lg:flex-row flex-col gap-2 mb-4 p-2  bg-zinc-300 z-[5001]"
                    initial={{ opacity: 1, y: 0 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                >
        {isMobile ? (
            <div className="flex w-[66%] justify-between bg-gradient-to-l from-gray-400/[0.5] to-gray-500/[0.5] rounded-lg p-2">
                                
                <div className="-mt-1">
                <label
                    htmlFor="toggleAccordions"
                    className="absolute  border border-gray-600 inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-purple-600"
                >
                    <input
                        type="checkbox"
                        id="toggleAccordions"
                        checked={isToggled}
                        onChange={toggleAllAccordions}
                        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                    />

                    <span
                        className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-purple-600"
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
                </div>
                <span className=" text-black">{isToggled ? 'Скрии всички' : 'Покажи всички'}</span>
            </div>
        ) : (
                        <button 
                            onClick={() => handleButtonClick('All')} // Updated to use the new function
                            className={`relative flex items-center justify-start pl-1 pr-8 py-2 rounded w-[66%] ${filter === 'All' ? 'bg-purple-600  text-white' : 'bg-gray-400 text-black'}`}
                        >
                            <span className="text-left">Всички центрове</span>
                            <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'All' ? 'bg-purple-900' : 'bg-gray-500'}`}>
                                {countCenters('All')}
                            </span>
                        </button>
                    )}
    
                    <button 
                        onClick={() => handleButtonClick('Терапевтични общности')}
                        className={`relative flex items-center justify-start pl-1 pr-8 py-2 rounded w-[66%] ${filter === 'Терапевтични общности' ? 'bg-purple-600  text-white' : 'bg-gray-400 text-black'}`}
                    >
        <span className="text-left">Терапевтична общност</span>
        <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'Терапевтични общности' ? 'bg-purple-900' : 'bg-gray-500'}`}>
            {countCenters('Терапевтични общности')}
        </span>
    </button>


    <button 
        onClick={() => handleButtonClick('Програми за непълнолетни')}
        className={`relative flex items-center justify-start pl-1 pr-7 py-2 rounded w-[66%] ${filter === 'Програми за непълнолетни' ? 'bg-purple-600  text-white' : 'bg-gray-400 text-black'}`}
    >
        <span className="text-left">Програми за непълнолетни</span>
        <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'Програми за непълнолетни' ? 'bg-purple-900' : 'bg-gray-500'}`}>
            {countCenters('Програми за непълнолетни')}
        </span>
    </button>


    <button 
        onClick={() => handleButtonClick('Дневни центрове')}
        className={`relative flex items-center justify-start pl-1 pr-7 py-2 rounded w-[66%] ${filter === 'Дневни центрове' ? 'bg-purple-600  text-white' : 'bg-gray-400 text-black'}`}
    >
        <span className="text-left">Дневни центрове</span>
        <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'Дневни центрове' ? 'bg-purple-900' : 'bg-gray-500'}`}>
            {countCenters('Дневни центрове')}
        </span>
    </button>
    <button 
        onClick={() => handleButtonClick('Вечерни програми')}
        className={`relative flex items-center justify-start pl-1 pr-7 py-2 rounded w-[66%] ${filter === 'Вечерни програми' ? 'bg-purple-600  text-white' : 'bg-gray-400 text-black'}`}
    >
        <span className="text-left">Вечерни програми</span>
        <span className={`absolute top-0 right-0 inline-flex items-center m-1 justify-center w-5 h-5 text-xs font-bold text-white rounded-full ${filter === 'Вечерни програми' ? 'bg-purple-900' : 'bg-gray-500'}`}>
            {countCenters('Вечерни програми')}
        </span>
    </button>
</motion.div>

                    <div className="mt-8 w-full">
                    {(!isMobile || showAccordions) && filteredCenters.map((center, index) => ( // Conditional rendering based on isMobile
                    <div 
                    key={index} 
                    ref={(el) => {
                        if (el) accordionRefs.current[center.name] = el;
                    }}
                >
                    <Accordion 
                        title={center.name}
                        isOpen={openAccordion === center.name}
                        onToggle={() => setOpenAccordion(prev => prev === center.name ? null : center.name)}
                        id={`accordion-${center.name}`}
                    >
                                {/* ADDRESS */}
                                <div className='flex flex-row justify-between border-b border-gray-600 mb-4 '>
                                    <p className=' pb-4 '>
                                    <strong className='mr-8'>📌Адрес:</strong> 
                                    <button 
                                        className='text-blue-700 underline cursor-pointer text-start'
                                        onClick={() => handleAddressClick(center)}
                                    >
                                        {center.address}
                                    </button>
                                    </p>
                                    <Link className='text-blue-700' href={center.mapLink} target="_blank" rel="noopener noreferrer"><IconExternalLink /></Link>
                                </div>

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
                                <div className='flex flex-row border-b border-gray-600 mb-4 pb-4 '>
                                <p><strong className=''>📧Email:</strong></p>
                                <ul className='flex flex-col cst:flex-row'>
                                    {center.email.map((email: string, idx: number) => (
                                        <li className=' mx-8' key={idx}>{email}</li>
                                    ))}
                                </ul>
                                </div>
              
                                {/* WEBSITE */}
                                <p className='border-b border-gray-600 mb-4 pb-4'><strong>🌎Уебсайт:</strong> 
                                <Link className='text-blue-700 underline cursor-pointer mx-8' href={center.website} target="_blank" rel="noopener noreferrer">{center.website}</Link></p>
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
                                </div>

                            
                        ))}
                        
                    </div>
                </div> {/* 1/3 width */}

                <TherapyMap 
        className="col-span-2 mt-10 relative z-[5001]"  
        filter={filter} 
        selectedCenter={selectedCenter} 
        onMarkerClick={handleMarkerClick}
        onViewMoreInfo={handleViewMoreInfo}
        isMobile={isMobile}
      />
            </div>
        </div>

        </div>
    );
}