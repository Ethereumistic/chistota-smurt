import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Cause: React.FC<{ causeRef: React.RefObject<HTMLDivElement> }> = ({ causeRef }) => {


    const title = "КАУЗАТА";
    const text = (
        <>
            {/* Wrap each paragraph in a motion.div for animation */}
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-8">
                Каузата която подкрепяме е насочена към <Link className='underline-hover font-semibold' href="https://www.drugsinfo-bg.org/" target="_blank">&quot;
                Национална информационна линия за наркотиците, алкохола и хазарта&quot;</Link> 
                – инициатива, поддържана от<Link className='underline-hover font-semibold' href="/partners#solidarnost"> Асоциация &quot;Солидарност&quot;</Link>
                . Тази линия е спасителен пояс за хората, които се нуждаят от подкрепа и информация в борбата със зависимостите.
            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-8">                
                За съжаление, в България много малък процент от зависимите търсят помощ. Страх ги е да направят тази стъпка и да влязат в специализиран център. Често се срамуват да говорят за зависимостите си, дори със свои близки. А истината е, че тези центрове са една от най-ефективните алтернативи за борбата със зависимостта. Целта на тази линия е да предостави повече информация за тези места – да покаже, че не е страшно.
            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-8">                
                Много хора смятат, че центровете са като болници, където ще ги лекуват, но всъщност не е така. В тях се събират хора със сходни проблеми, които заедно се борят за възстановяването си – като едно общество. Това не е просто лечение, а взаимна подкрепа и път към ново начало.
            </motion.p>
            <motion.p       
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-8">                
                Това, което правим с тази кампания, е наистина важно. Телефонната линия се поддържа изцяло от дарения, и за да може да продължи да съществува, са нужни повече средства. Всеки билет, който закупите за събитието, е директна помощ – 100% от парите ще отидат за подкрепа на линията.
            </motion.p>
        </>
    );

    return (
        <motion.div 
            className="p-4 md:p-8 w-[90%] cst:w-[40%] text-black mx-auto text-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mt-20 mb-4 text-5xl text-center font-black uppercase text-black"
      >
        {title}
      </motion.h1>
      <Link href="https://www.solidarnost-bg.org/" target="_blank" className="">
      <Image 
        src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/solidarnost-association-BG.png" 
        alt="Partner logo" 
        width={400} 
        height={200} 
        className="mx-auto mb-4 hover:scale-105 transition-all" 
        style={{ width: '60%', height: 'auto' }}
      />
      </Link>  
      <div className="text-base md:text-xl">{text}</div>
        </motion.div>
    );
};

export default Cause;