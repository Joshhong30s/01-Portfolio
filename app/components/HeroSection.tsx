import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
      <section id='home' className='px-6 md:px-0 mx-auto'>
        <p className='mt-8 md:mt-0 mb-8 md:mb-0 text-3xl md:text-4xl font-medium text-center dark:text-white'>
          Hi I&apos;m <span className='font-bold'>Josh </span>
          <span>&#128075;</span>
          <span className='whitespace-nowrap text-center'>
            {' '}
            Welcome to my Dev Blog{' '}
          </span>
        </p>
      </section>
    </>
  )
}

export default HeroSection
