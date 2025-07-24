// src/pages/Home/Home.tsx
import React from 'react';
import profilePic from '../assets/praveen.jpg'; // Adjust path if your image name/type is different
import SocialLinks from '../components/Sociallinks';

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-16 bg-gray-50 text-center px-4 sm:px-6 lg:px-8"
    >
      {/* Profile Image */}
      <div className="mb-8 animate-fade-in-up">
        <div>
          <img
            src={profilePic}
            alt="Your Name"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-blue-600 shadow-xl"
          />
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight animate-fade-in-up delay-100">
            Hi, I'm <span className="text-blue-700">Praveen Don</span>
          </h1>
        </div>
      </div>

      {/* Hero Text */}

      {/* <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in-up delay-200">
        A passionate **[Your Primary Role, e.g., Full Stack Developer]** transforming ideas into robust and engaging web applications. I specialize in **[Your Key Skill 1, e.g., React]** and **[Your Key Skill 2, e.g., Node.js]**.
      </p> */}

      {/* Call-to-Action Buttons */}
      {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-fade-in-up delay-300">
        <a
          href="#projects" // This will link to your projects section later
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="#contact" // This will link to your contact section later
          className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div> */}

      {/* Social Media Links (We'll make this a separate component next) */}
      {/* <div className="text-gray-600 text-sm italic animate-fade-in-up delay-400">
        (Social icons will go here)
      </div> */}
      <SocialLinks/>
    </section>
  );
};

export default Home;