'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { IoMdArrowDown } from 'react-icons/io'

const Hero = () => {
  return (
    <section id='home'>
      <div className='flex flex-col items-center justify-center text-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52'>
        <div className='md:w-1/2 md:mt-2'>
          <Image
            className='rounded-full'
            src='/josh.jpg'
            alt=''
            width={300}
            height={300}
          />
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>
            Josh Hong
          </h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl md:mt-10 md:mb-12'>
            Hi I am Josh! A{' '}
            <span className='font-semibold text-teal-600'>
              frontend developer{' '}
            </span>
            passionate about bringing digital experiences to life through
            beautiful and functional design
          </p>
          <Link
            to='projects'
            className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-500'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className='flex flex-row justify-center'>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <IoMdArrowDown size={50} className='animate-bounce' />
        </Link>
      </div>
    </section>
  )
}

export default Hero
