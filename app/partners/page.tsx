'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ReactLenis } from 'lenis/react'
import Loader from '../components/ui/Loader';




const PartnerSection = ({ logo, description, isMainSponsor, className, link, type }: { logo: string, description: React.ReactNode, isMainSponsor: boolean, className: string, link: string, type: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  

  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <motion.div
        className={`flex flex-col w-[90%] cst:w-[80%] mx-auto ${isMainSponsor ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between mb-16 gap-8 ${className}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`w-full md:w-1/3 ${isMainSponsor ? 'md:mr-8' : 'md:ml-8'} relative`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader />
              </div>
            )}
            <Image 
              src={logo} 
              alt="Partner logo" 
              width={400} 
              height={200} 
              className={`mx-auto ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ width: '100%', height: 'auto' }}
              onLoad={() => setImageLoaded(true)}
            />
          </Link>
        </motion.div>
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className={`text-black font-montserrat ${isMainSponsor ? 'text-lg' : 'text-base'}`}>
            {description}
          </p>
        </motion.div>
      </motion.div>
    </ReactLenis>
  );
};

const filterCategories = ['Всички', 'Главен Спонсор', 'ПР & Маркетинг', 'Бюрократщина', 'Sailors', 'Други'];


export default function Partners() {
  const solidarnostRef = useRef<HTMLDivElement | null>(null);
  const [currentFilter, setCurrentFilter] = useState('Всички');
  const [isLoading, setIsLoading] = useState(true); // Moved to Partners component

  useEffect(() => {
    setIsLoading(true);
  }, []); // Added dependency array to useEffect


  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#solidarnost' && solidarnostRef.current) {
      // Scroll to the element
      solidarnostRef.current.scrollIntoView({ behavior: 'smooth' });

      // Adjust the scroll position by a specific number of pixels
      const offset = 120; // Adjust this value as needed
      const elementPosition = solidarnostRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const renderPartnerSections = () => {
    const sections = [];

    if (currentFilter === 'Всички' || currentFilter === 'Главен Спонсор') {
      sections.push(
        <PartnerSection
          key="aonk"
          logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk-full.png"
          description={
            <>
              <motion.h2 
              className='text-2xl font-bold mb-4 text-dblue'
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
                Защо избрахме да подкрепим филма
                </motion.h2>
  
                <motion.p       
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="">
                    АОНК застава зад проекта Чистота или смърт, като част от социалната и дейност. За компаниите-членове на АОНК, повдигането на вниманието върху реалните причини за зависимост сред уязвимите лица в обществото, е много важна стъпка. Не само с цел превенция, но и адекватно разбиране на проблема и избягване на популистка употреба.
              </motion.p>
  
              <br />
              <motion.h2 
              className='text-2xl font-bold mb-4 text-dblue'
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
                История на Асоциацията
                </motion.h2>
  
                <motion.p       
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="">
                    Асоциацията за отговорно небанково кредитиране (АОНК) започва дейността си през 2014 година. Всички членове на АОНК са водещи финансови институции, регулирани от Българска народна банка, които стриктно изпълняват законодателните изисквания. Компаниите в АОНК са обединени от стремежа си да превърнат най-добрите европейски практики в областта на небанковото финансиране в стандарт за сектора, с което потребителите да получават наистина качествени и модерни финансови услуги.
              </motion.p>
  
              <br />
              <motion.p       
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="">
                    АОНК активно работи с най – уязвимите групи в обществото. АОНК редовно провежда обучения и благотворителни инициативи, които насърчават повишаването на грамотността сред общностите и стимулират отговорното финансово поведение на всички участници в сектора.
              </motion.p>
            </>
          }
          isMainSponsor={true}
          className="mb-32 bg-lblue/[0.5] p-8 rounded-xl"
          link="https://aonk.bg"
          type="Други"

        />,
      );
    }

    if (currentFilter === 'Всички' || currentFilter === 'Други') {
      sections.push(
        <div key="solidarnost" ref={solidarnostRef}>
          <PartnerSection
            logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/solidarnost-association-BG.png"
            description={          
              <>
                  <motion.p       
                    initial={{ y: 32, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="">
                      Сдружение &quot;АРЗ Солидарност&quot; е неправителствена организация в обществена полза. Ние създадохме програма &quot;Солидарност&quot;, за да отговорим на нуждите на зависимите към алкохол, наркотици и хазарт хора и техните семейства и близки. Нашата програма има за мисия: Рехабилитация и социална реинтеграция на зависимите с цел автономен живот. Подкрепа и консултация на родителите и близките на зависимите. Информационно-консултативна работа, популяризиране на каузата на &quot;Солидарност&quot;.
                </motion.p>
              </>
              }
            isMainSponsor={false}
            className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
            link="https://www.solidarnost-bg.org/"
            type="Други"

          />
        </div>,
      );
    }

    if (currentFilter === 'Всички' || currentFilter === 'ПР & Маркетинг') {
      sections.push(
        <PartnerSection
          key="steam"
          logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/steam-pr.png"
          description={          
            <>
                <motion.p       
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="">
                    STEAM Net Bulgaria е консултантска PR и комуникационна агенция, която вярва, че
                    смислената комуникация може да оформя възприятията, да вдъхновява действия и да
                    насърчава положителната промяна. Агенцията се стреми да създава ангажиращи и
                    устойчиви комуникационни решения, които подкрепят както организации, така и различни
                    инициативи и каузи.
              </motion.p>
            </>
            }
          isMainSponsor={true}
          className="mb-36 bg-lblue/[0.5] p-8 rounded-xl"
          link="https://steam.bg/"
          type="ПР & Маркетинг"

        />,
        <PartnerSection
          key="bumbul"
          logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/bumbul-con.png"
          description={          
            <>
                <motion.p       
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="">
                      BUMBUL STUDIO е консултантска и комуникационна агенция, която помага на бизнеси,
                      брандове, експертни лица, инициативи и каузи в полето на маркетинга, рекламата и
                      събития. Знаем, че ключът към ефективното позициониране е в комуникацията, затова
                      от BUMBUL STUDIO ще Ви подкрепим от идеята до реализацията, като обръщаме внимание
                      на всяка подробност по трасето.
              </motion.p>
            </>
            }
          isMainSponsor={false}
          className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
          link="https://bumbulstudio.bg/"
          type="ПР & Маркетинг"

        />
      );
    }

    // Add more conditions for other partner types if needed

    return sections;
  };

  return (
    <div className="max-w-full mx-auto px-4 py-12 font-montserrat text-black">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 mt-32"
        initial={{ y: -48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}>
        Нашите партньори
      </motion.h1>

      {/* Add filter buttons */}
      <div className="flex flex-wrap justify-center mb-8 gap-2 sm:gap-4">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setCurrentFilter(category)}
            className={`px-3 py-2 text-sm sm:text-base font-bold rounded mb-2 sm:mb-0 ${
              currentFilter === category ? 'bg-purple-600 text-white' : 'bg-gray-200 border border-gray-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Render filtered partner sections */}
      {renderPartnerSections()}
    </div>
  );
}

