"use client"

import React, { useEffect, useState, useCallback } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
import { motion, AnimatePresence } from 'framer-motion'; // Add this import
import { IconBrandFacebook } from '@tabler/icons-react';

interface ShareButtonProps {
    causeRef: React.RefObject<HTMLDivElement>; // Define the prop type
}


const ShareButton: React.FC<ShareButtonProps> = ({ causeRef }) => {
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [showSpan, setShowSpan] = useState(false);
    const lenis = useLenis();

    const handleScroll = useCallback(() => {
        if (!lenis) return;
        const scrollY = lenis.scroll;
        const maxScrollY = lenis.limit;
        const halfwayPoint = maxScrollY / 2;

        setIsScrollingDown(scrollY < halfwayPoint);
    }, [lenis]);

    const handleShareClick = useCallback(() => {
        
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const shareUrl = 'https://chist.bg'; // URL to share
        const quote = 'Check out this amazing site!';

        const webShareUrl = `https://www.facebook.com/dialog/share?app_id=292328347636860&href=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(quote)}`;    
        if (isMobile) {
            // Use the Facebook app URL scheme for mobile
            const fbAppUrl = `fb://share.php?u=${encodeURIComponent(shareUrl)}`;
            window.open(fbAppUrl, '_blank'); // Try to open the Facebook app
        } else {
            // Fallback to the web version for desktop
            const webShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
            window.open(webShareUrl, '_blank'); // Open in a new tab
        }
    }, []);



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
                            Сподели във Facebook
                        </motion.span>
                    )}
                </AnimatePresence>
                <button
                    className="cst:w-16 cst:h-16 w-10 h-10 flex items-center justify-center bg-[#0866ff] rounded-full text-white border-none cursor-pointer transition-transform duration-300 ease-in-out z-10"
                    onClick={handleShareClick}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{
                        transform: isScrollingDown ? 'scale(1.001)' : 'scale(1)'
                    }}
                >
                    <IconBrandFacebook />   
                </button>
            </div>
        </div>
    );
};

export default ShareButton;