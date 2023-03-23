'use client'

import '../../styles/globals.css'
import About from './About'
import Hero from './Hero'
import Projects from './Projects'
import { Karla } from '@next/font/google'
import { Roboto } from '@next/font/google'
import { Montserrat } from '@next/font/google'
import { Source_Sans_Pro } from '@next/font/google'

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-Roboto',
  weight: ['300', '400', '500', '700', '900'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const sourcesanspro = Source_Sans_Pro({
  subsets: ['latin'],
  variable: '--font-sourcesanspro',
  weight: ['400', '700', '900'],
})

export default function Home() {
  return (
    <main
      className={`${roboto.variable} mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl`}
    >
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
