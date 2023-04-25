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
import { FaGitSquare } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'

export default function SkillIcon() {
  const skill = [
    { skills: <IoLogoHtml5 size={50} /> },
    { skills: <IoLogoCss3 size={50} /> },
    { skills: <IoLogoJavascript size={50} /> },
    { skills: <IoLogoReact size={50} /> },
    { skills: <TbBrandNextjs size={50} /> },
    { skills: <SiTypescript size={50} /> },
    { skills: <SiTailwindcss size={50} /> },
    { skills: <SiExpress size={50} /> },
    { skills: <FaGitSquare size={50} /> },
    { skills: <IoLogoGithub size={50} /> },
  ]
}
