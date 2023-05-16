import { IoLogoGithub } from 'react-icons/io5'
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiGithub,
} from 'react-icons/si'

import { SiNextdotjs } from 'react-icons/si'

export default function SkillIcon() {
  const skill = [
    { skills: <SiNextdotjs size={40} />, text: 'NextJS' },
    { skills: <SiReact size={40} />, text: 'React' },
    { skills: <SiJavascript size={40} />, text: 'JavaScript' },
    { skills: <SiTailwindcss size={40} />, text: 'Tailwind' },
    { skills: <SiGit size={40} />, text: 'Git' },
    { skills: <SiMongodb size={40} />, text: 'MongoDB' },
    { skills: <SiHtml5 size={40} />, text: 'HTML5' },
    { skills: <SiTypescript size={40} />, text: 'TypeScript' },
    { skills: <SiExpress size={40} />, text: 'Express' },
    { skills: <SiGithub size={40} />, text: 'GitHub' },
  ]

  return (
    <div className='grid grid-cols-2 gap-6 md:gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {skill.map((item, idx) => {
        return (
          <div key={idx} className='flex items-center gap-2 text-xl'>
            <div className=''>{item.skills}</div>
            <div className=''>{item.text}</div>
          </div>
        )
      })}
    </div>
  )
}
