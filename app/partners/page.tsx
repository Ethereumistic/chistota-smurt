'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ReactLenis } from 'lenis/react'
import Loader from '../components/ui/Loader';
import ToTopButton from '../components/ui/ToTopButton';




const PartnerSection = ({ logo, description, isMainSponsor, className, link, type }: { logo: string, description: React.ReactNode, isMainSponsor: boolean, className: string, link: string, type: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  

  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <motion.div
        className={`flex flex-col w-[90%] cst:w-[80%] mx-auto ${isMainSponsor ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between mb-16 gap-8 ${className}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`w-full lg:w-1/3 ${isMainSponsor ? 'lg:mr-8' : 'lg:ml-8'} relative`}
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
              className={`mx-auto  ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ width: '100%', height: 'auto'  }}
              onLoad={() => setImageLoaded(true)}
            />
          </Link>
        </motion.div>
        <motion.div
          className="w-full lg:w-2/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className={`text-black font-montserrat ${isMainSponsor ? 'text-base' : 'text-base'}`}>
            {description}
          </p>
        </motion.div>
        
      </motion.div>
      <ToTopButton />
    </ReactLenis>
  );
};

const filterCategories = ['Всички', 'Главен Спонсор', 'Кауза', 'ПР & Маркетинг', 'Криейтив', 'Юристи', 'Благодарности'];


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

    if (currentFilter === 'Всички' || currentFilter === 'Кауза') {
      sections.push(
        <div key="solidarnost" ref={solidarnostRef}>
          <PartnerSection
            logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/drugs-info.png"
            description={          
              <>
              <motion.h2 
              className='text-2xl font-bold mb-4 text-dblue'
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
                Да спасим Линията за подкрепа на зависими и техните близки
                </motion.h2>
                  <motion.p       
                    initial={{ y: 32, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="">
                      Националната информационна линия за наркотиците, алкохола и хазарта (НИЛНАХ или
                      Линията) е създадена през 2008 г. и е първата и единствена по рода си служба в България.
                </motion.p>
                <br/>
                  <motion.p       
                    initial={{ y: 32, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="">
                      Линията предоставя на цялото общество обширна и достоверна информация и консултация
                      относно видовете психоактивни вещества, ефектите и рисковете от употребата на наркотици и
                      алкохол, проблемната игра на хазарт, зависимостите и методите за тяхното лечение, местата за
                      помощ в страната, както и насоки за родители, близки и учители.
                </motion.p>
                <br/>
                <motion.h2 
              className='text-xl font-semibold mb-4 text-dblue'
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
                      Услугите на Линията са <span className="font-black">безплатни</span> и анонимни на национално ниво и от чужбина през
                      следните канали:
                </motion.h2>
                  <motion.ul       
                    initial={{ y: 32, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="list-disc list-inside ms-4">
                      <li className="mb-1">Телефонна линия за помощ: <span className="font-semibold">0888 99 18 66;</span></li>
                      <li className="mb-1">онлайн чат консултации;</li>
                      <li className="mb-1">консултации по електронна поща;</li>
                      <li className="mb-1">информационен портал: <Link href="https://www.drugsinfo-bg.org/" target="_blank" rel="noopener noreferrer" className="underline-hover font-semibold">www.drugsinfo-bg.org</Link></li>
                </motion.ul>
                <br/>
                <motion.p       
                    initial={{ y: 32, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="">
                      Стотици хора от цяла България, както и българи, живеещи в чужбина, всяка година получават
                      безплатна, анонимна консултация и подкрепа от експерт, а над 200 000 достъпват съвети и
                      полезна информация онлайн през портала. Не позволявайте Линията да бъде закрита!
                </motion.p>
                
              </>
              }
            isMainSponsor={false}
            className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
            link="https://www.drugsinfo-bg.org/"
            type="Кауза"

          />
        </div>,

      );
    }

    if (currentFilter === 'Всички' || currentFilter === 'Благодарности') {
      sections.push(
        <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/teodor.png"
        description={          
          <>
          <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            TEODOR
            </motion.h2>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  Ние от TEODOR знаем, че най-ценният ни ресурс са хората. 
                  Нашата мисия да бъдем пътеводител за качество и стил в мъжката мода 
                  е пряко свързана с уважението, добрата комуникация и личното отношение, 
                  което проявяваме към всеки наш клиент или служител. Ние вярваме, 
                  че малките жестове означат много и бихме искали чрез подкрепата на тази 
                  кауза да приобщим и други организации и фирми, като по този начин дадем 
                  по-голяма гласност и разбиране към хората с проблемна зависимост. 
                  Да избягаш от тях е най лесно, да застанеш до тях  - най-мъжко!
            </motion.p>

          </>
          }
        isMainSponsor={false}
        className="mb-36 bg-lblue/[0.5] p-8 rounded-xl"
        link="https://teodor.bg/"
        type="Благодарности"

      />,
      <PartnerSection
      key="empo"
      logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/empo.png"
      description={          
        <>
        <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            The Emporium Hotel Plovdiv - MGallery Collection
            </motion.h2>
            <motion.p       
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="">
                За екипа на <strong>The Emporium Hotel Plovdiv - MGallery Collection</strong> е 
                въпрос на отговорно поведение да застане в подкрепа на проект като 
                документалния филм <strong>&quot;Чистота или смърт&quot;</strong>.
          </motion.p>
          <br/>
            <motion.p       
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="">
                За нас подобни инициативи са в основата на така належащата промяна в обществото ни - 
                решението на всеки проблем започва с осъзнаването му!
                Освзнато трябва да е и подпомагането на всеки, отделил от времето и емоцията си, 
                за да провокира информираност, емпатия и лична отговорност! Благодарим на създателите на 
                <strong>&quot;Чистота или смърт&quot;</strong>, че ни предоставиха възможност да бъдем съпричастни към 
                проблеми, които могат да се случат на всеки от нас!
          </motion.p>
          <br/>
            <motion.p       
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="">
                <strong>The Emporium Hotel Plovdiv - MGallery Collection</strong> е 
                единствения по рода си 5-звезден Smart хотел в гр. Пловдив и на Балканския полуостров! 
                Като част от престижната френска верига Accor, той дава комплексен отговор и на най-високите 
                изисквания за дизайн на интериора, персонален комфорт и условия за бизнес и релаксация.
          </motion.p>
        </>
        }
      isMainSponsor={true}
      className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
      link="https://emporiumplovdiv.com/"
      type="Благодарности"

    />
      );
    }

    if (currentFilter === 'Всички' || currentFilter === 'Юристи') {
      sections.push(
        <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/law.png"
        description={          
          <>
          <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Адвокатско дружество &quot;Петров и Тенев&quot;
            </motion.h2>
            <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  В своята адвокатска практика винаги сме били ангажирани в подкрепа на хора, 
                  които, бидейки жертва на обстоятелствата, страдат от някаква форма на зависимост. 
                  Щастливи сме от възможността да участваме като партньори на кампанията, 
                  в което виждаме възможност още веднъж да протегнем ръка към тези хора и да бъдем обществено полезни.
            </motion.p>
          </>
          }
        isMainSponsor={true}
        className="mb-36 bg-lblue/[0.5] p-8 rounded-xl"
        link="https://www.facebook.com/people/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D1%81%D0%BA%D0%BE-%D0%B4%D1%80%D1%83%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2-%D0%A2%D0%B5%D0%BD%D0%B5%D0%B2-CO/100065667963898/"
        type="Юристи"

      />
      );
    }


    if (currentFilter === 'Всички' || currentFilter === 'Благодарности') {
      sections.push(
        <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/rent-a-car.png"
        description={          
          <>
          <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Top Rent A Car
            </motion.h2>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  Top Rent A Car участва в тази кампания с желание да допринесе и покаже добрият пример за социална ангажираност. 
                  Осъзнаваме сериозността на проблема със зависимостите и вярваме, че подкрепата на инициативи като тази помага на хората, 
                  нуждаещи се от информация и помощ, да намерят път към възстановяване.
            </motion.p>
            <br/>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  С включването си в инициативата зад филма <strong>&quot;Чистота или Смърт&quot;</strong> и благотворителното събитие за &quot;Националната информационна линия за наркотиците, 
                  алкохола и хазарта&quot; се стремим не само да подпомогнем пряко каузата, но и да вдъхновим други компании и хора да се ангажират с важни социални цели.
            </motion.p>
            <br/>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  Нашият екип вярва, че бизнесът има роля отвъд икономическото развитие – той трябва да служи като пример за отговорност и ангажираност към обществото.
            </motion.p>
          </>
          }
        isMainSponsor={false}
        className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
        link="https://toprentacar.bg/"
        type="Благодарности"

      />,
      <PartnerSection
      key="biletbg"
      logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/bilet.png"
      description={          
        <>
        <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Bilet.BG
            </motion.h2>
            <motion.p       
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="">
                Ние сме онлайн платформа за продажба на билети в България, 
                която свързва публиката с културни, спортни и развлекателни събития в цялата страна. 
                С нашият опит, ние сме се утвърдили като надежден партньор в разпространението 
                на билети за разнообразни събития – от театрални постановки и концерти до кинопрожекции и фестивали.
          </motion.p>
          <br/>
          <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Защо подкрепямe този филм?
            </motion.h2>
            <motion.p       
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="">
                Подкрепяме филма <strong>&quot;Чистота или Смърт&quot;</strong>, защото вярваме в силата на документалното кино 
                да повдига важни обществени теми и да създава пространство за диалог. Като платформа, която ежедневно 
                свързва хората с изкуството, осъзнаваме отговорността си да подкрепяме проекти, които не само забавляват, 
                но и променят перспективи и разбирания.
          </motion.p>
          <br/>
            <motion.p       
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="">
                Чрез нашата мрежа се стремим да направим филма достъпен за възможно най-широка аудитория, 
                защото вярваме, че темата за зависимостите заслужава да бъде видяна и обсъдена от цялото общество. 
                Това е филм, който може да промени животи, да вдъхнови надежда и да покаже, че промяната е възможна.
          </motion.p>
        </>
        }
      isMainSponsor={true}
      className="mb-36 bg-lblue/[0.5] p-8 rounded-xl"
      link="https://bilet.bg/"
      type="Благодарности"

    />,
      <PartnerSection
        key="security"
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/securityyy.png"
        description={          
          <>
          <motion.h2 
            className='text-2xl font-bold mb-4 text-dblue'
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}>
              &quot;ДЖИ ЕС ЕМ СЕКЮРИТИ&quot;
              </motion.h2>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  &quot;Глобално Управление на Сигурност&quot; (Globul Security Management) е създадена от група експерти с дългогодишен опит в охранителния бизнес. 
                  Ние развиваме и усъвършенстваме най-добрите практики, с амбицията да предлагаме <strong>&quot;Сигурност от последно поколение&quot;</strong>.
            </motion.p>
            <br/>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  Мисията ни е изграждане на доверие и устойчиво партньорство с всеки клиент за постигане на взаимни успех.
            </motion.p>
            <br/>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  Вярваме, че социалната отговорност е неразделна част от нашата дейност и затова с гордост подкрепяме благотворителната кампания <strong>&quot;Чистота или Смърт&quot;</strong>. 
                  За нас е важно да обръщаме внимание на значими социални каузи и да допринасяме за положителна промяна в обществото.
            </motion.p>
          </>
          }
        isMainSponsor={false}
        className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
        link="https://www.gsmsecurity.bg/"
        type="Благодарности"
      />,
      );
    }

    if (currentFilter === 'Всички' || currentFilter === 'ПР & Маркетинг') {
      sections.push(
        <PartnerSection
          key="steam"
          logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/steam-pr.png"
          description={          
            <>
            <motion.h2 
              className='text-2xl font-bold mb-4 text-dblue'
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
                Steam Net Bulgaria
                </motion.h2>
                <motion.p       
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="">
                    Ние сме консултантска PR и комуникационна агенция, която вярва, че
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
            <motion.h2 
              className='text-2xl font-bold mb-4 text-dblue'
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
                BUMBUL STUDIO
                </motion.h2>
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

        />,
        <PartnerSection
        key="zashev"
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/zashev.png"
        description={          
          <>
          <motion.h2 
            className='text-2xl font-bold mb-4 text-dblue'
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}>
              Zashev Design
              </motion.h2>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  Zashev Design е студио за уеб дизайн с 19 години опит. Студиото е специализирано в създаване на
                  индивидуални и цялостни решения за уеб, което включва – изработка на интернет сайтове,
                  електронни магазини, уеб базиран софтуер, Google реклама, Facebook &amp; Instagram реклама, SEO
                  оптимизация.
            </motion.p>
            <br/>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
В благотворителната кампания <strong>&quot;Чистота или Смърт&quot;</strong> ние ще отговаряме за популяризирането и маркетинг стратегията за успеха на каузата.
            </motion.p>
          </>
          }
        isMainSponsor={true}
        className="mb-36 bg-lblue/[0.5] p-8 rounded-xl"
        link="https://zashev.com/"
        type="ПР & Маркетинг"

      />,
      );
    }



    if (currentFilter === 'Всички' || currentFilter === 'Криейтив') {
      sections.push(
        <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/addminimal-logo.png"
        description={          
          <>
          <motion.h2 
            className='text-2xl font-bold mb-4 text-dblue'
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}>
              ADDMINIMAL CREATIVE STUDIO
              </motion.h2>
                <motion.p       
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="">
                    Зависимостите са наши лични слабости и уроци, те са плод на наши избори. От тях можем да излезнем
                    победители над себе си, или с провал. Зависимостите са и признак на счупено общество.
                    И ако изместим фокуса от различията ни, а го насочим към важни за всички ни каузи,
                    то организмът ще заработи отново.
              </motion.p>
              <br />
                <motion.p       
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="">
                    Каузата на този филм си заслужава. Заставам зад нея.
              </motion.p>
          </>
          }
        isMainSponsor={false}
        className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
        link="http://behance.net/addminimal"
        type="Криейтив"

      />,

        <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/compositor.png"
        description={          
          <>
                                    <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Мария Каракушева
            </motion.h2>
            <motion.p       
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="mb-4">
                  Аз съм композитор и пианист, посветила живота си на сценичната музика още от петгодишна възраст. 
                  В последните години се развивам и в областта на филмовата музика – страст, 
                  която ми дава възможност да създавам дълбоки и въздействащи музикални картини.
          </motion.p>
                                    <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Защо подкрепям този филм?
            </motion.h2>
            <motion.p       
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="">
                  Защото вярвам, че никой не е застрахован да се отклони от пътя си и да загуби връзка със своето семейство, 
                  близки или сам. Силата на волята и намирането на опора – било то в нас самите, в близък човек или в случайно срещнат, 
                  който подава ръка – е безценен пример. В този филм преминаваме през всички емоции, но най-важното е да подходим с разбиране и състрадание, 
                  защото това може да се случи на всеки. Всеки може да е “ти”.
          </motion.p>

          </>
          }
        isMainSponsor={true}
        className="mb-36 bg-lblue/[0.5] p-8 rounded-xl"
        link="https://www.karakusheva.com/"
        type="Криейтив"
      />,
      <PartnerSection
      logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/echoray-dark.png"
      description={          
        <>
                                  <motion.h2 
        className='text-2xl font-bold mb-4 text-dblue'
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}>
          EchoRay
          </motion.h2>
          <motion.p       
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-4">
              EchoRay е стартъп, създаващ иновативни уеб решения, 
              които отговарят на разнообразни нужди – от корпоративни уебсайтове и блогове, 
              до продуктови и информационни страници, платформи с карти, форуми, 
              системи за управление на документи и онлайн магазини. 
              Стремим се да създаваме функционални и ефективни уеб проекти, 
              които предоставят стойност на клиентите и техните аудитории.
        </motion.p>
        <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Защо подкрепямe този филм?
            </motion.h2>
          <motion.p       
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-4">
              Ние вярваме, че технологиите могат да бъдат двигател за значими каузи. 
              За нас е чест да подкрепим проекта <strong>&quot;Чистота или Смърт&quot;</strong> – документален филм, 
              който показва истината за живота в терапевтичните общности за зависими в България 
              и тяхната роля в процеса на възстановяване.
        </motion.p>
          <motion.p       
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-4">
              Създаването на специална страница с локациите 
              на всички терапевтични центрове в страната според нас е допълнителната стойност 
              към този важен филм и проект. Смятаме, че тази информация може да достигне до повече 
              хора и да помогне на онези, които се нуждаят от подкрепа, да намерят пътя си към 
              възстановяване.
        </motion.p>


        </>
        }
      isMainSponsor={false}
      className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
      link="https://x.com/ECHORAYxyz"
      type="Криейтив"
    />,
      );
    }

    if (currentFilter === 'Всички' || currentFilter === 'Кауза') {
      sections.push(

<PartnerSection
  logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aso.png"
  description={          
    <>
    <motion.h2 
    className='text-2xl font-bold mb-4 text-dblue'
    initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}>
      АСОЦИАЦИЯ В ПОМОЩ НА ЗАВИСИМИТЕ
      </motion.h2>
        <motion.p       
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="">
            Асоциацията е основана от три организации с терапевтични общности за работа със зависими през октомври 2023 г. 
            Тя е плод на обединение, водено от една мисия: да събере всички центрове за лечение на зависими в България 
            около общата идея за изграждане на осведоменост и разбиване на обществената стигма, която обгръща темите за 
            зависимостта и хората, които се борят с нея. Асоциацията си поставя амбициозната цел да съдейства за промени в 
            законодателната система и да работи за по-голямо разбиране и подкрепа на хората, нуждаещи се от помощ.
      </motion.p>
      <br/>
        <motion.p       
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="">
            Дейностите на асоциацията включват провеждане на информационни кампании, организиране на публични дискусии и обучения, 
            както и събития като спортни мероприятия, в които участват хора в процес на лечение или вече преминали през него. 
            Това са моменти на истинска трансформация и показват, че промяната е възможна.
            </motion.p>
      <br/>
      <motion.h2 
    className='text-xl font-semibold mb-4 text-dblue'
    initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}>
             ОТ СЪЗДАТЕЛИТЕ НА <span className="font-black">&quot;Чистота или Смърт&quot;</span>:
      </motion.h2>
      <motion.p       
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="">
            Част от събраните средства ще бъдат предоставени на &quot;АСОЦИАЦИЯ В ПОМОЩ НА ЗАВИСИМИТЕ&quot;, за да се реализира поредното спортно събитие &quot;12:0.&quot; 
            То ще бъде уникална възможност за зависими хора да покажат, че тяхната стойност е неоспорима, че те могат да се променят и преодолеят трудностите си. 
            Целта е да разчупим стереотипите и да вдъхновим обществеността, като покажем, че хората, борещи се със зависимост, не са опасни, а заслужават подкрепа и уважение. 
            На събитието ще участват известни спортисти и политици, които ще окажат своята подкрепа за каузата и ще помогнат за разширяване на обществената ангажираност към темата.
      </motion.p>
      
    </>
    }
  isMainSponsor={true}
  className="mb-36 bg-lblue/[0.5] p-8 rounded-xl"
  link="/partners"
  type="Кауза"

/>
      );
    }

    if (currentFilter === 'Всички' || currentFilter === 'Благодарности') {
      sections.push(
        <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/pic-gabrovo.svg"
        description={          
          <>
          <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Превантивно информационен център – Габрово
            </motion.h2>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  <strong>&quot;Чистота или смърт&quot;</strong> е филм за живота. За избори, за грешките и най-вече за силата на човека да промени пътя си. 
                  Филмът носи усещането, че няма невъзможни неща, когато откриеш себе си, намериш подкрепата и последваш вярата и надежата за <strong>&quot;чист живот&quot;</strong>. 
            </motion.p>
            <br/>
            <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Защо подкрепямe този филм?
            </motion.h2>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                  Превантивно-информационният център към Община Габрово застава изцяло зад каузата на<br/> <strong>&quot;Чистота или смърт&quot;</strong>, 
                  защото сме убедени, че само докосвайки се до искрените човешки истории, може да променяме стигмата и негативното 
                  отношение към засегнатите от тази тежка болест <strong>&quot;зависимостта&quot;</strong>.
            </motion.p>

          </>
          }
        isMainSponsor={false}
        className="mb-36 bg-orange-100/[0.5] p-8 rounded-xl"
        link="https://prevention.gabrovo.bg/"
        type="Благодарности"

      />,
        <PartnerSection
        logo="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/obshtina.png"
        description={          
          <>
          <motion.h2 
          className='text-2xl font-bold mb-4 text-dblue'
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
            Превантивно информационен център – Бургас
            </motion.h2>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                Общински съвет по наркотични вещества и Превантивно информационен център – Бургас, са активно свързани със страданията на употребяващите и техните семейства. 
                Борбата която те водят за своя живот и този  на близките си е трудна и изпълнена с разочарования и неуспехи. Това все повече се превръща в социално значим проблем, 
                който ангажира институции и общество. 
            </motion.p>
            <br/>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                Филмът „Чистота или Смърт“, предоставя реалистична картина за пътя на зависимостта но и дава надежда за изход. Показва работещи терапевтични модели, без да залъгва публиката, 
                че те са панацея независеща от волята и характера на всеки влязъл в кръговрата на употребата. 
            </motion.p>
            <br/>
              <motion.p       
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="">
                Ние от Съвета по наркотични вещества смятаме, че първата крачка към излекуването е възможността всеки да си даде сметка за реалността в която живее. 
                Благодарим на организаторите на филма и целия снимачен екип за тяхната креативност, професионализъм и оптимистичен поглед, към този отчайващо тежък проблем.            </motion.p>
          </>
          }
        isMainSponsor={true}
        className="mb-36 bg-lblue/[0.5] p-8 rounded-xl"
        link="https://www.nfp-drugs.bg/%D0%B1%D1%83%D1%80%D0%B3%D0%B0%D1%81/"
        type="Благодарности"

      />,

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

