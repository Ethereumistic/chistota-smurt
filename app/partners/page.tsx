'use client';

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from 'next/link';

const PartnerSection = ({ logo, description, isMainSponsor, className, link }: { logo: string, description: string, isMainSponsor: boolean, className: string, link: string }) => (
  <motion.div
    className={`flex flex-col w-[90%] cst:w-[60%] mx-auto ${isMainSponsor ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between mb-16 gap-8 ${className}`}
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
    <div className="container mx-auto px-4 py-12 font-montserrat text-black">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 mt-32"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Нашите партньори
      </motion.h1>
      
      <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk.png"
        description="Историята на АОНК започва през 2014г. Тогава с решение на Софийски градски съд, асоциацията e регистрирана, като сдружение с нестопанска цел, в частна полза. Учредители са 8-те водещи компании на българския пазар, предоставящи краткосрочно небанково финансиране. От тогава насам, се стремим да работим за реализацията на нашите цели в краткосрочен и дългосрочен план. Асоциацията за отговорно небанково кредитиране е сдружение на водещи финансови институции в областта на краткосрочното отпускане на парични средства на потребители."
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