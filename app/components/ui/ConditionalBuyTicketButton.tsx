// app/components/ConditionalBuyTicketButton.tsx
"use client"; // Mark this component as a Client Component

import { usePathname } from 'next/navigation';
import BuyTicketButton from './BuyTicketButton';

const ConditionalBuyTicketButton = () => {
  const pathname = usePathname(); // Get the current pathname

  // Only render the button if the pathname is not '/' or '/movie' or '/locations'
  if (pathname === '/' || pathname === '/movie' || pathname === '/locations' || pathname === '/buy') {
    return null; // Skip rendering
  }

  return <BuyTicketButton />;
};

export default ConditionalBuyTicketButton;