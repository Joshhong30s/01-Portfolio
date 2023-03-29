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
                嗨，我的名字是Josh。我是一名{' '}
                <span className='font-bold'>前端工程師</span>.
                我喜愛製作互動式網站，並期待自己未來成為一個全端開發者
              </p>
              <br />
              <p>
                作為一個自學開發者是充滿挑戰的，無論是學習還是實作方面，但實作專案讓我每天都有進步與滿足感
              </p>
              <br />
              <p>
                在2023年之前，我是一個資深的B2B
                Sales，銷售SaaS軟體和客製化解決方案給世界各國產業。我曾在跨國企業與知名新創服務過，過往經驗讓我掌握精準了解客戶需求與內外溝通的能力，對我未來擔任開發者的腳色也有所幫助。
              </p>
              <br />
              <p>
                我的旅程仍在繼續，我渴望踏上我職業生涯的下一章。歡迎透過下方的連結聯繫我。
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
