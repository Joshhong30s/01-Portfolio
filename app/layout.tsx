import { ThemeProvider } from 'next-themes'
import Footer from './Footer'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic'
import HeroSection from './components/HeroSection'
import type { Metadata } from 'next'

export const metadata = {
  title: 'Josh&apos;s dev blog',
  description: 'Created by Josh Hong. All rights reserved',
}

/// fonts to use
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body
        className={`${karla.className} ${sourcesanspro.className} bg-gray-100 dark:bg-slate-800`}
      >
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
