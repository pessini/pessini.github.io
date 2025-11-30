import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [loading, setLoading] = useState(true);
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

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className={`app-container fade-in ${darkMode ? 'dark' : ''}`}>
          <div className="main-content-wrapper">
            <header className="site-header">
              <div className="logo-container-header">
                <img src="/Logo-dark.svg" alt="Leandro Pessini" className="site-logo" />
              </div>
              <Navbar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </header>

            <main className="page-content">
              {renderContent()}
            </main>

            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
