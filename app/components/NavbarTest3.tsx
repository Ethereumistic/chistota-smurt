"use client";
import { IconX, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMenu2 } from "@tabler/icons-react";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./cover/Logo";
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";
import { AboutButton, PartnersButton, TherapyButton, TicketsButton } from "./ui/BuyButton";
import { Documentary } from "./cover/Documentary";
import { Aonk } from "./cover/Aonk";

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
  }

export function NavbarTest3({ className }: { className?: string }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);
  const [scrolled, setScrolled] = useState(false); // New state for scroll detection
  const [scrollY, setScrollY] = useState(0); // New state for scroll position



  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY); // Update scroll position

      if (currentScrollY > prevScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 0);
      prevScrollY.current = currentScrollY;
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  if (pathname.startsWith('/studio')) return null;
  return (
    <div className="relative w-full flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{  }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex fixed top-0 inset-x-0 mx-auto z-[5002] items-center justify-center",
            className,
            { 'backdrop-blur-sm ': scrolled } // Apply blur and semi-transparent background
          )}
        >

          <Navbar 
            className="top-0" 
            isMobile={isMobile} 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen} 
            scrollY={scrollY}
          />
        </motion.div>
      </AnimatePresence>
      
      {isMobile && (
        <div ref={menuRef}>
          <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}

function Navbar({ 
    className, 
    isMobile, 
    mobileMenuOpen,
    setMobileMenuOpen,
    scrollY
  }: { 
    className?: string, 
    isMobile: boolean, 
    mobileMenuOpen: boolean,
    setMobileMenuOpen: (isOpen: boolean) => void 
    scrollY: number
  
  }) {  
    const [active, setActive] = useState<string | null>(null);
    const firstSectionRef = useRef<HTMLDivElement>(null); // Create a ref for the first section
    const pathname = usePathname();
    const router = useRouter();
    const [isHome, setIsHome] = useState(true);
    const [textVisible, setTextVisible] = useState(true); // New state for text visibility

    const prevScrollY = useRef(0); // Track previous scroll position

        
    useEffect(() => {
      setIsHome(pathname === '/');
      
      // Reset scroll and show text when navigating to home
      if (pathname === '/') {
          window.scrollTo(0, 0);
          setTextVisible(true);
      } else {
          setTextVisible(false);
      }
  }, [pathname]);

  useEffect(() => {
      const handleScroll = () => {
          const currentScrollY = window.scrollY;
          setTextVisible(currentScrollY === 0 && pathname === '/');
          prevScrollY.current = currentScrollY;
      };
    
        const handlePathChange = () => {
            setTextVisible(pathname === '/'); // Hide text when navigating away from home
        };
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("popstate", handlePathChange); // Listen for back/forward navigation
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("popstate", handlePathChange);
        };
    }, [pathname]); // Add pathname as a dependency
    



    return (
      <div className="w-full">
        <div className={cn("max-w-full mx-auto flex justify-between items-center h-24 bg-gradient-to-b from-gray-500/[0.9] to-gray-400/[0.8] ", className)}> {/* Added items-center and set height */}

{/* First Section (Icons) */}
<div className="flex-1 ml-4 gg:flex hidden" ref={firstSectionRef}>
    <div className="flex mt-0 justify-start space-x-1 lg:space-x-[26px] xl:space-x-[40px] 2xl:space-x-[56px] 3xl:space-x-[80px] items-center">

        <div className="flex flex-col ">
          {/* <h1>Подкрепени от:</h1> */}
          <Link href="https://aonk.bg" target="_blank">
                  <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk.png" 
                          alt="Logo" 
                          width={150}
                          height={100}
                    className="ml-2 hover:scale-110 transition-all duration-700
                                3xl:w-[150px] 3xl:h-[48px]
                                2xl:w-[120px] 2xl:h-[38px]
                                xl:w-[100px] xl:h-[32px]
                                lg:w-[80px] lg:h-[26px]
                                w-[60px] h-[20px]"
                     />
                    </Link>
          </div>
      <div className="flex justify-center items-center space-x-4">
      <IconBrandFacebook className="3xl:size-10 2xl:size-9 xl:size-8 lg:size-7 size-6  hover:scale-110 transition-all duration-300 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
      <IconBrandInstagram className="3xl:size-10 2xl:size-9 xl:size-8 lg:size-7 size-6 text-instagram hover:scale-110 transition-all duration-300 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
      <IconBrandYoutube className="3xl:size-10 2xl:size-9 xl:size-8 lg:size-7 size-6  hover:scale-110 transition-all duration-300 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
      </div>

    <div className="flex justify-center text-center font-montserrat p-2  hover:scale-105 transition-all duration-300 ">
      {/* <BuyButton  /> */}
      <TicketsButton />

      </div>
  </div>
      
</div>
  
{/* Second Section (Logo) */}
<div className="absolute left-1/2 transform -translate-x-1/2  h-1 w-1"> {/* Center the logo */}
<motion.div
  initial={{ 
    x: isHome ? (isMobile ? -100 : 0) : 0, 
    y: isHome ? (isMobile ? 160 : 250) : 0, 
    scale: isHome ? (isMobile ? 0.5 : 1) : 1 
  }} 
  animate={{ 
    y: isHome ? Math.max((isMobile ? 130 : 250) - scrollY, (isMobile ? -34 : -12)) : (isMobile ? -34 : -12),
    scale: isHome 
      ? isMobile
        ? Math.max(0.5 - (scrollY / 200) * 0.35, 0.35)
        : Math.max(1 - (scrollY / 200) * 0.6, 
        typeof window !== 'undefined' && window.innerWidth >= 1780 ? 0.4 :  // 3xl
        typeof window !== 'undefined' && window.innerWidth >= 1536 ? 0.3 :  // 2xl
        typeof window !== 'undefined' && window.innerWidth >= 1280 ? 0.3 :  // xl
            0.2  // lg
          )
      : isMobile
        ? 0.35
        : 
        typeof window !== 'undefined' && window.innerWidth >= 1780 ? 0.4 :  // 3xl
        typeof window !== 'undefined' && window.innerWidth >= 1536 ? 0.3 :  // 2xl
        typeof window !== 'undefined' && window.innerWidth >= 1280 ? 0.3 :  // xl
          0.2,  // lg

  }} 
  transition={{ duration: 0.5 }}
  className="flex flex-col items-center justify-center h-full"
  style={{ maxHeight: '100%', maxWidth: '100%' }} // Add this line
>
<motion.div 
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: (textVisible && isHome) ? 1 : 0 }} // Ensure it appears when scrolling up on home page
      transition={{ duration: 0.5 }} // Adjust duration as needed
    >
        <Aonk />
      <Documentary />
</motion.div>
    <Logo />
  </motion.div>
</div>
  
{/* Third Section (Buttons) */}
<div className="flex-1 flex justify-between items-center "> {/* Change to justify-between */}
  {isMobile ? (
    <div className="flex justify-end flex-1"> {/* Added justify-end and flex-1 to align the button to the right */}
      <button 
        onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen);
          if (!mobileMenuOpen && window.scrollY === 0) { // Check if user is at the top
            // Automatically scroll to a specific position (e.g., 250px down)
            window.scrollTo({ top: 200, behavior: 'smooth' });
          }
        }} 
        className="text-3xl mr-6 z-20"
      >
        {mobileMenuOpen ? <IconX /> : <IconMenu2 />}
      </button>
    </div>
  ) : (
    <>
      <div className="flex-1 flex font-montserrat font-extrabold justify-center">

      </div>

      
      <div className="flex items-center space-x-1 lg:space-x-1 xl:space-x-2 2xl:space-x-3 3xl:space-x-6 mx-4">
          <TherapyButton className=""  />
          <PartnersButton className="" />

          <AboutButton className="" />
      </div>
      
    </>
  )}
</div>

        </div>
      </div>
    );
  }
