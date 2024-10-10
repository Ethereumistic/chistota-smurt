import React, { useState } from 'react'
import { TrailerButton, WatchButton } from '../components/ui/BuyButton'

const Trailer = () => {
  const [activeVideo, setActiveVideo] = useState<'trailer' | 'movie'>('trailer')

  const videoSources = {
    trailer: "https://www.youtube.com/embed/c1nYtX-NUsc",
    movie: "https://www.youtube.com/embed/Uala9zAU_Rk" // Replace with actual movie embed URL
  }

  return (
    <div>
      <div className="flex justify-center -space-x-4 cst:space-x-24 mb-6 ">
        <button
          className={`px-4 py-2 font-bold font-montserrat rounded ${
            activeVideo === 'trailer' ? '' : ''
          }`}
          onClick={() => setActiveVideo('trailer')}
        >
          <TrailerButton />
        </button>
        <button
          className={`px-4 py-2 font-bold font-montserrat rounded ${
            activeVideo === 'movie' ? '' : ''
          }`}
          onClick={() => setActiveVideo('movie')}
        >
          <WatchButton />
        </button>
      </div>
      <div className="relative aspect-video w-[85%] cst:w-[43%] mx-auto mb-10">
        <iframe 
          className="absolute top-0 left-0 w-full h-full" 
          src={videoSources[activeVideo]}
          title={activeVideo === 'trailer' ? "Trailer video player" : "Movie video player"}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        ></iframe>
      </div>
    </div>
  )
}

export default Trailer