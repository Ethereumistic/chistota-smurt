import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import ThemeSwitch from "./themeSwitch";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed py-8 mt-24 top-0 right-0 h-auto w-full dark:bg-gray-800 dark:border-white/[0.2] bg-slate-200/50 shadow-lg z-[5002]  mx-auto"
          >
            <div className="p-4 ">
              <nav className="flex flex-col space-y-4 text-center">

                  <div className="flex justify-center text-center ">
                    <Link href="/about" className="text-lg font-russo px-4" onClick={onClose}>
                      История
                    </Link>
                  </div>

                <div className="flex justify-center text-center">
                  <Link href="/locations" className="text-lg font-russo px-4" onClick={onClose}>
                    Локации
                  </Link>
                </div>


                <div className="flex justify-center text-center">
                  <Link href="/partners" className="text-lg font-russo px-4" onClick={onClose}>
                    Партньори
                  </Link>
                </div>

                <div className="flex justify-center text-center">
                  <ThemeSwitch />
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