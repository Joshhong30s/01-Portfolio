'use client'

import Image from 'next/legacy/image'
import Link from 'next/link'
import { IoLogoReact } from 'react-icons/io5'
import {
  SiGooglesheets,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from 'react-icons/si'

import { SiNextdotjs } from 'react-icons/si'

interface Project {
  id: string
  title: string
  stack: JSX.Element[]
  description: string
  features: string[]
  imageUrl: string
  liveUrl: string
  repoUrl: string
}

const projects: Project[] = [
  {
    id: '1',
    title: '寶寶相簿留言版',
    stack: [
      <SiNextdotjs title='Next.js' key='nextjs' size={30} />,
      <SiTailwindcss title='Tailwind CSS' key='tailwindcss' size={30} />,
      <SiTypescript title='Typescript' key='typescript' size={30} />,
      <SiMongodb title='Mongodb' key='mongodb' size={30} />,
      <SiExpress title='Express' key='express' size={30} />,
    ],
    description: '為剛出生的兒子做的網站，每天更新相簿與成長數據',
    features: [
      '相簿 & 影像幻燈片',
      '使用 Express 和 MongoDB 登入/註冊',
      '使用 Imgur API 上傳照片至網頁',
      '動態成長儀表板與留言板',
      '成長數據表格',
      'RWD',
    ],
    imageUrl: '/06baby.png',
    liveUrl: 'https://06baby.vercel.app/',
    repoUrl: 'https://github.com/Joshhong30s/06baby',
  },
  {
    id: '2',
    title: 'Coffee Manager 顧客分析儀表板',
    stack: [
      <SiNextdotjs title='Next.js' key='nextjs' size={30} />,
      <SiTailwindcss title='Tailwind CSS' key='tailwindcss' size={30} />,
      <SiTypescript title='Typescript' key='typescript' size={30} />,
      <IoLogoReact title='React' key='react' size={30} />,
    ],
    description:
      '可觀察單店或比較多店的來店顧客分析儀表板，動態展示多個數據圖表',
    features: [
      '單店儀表板',
      '雙店比較儀表板',
      '產品貢獻分析儀表板',
      '菜單與各類別Top 3銷售產品',
      'RWD',
    ],
    imageUrl: '/03dashboard.png',
    liveUrl: 'https://03dashboard.vercel.app/',
    repoUrl: 'https://github.com/Joshhong30s/03dashboard',
  },
  {
    id: '3',
    title: '拖拉待辦清單看板',
    stack: [
      <IoLogoReact title='React' key='nextjs' size={30} />,
      <SiTailwindcss title='Tailwind CSS' key='tailwindcss' size={30} />,
      <SiTypescript title='Typescript' key='typescript' size={30} />,
    ],
    description: '簡易的Todo List加上類似看板的拖拉功能',
    features: ['Todo', '看板拖拉清單 (React DnD)', 'Local Storage', 'RWD'],
    imageUrl: '/08todo.png',
    liveUrl: 'https://08-simple-todo-kanban.vercel.app',
    repoUrl: 'https://github.com/Joshhong30s/08SimpleTodoKanban',
  },
  {
    id: '4',
    title: '個人技術部落格',
    stack: [
      <SiNextdotjs title='Next.js' key='nextjs' size={30} />,
      <SiTailwindcss title='Tailwind CSS' key='tailwindcss' size={30} />,
      <SiTypescript title='Typescript' key='typescript' size={30} />,
      <SiGooglesheets title='Google Sheets' key='Google Sheets' size={30} />,
    ],
    description: '作為個人的網站展示Project，同時作為技術部落格使用',
    features: [
      '淺色/深色模式切換',
      '中英雙語切換',
      'Markdown 部落格',
      '連絡我表單',
      'RWD',
    ],
    imageUrl: '/01portfolio.png',
    liveUrl: 'https://joshhong.vercel.app',
    repoUrl: 'https://github.com/Joshhong30s/01-Portfolio',
  },
]

const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen flex flex-col my-12 md:my-12 pb-8 md:pt-8 px-6 mx-auto max-w-5xl md:text-2xl'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='group rounded-lg shadow-sm p-6 bg-gray-50 dark:bg-slate-700 h-auto min-h-[400px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg dark:hover:bg-gray-700 flex flex-col'
          >
            <div className='relative overflow-hidden border-teal-600 rounded-md mb-6 w-full h-64'>
              <Link
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className='object-cover transition-opacity duration-300 hover:opacity-75'
                  src={project.imageUrl}
                  alt=''
                  layout='fill'
                />
              </Link>
            </div>
            <h3 className='text-2xl font-semibold text-slate-900 dark:text-gray-100 mb-6 px-4 py-1 text-center rounded-md'>
              {project.title}
            </h3>
            <p className='text-lg font-medium text-slate-700 dark:text-gray-300 mb-6'>
              {project.description}
            </p>

            {/* Render features as an unordered list */}
            <ul className='list-none pl-0 text-lg font-medium text-slate-800 dark:text-gray-100 mb-6 flex-grow space-y-2'>
              {project.features.map((feature, index) => (
                <li key={index} className='mb-2 pl-4'>
                  <span className='inline-block w-2 h-2 bg-slate-800 dark:bg-gray-100 mr-3 rounded-full'></span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className='text-2xl flex gap-4 font-medium text-slate-800 dark:text-gray-200 h-6 px-4 py-1 rounded-md mb-12 justify-start'>
              {project.stack}
            </p>
            <div className='flex justify-between mt-auto'>
              <Link
                className='text-blue-800 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-semibold'
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </Link>
              <Link
                className='text-blue-800 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-semibold'
                href={project.repoUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
