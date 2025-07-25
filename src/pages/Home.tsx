// // src/pages/Home/Home.tsx
// import React from 'react';
// // import profilePic from '../assets/praveen.jpg'; 

// const Home: React.FC = () => {
//   return (
//     <section
//       id="home"
//       className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-dark-background text-center  pl-16 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="h-50 w-screen ml-40 mr-40 bg-green-500">
//           <div>
//             <span>Praveen</span>
//           </div>
//         </div>
//     </section>
//   );
// };

// export default Home;

import React from 'react';
import profilePic from '../assets/praveen.jpg'; // Ensure this path is correct for your profile image

// Removed social icons imports as they are now in MainLayout

const Home: React.FC = () => {
  return (
    <section
      id="home"
      // Removed pl-16 from here, as MainLayout's <main> handles it.
      // Added mx-auto and max-w-5xl to center and constrain the content.
      // Removed bg-dark-background as it's on the main layout div.
      className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl"
    >
      <div className="flex flex-col items-center justify-center w-full"> {/* w-full ensures it takes full width of its max-w-5xl parent */}
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <img
            src={profilePic}
            alt="Praveen Don"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-blue-600 shadow-xl"
          />
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up delay-100 font-fira-code">
          Hi, I'm <span className="text-purple-600">Praveen Don</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl animate-fade-in-up delay-200 font-fira-code">
          A passionate **** transforming ideas into robust and engaging web applications. I specialize in **** and ****.
        </p>
      </div>
    </section>
  );
};

export default Home;