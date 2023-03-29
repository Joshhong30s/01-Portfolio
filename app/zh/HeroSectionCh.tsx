import Image from 'next/image'

const HeroSectionCh = () => {
  return (
    <>
      <section id='home' className='px-6 md:px-0 mx-auto'>
        <p className='mt-8 md:mt-0 mb-8 md:mb-0 text-3xl md:text-4xl font-medium text-center dark:text-white'>
          嗨，我是<span className='font-bold'>Josh </span>
          <span>&#128075;</span>
          <span className='whitespace-nowrap text-center'>
            {' '}
            歡迎來到我的技術部落格{' '}
          </span>
        </p>
      </section>
    </>
  )
}

export default HeroSectionCh
