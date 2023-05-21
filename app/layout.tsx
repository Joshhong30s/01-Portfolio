'use client'
import '../styles/globals.css'
import { ServerThemeProvider, ThemeProvider } from 'next-themes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'
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
