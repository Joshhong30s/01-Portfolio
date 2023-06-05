/* eslint-disable @next/next/inline-script-id */
import HeroSection from './components/HeroSection'
import ProfilePic from './components/ProfilePic'
import Posts from './components/Posts'

export default function Home() {
  return (
    <main>
      <ProfilePic />
      <HeroSection />
      <Posts />
    </main>
  )
}
