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
                關於我
              </h1>
              <p>
                {' '}
                嗨，我是Josh。我是一名{' '}
                <span className='font-bold'>前端工程師</span>。
                我喜愛製作互動式網站與服務，並期許自己未來成為一個全端開發者
              </p>
              <br />
              <p>
                作為一個自學開發者在學習和實作過程中是充滿挑戰的，需要不斷地解決問題持續前進。
              </p>
              <br />
              <p>
                在2023年之前我是一位經驗豐富的B2B
                Sales，銷售SaaS軟體與客製化專案服務給各產業。我曾在跨國企業與新創服務，能精準地與內外部的角色溝通，也因為一直都在軟體產業服務，埋下了成為工程師的種子。
              </p>
              <br />
              <p>
                我期待能以新的身分踏上職業生涯的下一章。如果想找我聊歡迎透過下方的連結聯繫我。
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
