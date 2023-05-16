import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
      <section
        id='home'
        className='px-6 md:px-0 mx-auto flex flex-col items-center gap-6 md:gap-10'
      >
        <p className='mt-8 md:mt-0 mb-2 text-3xl md:text-4xl font-medium text-center dark:text-white'>
          Hi I&apos;m <span className='font-bold'>Josh </span>
          <span>&#128075;</span>
          <span className='whitespace-nowrap text-center'>
            {' '}
            Welcome to my Dev Blog{' '}
          </span>
        </p>
        <div className='flex gap-4'>
          <button className='p-4 w-auto rounded-full text-center bg-slate-800 text-white hover:bg-slate-600 focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 dark:bg-gray-100 dark:text-slate-800 dark:hover:bg-gray-300 font-semibold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            Download Resume
          </button>
          <button className='p-4 w-auto rounded-full text-center bg-gray-200 text-slate-800 hover:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 font-semibold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            See Projects
          </button>
        </div>
      </section>
    </>
  )
}

export default HeroSection
