import { FaGithub, FaLinkedin, FaLine, FaBlogger } from 'react-icons/fa'

const isClient = typeof window !== 'undefined'
const isMobile = isClient
  ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  : false

const handleLineClick = () => {
  if (!isClient) return

  if (isMobile) {
    window.location.href = 'https://line.me/ti/p/0u5WhCBHF-'
  } else {
    window.open('https://line.me/ti/p/0u5WhCBHF-', '_blank')
  }
}

export default function Footer() {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 '></hr>
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div className='text-neutral-500 dark:text-neutral-100 mb-2 md:my-1 '>
          @ 2023 Josh Hong
        </div>
        <div className='flex flex-row items-center justify-center space-x-4 my-1'>
          <a
            href='https://github.com/Joshhong30s?tab=repositories'
            rel='noreferrer'
            target='_blank'
          >
            <FaGithub
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/josh-hong-163644102/'
            rel='noreferrer'
            target='_blank'
          >
            <FaLinkedin
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
          <a onClick={handleLineClick} rel='noreferrer' target='_blank'>
            <FaLine
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
          <a
            href='https://jjreactblog.netlify.app/'
            rel='noreferrer'
            target='_blank'
          >
            <FaBlogger
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
