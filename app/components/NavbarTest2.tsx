"use client";
import { IconMenu, IconX, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { Logo } from "./cover/Logo";
import { Chistota } from "./cover/Chistota";
import { Ili } from "./cover/Ili";
import { Smur } from "./cover/Smur";
import { T } from "./cover/T";
import { usePathname, useRouter } from 'next/navigation'; // Import usePathname
import Image from "next/image";
import { BuyButton, LocationsButton } from "./ui/BuyButton";
import { Documentary } from "./cover/Documentary";

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
  }

export function NavbarTest2({ className }: { className?: string }) {
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
      setIsMobile(window.innerWidth < 932);
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
    const { t } = useTranslation();
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
        <div className={cn("max-w-full mx-auto flex justify-between items-center h-24 bg-gradient-to-b from-black/[0.9] to-white/[0.8] border-b border-white", className)}> {/* Added items-center and set height */}

{/* First Section (Icons) */}
<div className="flex-1 ml-4 cst:flex hidden" ref={firstSectionRef}>
    <div className="flex mt-0 justify-start space-x-24 items-center">

        <div className="flex flex-col ">
          {/* <h1>Подкрепени от:</h1> */}
          <Link href="https://aonk.bg" target="_blank">
                  <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk.png" 
                          alt="Logo" 
                          width={150}
                          height={100}
                    className="ml-2  hover:scale-110 transition-all duration-700"
                     />
                    </Link>
          </div>
      <div className="flex justify-center items-center space-x-4">
      <IconBrandFacebook className="w-10 h-10 hover:scale-110 transition-all duration-300 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
      <IconBrandInstagram className="w-10 h-10 hover:scale-110 transition-all duration-300 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
      <IconBrandYoutube className="w-10 h-10 hover:scale-110 transition-all duration-300 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
      </div>

    <div className="flex justify-center text-center font-montserrat p-2 hover:scale-105 transition-all duration-300 ">
      <BuyButton  />

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
    y: isHome ? Math.max((isMobile ? 160 : 250) - scrollY , (isMobile ? -10 : -12)) : -12,
    scale: isHome ? (isMobile ? Math.max(0.5 - (scrollY / 200) * 0.35, 0.35) : Math.max(1 - (scrollY / 200) * 0.6, 0.4)) : (isMobile ? 0.35 : 0.4), // Adjust to scale down to 0.25 on mobile
    x: isMobile && scrollY > 200 ? Math.max(-scrollY + 200, firstSectionRef.current ? -firstSectionRef.current.clientWidth : 0) : 0 // Only translate on X if mobile

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
        {mobileMenuOpen ? <IconX /> : <IconMenu />}
      </button>
    </div>
  ) : (
    <>
      <div className="flex-1 flex font-montserrat justify-center"> {/* Center the LocationsButton */}
        <div className="hover:scale-105 ml-12 transition-all duration-300 ">
        <LocationsButton />
        </div>
      </div>
      <div className="flex items-center space-x-12 mx-10"> {/* Keep the other buttons in a flex container */}
        <div className="flex justify-center text-center underline-hover  transition-all duration-900">
          <Link href="/partners" className="text-2xl px-4">
            Партньори
          </Link>
        </div>
        <div className="flex  justify-center text-center underline-hover mr-4 transition-all duration-900">
          <Link href="/about" className="text-2xl px-4 ">
            История
          </Link>
        </div>
      </div>
    </>
  )}
</div>

        </div>
      </div>
    );
  }
