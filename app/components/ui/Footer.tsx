"use client";
import React from 'react'
import Link from 'next/link';
import { IconBrandInstagram, IconBrandFacebook, IconBrandYoutube } from '@tabler/icons-react';
import { Logo } from '../cover/Logo';

export default function Footer() {
    return (
        <div className='overflow-x-hidden'>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<footer className="bg-dblue">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        {/* <Link href="/"
         className="flex text-4xl font-bold text-cream sm:justify-start">

            <h1>Чистота или Смърт</h1>
        </Link> */}
        <Logo />

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

          <ul className=" space-y-4 text-sm">
            <IconBrandFacebook className="w-10 h-10 " />
            <IconBrandInstagram className="w-10 h-10 " />
            <IconBrandYoutube className="w-10 h-10 " />
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
        </div>
    )
}