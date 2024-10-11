'use client';

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from 'next/link';

const PartnerSection = ({ logo, description, isMainSponsor, className, link }: { logo: string, description: React.ReactNode, isMainSponsor: boolean, className: string, link: string }) => (
  <motion.div
    className={`flex flex-col w-[90%] cst:w-[80%] mx-auto ${isMainSponsor ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between mb-16 gap-8 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className={`w-full md:w-1/3 ${isMainSponsor ? 'md:mr-8' : 'md:ml-8'}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
      <Image 
        src={logo} 
        alt="Partner logo" 
        width={400} 
        height={200} 
        className="mx-auto" 
        style={{ width: '100%', height: 'auto' }}
      />
      </Link>
    </motion.div>
    <motion.div
      className="w-full md:w-2/3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <p className={`text-black font-montserrat  ${isMainSponsor ? 'text-lg' : 'text-base'}`}>
        {description}
      </p>
    </motion.div>
  </motion.div>
);

export default function Partners() {
  return (
    <div className="max-w-full mx-auto px-4 py-12 font-montserrat text-black">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 mt-32"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Нашите партньори
      </motion.h1>
      
      <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk-full.png"
        description={
          <>
            <h2 className='text-2xl font-bold mb-4 text-dblue'>Защо избрахме да подкрепим филма</h2>
            <p>АОНК застава зад проекта Чистота или смърт, като част от социалната и дейност. За компаниите-членове на АОНК, повдигането на вниманието върху реалните причини за зависимост сред уязвимите лица в обществото, е много важна стъпка. Не само с цел превенция, но и адекватно разбиране на проблема и избягване на популистка употреба.</p>
            <br />
            <h2 className='text-2xl font-bold mb-4 text-dblue'>История на Асоциацията</h2>
            <p>Асоциацията за отговорно небанково кредитиране (АОНК) започва дейността си през 2014 година. Всички членове на АОНК са водещи финансови институции, регулирани от Българска народна банка, които стриктно изпълняват законодателните изисквания. Компаниите в АОНК са обединени от стремежа си да превърнат най-добрите европейски практики в областта на небанковото финансиране в стандарт за сектора, с което потребителите да получават наистина качествени и модерни финансови услуги.</p>
            <br />
            <p>Асоциацията е колективен изразител на волята за избягване на нелоялните практики, законови нарушения и безконтролното отпускане на кредити. Паралелно с това АОНК активно работи с най – уязвимите групи в обществото. АОНК редовно провежда обучения и благотворителни инициативи, които насърчават повишаването на грамотността сред общностите и стимулират отговорното финансово поведение на всички участници в сектора.</p>
          </>
        }
        isMainSponsor={true}
        className="mb-32 bg-lblue/[0.5] p-8 rounded-xl"
        link="https://aonk.bg" // Add the actual link here
      />
      
      <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/solidarnost-association-BG.png"
        description="Сдружение &quot;АРЗ Солидарност&quot; е неправителствена организация в обществена полза. Ние създадохме програма &quot;Солидарност&quot;, за да отговорим на нуждите на зависимите към алкохол, наркотици и хазарт хора и техните семейства и близки. Нашата програма има за мисия: Рехабилитация и социална реинтеграция на зависимите с цел автономен живот. Подкрепа и консултация на родителите и близките на зависимите. Информационно-консултативна работа, популяризиране на каузата на &quot;Солидарност&quot;."
        isMainSponsor={false}
        className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
        link="https://www.solidarnost-bg.org/" // Add the actual link here
      />
    </div>
  );
}