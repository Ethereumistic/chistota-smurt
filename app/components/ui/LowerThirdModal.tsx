import React, { useState, useEffect } from 'react';
import { TicketsButton } from './BuyButton';

interface LowerThirdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LowerThirdModal: React.FC<LowerThirdModalProps> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const hasSeenModal = localStorage.getItem('hasSeenLowerThirdModal');
      if (!hasSeenModal) {
        setIsVisible(true);
      }
    }, []);
  
    const handleClose = () => {
      setIsVisible(false);
      localStorage.setItem('hasSeenLowerThirdModal', 'true');
      onClose();
    };
  
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-x-0 bottom-12 z-50 pb-4 px-4 sm:px-6 lg:px-8 lower-third-modal">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-black">Get Your Tickets Now!</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="mb-4 text-black">Don&lsquo;t miss out on this amazing event. Get your tickets now!</p>
          <div className="mx-auto justify-center items-center flex">
          <TicketsButton className=" mx-auto" />
          </div>
        </div>
      </div>
    );
  };
  
  export default LowerThirdModal;