import '../../styles/globals.css'
import HeroSectionCh from '../components/HeroSectionCh'
import ProfilePic from '../components/ProfilePic'
import Posts from '../components/Posts'

export default function Home() {
  return (
    <main>
      <ProfilePic />
      <HeroSectionCh />
      <Posts />
    </main>
  )
}
