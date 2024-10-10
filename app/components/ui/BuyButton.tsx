import React from 'react';
import Link from 'next/link';
import { useCountdownContext } from '../calendar/CountdownProvider';

// Create a reusable Button component
const Button: React.FC<{ href?: string; className: string; onClick?: () => void; children: React.ReactNode }> = ({ href, className, onClick, children }) => {
  return (
    <Link href={href || ""} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

// Create the BuyButton component
export const BuyButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { countdownEnded } = useCountdownContext();

  const buttonText = countdownEnded ? "ГЛЕДАЙ ФИЛМА" : "КУПИ БИЛЕТ";
  const buttonHref = countdownEnded ? "/movie" : "/buy";

  return (
    <Button href={buttonHref} className="buyButton" onClick={onClick}>
        <span className="drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)] text-gray-100">{buttonText}</span>
    </Button>
  );
};

export const BuyButton2: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { countdownEnded } = useCountdownContext();

  const buttonText = countdownEnded ? "ГЛЕДАЙ ФИЛМА" : "КУПИ БИЛЕТ";
  const buttonHref = countdownEnded ? "/movie" : "/buy";

  return (
    <Button href={buttonHref} className="watchButton  scale-150" onClick={onClick}>
        <span className="">{buttonText}</span>
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

export const TrailerButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button className="watchButton  flex items-center justify-center scale-100 cst:scale-150" onClick={onClick}>
        <span className="">ТРЕЙЛЪР</span>
    </button>
  );
};

export const WatchButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button className="watchButton  flex items-center justify-center scale-100 cst:scale-150" onClick={onClick}>
        <span className="">ГЛЕДАЙ ФИЛМА</span>
    </button>
  );
};

