'use client'
import Link from 'next/link'
import React, { useState } from 'react'
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
    page: '/',
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

const NavItemsCh: Array<NavItem> = [
  {
    id: 'home',
    label: '首頁',
    page: 'zh',
  },
  {
    id: 'about',
    label: '關於',
    page: 'zh/about',
  },
  {
    id: 'projects',
    label: '專案',
    page: 'zh/projects',
  },
]

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  let navItems: Array<NavItem>
  if (pathname.includes('/zh')) {
    navItems = NavItemsCh
  } else {
    navItems = NavItems
  }

  return (
    <nav className='mx-auto px-4 py-2 md:py-4 bg-gray-50 drop-shadow-sm sticky top-0 z-10 sm:px-20 dark:bg-slate-700'>
      <div className='justify-around md:items-center md:flex'>
        <div className='flex justify-between items-center md:py-1 md:ml-10 md:flex md:space-x-4'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt=''
              width={40}
              height={40}
              color='transparent'
              className='rounded-md transition duration-300 hover:bg-neutral-700 dark:hover:bg-neutral-100 hover:ease-in cursor-pointer'
            ></Image>
          </Link>
          <Link
            href='/'
            className='text-neutral-900 dark:text-gray-50 no-underlinetransition duration-300 hover:ease-in text-2xl font-semibold cursor-pointer'
          >
            Josh Hong
          </Link>

          {/* menu button only for sm */}
          <div className='md:hidden flex py-3 items-center'>
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>

        {/* navbar only for md and above */}
        <div
          className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          {/* navbar items */}
          <nav className='md:flex md:space-x-6 space-y-8 md:space-y-0 items-center justify-center'>
            {navItems.map((item, id) => {
              return (
                <Link
                  key={id}
                  href={`/${item.page}`}
                  className={
                    'block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-gray-50 cursor-pointer text-2xl font-medium'
                  }
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className='flex justify-end space-x-2 md:space-x-4'>
              {currentTheme === 'dark' ? (
                <>
                  <button
                    onClick={() => setTheme('light')}
                    className='bg-gray-50 p-2 rounded-full'
                  >
                    <RiSunLine size={25} color='black' />
                  </button>
                  <button
                    onClick={() => {
                      const newPath = pathname.includes('/zh')
                        ? pathname.replace('/zh', '')
                        : `zh${pathname}`
                      router.push(newPath)
                    }}
                  >
                    {pathname.includes('/posts') ? null : pathname.includes(
                        '/zh'
                      ) ? (
                      <RiEnglishInput size={30} />
                    ) : (
                      <IoLanguage size={30} />
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      const newPath = pathname.includes('/zh')
                        ? pathname.replace('/zh', '')
                        : `zh${pathname}`
                      router.push(newPath)
                    }}
                  >
                    <RiMoonFill size={25} />
                  </button>
                  <button
                    onClick={() => {
                      const newPath = pathname === '/' ? '/zh' : '/'
                      router.push(newPath)
                    }}
                  >
                    {pathname.includes('/posts') ? null : pathname.includes(
                        '/zh'
                      ) ? (
                      <RiEnglishInput size={30} />
                    ) : (
                      <IoLanguage size={30} />
                    )}
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
