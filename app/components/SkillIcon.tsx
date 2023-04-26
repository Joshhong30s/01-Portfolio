import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoGithub,
} from 'react-icons/io5'
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from 'react-icons/si'

import { SiNextdotjs } from 'react-icons/si'

export default function SkillIcon() {
  const skill = [
    { skills: <SiNextdotjs size={50} />, text: 'Next.js' },
    { skills: <IoLogoReact size={50} />, text: 'React' },
    { skills: <IoLogoJavascript size={50} />, text: 'JavaScript' },
    { skills: <SiTypescript size={50} />, text: 'TypeScript' },
    { skills: <SiTailwindcss size={50} />, text: 'Tailwind' },
    { skills: <IoLogoHtml5 size={50} />, text: 'HTML' },
    { skills: <IoLogoCss3 size={50} />, text: 'CSS' },
    { skills: <SiExpress size={50} />, text: 'Express' },
    { skills: <SiMongodb size={50} />, text: 'MongoDB' },
    { skills: <IoLogoGithub size={50} />, text: 'GitHub' },
  ]

  return (
    <div className='grid grid-cols-2 gap-6 md:gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {skill.map((item, idx) => {
        return (
          <div key={idx} className='flex items-center justify-center'>
            <div className='mr-2'>{item.skills}</div>
            <div className='w-24'>{item.text}</div>
          </div>
        )
      })}
    </div>
  )
}
