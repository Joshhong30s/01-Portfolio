// Projects.tsx
'use client'

import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'

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
    title: 'React Blog',
    description: 'MERN stack, non-responvise blog',
    imageUrl: '/02blog.jpg',
    liveUrl: 'https://jjreactblog.netlify.app',
    repoUrl: 'https://github.com/Joshhong30s/02blog-react',
  },
  {
    id: '2',
    title: 'Todo Kanban App',
    description: 'Simple to-do app with drag & drop feature.',
    imageUrl: '/08todo.jpg',
    liveUrl: 'https://08-simple-todo-kanban.vercel.app',
    repoUrl: 'https://github.com/Joshhong30s/08SimpleTodoKanban',
  },
]

const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen flex flex-col my-12 md:my-12 pb-8 md:pt-8'
    >
      <h2 className='text-4xl font-bold mb-10 md:mb-24 text-center'>
        My Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='group rounded shadow-md p-6 bg-gray-100 dark:bg-stone-900 h-auto min-h-[400px]transition-all duration-300 transform hover:scale-110'
          >
            <div className='relative overflow-hidden border-teal-600 rounded-md mb-6 w-full h-64'>
              <Link
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className='object-cover transition-opacity duration-300 hover:opacity-50'
                  src={project.imageUrl}
                  alt=''
                  layout='fill'
                />
              </Link>
            </div>
            <h3 className='text-2xl font-semibold mb-4'>{project.title}</h3>
            <p className='text-lg mb-6 h-36'>{project.description}</p>
            <div className='flex justify-between'>
              <Link
                className='text-teal-600 hover:text-teal-500 font-semibold'
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </Link>
              <Link
                className='text-teal-600 hover:text-teal-500 font-semibold'
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
