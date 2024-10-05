import { ReactLenis } from 'lenis/react'

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { IconArrowDown, IconMapPin, IconX } from "@tabler/icons-react";

export const TestScroll = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Hero />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT_DESKTOP = 1000;
const SECTION_HEIGHT_MOBILE = 500;

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { scrollY } = useScroll();
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const sectionHeight = isMobile ? SECTION_HEIGHT_MOBILE : SECTION_HEIGHT_DESKTOP;
    
    const dynamicSectionHeight = useTransform(
        scrollY,
        [0, sectionHeight + (isMobile ? 800 : 1600)],
        [sectionHeight, sectionHeight + (isMobile ? 800 : 1600)]
    );

    return (
      <div
        style={{ height: `calc(${dynamicSectionHeight}px + 100vh)` }}
        className="relative w-full"
      >
        <CenterImage isMobile={isMobile} />
        <ParallaxImages isMobile={isMobile} />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-dblue/0 to-dblue" />
      </div>
    );
};

const CenterImage = ({ isMobile }: { isMobile: boolean }) => {
  const { scrollY } = useScroll();

  const clipStart = isMobile ? 500 : 1000;
  const clipEnd = isMobile ? 500 : 1000;

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
          "url(https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = ({ isMobile }: { isMobile: boolean }) => {
    const { scrollY } = useScroll();
    
    const sectionHeight = isMobile ? SECTION_HEIGHT_MOBILE : SECTION_HEIGHT_DESKTOP;
    const centerImageHeight = useTransform(
        scrollY,
        [0, sectionHeight + (isMobile ? 400 : 800)],
        [sectionHeight, sectionHeight + (isMobile ? 400 : 800)]
    );
  
    return (
        <motion.div 
          className="mx-auto max-w-3xl xl:max-w-5xl px-4 pt-[0px] sticky top-0 h-screen flex items-end"
          style={{ height: centerImageHeight }}
        >
          <ParallaxImg
            src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/montain.png"
            alt="An example of a space launch"
            start={0}
            end={0}
            stopAt={isMobile ? 1000 : 2000}
            initialScale={isMobile ? 1.1 : 1.2}
            finalScale={isMobile ? 0.8 : 0.6}
            className="w-full"
          />
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
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
      <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
      <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
      <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
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