
import React from 'react';
import { motion } from 'framer-motion';

const Cause: React.FC = () => {
    const title = "КАУЗАТА";
    const text = (
        <>
            <p className='mb-4'>Каузата която подкрепяме е насочена към “Национална информационна линия за наркотиците, алкохола и хазарта” – инициатива, поддържана от Асоциация &quot;Солидарност&quot;. Тази линия е спасителен пояс за хората, които се нуждаят от подкрепа и информация в битката със зависимостите.</p>
            <p className='mb-4'>За съжаление, в България много малък процент от зависимите търсят помощ. Страх ги е да направят тази стъпка и да влязат в специализиран център. Често се срамуват да говорят за зависимостите си, дори със своите близки. А истината е, че тези центрове са една от най-ефективните алтернативи за борбата със зависимостта. Целта на тази линия е да предостави повече информация за тези места – да покаже, че не е страшно.</p>
            <p className='mb-4'>Много хора смятат, че центровете са като болници, където ще ги лекуват, но всъщност не е така. В тях се събират хора със сходни проблеми, които заедно се борят за възстановяването си – като едно общество. Това не е просто лечение, а взаимна подкрепа и път към ново начало.</p>
            <p className='mb-4'>Това, което правим с тази кампания, е наистина важно. Телефонната линия се поддържа изцяло от дарения, и за да може да продължи да съществува, са нужни повече средства. Всеки билет, който закупите за събитието, е директна помощ – 100% от парите ще отидат за подкрепа на линията.</p>
        </>
    );

    return (
        <motion.div 
            className="p-4 md:p-8 w-[90%] cst:w-[40%] text-black mx-auto text-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-xl md:text-4xl font-bold mb-2">{title}</h2>
            <div className="text-base md:text-xl">{text}</div>
        </motion.div>
    );
};

export default Cause;