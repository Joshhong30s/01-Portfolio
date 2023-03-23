'use client'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from 'next-themes'
import {
  RiEnglishInput,
  RiMoonFill,
  RiSunFill,
  RiSunLine,
} from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { IoLanguage } from 'react-icons/io5'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

interface NavItem {
  id: string
  label: string
  page: string
}

const NavItems: Array<NavItem> = [
  {
    id: 'home',
    label: 'Home',
    page: 'home',
  },
  {
    id: 'about',
    label: 'About',
    page: 'about',
  },
  {
    id: 'projects',
    label: 'Projects',
    page: 'projects',
  },
]

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <header className='w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600'>
      <div className='justify-between md:items-center md:flex'>
        <div className='md:py-1 md:ml-10 md:block flex items-center justify-between'>
          <Link
            to='home'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Image
              src='/logo.png'
              alt=''
              width={55}
              height={55}
              color='transparent'
              className='00 rounded-md transition duration-300 hover:bg-neutral-700 dark:hover:bg-slate-100 hover:ease-in'
            ></Image>
          </Link>
          <div className='md:hidden flex py-3 items-center'>
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>
        <div
          className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <nav className='md:flex md:space-x-6 space-y-8 md:space-y-0 items-center justify-center'>
            {NavItems.map((item, id) => {
              return (
                <Link
                  key={id}
                  to={item.page}
                  className={
                    'block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer'
                  }
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              )
            })}
            {currentTheme === 'dark' ? (
              <>
                <button
                  onClick={() => setTheme('light')}
                  className='bg-slate-100 p-2 rounded-full'
                >
                  <RiSunLine size={25} color='black' />
                </button>
                <button
                  onClick={() => {
                    const newPath = pathname === '/' ? '/zh' : '/'
                    router.push(newPath)
                  }}
                >
                  {pathname === '/' ? (
                    <IoLanguage size={25} />
                  ) : (
                    <RiEnglishInput size={25} />
                  )}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setTheme('dark')}
                  className='bg-slate-100 p-2 rounded-full'
                >
                  <RiMoonFill size={25} />
                </button>
                <button
                  onClick={() => {
                    const newPath = pathname === '/' ? '/zh' : '/'
                    router.push(newPath)
                  }}
                >
                  {pathname === '/' ? (
                    <IoLanguage size={25} />
                  ) : (
                    <RiEnglishInput size={25} />
                  )}
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
