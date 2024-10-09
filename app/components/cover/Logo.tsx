"use client";

import Link from "next/link";
import { Chistota } from "./Chistota";
import { Ili } from "./Ili";
import { Smur } from "./Smur";
import { T } from "./T";


export function Logo() {

  return (

    <div className="">
            <div className="flex-1 flex items-center justify-center "> {/* Centering the logo */}
<div className="flex flex-col mt-0 " >
    <Link href="/" className="">
    <div className="flex flex-col items-center justify-center -translate-x-1">
      <Chistota />
        <div className="flex flex-row items-center justify-center -translate-x-1">
            <div className="flex flex-row ">
                <div className="mx-2">
                <Ili />
                </div>
                <div className="ml-2">
                <Smur />
                </div>
                <T />
            </div>
        
        </div>
    </div>
    </Link>
  </div>
</div>
    </div>
  );

}
