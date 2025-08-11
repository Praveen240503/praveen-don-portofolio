import { type IconType } from 'react-icons';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiUnity, SiMysql, SiAdobephotoshop, SiQt, SiBlender, SiTailwindcss, SiMongodb, SiPython, SiCplusplus } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

// Define the structure for a single skill item
export interface Skill {
  name: string;
  icon: IconType;
}

// Define the structure for a skill category
export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// Your skills data, categorized for display
export const SkillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'cpp', icon: SiCplusplus },
      { name: 'python', icon: SiPython },
      { name: 'Java', icon: FaJava },
      { name: 'c#', icon: TbBrandCSharp },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Node.js', icon: FaNodeJs },
      // { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'Unity', icon: SiUnity },
      { name: 'Blender', icon: SiBlender },
      { name: 'Qt Creator', icon: SiQt },
      { name: 'Adobe PS', icon: SiAdobephotoshop },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Git', icon: FaGitAlt },
      // { name: 'AWS', icon: FaAws },

    ],
  },
];
