import '../../styles/globals.css'
import About from './about/page'
import Projects from './projects/page'
import { Karla } from '@next/font/google'
import { Roboto } from '@next/font/google'
import { Montserrat } from '@next/font/google'
import { Source_Sans_Pro } from '@next/font/google'
import HeroSectionCh from './HeroSectionCh'
import ProfilePic from '../components/ProfilePic'
import Posts from '../components/Posts'

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
      <ProfilePic />
      <HeroSectionCh />
      <Posts />
    </main>
  )
}
