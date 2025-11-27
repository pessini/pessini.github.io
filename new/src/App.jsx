import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [loading, setLoading] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
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
        <div className="app-container fade-in">
          <div className="main-card">
            <Sidebar />
            <div className="content-area">
              <div className="top-bar">
                <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
              <div className="scrollable-content">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
