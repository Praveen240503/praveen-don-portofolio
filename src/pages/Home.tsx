import React from 'react';
import profilePic from '../assets/Praveeen-removebg-preview.png'; 
import dotlogo from '../assets/Dots.png'
import linelogo from '../assets/line.png'

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center  min-h-[calc(100vh-80px)] mx-40 bg-inner-background"
    >
      <div className="flex flex-row ml-10 mt-40 justify-between">
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
          <button className="text-gray-300 font-fira-code mt-6 w-48 h-8 border-word-background border-2">
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
          <img src={profilePic} alt="Praveen" className="ml-10" />
          <img
            src={dotlogo}
            alt="Praveen"
            className="-mt-24 ml-96 w-32 h-32"
          />
        </div>
      </div>
      {/* QuoteSection */}
      <div className="container relative mt-20 mx-auto max-w-3xl">
        <blockquote className="text-3xl sm:text-4xl font-semibold italic leading-tight text-white font-fira-code">
          &ldquo;With great power comes great electricity bill.&rdquo;
          <footer className="absolute bottom-0 right-0 text-xl text-gray-400 not-italic">
            — Dr. Who
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Home;