// app/components/ui/LowerThirdModal.tsx
import React, { useState, useEffect } from 'react';
import { TicketsButton } from './BuyButton';
import { usePathname } from 'next/navigation'; // Import usePathname
import { useCountdownContext } from '@/app/components/calendar/CountdownProvider';


interface LowerThirdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LowerThirdModal: React.FC<LowerThirdModalProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false); // Start with the modal hidden
  const [isLoading, setIsLoading] = useState(true); // Loading state to control visibility
  const pathname = usePathname(); // Get the current pathname
  const { countdownEnded } = useCountdownContext();

  const buttonHref = countdownEnded ? "/movie" : "/buy";
  useEffect(() => {
    // Check if the modal was closed in the current session
    const hasClosedModal = sessionStorage.getItem('modalClosed');
    if (!hasClosedModal) {
      setIsVisible(true); // Show the modal if it hasn't been closed
    }
    setIsLoading(false); // Set loading to false after checking
  }, [pathname]); // Run this effect on pathname change

  // Handle modal close
  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('modalClosed', 'true'); // Mark modal as closed in this session
    onClose(); // Call the onClose prop
  };

  // Only render the modal if not loading
  if (isLoading) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed inset-x-0 bottom-12 z-50 pb-4 px-4 sm:px-6 lg:px-8 lower-third-modal">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">
                {countdownEnded ? "Гледайте филма сега!" : "Купете билет за филма!"}
              </h2>
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
            <p className="mb-4 text-black text-center">
              {countdownEnded ? "Запознайте се с живота на зависими в терапевтичен център в България." : "Не пропускайте премиерата на филма Чистота или Смърт."}
            </p>
            <div className="mx-auto justify-center items-center flex">
              <TicketsButton className=" mx-auto" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LowerThirdModal;