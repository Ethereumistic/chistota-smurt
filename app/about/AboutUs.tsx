'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Loader from '../components/ui/Loader';
import { IconBrandInstagram } from '@tabler/icons-react';

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="min-h-screen mb-8 py-12 px-4 sm:px-6 lg:px-8 text-black overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-5xl max-w-3xl mx-auto font-black text-center mb-16 font-montserrat uppercase text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Създателите на Филма
        </motion.h1>
        
        <div className="space-y-24 ">
          <DirectorsSection scrollYProgress={scrollYProgress} />
        </div>
      <Link href='https://www.instagram.com/dbproductions.bg/' target='_blank' >
        <Image 
        src='https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/DB.png'
        alt="dbProductions Logo" 
        width={400} 
        height={200} 
        className="mx-auto my-4 transition-all duration-300 hover:scale-105" 
      />
      </Link>
        <motion.div 
          className=" text-lg text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >



          <p className="mb-4 text-center text-2xl max-w-4xl cst:max-w-6xl mx-auto font-montserrat">
          Заедно създадохме<br className='gg:hidden flex'></br> &quot;<strong>db Productions</strong>&quot; с мисията да достигнем до хората по въздействащ начин и да разказваме истории, които да оставят следа. Нашата цел е не само да забавляваме, но и да вдъхновяваме промяна
          </p>

        </motion.div>
      </div>
    </div>
  );
};



const DirectorsSection: React.FC<{ scrollYProgress: any }> = ({ scrollYProgress }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    const directors = [
      {
        name: "Даниел Ненов",
        role: "Режисьор",
        imageSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/dani.png",
        bio: "Казвам се Даниел Ненов и съм режисьор на филма “Чистота или Смърт”. Документално кино е моята страст и историите, които разказвам, са свързани с мен и възприятието ми към темите, които истински ме вълнуват. Вярвам, че решението на важните социални проблеми е чрез разказването за тях.",
        insta: "https://www.instagram.com/dnenov/"
      },
      {
        name: "Дилян Калчев",
        role: "Продуцент",
        imageSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/dido.png",
        bio: "Аз съм Дилян Калчев и съм продуцент на филма “Чистота или Смърт”. Завърших кино-режисура в Англия, където развих своята страст към разказването на истории, особено тези с дълбок социален смисъл. Вярвам, че чрез киното можем да предизвикаме важни обществени промени и да покажем различни гледни точки.",
        insta: "https://www.instagram.com/dilyankalchev/"
      }
    ];
  
    return (
        <motion.div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 "
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {directors.map((director, index) => (
            <DirectorCard key={index} director={director} />
          ))}
        </motion.div>
      );
    };
    
    const DirectorCard: React.FC<{ director: any }> = ({ director }) => {
      const [imageLoaded, setImageLoaded] = useState(false);
    
      return (
        <motion.div 
          className="flex flex-col items-center bg-llblue/[0.5] pb-4 px-4 rounded-xl " // Added responsive padding
        >
          <motion.div 
            className="relative w-[300px] h-[400px]  mb-4 overflow-hidden rounded-lg" // Made dimensions responsive
            variants={{
              hidden: { scale: 1.5, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeInOut" }
              }
            }}
          >
            {!imageLoaded && (
              <div className="flex items-center justify-center mt-32">
                <Loader />
              </div>
            )}
            <Image
              src={director.imageSrc}
              alt={director.name}
              layout="fill"
              objectFit="cover"
              className={`transition-all duration-300 hover:scale-105  ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
    
          <motion.div 
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { delay: 0.8, duration: 0.6 } 
              }
            }}
          >
            <div className='flex items-center justify-center ml-4 sm:ml-12 gap-2 sm:gap-4'>
              <div>
                <h2 className="text-lg sm:text-lg md:text-xl xl:text-2xl  font-semibold mb-1 sm:mb-2">{director.name}</h2>
                <h3 className="text-lg sm:text-lg md:text-lg xl:text-xl text-gray-900 mb-2 sm:mb-4">{director.role}</h3>
              </div>
              <Link href={director.insta} target='_blank'>
                <IconBrandInstagram className='size-12 sm:size-16 hover:scale-105 transition-all duration-300' />
              </Link>
            </div>
            <p className="text-black text-base sm:text-lg md:text-lg xl:text-lg max-w-xl font-montserrat">{director.bio}</p>
          </motion.div>
        </motion.div>
      );
    };
    
    
    export default AboutUs;