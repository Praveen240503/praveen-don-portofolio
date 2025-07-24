// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/Mainlayout';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other routes will go here later, e.g., <Route path="/about" element={<About />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;