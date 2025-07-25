// src/layouts/MainLayout.tsx
import React from 'react';
import navlog from '../assets/logo1.png'

import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
// We're using a simple type for children for now.
// In a more complex scenario, you might define more specific prop types.
interface MainLayoutProps {
  children: React.ReactNode; // React.ReactNode covers anything renderable in React
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-fira-code antialiased text-gray-800 bg-dark-background">
      {/* Header will go here */}
      <header className="bg-transparent shadow-md p-4 sticky top-0 z-50 backdrop-blur-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <a
            href="/"
            className="flex items-center gap-1  text-2xl px-40 font-semibold text-white"
          >
            <img src={navlog} alt="Logo" className="h-6 w-6" />
            Praveen
          </a>
          <div className="space-x-20 px-40 text-white font-fira-code">
            <a href="#about" className=" hover:text-word-background transition-colors">
              <span className="text-word-background">#</span>About
            </a>
            <a  
              href="#projects"
              className="hover:text-word-background transition-colors"
            >
              <span className="text-word-background">#</span>Projects
            </a>
            <a
              href="#contact"
              className="hover:text-word-background transition-colors"
            >
              <span className="text-word-background">#</span>Contact
            </a>
          </div>
        </nav>
      </header>
      {/* social media line  */}
      <div className='fixed left-6 top-60 gap-3 -translate-y-1/2 flex flex-col items-center z-50'>
        <div className="w-0.5 h-60 bg-gray-400"></div>
          <a href="mailto:praveenroyals240503@gmail.com" target="_blank">
            <LuMail
              className="h-6 w-6 -ml-px text-white cursor-pointer"
              aria-label="GitHub"
            />
          </a>
          <a href="https://github.com/Praveen240503" target="_blank">
            <FaGithub
              className="h-6 w-6 -ml-px text-white cursor-pointer"
              aria-label="GitHub"
            />
          </a>
          <a
            href="https://linkedin.com/in/praveen-k-103b3b22a/"
            target="_blank"
          >
            <IoLogoLinkedin
              className="h-6 w-6 -ml-px text-white cursor-pointer"
              aria-label="GitHub"
            />
          </a>
        </div>

      {/* Main content area */}
      <main className="flex-grow overflow-y-auto no-scrollbar">
        {children}{" "}
        {/* This is where your page content (Home, About, etc.) will be rendered */}
      </main>

      {/* Footer will go here */}
      <footer className="bg-dark-background text-white p-6 text-center mt-auto">
        <p>
          &copy; {new Date().getFullYear()} Praveen Don. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;