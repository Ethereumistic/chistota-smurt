import { ReactLenis } from 'lenis/react'
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { IconArrowDown, IconMapPin, IconX } from "@tabler/icons-react";

export const SmoothScrollHero = () => {
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

const SECTION_HEIGHT = 1500;

const Hero = () => {
    const { scrollY } = useScroll();
    
    // Dynamically calculate the section height based on scroll position
    const dynamicSectionHeight = useTransform(scrollY, [0, SECTION_HEIGHT + 800], [SECTION_HEIGHT, SECTION_HEIGHT + 800]);
  
    return (
      <div
        style={{ height: `calc(${dynamicSectionHeight}px + 100vh)` }} // Use dynamic height
        className="relative w-full"
      >
        <CenterImage />
        <ParallaxImages />
        {/* <div className="absolute  bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" /> */}
      </div>
    );
  };

const CenterImage = () => {
  const { scrollY } = useScroll();

  

  const clip1 = useTransform(scrollY, [1500, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [1500, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 1500],
    [1, 0] // This controls the opacity of the CenterImage
  );

  return (
    <motion.div
    className="sticky top-0 h-screen w-full "
    style={{
      clipPath,
      backgroundSize: "cover",
      opacity,
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
    
    // Calculate the height of the CenterImage dynamically
    const centerImageHeight = useTransform(scrollY, [0, SECTION_HEIGHT + 800], [SECTION_HEIGHT, SECTION_HEIGHT + 800]);
  
    return (
      <motion.div 
        className="mx-auto max-w-7xl px-4 pt-[0px] sticky top-0"
        style={{ height: centerImageHeight }}
      >
        <ParallaxImg
          src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/montain.png"
          alt="An example of a space launch"
          start={0}
          end={-5}
          stopAt={2400}
          className="mx-auto w-full absolute bottom-0 left-0 right-0"
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
  }: {
    className?: string;
    alt: string;
    src: string;
    start: number;
    end: number;
    stopAt: number;
  }) => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
  
    const y = useTransform(
      scrollY,
      [0, stopAt, stopAt + 1],
      [start, end, end],
      { clamp: false }
    );
  
    const scale = useTransform(
      scrollY,
      [0, stopAt, stopAt + 1],
      [1.2, 1, 1],
      { clamp: false }
    );
  
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  
    return (
      <motion.img
        src={src}
        alt={alt}
        className={className}
        ref={ref}
        style={{ transform }}
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