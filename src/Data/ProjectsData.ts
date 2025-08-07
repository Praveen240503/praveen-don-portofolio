import { type Project } from '../types/Projects';

// A placeholder image URL to use for the cards. You can replace this with your own project images.
const placeholderImageUrl = "https://placehold.co/400x250/374151/E5E7EB?text=Project+Image";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Store",
    description: "A fully functional e-commerce platform built with React, featuring a shopping cart, user authentication, and product search.",
    imageUrl: placeholderImageUrl,
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Machine Learning Model",
    description: "A machine learning model for predicting housing prices based on various features, developed using Python and Scikit-learn.",
    imageUrl: placeholderImageUrl,
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive and elegant personal portfolio website designed to showcase projects and skills, built from scratch with React and Tailwind CSS.",
    imageUrl: placeholderImageUrl,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description: "A real-time chat application using WebSockets, allowing users to communicate in various rooms with real-time updates.",
    imageUrl: placeholderImageUrl,
    technologies: ["React", "Node.js", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  }
];
