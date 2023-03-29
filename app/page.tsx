import '../styles/globals.css'
import HeroSection from './components/HeroSection'
import ProfilePic from './components/ProfilePic'
import Posts from './components/Posts'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main>
      <ProfilePic />
      <HeroSection />
      <Posts />
      {/* <ContactForm /> */}
    </main>
  )
}
