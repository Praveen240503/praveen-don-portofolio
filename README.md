<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->
🚀 Praveen Don's Developer Portfolio
A modern, responsive, and interactive personal portfolio showcasing my skills, projects, and professional journey. Built with cutting-edge front-end technologies for a smooth and engaging user experience.

📋 Table of Contents
✨ Features

🛠️ Tech Stack

🚀 Getting Started

Prerequisites

Installation

Running the Development Server

📂 Project Structure

✅ Implementation Progress

1. Project Initialization

2. Tailwind CSS Integration

3. Core Layout & Routing

4. Home (Hero) Section

💡 Future Enhancements

🤝 Contributing

📄 License

✨ Features
This portfolio aims to provide a comprehensive overview of my work and expertise, including:

Dynamic Home/Hero Section: A captivating introduction with a professional photo, brief bio, and clear calls-to-action.

Detailed About Section: A narrative about my background, passion for development, and what drives me.

Showcase of Projects: Dedicated cards/sections for each project with images, descriptions, technologies used, and links to live demos/repositories.

Interactive Skills Section: A visual representation of my technical proficiencies.

Accessible Contact Form: An easy way for visitors to get in touch.

Fully Responsive Design: Optimized for seamless viewing across all devices (mobile, tablet, desktop).

Smooth Navigation: Intuitive and fast transitions between sections.

Clean & Modern UI: A professional aesthetic achieved with Tailwind CSS.

🛠️ Tech Stack
This project is built using a modern and efficient front-end stack:

React (v18+): A declarative, component-based JavaScript library for building user interfaces. It allows for efficient updates and a modular approach to UI development.

Why React?: Its component-driven architecture promotes reusability and maintainability, essential for a well-structured portfolio.

Vite: A next-generation frontend tooling that provides an extremely fast development experience. It offers instant server start, lightning-fast Hot Module Replacement (HMR), and optimized builds.

Why Vite?: Its speed significantly improves developer productivity, allowing for quick iterations on design and content.

TypeScript: A superset of JavaScript that adds static typing. This helps catch errors during development, improves code readability, and enhances tooling support (like IntelliSense).

Why TypeScript?: Ensures type safety, making the codebase more robust and easier to refactor and scale, especially as the project grows.

Tailwind CSS (v3.4.4): A utility-first CSS framework packed with classes like flex, pt-4, text-center, and shadow-md that can be composed to build any design directly in your markup.

Why Tailwind CSS?: Enables rapid UI development, promotes design consistency through a predefined scale, and results in highly optimized CSS bundles.

React Router DOM (v6+): A standard library for declarative routing in React applications. It allows for navigation between different components/pages without full page reloads.

Why React Router DOM?: Provides a smooth single-page application (SPA) experience for navigating the portfolio sections.

🚀 Getting Started
Follow these steps to get your portfolio project up and running on your local machine.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v18.x or higher recommended)

npm (Node Package Manager, comes with Node.js)

Installation
Clone the repository (if you're getting this from a Git repo later, otherwise, you've already created it):

# If starting from scratch as we did:
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio

Install project dependencies:

npm install
# Install React Router DOM and its types
npm install react-router-dom
npm install -D @types/react-router-dom
# Install Tailwind CSS and its dependencies (already done but for reference)
npm install -D tailwindcss@3.4.4 postcss autoprefixer

Initialize Tailwind CSS configuration (if tailwind.config.js and postcss.config.js are not present):

npx tailwindcss init -p

(If you encountered issues with this command, ensure you followed the troubleshooting steps to downgrade to Tailwind CSS v3.4.4 and/or explicitly run node ./node_modules/tailwindcss/lib/cli.js init -p as a fallback).

Running the Development Server
Once all dependencies are installed, you can start the development server:

npm run dev

This will typically open your application in your browser at http://localhost:5173/ (or a similar port). The server will automatically reload your application as you make changes to the code.

📂 Project Structure
The project follows a component-based architecture, organized for clarity and maintainability:

