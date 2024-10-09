import React from 'react';
import Link from 'next/link';

// Create a reusable Button component
const Button: React.FC<{ href: string; className: string; onClick?: () => void; children: React.ReactNode }> = ({ href, className, onClick, children }) => {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

// Create the BuyButton component
export const BuyButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Button href="/buy" className="buyButton" onClick={onClick}>
        <span className="drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">КУПИ БИЛЕТ</span>
    </Button>
  );
};

export const BuyButton2: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
      <Button href="/buy" className="buyButton drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)] scale-150" onClick={onClick}>
          <span className="drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)] text-gray-100">КУПИ БИЛЕТ</span>
      </Button>
    );
  };

// Create the LocationsButton component
export const LocationsButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Button href="/locations" className="buyButton space-x-24 flex items-center justify-center" onClick={onClick}>
        <span className="drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">ЦЕНТРОВЕ</span>
    </Button>
  );
};