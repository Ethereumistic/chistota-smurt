'use client'
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { client } from '../../sanity/lib/client'; // Import the Sanity client



export default function Movie() {
  const [movieUrl, setMovieUrl] = useState<string | null>(null); // State for movie URL

  useEffect(() => {
    const fetchMovieUrl = async () => {
      const query = '*[_type == "youtubeVideo"]{movieUrl}'; // Fetch only the movie URL
      const data = await client.fetch(query);
      if (data.length > 0) {
        setMovieUrl(data[0].movieUrl); // Set the movie URL
      }
    };

    fetchMovieUrl();
  }, []);
  return (
    <div className="w-full h-screen mx-auto justify-center items-center mt-0 cst:mt-[68px] flex font-montserrat text-black">
          <div className="relative aspect-video w-[90%] cst:w-[78%]  mx-auto mb-10">
        <iframe 
          className="absolute top-0 left-0 w-full h-full" 
          src={movieUrl || "https://www.youtube.com/embed/Uala9zAU_Rk"}
          title="Movie video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        ></iframe>
      </div>
    </div>
  );
}