import ContactFormCh from '@/app/components/ContactFormCh'
import SkillIcon from '@/app/components/SkillIcon'

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
                關於我
              </h1>
              <p className='text-2xl font-medium text-gray-600 dark:text-gray-300'>
                嗨！我是 Josh Hong 👋 。我是一名前端工程師。
              </p>

              <br />
              <p className='text-xl font-medium text-gray-600  dark:text-gray-300'>
                作為朝向全端發展的前端工程師，在學習和實作過程中是充滿挑戰的，需要不斷地解決問題前進。
              </p>
              <br />
              <p className='text-xl font-medium text-gray-600  dark:text-gray-300'>
                在成為工程師之前，我累積了10年以上的B2B
                Sales經驗，曾在跨國企業與知名新創服務，主要推廣SaaS軟體和客製化專案服務。
                我相信過往養成的問題解決能力和溝通技巧能夠提升我身為開發者的品質。
              </p>
              <br />
              <p className='text-xl font-medium text-gray-600 dark:text-gray-300'>
                歡迎查看我的專案，任何想法或指教歡迎下方表單留言給我，或者也可以透過Footer連結聯繫我。
              </p>
            </div>
          </div>

          {/* 2nd div */}
          <div className='justify-center mb-32'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold mb-16 font-sans text-gray-800 dark:text-gray-50 border-b-2 border-gray-200 dark:border-gray-700 pb-6'>
              程式技能
            </h1>
            <div className='flex flex-wrap justify-center text-left'>
              <SkillIcon />
            </div>
          </div>

          {/* 3rd div */}
          <div className='justify-center'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold mb-16 font-sans text-gray-800 dark:text-gray-50 border-b-2 border-gray-200 dark:border-gray-700 pb-6'>
              聯絡我
            </h1>
            <ContactFormCh />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
