"use client";
import { IconContract, IconSpray, IconTie, IconMenu, IconX } from "@tabler/icons-react";
import React, { useState, useEffect, useRef } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from 'next-i18next';
import { FlipWordsNav } from "./FlipWords";

export function NavbarDemo({ className }: { className?: string }) {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 932); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      prevScrollY.current = currentScrollY; // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex fixed top-0 inset-x-0 mx-auto  bg-transparent z-[5000] items-center justify-center",
            className
          )}
        >
          <Navbar 
            className="top-0" 
            isMobile={isMobile} 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen} 
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
}: { 
  className?: string, 
  isMobile: boolean, 
  mobileMenuOpen: boolean,
  setMobileMenuOpen: (isOpen: boolean) => void 

}) {  
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslation();
  
  return (
    <div className="w-full  ">
      <div className={cn("max-w-full mx-auto", className)}>
        <Menu setActive={setActive}>
          <div className="flex items-center justify-between w-full">
            {/* Logo on the left */}
            <div className="flex  items-center hover:scale-105 transition duration-700 ">
              {/* <LogoImage
                title="Bio DDD"
                href="/"
                src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-light.png"
                darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-dark.png"
              /> */}
              <h1 className="text-4xl font-bold text-black dark:text-white ">Чистота или Смърт</h1>
            </div>

            {/* Navigation items or menu icon */}
            {isMobile ? (
              <div className="flex items-center space-x-4">
                <div className="" >
                  <ThemeSwitch  />
                </div>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-3xl z-[5001] ml-4"
              >
                {mobileMenuOpen ? <IconX /> : <IconMenu />}
              </button>
              </div>
              
            ) : (
              <div className="flex items-center font-russo space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-12">
                <Link href="/pests" className="text-lg ">
                <div className="flex justify-center text-center">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1 sm:space-x-2 
                               px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3
                               text-sm sm:text-sm md:text-base lg:text-lg transition-all duration-300"
                  >
                  <MenuItem setActive={setActive} active={active} item={t('Resources')}>
                  
                    <div className="flex justify-center items-center my-4"><IconSpray width={50} height={50} /><FlipWordsNav /></div>
                      <div className=" text-sm grid grid-cols-4 gap-10 p-4 ">
            <ProductItem
              title="BTC"
              href="/pests/cockroach"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/cockroach.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/cockroach.png"
              description="test"
            />
            <ProductItem
              title="BTC"
              href="/pests/rat"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/rat.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/rat.png"
              description="test"
            />
            <ProductItem
              title="BTC"
              href="/pests/bedbug"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bedbug.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/bedbug.png"
              description="test"
            />

                      </div>
                  </MenuItem>
                  </HoverBorderGradient>
                  </div>
                </Link>

                <Link href="/locations" className="text-lg">
                <div className="flex justify-center text-center">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1 sm:space-x-2 
                             px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3
                             text-sm sm:text-sm md:text-base lg:text-lg transition-all duration-300"
                >
                  <MenuItem setActive={setActive} active={active} item={t('Локации')}>
                    <div className="flex flex-col text-lg px-8 my-10">
                      <div className="flex flex-row  pb-10  justify-center hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(94,187,70,1)]">
                      <IconTie width={30} height={30} className="mr-2" />
                      <HoveredLink href="/web-dev">Business</HoveredLink>
                      </div>
                      <hr></hr>
                      <div className="flex flex-row pt-10  hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(94,187,70,1)]">
                      <IconContract width={30} height={30} className="mr-2" />
                      <HoveredLink href="/interface-design">Test</HoveredLink>
                      </div>

                      {/* <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
                      <HoveredLink href="/seo">Контрол на Гризачи</HoveredLink>
                      </div>

                      <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
                      <HoveredLink href="/branding">Контрол на Мравки</HoveredLink>
                      </div> */}
                    </div>
                  </MenuItem>
                </HoverBorderGradient>
                </div>
                </Link>
                <ThemeSwitch />
                <LanguageSelector />
              </div>
            )}
          </div>
        </Menu>
      </div>
    </div>
  );
}