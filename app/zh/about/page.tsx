import ContactFormCh from '@/app/components/ContactFormCh'

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
              <p className='text-lg font-medium text-gray-600 dark:text-gray-300'>
                嗨！我是 Josh Hong 👋 。我是一名前端工程師。
              </p>

              <br />
              <p className='text-lg font-medium text-gray-600  dark:text-gray-300'>
                作為一個自學開發者在學習和實作過程中是充滿挑戰的，需要不斷地解決問題持續前進。
              </p>
              <br />
              <p className='text-lg font-medium text-gray-600  dark:text-gray-300'>
                在2023年之前我是一位經驗豐富的B2B
                Sales，銷售SaaS軟體與客製化專案服務給各產業。我曾在跨國企業與新創服務，能精準地與內外部的角色溝通，也因為一直都在軟體產業服務，埋下了成為工程師的種子。
              </p>
              <br />
              <p className='text-lg font-medium text-gray-600  dark:text-gray-300'>
                我期待能以新的身分踏上職業生涯的下一章。如果想找我聊歡迎透過下方的連結聯繫我。
              </p>
            </div>
          </div>

          {/* 2nd div */}
          <div className='justify-center mb-32'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold mb-16 font-sans text-gray-800 dark:text-gray-50 border-b-2 border-gray-200 dark:border-gray-700 pb-6'>
              程式技能
            </h1>
            <div className='flex flex-wrap justify-center text-left'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='rounded-md font-medium text-gray-800 bg-gray-100 dark:text-gray-50 dark:bg-slate-800 px-4 py-2 mr-2 mt-2'
                  >
                    {item.skills}
                  </p>
                )
              })}
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
