'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ImagesSliderDemo } from '../components/ui/ImagesSliderDemo';

const AboutMov: React.FC = () => {
    const title = "ЗА ФИЛМА";
    const text = (
        <>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-8 text-2xl max-w-3xl mx-auto text-center">
                Филмът разказва личните истории на шестима резиденти, които се лекуват в терапевтичен център за зависими в България.
            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-4 max-w-2xl mx-auto text-left ">
                Иван, баща на две деца, решава да потърси помощ след дълги години на употреба на различни вещества. 
                Той осъзнава, че е време да вземе контрол над живота си в името на семейството. 

            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-4 max-w-2xl mx-auto text-left">
                Рени, майка на малко момченце, е насочена към центъра от своите близки. 
                Те се надяват, че тя ще осъзнае зависимостта си и ще намери нов път към чист и пълноценен живот. 
            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-4 max-w-2xl mx-auto text-left">
                Миро, който дълго време води престъпен живот, намира утеха в наркотиците. 
                След загубата на баща си, вината и последствията от миналото не го оставят на мира. 
                Въпреки всичко, той пази в себе си малката надежда, че все още има доброта в него, 
                а постъпването в центъра става повратен момент в живота му. 
            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-4 max-w-2xl mx-auto text-left ">
                Калоян, бивш резидент, днес работи като консултант с личен опит в терапевтичния център. 
                За него тази работа е начин да се отблагодари на хората, които са му помогнали да се избави от зависимостта и да открие нов смисъл. 
            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-4 max-w-2xl mx-auto text-left">
                Вили е момче с детска церебрална парализа, което от ранна възраст е било изолирано от обществото. Наркотиците стават негово бягство и утеха. 
            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-8 max-w-2xl mx-auto text-left">
                Шестият човек във филма остава анонимен, тъй като стигмата в България относно зависимостите застрашава неговата работа и социален статус.
            </motion.p>

            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-4 text-center max-w-4xl mx-auto">
                Филмът не само разказва техните истории, 
                но и разкрива истината за терапевтичните общности в България 
                като една от ефективните алтернативи за лечение на зависими. 
            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-4 text-center max-w-3xl mx-auto">
                Основната цел на филма е да покаже живота вътре в тези общности, да развенчае мита, 
                че зависимите са от „долните слоеве“ на обществото, и да подчертае надеждата, 
                която хората откриват в този процес на лечение.
            </motion.p>

            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mt-16 mb-4 text-3xl  text-center font-montserrat font-black uppercase text-black"
            >
             Къде е сниман филмът?
            </motion.h1>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-4 text-left">
                Филмът е заснет в <Link href="https://v-pomosht-na-zavisimite.com/" target='_blank' className='underline-hover font-bold'>терапевтичния център „Свети Илия“</Link> в град Габрово. 
                Резидентите там следват организирано ежедневие, което им помага да изградят трайни навици за грижа за себе си и другите. 
                Те също така усвояват нови социални умения с помощта на психолози и консултанти, които имат личен опит в преодоляването на зависимости. 
                Основната цел е да се интегрират обратно в обществото като пълноценни личности.
            </motion.p>
            <ImagesSliderDemo />


            {/* ... additional paragraphs ... */}
        </>
    );

    return (
        <div className='text-black'>
        <div className=' '>
        <motion.div 
            className="p-4 md:p-8 w-[90%] cst:w-[45%] mx-auto text-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mt-16 mb-4 text-5xl  text-center font-montserrat font-black uppercase "
            >
                {title}
            </motion.h1>
        </motion.div>
            </div>

            <div className="text-base md:text-xl w-[90%] sm:w-[60%] mx-auto">{text}</div>
        </div>
    );
};

export default AboutMov;