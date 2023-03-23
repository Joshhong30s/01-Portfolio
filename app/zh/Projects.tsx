// Projects.tsx

import Image from 'next/image'
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
    imageUrl: '../08todo.png',
    liveUrl: 'https://08-simple-todo-kanban.vercel.app',
    repoUrl: 'https://github.com/Joshhong30s/08SimpleTodoKanban',
  },
]

const Projects = () => {
  return (
    <section id='projects' className='my-10 py-16 sm:py-32'>
      <h2 className='text-4xl font-bold mb-10 text-center'>專案作品</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='rounded shadow-md p-6 bg-white dark:bg-stone-900'
          >
            <Image
              className='rounded-md mb-6 w-full h-64 object-cover'
              src='/02blog.jpg'
              alt=''
              width={300}
              height={300}
            />
            <h3 className='text-2xl font-semibold mb-4'>{project.title}</h3>
            <p className='text-lg mb-6'>{project.description}</p>
            <div className='flex justify-between'>
              <a
                className='text-teal-600 hover:text-teal-500 font-semibold'
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </a>
              <a
                className='text-teal-600 hover:text-teal-500 font-semibold'
                href={project.repoUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
