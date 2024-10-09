"use client"; // Ensure this is a client component
import React from 'react';
import Link from 'next/link';
import { IconBrandInstagram, IconBrandFacebook, IconBrandYoutube } from '@tabler/icons-react';
import { Logo } from '../cover/Logo';
import { usePathname } from 'next/navigation'; // Import usePathname
import Image from 'next/image';

export default function Footer() {
    const pathname = usePathname(); // Get the current pathname
    const isStudioRoute = pathname.startsWith('/studio'); // Check if the current route includes '/studio'

    if (isStudioRoute) return null; // Prevent rendering if on studio route

    return (
      // <div className={`overflow-x-hidden ${isStudioRoute ? 'hidden' : ''}`}>

<footer className={`overflow-x-hidden bg-dblue ${isStudioRoute ? 'hidden' : ''}`}
                    style={{
                      backgroundSize: "cover",
                      backgroundImage:
                        "url(https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg-s.png)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}>
        <div className="bg-gradient-to-t from-black/0 to-black/[0.5] w-full h-5"></div>
                    
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center items-center scale-50">            
        <Logo />
        </div>

        <p className="mt-6 max-w-md text-center justify-center items-center leading-relaxed text-gray-500 md:max-w-lg ">
        Представяме документален филм за наркотичната зависимост. Изследваме пътя към възстановяването и въздействието върху обществото. Целим да повишим осведомеността и да вдъхновим промяна.
        </p>


      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-montserrat font-bold">История</p>

          <ul className="mt-8 space-y-4 font-montserrat text-sm">
            <li>
              <Link className="transition hover:text-llblue" href="/pests">
                За Нас
              </Link>
            </li>

          </ul>
        </div>

        <div className="text-center font-montserrat sm:text-left ">
          <p className="text-lg font-montserrat font-bold">Локации</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="transition hover:text-llblue" href="/locations/?filter=Терапевтични общности">
                Терапевтични общности
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-llblue" href="/locations/?filter=Програми за непълнолетни">
                Програми за непълнолетни
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-llblue" href="/locations/?filter=Дневни центрове">
                Дневни центрове
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-llblue" href="/locations/?filter=Вечерни програми">
                Вечерни програми
              </Link>
            </li>


          </ul>
        </div>

        <div className="text-center font-montserrat sm:text-left">
          <p className="text-lg font-montserrat font-bold">Партньори</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="transition hover:text-llblue " href="/faq"> Често задавани въпроси </Link>
            </li>


          </ul>
        </div>

        <div className="text-center sm:text-left flex flex-col items-center">

          <ul className=" space-y-16 text-sm flex flex-col items-center text-gray-800">
          <div className="space-y-4">
          <IconBrandFacebook className="w-10 h-10 hover:scale-110 transition-all duration-300 " />
          <IconBrandInstagram className="w-10 h-10 hover:scale-110 transition-all duration-300 " />
          <IconBrandYoutube className="w-10 h-10 hover:scale-110 transition-all duration-300 " />
          </div>
          <div className="mt-12">
            <Link href="https://aonk.bg" target="_blank" className="">
              <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/partners/aonk.png" 
                      alt="Logo" 
                      width={150}
                      height={100}
                      className="ml-2  hover:scale-110 transition-all duration-700"
                      />
            </Link>
            </div>
            
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">Всички права запазени.</span>

          <Link
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="#"
          >
            Условия за ползване
          </Link>

          <span>&middot;</span>

          <Link
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="#"
          >
            Политика за поверителност
          </Link>
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 Bio DDD</p>
      </div>
    </div>
  </div>
</footer>
        // </div>
    )
}