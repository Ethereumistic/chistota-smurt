"use client";
import React from 'react'
import Link from 'next/link';
import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import { HoverBorderGradient } from './hover-border-gradient';

export default function Footer() {
    return (
        <div className='overflow-x-hidden'>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<footer className="bg-white dark:bg-dblue">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <Link href="/"
         className="flex text-4xl font-bold dark:text-white text-black sm:justify-start">

            <h1>Чистота или Смърт</h1>
        </Link>

        <p className="mt-6 max-w-md text-center justify-center items-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
        Ние сме водеща компания, специализирана в професионални ДДД услуги. Ние предлагаме надеждни решения за контрол на вредители, 
        дезинфекция на помещения и ефективна защита срещу гризачи, насекоми, влечуги и птици.
        </p>


      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-russo text-gray-900 dark:text-gray-100">За Дома</p>

          <ul className="mt-8 space-y-4 font-russo text-sm">
            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue dark:hover:text-lgreen" href="/pests">
                Контрол на насекоми
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue dark:hover:text-lgreen" href="/pests">
              Контрол на гризачи
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue dark:hover:text-lgreen" href="/pests">
              Контрол на влечуги
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue dark:hover:text-lgreen" href="/pests">
              Контрол на птици
               </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue dark:hover:text-lgreen" href="/disinfection">
              Дезинфекция
               </Link>
            </li>
          </ul>
        </div>

        <div className="text-center font-russo sm:text-left ">
          <p className="text-lg font-russo text-gray-900 dark:text-gray-100">За Бизнеса</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue dark:hover:text-lgreen" href="/business/contract">
                ДДД Договор
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue dark:hover:text-lgreen" href="/disinfection"> Професионална Дезинфекция </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue dark:hover:text-lgreen" href="/pests"> Контрол на вредители </Link>
            </li>

          </ul>
        </div>

        <div className="text-center font-russo sm:text-left">
          <p className="text-lg font-russo text-gray-900 dark:text-gray-100">Полезно</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="text-gray-700  dark:text-gray-200 transition hover:text-ddblue dark:hover:text-lgreen" href="/faq"> Често задавани въпроси </Link>
            </li>


          </ul>
        </div>

        <div className="text-center sm:text-left flex flex-col items-center">
        <div className='flex flex-row items-center'>
        <HoverBorderGradient >
        <Link href='/contact'>
        
        </Link>
        </HoverBorderGradient>
        </div>
          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end "
                href="mailto:office@bio-ddd.com"
              >
                <IconMail />
                <span  className="flex-1 text-gray-700 dark:text-gray-200 hover:text-ddblue dark:hover:text-lgreen" >office@bio-ddd.com</span>
              </Link>
            </li>

            <li>
              <Link
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="tel:+1234567890"
              >
                <IconPhone />

                <span className="flex-1 text-gray-700 dark:text-gray-200 hover:text-ddblue dark:hover:text-lgreen">0123456789</span>
              </Link>
            </li>

            <li
              className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
              <Link target="_blank" className='flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end' href="https://www.google.com/maps/place/42%C2%B052'39.0%22N+25%C2%B018'60.0%22E/@42.877495,25.3140811,17z/data=!3m1!4b1!4m13!1m8!3m7!1s0x40a90fe2d6958745:0x400a01269bf5010!2sGabrovo!3b1!8m2!3d42.8742212!4d25.3186837!16zL20vMDNqZm1w!3m3!8m2!3d42.877495!4d25.316656?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D">
                <IconMapPin />
              <address className="-mt-0.5 flex-1 not-italic text-gray-700 dark:text-gray-200 hover:text-ddblue dark:hover:text-lgreen">
                гр. Габрово, ул. &quot;Цар Борис&quot; 12
              </address>
              </Link>
            </li>
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