"use client"

import React, { useEffect, useState, useCallback } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
import { motion, AnimatePresence } from 'framer-motion'; // Add this import
import { IconMovie, IconTicket } from '@tabler/icons-react';
import Link from 'next/link';
import { useCountdownContext } from '@/app/components/calendar/CountdownProvider';

interface BuyTicketButtonProps {
    //    causeRef: React.RefObject<HTMLDivElement>; // Removed the prop type
    }

const BuyTicketButton: React.FC<BuyTicketButtonProps> = ( ) => {
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [showSpan, setShowSpan] = useState(false);
    const lenis = useLenis();
    const { countdownEnded } = useCountdownContext();
    const handleScroll = useCallback(() => {
        if (!lenis) return;
        const scrollY = lenis.scroll;
        const maxScrollY = lenis.limit;
        const halfwayPoint = maxScrollY / 2;

        setIsScrollingDown(scrollY < halfwayPoint);
    }, [lenis]);

    useEffect(() => {
        if (!lenis) return;
        
        lenis.on('scroll', handleScroll);

        return () => {
            lenis.off('scroll', handleScroll);
        };
    }, [lenis, handleScroll]);

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setShowSpan(true); // Show the span after 6000ms
        }, 6000);
    
        const hideTimer = setTimeout(() => {
            setShowSpan(false); // Hide the span after another 6000ms
        }, 12000); // Total delay of 12000ms
    
        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);


    return (
        <div className="fixed bottom-2 left-2 z-50">
            <div className="relative">
                <AnimatePresence>
                    {(showSpan || isHovering) && (
                        <motion.span
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -15, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[12%] cst:top-[30%] left-[25%] cst:left-[55%] -translate-y-1/2 mr-2 border-2 border-black bg-gray-300 text-black px-3 pl-8 py-1 rounded-full text-sm whitespace-nowrap"
                        >
                            {countdownEnded ? "Гледай филмът сега!" : "Закупи билет!"}
                        </motion.span>
                    )}
                </AnimatePresence>
                <Link
                    href={countdownEnded ? "/movie" : "/buy"}
                    className="cst:w-16 cst:h-16 w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full text-white border-none cursor-pointer transition-all duration-300 ease-in-out z-10"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{
                        transform: isScrollingDown ? 'scale(1.001)' : 'scale(1)'
                    }}
                >
                    {countdownEnded ? <IconMovie className=' size-6 sm:size-7 md:size-8 lg:size-9 transition-all duration-300 ease-in-out' /> : <IconTicket className=' size-6 sm:size-7 md:size-8 lg:size-9 transition-all duration-300 ease-in-out' />}
                </Link>
            </div>
        </div>
    );
};

export default BuyTicketButton;