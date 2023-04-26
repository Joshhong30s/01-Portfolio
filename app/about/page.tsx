import ContactForm from '../components/ContactForm'
import SkillIcon from '../components/SkillIcon'

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
    <section
      id='about'
      className='px-6 mx-auto min-h-screen max-w-5xl md:text-2xl'
    >
      <div className='my-12'>
        <div className='flex flex-col justify-center align-center md:text-left md:p-4 '>
          {/* 1st div */}
          <div className='justify-center mb-32'>
            <div>
              <h1 className='text-center text-3xl md:text-4xl font-semibold mb-16 font-sans text-gray-800 dark:text-gray-50 border-b-2 border-gray-200 dark:border-gray-700 pb-6'>
                About Me
              </h1>
              <p className='text-lg font-medium text-gray-600 dark:text-gray-300'>
                {' '}
                Hi, my name is Josh. I am a{' '}
                <span className='font-bold'>frontend developer</span>. I love
                crafting interactive web solutions, and aspire to become a
                fullstack developer
              </p>
              <br />
              <p className='text-lg font-medium text-gray-600  dark:text-gray-300'>
                As a self-taught developer, I’ve encountered challenges
                throughout my journey, but found immense fulfillment in creating
                projects that address real-world problems
              </p>
              <br />
              <p className='text-lg font-medium text-gray-600  dark:text-gray-300'>
                Before 2023, I worked with multinational corporations and
                startups as a B2B sales professional, developing software and
                solution businesses across diverse industries. My experience has
                honed my ability to efficiently identify RFQs and communicate
                effectively, skills that I believe will prove invaluable as I
                transition into a developer role.
              </p>
              <br />
              <p className='text-lg font-medium text-gray-600  dark:text-gray-300'>
                My journey continues, and I’m eager to embark on the next
                chapter of my professional career
              </p>
            </div>
          </div>

          {/* 2nd div */}
          <div className='justify-center mb-32'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold mb-16 font-sans text-gray-800 dark:text-gray-50 border-b-2 border-gray-200 dark:border-gray-700 pb-6'>
              My Skills
            </h1>
            <div className='flex flex-wrap justify-center text-left'>
              <SkillIcon />
            </div>
          </div>

          {/* 3rd div */}
          <div
            id='contact-form'
            className='scroll-margin-top-20 justify-center'
          >
            <h1 className='text-center text-3xl md:text-4xl font-semibold mb-16 font-sans text-gray-800 dark:text-gray-50 border-b-2 border-gray-200 dark:border-gray-700 pb-6'>
              Contact
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
