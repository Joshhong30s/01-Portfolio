/* eslint-disable @next/next/inline-script-id */
import HeroSection from './components/HeroSection'
import ProfilePic from './components/ProfilePic'
import Posts from './components/Posts'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <main>
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
      <ProfilePic />
      <HeroSection />
      <Posts />
    </main>
  )
}
