'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';

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
          Meet the Visionaries
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
          <p className="mb-4">
            Together, Jane and John form a powerhouse duo in the world of cinema. Their collaborative approach and complementary skills have resulted in a string of box office hits and critical darlings. Their latest project promises to be their most ambitious yet, combining heartfelt storytelling with breathtaking visuals.
          </p>
          <p>
            Stay tuned for more updates on this exciting new film, and dive into the world of cinema crafted by two of the industry's most innovative minds.
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
        name: "Jane Doe",
        role: "Director",
        imageSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/dani.png",
        bio: "Jane Doe is an award-winning director known for her innovative storytelling and visual style. With over 20 years of experience in the film industry, Jane has directed numerous critically acclaimed movies that have captivated audiences worldwide."
      },
      {
        name: "John Smith",
        role: "Co-Director",
        imageSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/dido.png",
        bio: "John Smith is a visionary co-director who brings a unique perspective to every project. His background in visual effects and passion for pushing cinematic boundaries have resulted in groundbreaking films that blend storytelling with cutting-edge technology."
      }
    ];
  
    return (
        <motion.div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
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
            className="flex flex-col items-center "
          >
            <motion.div 
              className="relative w-64 h-80 mb-6 overflow-hidden rounded-lg"
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
                className="transition-all duration-300 hover:scale-110"
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
              <h2 className="text-2xl font-semibold mb-2">{director.name}</h2>
              <h3 className="text-xl text-gray-700 mb-4">{director.role}</h3>
              <p className="text-black max-w-sm">{director.bio}</p>
            </motion.div>
          </motion.div>
        );
      };
    
    export default AboutUs;