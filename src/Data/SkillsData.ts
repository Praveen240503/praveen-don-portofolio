import { type IconType } from 'react-icons';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

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
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Git', icon: FaGitAlt },
      { name: 'AWS', icon: FaAws },
    ],
  },
];
