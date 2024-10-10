"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { Logo } from '../cover/Logo';
import { BuyButton, BuyButton2 } from '../ui/BuyButton';
import Link from 'next/link';
import Image from 'next/image';
const socialIcons = [
  { name: 'Facebook', icon: IconBrandFacebook },
  { name: 'Instagram', icon: IconBrandInstagram },
  { name: 'Youtube', icon: IconBrandYoutube },
];


const Footer: React.FC = () => {
    const pathname = usePathname(); // Get the current pathname
    const isStudioRoute = pathname.startsWith('/studio'); // Check if the current route includes '/studio'

    if (isStudioRoute) return null; // Prevent rendering if on studio route
  return (
    <footer className="">
    <div className="bg-gradient-to-t from-black/0 to-black/[0.5] w-full h-5"></div>

      <div className="mx-auto max-w-screen-xl px-4  sm:px-6  ">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="scale-[0.4]">
            <Logo />
          </div>

          <p className="mx-auto max-w-sm text-gray-500">
          Представяме документален филм за наркотичната зависимост. Изследваме пътя към възстановяването и въздействието върху обществото. Целим да повишим осведомеността и да вдъхновим промяна.

          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="my-8 inline-block rounded-full   px-12  text-sm font-medium   transition duration-300"
          >
            <BuyButton2 />
          </motion.a>
        </motion.div>
        

        <div className=" border-b border-gray-600   sm:flex sm:items-center sm:justify-between lg:mt-20">

            <div className='flex justify-center items-center mb-4 my-0 cst:my-4'>
          <Link href="https://aonk.bg" target="_blank" className="">
              <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk.png" 
                      alt="Logo" 
                      width={150}
                      height={100}
                      className="ml-2  hover:scale-110 transition-all duration-700"
                      />
            </Link>
            </div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, staggerChildren: 0.1 }}
            className="mt-8 flex justify-center text-xs gap-3 sm:mt-0 lg:justify-end"
          >
            
            {socialIcons.map((social) => (
              <motion.li key={social.name} whileHover={{ scale: 1.2, rotate: 5 }}>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 space-x-4"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="size-14 mb-4" />
                </Link>
              </motion.li>
            ))}
            
          </motion.ul>
        </div>
        <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
            className="flex flex-wrap justify-between text-gray-500 gap-4 text-xs mt-4"
          >
            {/* <div>
                Created by EchoRay
            </div> */}
            <div className='mb-4 flex flex-row gap-4'>
            {['terms', 'privacy', 'cookies'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <Link href={`/legal?tab=${item}`} className=" transition hover:opacity-75">
                  {item === 'terms' ? 'Правила и условия' : item === 'privacy' ? 'Политика за поверителност' : 'Бисквитки'}
                </Link>
              </motion.li>
            ))}
            </div>
          </motion.ul>
      </div>
    </footer>
  );
};

export default Footer;