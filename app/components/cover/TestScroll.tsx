import { ReactLenis } from 'lenis/react'
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { IconMapPin } from "@tabler/icons-react";

const SECTION_HEIGHT = 1000;

export const TestScroll = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
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
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-dblue/0 to-dblue" />
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
          "url(https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg.png)",
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
        [0, 500],
        [0, 1]
    );

    const sideElementX = useTransform(
        scrollY,
        [0, 500],
        [100, 0]
    );

    const sideElementScale = useTransform(
        scrollY,
        [0, 2000],
        [1, 0.3]
    );
  
    return (
        <motion.div 
          className="mx-auto max-w-3xl xl:max-w-5xl px-4 pt-[0px] sticky top-0 h-screen flex items-end"
          style={{ height: centerImageHeight }}
        >
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4"
            style={{
              opacity: sideElementOpacity,
              x: sideElementX,
              scale: sideElementScale,
            }}
          >
            <div className="">
              <h2 className="text-5xl text-black font-bold mb-2">Left Title</h2>
              <p className="text-black text-2xl">This is some text on the left side that will animate in.</p>
            </div>
          </motion.div>

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
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4"
            style={{
              opacity: sideElementOpacity,
              x: sideElementX,
              scale: sideElementScale,
            }}
          >
            <div className="">
              <h2 className="text-5xl text-black font-bold mb-2">Right Title</h2>
              <p className="text-black text-2xl">This is some text on the right side that will animate in.</p>
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