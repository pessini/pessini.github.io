import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HashRouter>
      <div className={`app-container ${darkMode ? 'dark' : ''}`}>
        <div className="header-wrapper">
          <header className="site-header">
            <div className="logo-container-header">
              <Link to="/about" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={darkMode ? `${import.meta.env.BASE_URL}Logo-dark.svg` : `${import.meta.env.BASE_URL}Logo-light.svg`} alt="Leandro Pessini" className="site-logo" />
              </Link>
            </div>
            <Navbar
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </header>
        </div>

        <div className="main-content-wrapper">
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
