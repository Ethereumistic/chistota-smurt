import React from 'react';
import Link from 'next/link';

// Create a reusable Button component
const Button: React.FC<{ href: string; className: string; children: React.ReactNode }> = ({ href, className, children }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

// Create the BuyButton component
export const BuyButton: React.FC = () => {
  return (
    <Button href="/buy" className="buyButton">
        <span className="drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">КУПИ БИЛЕТ</span>
    </Button>
  );
};

// Create the LocationsButton component
export const LocationsButton: React.FC = () => {
  return (
    <Button href="/locations" className="buyButton space-x-24 flex items-center justify-center ">
        <span className="drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">ЦЕНТРОВЕ</span>
    </Button>
  );
};