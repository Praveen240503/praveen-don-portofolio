import { type Project } from '../types/Projects';
import codeforgeimage from "../assets/codeforgeimage.png";
import fitclubimage from "../assets/fitclubimage.png";

// A placeholder image URL to use for the cards. You can replace this with your own project images.
const artroniximage = "https://placehold.co/400x250/374151/E5E7EB?text=Project+Image";
// const  = "https://placehold.co/400x250/374151/E5E7EB?text=Project+Image";
const oltaimage = "https://placehold.co/400x250/374151/E5E7EB?text=Image";
// const placeholderImageUrl = "https://placehold.co/400x250/374151/E5E7EB?text=Project+Image";

export const projects: Project[] = [
  {
    id: 1,
    title: "OLTA - DRDO",
    description: "An OLTA Test Bed Automation Application, a computer-based system for Aircraft and Space System.",
    imageUrl: oltaimage,
    technologies: ["QT Creator", "Python", "NodeJS", "Prisma"],
    // liveUrl: "#",
    // githubUrl: "#",
  },
  
  {
    id: 2,
    title: "CodeForge - SELF",
    description: "An interactive Coding platform enabling real-time code writing, execution and debugging. And enhancing Coding efficiency and learning.",
    imageUrl: codeforgeimage,
    technologies: ["ReactJS", "NodeJS", "Git", "MongoDB"],
    liveUrl: "https://codeforge-dyvj.onrender.com/",
    // githubUrl: "#",
  },
  {
    id: 3,
    title: "FitClub Website - SELF",
    description: "A front-end webpage using React.js to create a community platform.",
    imageUrl: fitclubimage,
    technologies: ["ReactJS", "Photoshop", "CSS"],
    liveUrl: "https://fitclubcommunity.pages.dev/",
    githubUrl: "https://github.com/Praveen240503/fitclub_community",
  },
  {
    id: 4,
    title: "ARtronix - SELF",
    description: "An Augmented Reality-based application for visualizing and interacting with Home Electric Appliances.",
    imageUrl: artroniximage,
    technologies: ["Unity 3D", "IOT devices", "Vuforia Engine", "Illustrator", "Photoshop"],
    // liveUrl: "#",
    githubUrl: "https://github.com/Praveen240503/ARtonix",
  },
  // {
  //   id: 5,
  //   title: "Real-time Chat App",
  //   description: "A real-time chat application using WebSockets, allowing users to communicate in various rooms with real-time updates.",
  //   imageUrl: placeholderImageUrl,
  //   technologies: ["React", "Node.js", "Socket.io"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // }
];
