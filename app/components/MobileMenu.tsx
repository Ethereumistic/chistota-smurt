import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import Image from "next/image";
import { AboutButton, PartnersButton, TherapyButton2, TicketsButton } from "./ui/BuyButton";
import { useState, useEffect } from "react";
import Loader from "./ui/Loader";
import { usePathname } from "next/navigation";


interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    // Close the menu if the route changes to home from another page
    if (prevPathname !== '/' && pathname === '/' && isOpen) {
      onClose();
    }
    // Update the previous pathname
    setPrevPathname(pathname);
  }, [pathname, isOpen, onClose, prevPathname]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-40 "
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed py-3 mt-24 top-0 right-0 h-auto w-full bg-gray-800  shadow-lg z-[5011] mx-auto">
            <div className="p-4 ">
            <nav className="flex flex-col space-y-4 text-center ">
  <div className=" ">
    <div className="flex flex-col justify-center items-center text-center space-y-4 w-full">
        <TicketsButton className="w-[65%] justify-center" onClick={onClose} />
        <TherapyButton2 className="w-[65%] justify-center" onClick={onClose}  />
    {/* </div>
    <div className="space-y-8 mb-10"> */}
        <PartnersButton className="w-[65%] justify-center" onClick={onClose} />
        <AboutButton className="w-[65%] justify-center" onClick={onClose} />
    </div>


  </div>
  <div className="flex flex-col bg-lblue w-[65%] mx-auto rounded-xl mb-10 items-center justify-center py-2 px-8">
    <h1 className="text-center font-montserrat text-xl mt-2 text-black">Подкрепени от:</h1>
    <Link href="https://aonk.bg" target="_blank">
    {!imageLoaded && (
              <div className="absolute flex items-center justify-center ">
                <Loader />
              </div>
            )}
      <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk.png" 
             alt="Logo" 
             width={150}
             height={100}
             className={`flex justify-center mx-auto my-4 hover:scale-110 transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
             onLoad={() => setImageLoaded(true)}
      />
    </Link>
  </div>
</nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;