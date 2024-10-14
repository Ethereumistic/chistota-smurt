'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useInView, useAnimation } from 'framer-motion';

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Създателите на Филма
        </motion.h1>
        
        <div className="space-y-24">
          <DirectorsSection scrollYProgress={scrollYProgress} />
        </div>

        <motion.div 
          className="mt-24 text-lg text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="mb-4 text-center text-3xl max-w-4xl mx-auto font-montserrat">
          Заедно създадохме &quot;db Productions&quot; с мисията да достигнем до хората по въздействащ начин и да разказваме истории, които да оставят следа. Нашата цел е не само да забавляваме, но и да вдъхновяваме промяна
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
        role: "🎬 Режисьор",
        imageSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/dani.png",
        bio: "Казвам се Даниел Ненов и съм режисьор на филма “Чистота или Смърт”. Документално кино е моята страст и историите, които разказвам, са свързани с мен и възприятието ми към темите, които истински ме вълнуват. Вярвам, че решението на важните социални проблеми е чрез разказването за тях."
      },
      {
        name: "Дилян Калчев",
        role: "🎞 Продуцент",
        imageSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/dido.png",
        bio: "Аз съм Дилян Калчев и съм продуцент на филма Чистота или Смърт. Завърших кино-режисура в Англия, където развих своята страст към разказването на истории, особено тези с дълбок социален смисъл. Вярвам, че чрез киното можем да предизвикаме важни обществени промени и да покажем различни гледни точки."
      }
    ];
  
    return (
        <motion.div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 "
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
        return (
          <motion.div 
            className="flex flex-col items-center bg-llblue/[0.5] p-8 rounded-xl"
          >
            {/* Image */}
            <motion.div 
              className="relative w-[400px] h-[500px] mb-6 overflow-hidden rounded-lg  "
              variants={{
                hidden: { scale: 1.5, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeInOut" }
                }
              }}
            >
              <Image
                src={director.imageSrc}
                alt={director.name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:scale-105"
              />
            </motion.div>

            <motion.div 
              className="text-center "
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { delay: 0.8, duration: 0.6 } 
                }
              }}
            >
              <h2 className="text-2xl font-semibold mb-2">{director.name}</h2>
              <h3 className="text-xl text-gray-900 mb-4">{director.role}</h3>
              <p className="text-black text-lg max-w-xl font-montserrat">{director.bio}</p>
            </motion.div>
          </motion.div>
        );
      };
    
    export default AboutUs;