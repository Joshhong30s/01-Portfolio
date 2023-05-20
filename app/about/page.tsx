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
              <p className='text-2xl font-normal text-gray-600 dark:text-gray-300'>
                {' '}
                Hello! I am Josh 👋. I am a{' '}
                <span className='font-bold'>frontend developer</span>.
              </p>
              <br />
              <p className='text-xl font-normal text-gray-600  dark:text-gray-300'>
                As a frontend engineer aiming for full-stack development, the
                learning and implementation process is full of challenges,
                requiring continuous problem-solving to make progress.
              </p>
              <br />
              <p className='text-xl font-normal text-gray-600  dark:text-gray-300'>
                Before becoming an engineer, I accumulated over 10 years of B2B
                Sales experience, working in multinational corporations and
                well-known startups, primarily promoting SaaS software and
                customized project services. I believe that the problem-solving
                skills and communication techniques I developed in the past can
                enhance my qualities as a developer.
              </p>
              <br />
              <p className='text-xl font-normal text-gray-600  dark:text-gray-300'>
                Please feel free to check out my projects. If you would like to
                chat, feel free to leave a message for me in the form below, or
                you can also contact me through the link in the footer.
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
