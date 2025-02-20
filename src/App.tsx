import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import MaintenanceOverlay from './components/MaintenanceOverlay';

// Set this to false to disable the maintenance overlay
export const MAINTENANCE_MODE = true;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {MAINTENANCE_MODE && <MaintenanceOverlay />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;