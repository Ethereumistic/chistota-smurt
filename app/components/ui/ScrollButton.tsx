"use client"

import React, { useEffect, useState, useCallback } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
import { motion, AnimatePresence } from 'framer-motion'; // Add this import

const ScrollButton = () => {
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [showSpan, setShowSpan] = useState(true);
    const lenis = useLenis();

    const handleScroll = useCallback(() => {
        if (!lenis) return;
        const scrollY = lenis.scroll;
        const maxScrollY = lenis.limit;
        const halfwayPoint = maxScrollY / 2;

        setIsScrollingDown(scrollY < halfwayPoint);
    }, [lenis]);

    const handleClick = useCallback(() => {
        if (!lenis) return;
        if (isScrollingDown) {
            lenis.scrollTo(2866, { duration: 1.5 });
        } else {
            lenis.scrollTo(0, { duration: 1.5 });
        }
    }, [lenis, isScrollingDown]);

    useEffect(() => {
        if (!lenis) return;
        
        lenis.on('scroll', handleScroll);

        return () => {
            lenis.off('scroll', handleScroll);
        };
    }, [lenis, handleScroll]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpan(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="fixed bottom-2 right-2 z-50">
            <div className="relative">
                <AnimatePresence>
                    {(showSpan || isHovering) && (
                        <motion.span
                            initial={{ x: 15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 15, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[12%] cst:top-[30%] right-[20%] cst:right-[45%] -translate-y-1/2 mr-2 border-2 border-black bg-gray-300 text-black px-3 pr-8 py-1 rounded-full text-sm whitespace-nowrap"
                        >
                            {isScrollingDown ? "Разбери за каузата" : "Върни се горе"}
                        </motion.span>
                    )}
                </AnimatePresence>
                <button
                    className="cst:w-16 cst:h-16 w-10 h-10 bg-black rounded-full text-white border-none cursor-pointer transition-transform duration-300 ease-in-out z-10"
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{
                        transform: isScrollingDown ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                >
                    ↑
                </button>
            </div>
        </div>
    );
};

export default ScrollButton;