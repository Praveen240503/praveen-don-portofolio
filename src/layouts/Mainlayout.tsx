// src/layouts/MainLayout.tsx
import React from 'react';

// We're using a simple type for children for now.
// In a more complex scenario, you might define more specific prop types.
interface MainLayoutProps {
  children: React.ReactNode; // React.ReactNode covers anything renderable in React
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-800 bg-gray-100 backdrop-blur-md">
      {/* Header will go here */}
      <header className="bg-transparent shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-blue-600">
            Praveen Don
          </a>
          <div className="space-x-4">
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main content area */}
      <main className="flex-grow">
        {children} {/* This is where your page content (Home, About, etc.) will be rendered */}
      </main>

      {/* Footer will go here */}
      <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} Praveen Don. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;