/* eslint-disable @next/next/inline-script-id */
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
import Head from 'next/head'
import Script from 'next/script'

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
      <Head>
        <title>Josh Hong</title>
        <meta name='description' content='B2B sales x frontend developer' />
        <meta name='keywords' content='frontend, b2b sales, web developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link rel='icon' href='/logo1.png' />
      </Head>
      <Script strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7EJ6PKSZ6R');
        `}
      </Script>
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
