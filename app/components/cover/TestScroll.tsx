import { ReactLenis } from 'lenis/react'
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { IconMapPin } from "@tabler/icons-react";
import Countdown from '../calendar/Countdown';

const SECTION_HEIGHT = 1000;

export const TestScroll = () => {
  return (
    <div className="">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
        
        <div className="bg-gradient-to-t from-black/0 to-black/[0.5] w-full h-12"></div>

        <Countdown />
        <Schedule />
      </ReactLenis>
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
  const { scrollY } = useScroll();
  
  const centerImageHeight = useTransform(
      scrollY,
      [0, SECTION_HEIGHT],
      [SECTION_HEIGHT, SECTION_HEIGHT]
  );

  const sideElementOpacity = useTransform(
      scrollY,
      [0, 1000],
      [0, 1]
  );

  const additionalElementOpacity = useTransform(
      scrollY,
      [0, 1000],
      [0, 1]
  );

  const sideElementScale = useTransform(
      scrollY,
      [0, 2000],
      [1, 0.3]
  );

  // Set initial Y positions for the text elements
  const initialYPosition = 100; // Adjust this value as needed

  return (
      <motion.div 
        className="mx-auto max-w-3xl xl:max-w-5xl px-4 pt-[0px] sticky top-0 h-screen flex items-end"
        style={{ height: centerImageHeight }}
      >
        {/* Left Title */}
        <motion.div
          className="absolute w-1/4"
          style={{
            top: '30%', // Exact Y coordinate for Left Title
            left: '5%', // Exact X coordinate for Left Title
            opacity: sideElementOpacity,
            scale: sideElementScale,
            y: initialYPosition, // Set initial Y position
          }}
          initial={{ y: initialYPosition }} // Initial position
          animate={{ y: 0 }} // Animate to current position
        >
          <div>
            <h2 className="text-5xl text-black font-bold mb-2">София</h2>
            <p className="text-black text-2xl">10 ДЕКЕМВРИ</p>
          </div>
        </motion.div>

        {/* Additional Left Title */}
        <motion.div
          className="absolute w-1/4"
          style={{
            top: '50%', // Exact Y coordinate for Additional Left Title
            left: '-20%', // Exact X coordinate for Additional Left Title
            opacity: additionalElementOpacity,
            scale: sideElementScale,
            y: initialYPosition, // Set initial Y position
          }}
          initial={{ y: initialYPosition }} // Initial position
          animate={{ y: 0 }} // Animate to current position
        >
          <div>
            <h2 className="text-5xl text-black font-bold mb-2">Стара Загора</h2>
            <p className="text-black text-2xl">15 ДЕКЕМВРИ</p>
          </div>
        </motion.div>

        {/* Parallax Image */}
        <ParallaxImg
          src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/montain.png"
          alt="An example of a space launch"
          start={0}
          end={0}
          stopAt={2000}
          initialScale={1.2}
          finalScale={0.3}
          className="w-full"
        />

        {/* Additional Right Title */}
        <motion.div
          className="absolute w-1/4"
          style={{
            top: '50%', // Exact Y coordinate for Additional Right Title
            right: '-20%', // Exact X coordinate for Additional Right Title
            opacity: additionalElementOpacity,
            scale: sideElementScale,
            y: initialYPosition, // Set initial Y position
          }}
          initial={{ y: initialYPosition }} // Initial position
          animate={{ y: 0 }} // Animate to current position
        >
          <div>
            <h2 className="text-5xl text-black font-bold mb-2">Варна</h2>
            <p className="text-black text-2xl">2 ЯНУАРИ</p>
          </div>
        </motion.div>

        {/* Right Title */}
        <motion.div
          className="absolute w-1/4"
          style={{
            top: '30%', // Exact Y coordinate for Right Title
            right: '5%', // Exact X coordinate for Right Title
            opacity: sideElementOpacity,
            scale: sideElementScale,
            y: initialYPosition, // Set initial Y position
          }}
          initial={{ y: initialYPosition }} // Initial position
          animate={{ y: 0 }} // Animate to current position
        >
          <div>
            <h2 className="text-5xl text-black font-bold mb-2">Пловдив</h2>
            <p className="text-black text-2xl">15 ЯНУАРИ</p>
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