my-portfolio/
├── public/                # Static assets (index.html, favicon)
├── src/                   # All source code
│   ├── assets/            # Images, icons, fonts (e.g., profile.jpg)
│   ├── components/        # Reusable UI components (e.g., Button, Card, SocialLinks)
│   │   └── SocialLinks/
│   │       └── SocialLinks.tsx
│   ├── layouts/           # Components defining overall page structure (e.g., MainLayout)
│   │   └── MainLayout.tsx
│   ├── pages/             # Top-level components for each route/page
│   │   └── Home/
│   │       └── Home.tsx
│   ├── styles/            # Global stylesheets (e.g., global.css)
│   │   └── global.css
│   ├── hooks/             # Custom React hooks (for reusable logic)
│   ├── utils/             # Helper functions, utility classes
│   ├── types/             # Global TypeScript type definitions
│   ├── App.tsx            # Main application component (handles routing)
│   └── main.tsx           # Entry point for React application
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js      # Tailwind CSS PostCSS configuration
├── README.md              # This file
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json
└── vite.config.ts         # Vite build tool configuration

✅ Implementation Progress
Here's what we've accomplished so far in building your portfolio:

1. Project Initialization
A new React project was created using Vite and configured with TypeScript. This provides a fast and type-safe development environment.

2. Tailwind CSS Integration
Tailwind CSS (v3.4.4), PostCSS, and Autoprefixer were successfully installed and configured.

tailwind.config.js and postcss.config.js were generated.

The content array in tailwind.config.js was set to scan .tsx files.

Tailwind's base, components, and utilities directives were added to src/styles/global.css (or src/index.css).

The VS Code Tailwind CSS IntelliSense extension was recommended and installed to enhance developer experience and resolve "Unknown at rule" warnings.

3. Core Layout & Routing
react-router-dom was installed to enable client-side routing.

A MainLayout component (src/layouts/MainLayout.tsx) was created, defining a consistent header, main content area, and footer for all pages.

App.tsx was updated to use BrowserRouter and Routes to render the MainLayout and a basic Home page.

4. Home (Hero) Section
The Home component (src/pages/Home/Home.tsx) was developed to serve as the main hero section.

It includes a circular profile picture, a prominent heading with your name and role, and call-to-action buttons.

A reusable SocialLinks component (src/components/SocialLinks/SocialLinks.tsx) was created to display links to your social media profiles.

Initial Tailwind CSS styling was applied to create a visually appealing and responsive hero section.

The favicon (link rel="icon") in index.html was updated to use a PNG image, with instructions provided on how to prepare a transparent, rounded image for the best appearance in browser tabs.

💡 Future Enhancements
The following sections are planned for future development to complete your portfolio:

About Section:

Develop src/pages/About/About.tsx.

Write compelling content about your journey, skills, and professional philosophy.

Integrate visual elements like timelines or skill charts.

Projects Section:

Create src/pages/Projects/Projects.tsx.

Design responsive project cards (src/components/ProjectCard/ProjectCard.tsx).

Populate with your best projects, including images, descriptions, technologies, and links.

Skills Section:

Implement src/pages/Skills/Skills.tsx.

Visually represent your technical skills (e.g., skill bars, icon grids).

Include soft skills.

Contact Section:

Build src/pages/Contact/Contact.tsx.

Create a functional contact form (consider using a service like Formspree or Netlify Forms for backend).

Include direct contact information.

Animations & Polish:

Add subtle scroll-reveal animations (e.g., using a library or custom Tailwind animations).

Refine typography, color palette, and spacing for a polished look.

Implement dark mode toggle.

Deployment:

Prepare the project for production build.

Deploy to a hosting service (e.g., Netlify, Vercel, GitHub Pages).

🤝 Contributing
This is a personal portfolio project, but suggestions for improvements or bug fixes are always welcome! Feel free to open an issue or submit a pull request.

📄 License
This project is open source and available under the MIT License.