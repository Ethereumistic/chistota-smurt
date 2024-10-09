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
import { usePathname } from 'next/navigation'; // Import usePathname
import Image from "next/image";

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
            "flex fixed top-0 inset-x-0 mx-auto z-[5000] items-center justify-center",
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
    const [isHome, setIsHome] = useState(true);
        
    useEffect(() => {
        setIsHome(pathname === '/'); // Check if the current route is the home page
      }, [pathname]); // Dependency on pathname

    return (
      <div className="w-full">
        <div className={cn("max-w-full mx-auto flex justify-between items-center h-24 bg-gradient-to-b from-black/[0.9] to-white/[0.8] border-b border-white", className)}> {/* Added items-center and set height */}

{/* First Section (Icons) */}
<div className="flex-1 ml-4 cst:flex hidden" ref={firstSectionRef}>
<div className="flex mt-0 justify-start space-x-8 items-center">
            <div className="flex flex-col mr-8">
              <h1>Подкрепени от:</h1>
            <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk.png" 
                    alt="Logo" 
                    width={150}
                    height={100} />
            </div>
    <IconBrandFacebook className="w-10 h-10 " />
    <IconBrandInstagram className="w-10 h-10 " />
    <IconBrandYoutube className="w-10 h-10 " />
  </div>    
</div>
  
{/* Second Section (Logo) */}
<div className="absolute left-1/2 transform -translate-x-1/2 z-10"> {/* Center the logo */}
<motion.div
  initial={{ 
    x: isHome ? (isMobile ? -100 : 0) : 0, 
    y: isHome ? (isMobile ? 160 : 250) : 0, 
    scale: isHome ? (isMobile ? 0.5 : 1) : 1 
  }} 
  animate={{ 
    y: isHome ? Math.max((isMobile ? 160 : 250) - scrollY, 0) : 0,
    scale: isHome ? (isMobile ? Math.max(0.5 - (scrollY / 200) * 0.25, 0.25) : Math.max(1 - (scrollY / 200) * 0.6, 0.4)) : (isMobile ? 0.25 : 0.4), // Adjust to scale down to 0.25 on mobile
    x: isMobile && scrollY > 200 ? Math.max(-scrollY + 200, firstSectionRef.current ? -firstSectionRef.current.clientWidth : 0) : 0 // Only translate on X if mobile

  }} 
  transition={{ duration: 0.5 }}
  className="flex flex-col mt-0 " 

>
    <Logo />
  </motion.div>
</div>
  
{/* Third Section (Buttons) */}
<div className="flex-1 flex justify-end items-center"> {/* Ensure flex is set to justify-end */}
  {isMobile ? (
    <div className="flex">
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
    <div className="flex items-center font-russo space-x-4">
      <div className="flex justify-center text-center underline-hover font-bold transition-all duration-900">
        <Link href="/about" className="text-xl font-montserrat px-4">
          История
        </Link>
      </div>
      <div className="flex justify-center text-center underline-hover font-bold transition-all duration-900 px-2">
        <Link href="/locations" className="text-xl font-montserrat px-4">
          Локации
        </Link>
      </div>
      <div className="flex justify-center text-center underline-hover font-bold transition-all duration-300">
        <Link href="/partners" className="text-xl font-montserrat px-4">
          Партньори
        </Link>
      </div>
      {/* <ThemeSwitch /> */}
      {/* Other buttons can be added here */}
    </div>
  )}
</div>

        </div>
      </div>
    );
  }
