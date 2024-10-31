"use client"

import React, { useEffect, useState, useCallback } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'; // Add this import

interface ScrollButtonProps {
    // causeRef: React.RefObject<HTMLDivElement>; // Define the prop type
}

const ToTopButton: React.FC<ScrollButtonProps> = () => {
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [showSpan, setShowSpan] = useState(true);
    const lenis = useLenis();
    const [isVisible, setIsVisible] = useState(false); // New state for button visibility
    const { scrollY } = useScroll(); // Get scrollY from useScroll
    const opacity = useTransform(scrollY, [200, 300], [0, 1]); // Transform scrollY to opacity
    const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 }); // Convert to a spring value

    const handleScroll = useCallback(() => {
        if (!lenis) return;
        const scrollY = lenis.scroll;

        // Show button if scrolled down more than 200 pixels
        setIsVisible(scrollY > 200);
    }, [lenis]);


    const handleClick = useCallback(() => {
        if (!lenis) return;
        lenis.scrollTo(0); // Scroll to the top
    }, [lenis]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpan(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScrollEvent = () => {
            handleScroll(); // Call the handleScroll function on scroll
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            // Clean up the event listener on component unmount
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, [handleScroll]);


    return (
        <div className={`fixed bottom-2 right-2 z-50 `}> {/* Temporarily set to block */}           
         <div className="relative">

                <motion.button
                    className="cst:w-16 cst:h-16 w-10 h-10 text-3xl bg-black rounded-full text-white border-none cursor-pointer transition-transform duration-300 ease-in-out z-10"
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{
                        transform: isScrollingDown ? 'rotate(0deg)' : 'rotate(180deg)',
                        opacity: springOpacity, // Use the spring opacity
                    }}
                >
                    ↑
                </motion.button>
            </div>
        </div>
    );
};

export default ToTopButton;