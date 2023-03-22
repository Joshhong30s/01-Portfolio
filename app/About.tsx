import React from 'react'
import Image from 'next/image'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'

const skills = [
  { skills: 'HTML' },
  { skills: 'CSS' },
  { skills: 'Javascript' },
  { skills: 'TypeScript' },
  { skills: 'React' },
  { skills: 'Next.js' },
  { skills: 'Tailwind.css' },
  { skills: 'Express.js' },
  { skills: 'MongoDB' },
  { skills: 'Git' },
  { skills: 'GitHub' },
]

const About = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 md:w-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>
        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row  md:text-left md:p-4 md:space-y-0 md:space-x-10'>
          <div className='md:w-1/2'>
            <div>
              <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
                Get to know me
              </h1>
              <p>
                {' '}
                Hi, my name is Josh and I am your{' '}
                <span className='font-bold'>go-to </span>
                developer for web development. I love crafting engaging and
                useful web solutions from
                <span className='font-bold'> frontend </span>
                to
                <span className='font-bold'> backend</span>
              </p>
              <br />
              <p>I have became frontend developer</p>
              <br />
              <p>
                Besides, I have 10 years of B2B software solution sales
                experience which helps me in defining user requirements,
                communication in-and-out, and user experience. All of my
                previous experience helps me grab development skill and become a
                better developer.
              </p>
              <br />
              <p>
                I believe I will never stop growing as a professional developer{' '}
                <span className='font-bold text-teal-500'>
                  professional developer{' '}
                </span>
                and that is what I strive to do. Please check my project and I
                am excited to see where my career takes me soon.
              </p>
            </div>
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              My Skills
            </h1>
            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='text-gray-500 rounded font-semibold bg-gray-200 px-4 py-2 mr-2 mt-2'
                  >
                    {item.skills}
                  </p>
                )
              })}
            </div>
            <Image
              src='/skills.svg'
              alt=''
              width={325}
              height={325}
              className='hidden md:block md:relative md:mt-24 md:left-10 md:z-0'
            ></Image>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
