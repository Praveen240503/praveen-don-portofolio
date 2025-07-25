import React from 'react';
import profilePic from '../assets/Praveeen-removebg-preview.png'; // Ensure this path is correct for your profile image
import dotlogo from '../assets/Dots.png'
import linelogo from '../assets/line.png'
// Removed social icons imports as they are now in MainLayout

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-row justify-center  min-h-[calc(100vh-80px)] mx-40 bg-[#303338]"
    >
      <div className="flex flex-row mt-40 justify-between">
        {/* Hero Text */}
        <div className="mt-20">
          <h1 className="text-4xl font-extrabold text-white font-fira-code">
            Hi, I'm <span className="text-word-background">Praveen Don</span>
          </h1>
          <p className="text-lg text-gray-400 mt-12 max-w-2xl font-fira-code">
            A passionate{" "}
            <span className="text-word-background">Software Developer</span>,
            transforming ideas into robust and engaging web applications. I
            specialize in Front-end Development and Machine Learning.
          </p>
          <button className="text-word-background font-fira-code my-14 w-48 h-8 border-word-background border-2">
              Contact me!
          </button>
        </div>
        {/* Profile Image */}
        <div className="-mt-20">
          <img
            src={linelogo}
            alt="Praveen"
            className="-mb-64 mt-14 ml-5 w-40 h-44"
          />
          <img src={profilePic} alt="Praveen" className="" />
          <img
            src={dotlogo}
            alt="Praveen"
            className="-mt-24 ml-80 w-32 h-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;