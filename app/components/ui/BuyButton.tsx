import React from 'react';
import Link from 'next/link';
import { useCountdownContext } from '../calendar/CountdownProvider';
import { IconHeartHandshake, IconMap2, IconMovie, IconTicket, IconUsers } from '@tabler/icons-react';

// Create a reusable Button component
const Button: React.FC<{ href?: string; className: string; onClick?: () => void; children: React.ReactNode }> = ({ href, className, onClick, children }) => {
  return (
    <Link href={href || ""} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

const ButtonStructure: React.FC<{ href?: string; className?: string; onClick?: () => void; children: React.ReactNode }> = ({ href, className, onClick, children }) => {
  return (
    <Link href={href || ""} className={`w-full ${className}`} onClick={onClick}> {/* Added w-full */}
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
export const TestButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
<Link
  className="group inline-block rounded-full bg-gray-800 p-[2px] text-black  border border-dblue hover:text-white  active:text-opacity-75"
  href="#"
>
  <span
    className="block rounded-full bg-gradient-to-r from-llblue  to-lblue px-8 py-3 text-sm font-medium group-hover:bg-transparent"
  >
    КУПИ БИЛЕТ
  </span>
</Link>
  );
};

export const TicketsButton: React.FC<{ href?: string; className?: string; onClick?: () => void; }> = ({ href, className, onClick }) => {
  const { countdownEnded } = useCountdownContext();
  const buttonText = countdownEnded ? "ГЛЕДАЙ ФИЛМА" : "КУПИ БИЛЕТ";
  const buttonHref = countdownEnded ? "/movie" : "/buy";

  return (
<Link
  className={`group relative inline-flex items-center overflow-hidden rounded bg-purple-600 px-8 py-3 text-white ${className}`}
  href={buttonHref}
  onClick={onClick}
>
<span className="absolute -start-full transition-all group-hover:start-4">
{countdownEnded ? (
      <IconMovie className="size-7 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
    ) : (
      <IconTicket className="size-7 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
    )}
  </span>

  <span className="text-lg font-extrabold transition-all group-hover:ms-6 drop-shadow-[0_4px_4px_rgba(0,0,0,1)]  ">{buttonText}</span>
</Link>
  );
};


export const TherapyButton: React.FC<{ href?: string; className?: string; onClick?: () => void; }> = ({ href, className, onClick }) => {

  return (
<Link
  className={`group relative inline-flex items-center overflow-hidden rounded border-[3px] border-white px-8 py-3 text-white focus:outline-none  ${className}`}
  href={href || "/locations"}
  onClick={onClick}
>
  <span className="absolute -start-full transition-all group-hover:start-4">
  <IconMap2 className="size-7  text-white drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
  </span>

  <span className="text-lg font-extrabold transition-all group-hover:ms-4 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">ТЕРАПЕВТИЧНИ ЦЕНТРОВЕ</span>
</Link>
  );
};



export const PartnersButton: React.FC<{ href?: string; className?: string; onClick?: () => void; }> = ({ href, className, onClick }) => {
  return (
<Link
  className={`group relative inline-flex items-center overflow-hidden rounded border-2 border-white px-8 py-3 text-white ${className}`}
  href="/partners"
  onClick={onClick}
>
  <span className="absolute -start-full transition-all group-hover:start-4">
  <IconHeartHandshake className="size-7  text-white drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
  </span>

  <span className="text-lg font-extrabold transition-all group-hover:ms-4 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">ПАРТНЬОРИ</span>
</Link>
  );
};


export const AboutButton: React.FC<{ href?: string; className?: string; onClick?: () => void; }> = ({ href, className, onClick }) => {
  return (
<Link
  className={`group relative inline-flex items-center overflow-hidden rounded border-2 border-white px-8 py-3 text-white ${className}`}
  href="/about"
  onClick={onClick}
>
  <span className="absolute -start-full transition-all group-hover:start-4">
  <IconUsers className="size-7  text-white drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
  </span>

  <span className="text-lg font-extrabold transition-all group-hover:ms-4 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">ЗА НАС</span>
</Link>
  );
};




