'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react'; // Import the icon from Tabler Icons

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-0.5 mx-auto max-w-full ">
            <div 
                className="flex items-center justify-between p-4 cursor-pointer bg-gradient-to-r from-gray-400/[0.5] to-gray-500/[0.5] rounded-lg "
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-bold text-black font-montserrat ">{title}</h3>
                <IconChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="p-4 bg-gradient-to-b from-gray-300/[0.5] to-gray-400/[0.5] rounded-lg text-black font-montserrat mt-0.5">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export default Accordion;