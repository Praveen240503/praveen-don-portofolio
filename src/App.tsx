// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/Mainlayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectPreview from './components/ProjectPreview';
// import AnimateOnScroll from './components/AnimateOnScroll';
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={
            <>
              {/* <AnimateOnScroll> */}
                <Home />
              {/* </AnimateOnScroll>
              <AnimateOnScroll> */}
                <ProjectPreview />
              {/* </AnimateOnScroll> */}
            </>
          } />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;