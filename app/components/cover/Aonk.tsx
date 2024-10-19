
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Loader from "../ui/Loader";

export function Aonk() {
  const [imageLoaded, setImageLoaded] = useState(false);


  return (

    <div className="flex flex-col items-center justify-center gg:hidden -translate-y-[110px]">
                {!imageLoaded && (
              <div className="absolute  flex items-center justify-center ml-6">
                <Loader />
              </div>
            )}
        <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk.png" 
               alt="Aonk" 
               width={400} 
               height={250}
               onLoad={() => setImageLoaded(true)}
               className={`${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
    </div>
  );

}
