'use client'
import { ReactLenis } from 'lenis/react'
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IconMapPin } from "@tabler/icons-react";
import Countdown from '../calendar/Countdown';
import { useRouter, usePathname } from 'next/navigation';
import Trailer from '@/app/movie/Trailer';

const SECTION_HEIGHT = 1000;

export const TestScroll2 = () => {

  return (
    <div className="">
      {/* <ReactLenis
        root
        options={{
          lerp: 0.025,
        }}
      > */}
        <Hero />


        <div className="bg-gradient-to-t from-black/0 to-black/[0.5] w-full h-12"></div>
          {/* <p className="text-2xl max-w-2xl mx-auto font-montserrat text-black my-8 text-center fallback-title">
            История за живота и пътя на шестима резиденти в терапевтична общност за зависими в България. Въпреки че много хора са чували за такива общности, малцина знаят как всъщност изглеждат и какво се случва в тях.
          </p> */}

        <Trailer />

          <Countdown />
        {/* <Schedule /> */}
    </div>
  );
};

const Hero = () => {
    const { scrollY } = useScroll();
    
    const dynamicSectionHeight = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 1600],
        [SECTION_HEIGHT, SECTION_HEIGHT + 1600]
    );

    return (
      <div
        style={{ height: `calc(${dynamicSectionHeight}px + 100vh)` }}
        className="relative w-full"
      >
        <CenterImage />
        <ParallaxImages />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-black/0 to-black/[0.5]" />
      </div>
    );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clipStart = 1000;
  const clipEnd = 1000;

  const clip1 = useTransform(scrollY, [clipStart, clipEnd], [25, 0]);
  const clip2 = useTransform(scrollY, [clipStart, clipEnd], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize: "cover",
        backgroundImage:
          "url(https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg-s.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  const router = useRouter();
  const [animationDelay, setAnimationDelay] = useState(4);
  const pathname = usePathname();
  const { scrollY } = useScroll();



  const centerImageHeight = useTransform(
      scrollY,
      [0, SECTION_HEIGHT],
      [SECTION_HEIGHT, SECTION_HEIGHT]
  );
  const sideElementOpacity = useTransform(
      scrollY,
      [0, 500],
      [0, 1]
  );
  const additionalElementOpacity = useTransform(
      scrollY,
      [0, 500],
      [0, 1]
  );
  const sideElementScale = useTransform(
      scrollY,
      [0, 2000],
      [1, 0.3]
  );
  const initialYPosition = 100;

  const centeredTextOpacity = useTransform(
    scrollY,
    [0, 200, 400, 600],
    [1, 1, 0.5, 0]
  );

  const centeredTextY = useTransform(
    scrollY,
    [0, 1000],
    [0, 300]  // Changed from [0, -100] to [0, -50] to slow down the upward movement
  );

  const centeredTextScale = useTransform(
    scrollY,
    [0, 800],
    [1, 0.5]
  );

  const [topPosition, setTopPosition] = useState('-45%');
  const [titleScale, setTitleScale] = useState(1); // Add state for title scale

  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {
    const handleRouteChange = () => {
      setAnimationDelay(1);
    };

    // Check if this is the initial load
    if (performance.navigation.type === 1 || !sessionStorage.getItem('visited')) {
      setAnimationDelay(4);
      sessionStorage.setItem('visited', 'true');
    } else {
      setAnimationDelay(1);
    }

    // This will run on route changes
    handleRouteChange();

    // We don't need to return a cleanup function here
  }, [pathname]);  // Add pathname as a dependency

  useEffect(() => {
    const handleResize = () => {
      setTopPosition(window.innerHeight <= 899 ? '-30%' : '-36%');
      setTitleScale(window.innerHeight <= 899 ? 0.7 : 1);
    };

    // Initial call to set the correct values
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  return (
      <motion.div 
        className="mx-auto max-w-3xl xl:max-w-5xl px-4 pt-[0px] sticky top-0 h-screen flex items-end "
        style={{ height: centerImageHeight }}
      >
        {/* Left Title */}
        <motion.div
          className="absolute w-1/4"
          style={{
            top:'30%', // Exact Y coordinate for Left Title
            left:'10%', // Adjust position based on screen width
            opacity: sideElementOpacity,
            scale: sideElementScale,
            y: initialYPosition, // Set initial Y position
          }}
          initial={{ y: initialYPosition }} // Initial position
          animate={{ y: 0 }} // Animate to current position
        >
          <div>
            <h2 className="md:text-5xl text-3xl text-black font-bold mb-2">София</h2>
            <p className="text-black md:text-2xl text-xl">6 ДЕКЕМВРИ</p>
          </div>
        </motion.div>

        {/* Additional Left Title */}
        <motion.div
          className="absolute w-1/4"
          style={{
            top:'50%', // Exact Y coordinate for Additional Left Title
            left:'-10%', // Adjust position based on screen width
            opacity: additionalElementOpacity,
            scale: sideElementScale,
            y: initialYPosition, // Set initial Y position
          }}
          initial={{ y: initialYPosition }} // Initial position
          animate={{ y: 0 }} // Animate to current position
        >
          <div>
            <h2 className="md:text-5xl text-3xl text-black font-bold mb-2">Бургас</h2>
            <p className="text-black md:text-2xl text-xl text-nowrap">12 ДЕКЕМВРИ</p>
          </div>
        </motion.div>

        {/* Centered Title */}
        <motion.div
          className="absolute w-full text-center"
          style={{
            top: topPosition,
            left: '0%',
            transform: 'translate(-50%, -50%)',
            opacity: centeredTextOpacity,
            y: centeredTextY,
            scale: centeredTextScale.get() * titleScale,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            opacity: { delay: animationDelay, duration: 2, ease: "easeOut" },
            y: { duration: 3, ease: "easeOut" }
          }}
        >
          <p className="text-2xl max-w-2xl mx-auto font-montserrat text-black">
            История за живота и пътя на шестима резиденти в терапевтична общност за зависими в България. Въпреки че много хора са чували за такива общности, малцина знаят как всъщност изглеждат и какво се случва в тях.
          </p>
        </motion.div>

        {/* Parallax Image */}
        <ParallaxImg
          src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/montain.png"
          alt="An example of a space launch"
          start={0}
          end={0}
          stopAt={2000}
          initialScale={1}
          finalScale={0.3}
          className="w-full"
        />

        {/* Additional Right Title */}
        <motion.div
          className="absolute w-1/4"
          style={{
            top:'50%', // Exact Y coordinate for Additional Right Title
            right:'-10%', // Adjust position based on screen width
            opacity: additionalElementOpacity,
            scale: sideElementScale,
            y: initialYPosition, // Set initial Y position
          }}
          initial={{ y: initialYPosition }} // Initial position
          animate={{ y: 0 }} // Animate to current position
        >
          <div>
            <h2 className="md:text-5xl text-3xl text-black font-bold mb-2">Варна</h2>
            <p className="text-black md:text-2xl text-xl text-nowrap">13 ДЕКЕМВРИ</p>
          </div>
        </motion.div>

        {/* Right Title */}
        <motion.div
          className="absolute w-1/4"
          style={{
            top:'30%', // Exact Y coordinate for Right Title
            right:'10%', // Adjust position based on screen width
            opacity: sideElementOpacity,
            scale: sideElementScale,
            y: initialYPosition, // Set initial Y position
          }}
          initial={{ y: initialYPosition }} // Initial position
          animate={{ y: 0 }} // Animate to current position
        >
          <div>
            <h2 className="md:text-5xl text-3xl text-black font-bold mb-2">Пловдив</h2>
            <p className="text-black md:text-2xl text-xl text-nowrap">11 ДЕКЕМВРИ</p>
          </div>
        </motion.div>
      </motion.div>
  );
};
  
const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
  stopAt,
  initialScale,
  finalScale,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
  stopAt: number;
  initialScale: number;
  finalScale: number;
}) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const scale = useTransform(
    scrollY,
    [0, stopAt],
    [initialScale, finalScale],
    { clamp: true }
  );

  const y = useTransform(
    scrollY,
    [0, stopAt],
    [start, end],
    { clamp: true }
  );

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{
        y,
        scale,
        transformOrigin: 'bottom center',
      }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4  text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="my-20 text-4xl text-center font-black uppercase text-zinc-50"
      >
        ПРЕМИЕРИ
      </motion.h1>
      <ScheduleItem title="София" date="8 ДЕКЕМВРИ" location="СОФИЯ" />
      <ScheduleItem title="Пловдив" date="Dec 20th" location="ПЛОВДИВ" />
      <ScheduleItem title="Варна" date="Jan 13th" location="ВАРНА" />
      <ScheduleItem title="Стара Загора" date="Feb 22nd" location="СТАРА ЗАГОРА" />

    </section>
  );
};

const ScheduleItem = ({
  title,
  date,
  location,
}: {
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <IconMapPin />
      </div>
    </motion.div>
  );
};