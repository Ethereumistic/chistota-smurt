'use client'
import AboutUs from './AboutUs';
import dynamic from 'next/dynamic'
import AboutMov from './AboutMov';
import Posts from './Posts';
import { useEffect, useRef } from 'react';

const ReactLenis = dynamic(() => import('lenis/react').then((mod) => mod.ReactLenis), {
  ssr: false
})
export default function About() {


   
  const blogRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#blog' && blogRef.current) {
      // Scroll to the element
      blogRef.current.scrollIntoView({ behavior: 'smooth' });

      // Adjust the scroll position by a specific number of pixels
      const offset = 120; // Adjust this value as needed
      const elementPosition = blogRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);


  return (  
    <ReactLenis
    root
    options={{
      lerp: 0.05,
    }}
  >
    <div className='mt-8 justify-center items-center'>
      <AboutMov />
      <AboutUs />
      <h1 id="blog" ref={blogRef} className="text-5xl px-4 text-black uppercase font-black text-center mb-12">Блог</h1>
      <div className='flex justify-center items-center'>
      <Posts />
      </div>

    </div>
    </ReactLenis>
  )
}