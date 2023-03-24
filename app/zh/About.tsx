import React from 'react'
import Image from 'next/image'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'
import { Link } from 'react-scroll'
import { IoMdArrowDown } from 'react-icons/io'

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
    <section id='about' className='min-h-screen flex flex-col'>
      <div className='my-12 pb-12 md:pt-8 md:pb-10'>
        {/* <h1 className='text-center font-semibold text-4xl md:text-7xl'>
          About.
          <hr className='w-6 md:w-10 h-0.5 mx-auto my-12 bg-white border-0 rounded'></hr>
        </h1> */}
        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row  md:text-left md:p-4 md:space-y-0 md:space-x-16'>
          <div className='md:w-1/2 mb-10'>
            <div>
              <h1 className='text-center text-4xl font-bold mb-16 md:text-left'>
                關於我
              </h1>
              <p>
                {' '}
                我是Josh!很高興認識你。我是一個前端工程師。{' '}
                <span className='font-bold'>go-to </span>
                我喜歡使用不同的前端語言和框架打造Web應用和簡單的服務，注重使用者設計與體驗，目前我最常使用的框架是
                <span className='font-bold'> NextJS </span>和
                <span className='font-bold'> React </span>
              </p>
              <br />
              <p>目前我嘗試製作更多的專案，並且努力熟悉Tailwind CSS</p>
              <br />
              <p>
                在自學成為工程師之前，我擁有近十年的B2B軟體解決方案商務經驗，以銷售的身分服務跨國企業、知名新創、以及小型外商和本土商。
                我熟悉不同的SaaS產品服務與客製化專案，能夠快速協助客戶定義需求和內部溝通，深知使用者介面與體驗的重要性。
                這些經驗幫助了我在學習軟體開發的時候有著良好的方向，以及成為一個工程師的信心
              </p>
              <br />
              <p>
                我相信自己在軟體開發的路上能夠不停成長，成為{' '}
                <span className='font-bold text-teal-500'>
                  專業的軟體開發者{' '}
                </span>
                。歡迎查看我的專案作品並連繫交流指教。謝謝。
              </p>
            </div>
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-center text-4xl font-bold mb-16 md:text-left'>
              開發技能
            </h1>
            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='text-gray-500 rounded font-semibold bg-gray-200 px-4 py-2 mr-2 mt-2'
                  >
                    {item.skills}
                  </p>
                )
              })}
            </div>
            <Image
              src='/skills.svg'
              alt=''
              width={325}
              height={325}
              className='hidden md:block md:relative md:mt-24 md:left-10 md:z-0'
            ></Image>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <Link
          to='projects'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <IoMdArrowDown size={50} className='animate-bounce' />
        </Link>
      </div>
    </section>
  )
}

export default About
