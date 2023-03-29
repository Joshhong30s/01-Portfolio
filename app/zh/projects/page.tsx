// Projects.tsx
'use client'

import Image from 'next/legacy/image'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  liveUrl: string
  repoUrl: string
}

const projects: Project[] = [
  {
    id: '1',
    title: '食譜分享網站',
    description: 'MongoDB, Express.JS, React, NodeJS, Backend',
    imageUrl: '/02blog.jpg',
    liveUrl: 'https://jjreactblog.netlify.app',
    repoUrl: 'https://github.com/Joshhong30s/02blog-react',
  },
  {
    id: '2',
    title: '拖拉待辦清單看板',
    description: 'Next.js, React-beautiful-dnd, Chakra UI',
    imageUrl: '/08todo.jpg',
    liveUrl: 'https://08-simple-todo-kanban.vercel.app',
    repoUrl: 'https://github.com/Joshhong30s/08SimpleTodoKanban',
  },
  {
    id: '3',
    title: 'React Dashboard',
    description: 'TBD',
    imageUrl: '',
    liveUrl: 'TBD',
    repoUrl: 'TBD',
  },
  {
    id: '4',
    title: '個人網站暨技術部落格',
    description: 'Next.JS, Tailwind CSS, Typescript, Markdown Blog',
    imageUrl: '/01portfolio.jpg',
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
            className='group rounded-lg shadow-sm p-6 bg-gray-50 dark:bg-slate-700 h-auto min-h-[400px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg dark:hover:bg-gray-700'
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
            <h3 className='text-3xl font-semibold mb-4'>{project.title}</h3>
            <p className='text-xl font-medium text-slate-800 dark:text-gray-100 mb-6 h-36'>
              {project.description}
            </p>
            <div className='flex justify-between'>
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
