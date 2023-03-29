// import {
//   IoLogoHtml5,
//   IoLogoCss3,
//   IoLogoReact,
//   IoLogoJavascript,
//   IoLogoGithub,
// } from 'react-icons/io5'
// import {
//   SiMongodb,
//   SiTailwindcss,
//   SiTypescript,
//   SiExpress,
// } from 'react-icons/si'
// import { FaGitSquare } from 'react-icons/fa'
// import { TbBrandNextjs } from 'react-icons/tb'

// const skills = [
//   { skills: <IoLogoHtml5 size={50} /> },
//   { skills: <IoLogoCss3 size={50} /> },
//   { skills: <IoLogoJavascript size={50} /> },
//   { skills: <IoLogoReact size={50} /> },
//   { skills: <TbBrandNextjs size={50} /> },
//   { skills: <SiTypescript size={50} /> },
//   { skills: <SiTailwindcss size={50} /> },
//   { skills: <SiExpress size={50} /> },
//   { skills: <FaGitSquare size={50} /> },
//   { skills: <IoLogoGithub size={50} /> },
// ]

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
        <div className='flex flex-col space-y-10 justify-center align-center md:text-left md:p-4 md:space-y-10'>
          <div className='justify-center mb-16'>
            <div>
              <h1 className='text-center text-3xl md:text-4xl font-semibold mb-16 font-sans'>
                About Me
              </h1>
              <p>
                {' '}
                Hi, my name is Josh. I am a{' '}
                <span className='font-bold'>frontend developer</span>. I love
                crafting interactive web solutions, and aspire to become a
                fullstack developer
              </p>
              <br />
              <p>
                As a self-taught developer, I’ve encountered challenges
                throughout my journey, but found immense fulfillment in creating
                projects that address real-world problems
              </p>
              <br />
              <p>
                Before 2023, I worked with multinational corporations and
                startups as a B2B sales professional, developing software and
                solution businesses across diverse industries. My experience has
                honed my ability to efficiently identify RFQs and communicate
                effectively, skills that I believe will prove invaluable as I
                transition into a developer role.
              </p>
              <br />
              <p>
                My journey continues, and I’m eager to embark on the next
                chapter of my professional career
              </p>
            </div>
          </div>

          <div className='justify-center mb-16'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold mb-16  font-sans'>
              My Skills
            </h1>
            <div className='flex flex-wrap justify-center text-left'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='rounded font-medium text-gray-50 bg-slate-800 dark:text-slate-800 dark:bg-gray-50  px-4 py-2 mr-2 mt-2'
                  >
                    {item.skills}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
