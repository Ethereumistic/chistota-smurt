
import React from 'react';




export default function Movie() {
  return (
    <div className="w-full h-screen mx-auto justify-center items-center mt-0 cst:mt-[68px] flex font-montserrat text-black">
          <div className="relative aspect-video w-[90%] cst:w-[78%]  mx-auto mb-10">
        <iframe 
          className="absolute top-0 left-0 w-full h-full" 
          src="https://www.youtube.com/embed/Uala9zAU_Rk"
          title="Movie video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        ></iframe>
      </div>
    </div>
  );
}