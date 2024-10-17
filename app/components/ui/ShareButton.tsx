"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShareButton: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleShareClick = () => {
        const url = encodeURIComponent('https://chist.bg');
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(facebookShareUrl, '_blank');
    };

    return (
        <div className="fixed bottom-2 left-2 z-50">
            <div className="relative">
                <AnimatePresence>
                    {isHovering && (
                        <motion.span
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -15, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[20%] left-[55%] -translate-y-1/2 mr-2 border-2 border-black bg-gray-300 text-black px-3 pl-8 py-1 rounded-full text-sm whitespace-nowrap"
                        >
                            Сподели във Facebook
                        </motion.span>
                    )}
                </AnimatePresence>
                <button
                    className="cst:w-16 cst:h-16 w-10 h-10 bg-black rounded-full text-white border-none cursor-pointer transition-transform duration-300 ease-in-out z-10"
                    onClick={handleShareClick}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    📤
                </button>
            </div>
        </div>
    );
};

export default ShareButton;