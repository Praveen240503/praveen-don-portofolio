import React, { useState } from 'react'; // Import useState
import navlog from '../assets/logo1.png'

import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { HiMenu, HiX } from 'react-icons/hi'; 

interface MainLayoutProps {
  children: React.ReactNode; 
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen font-fira-code antialiased text-gray-800 bg-dark-background">
      {/* Header */}
      <header className="bg-transparent shadow-md p-4 sticky top-0 z-50 backdrop-blur-lg">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo and Name */}
          <a
            href="/"
            className="flex items-center ml-36 gap-1 text-2xl font-semibold text-white"
          >
            <img src={navlog} alt="Logo" className="h-6 w-6" />
            Praveen
          </a>

          {/* Hamburger Menu Button (visible on small screens) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen? (
                <HiX className="h-8 w-8" />
              ) : (
                <HiMenu className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Navigation Links (hidden on small, flex on medium+) */}
          <div
            className={`
              ${isMenuOpen? 'flex flex-col absolute top-full left-0 w-full bg-inner-background p-4 shadow-lg items-center space-y-4' : 'hidden'}
              md:flex md:flex-row md:static md:w-auto md:bg-transparent md:p-0 md:shadow-none md:items-center md:space-y-0
              space-x-10 text-white font-fira-code mr-48
            `}
          >
            <a href="#about" className="hover:text-word-background transition-colors" onClick={toggleMenu}>
              <span className="text-word-background">#</span>about
            </a>
            <a  
              href="#project-preview"
              className="hover:text-word-background transition-colors"
              onClick={toggleMenu}
            >
              <span className="text-word-background">#</span>projects
            </a>
            <a
              href="#contact"
              className="hover:text-word-background transition-colors"
              onClick={toggleMenu}
            >
              <span className="text-word-background">#</span>contact
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