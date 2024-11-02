import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { client } from '../../sanity/lib/client'; // Import the Sanity client
import { IconMovie, IconPlayerPlay } from '@tabler/icons-react';
import Link from 'next/link';
import { useCountdownContext } from '../components/calendar/CountdownProvider';

const Trailer = () => {
  const { countdownEnded } = useCountdownContext();
  const [activeVideo, setActiveVideo] = useState<'trailer' | 'movie'>('trailer');
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [movieUrl, setMovieUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchYoutubeUrls = async () => {
      const query = '*[_type == "youtubeVideo"]{trailerUrl, movieUrl}'; // Fetch both URLs
      const data = await client.fetch(query);
      if (data.length > 0) {
        setTrailerUrl(data[0].trailerUrl); // Set the trailer URL
        setMovieUrl(data[0].movieUrl); // Set the movie URL
      }
    };

    fetchYoutubeUrls();
  }, []);

  const videoSources = {
    trailer: trailerUrl || "https://www.youtube.com/embed/njX2bu-_Vw4", // Fallback to a default trailer URL if not set
    movie: movieUrl || "https://www.youtube.com/embed/njX2bu-_Vw4", // Fallback to a default movie URL if not set
  }

  // Define the TrailerButton2 component
  const TrailerButton2 = () => (
    <button
      className={`group relative inline-flex items-center overflow-hidden rounded border-2 border-white focus:border-purple-600 focus:bg-purple-600 px-4 py-2 text-white ${activeVideo === 'trailer' ? 'bg-purple-600 border-2 border-purple-600' : ''}`}
      onClick={() => setActiveVideo('trailer')}
    >
      <span className="absolute -start-full transition-all group-hover:start-4">
      <IconMovie className="size-7 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
  </span>
  <span className="3xl:text-xl 2xl:text-lg xl:text-base font-extrabold transition-all group-hover:ms-11 drop-shadow-[0_3px_3px_rgba(0,0,0,1)]">ГЛЕДАЙ <br className='xs:hidden flex'></br>ТРЕЙЛЪР</span>
  </button>
  );

  // Define the MovieButton2 component
  const MovieButton2 = () => (
    <button
      className={`group relative inline-flex items-center overflow-hidden rounded border-2 border-white focus:border-purple-600 focus:bg-purple-600 px-4 py-2 text-white ${activeVideo === 'movie' ? 'bg-purple-600 border-2 border-purple-600' : ''}`}
      onClick={() => setActiveVideo('movie')}
    >
            <span className="absolute -start-full transition-all group-hover:start-4">
      <IconPlayerPlay className="size-7 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
  </span>
  <span className="3xl:text-xl 2xl:text-lg xl:text-base font-extrabold transition-all group-hover:ms-11 drop-shadow-[0_3px_3px_rgba(0,0,0,1)]">ГЛЕДАЙ <br className='xs:hidden flex'></br> ФИЛМА</span>
  </button>
  );

  // Define the MovieButton2 component
  const MovieButtontoBuy = () => (
    <Link
      href="/buy"
      className={`group relative inline-flex items-center overflow-hidden rounded border-2 border-white focus:border-purple-600 focus:bg-purple-600 px-4 py-2 text-white ${activeVideo === 'movie' ? 'bg-purple-600 border-2 border-purple-600' : ''}`}
      
    >
            <span className="absolute -start-full transition-all group-hover:start-4">
      <IconPlayerPlay className="size-7 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]" />
  </span>
  <span className="3xl:text-xl 2xl:text-lg xl:text-base font-extrabold transition-all group-hover:ms-11 drop-shadow-[0_3px_3px_rgba(0,0,0,1)]">ГЛЕДАЙ <br className='xs:hidden flex'></br> ФИЛМА</span>
  </Link>
  );

  return (
    <div>
      <div className="flex justify-center -space-x-4 cst:space-x-24 mb-6 ">
        <motion.div
          className="px-4 py-2 font-bold font-montserrat rounded"
          initial={{ y: -48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <TrailerButton2 />
        </motion.div>

        <motion.div
          className="px-4 py-2 font-bold font-montserrat rounded"
          initial={{ y: -48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          {countdownEnded ? <MovieButton2 /> : <MovieButtontoBuy />}
        </motion.div>
      </div>
      <motion.div className="relative aspect-video w-[85%] cst:w-[43%] mx-auto mb-10"
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoSources[activeVideo]}
          title={activeVideo === 'trailer' ? "Trailer video player" : "Movie video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  )
}

export default Trailer;