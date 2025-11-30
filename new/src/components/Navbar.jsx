import React from 'react';
import { FaUser, FaCode, FaEnvelope, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

const Navbar = ({ activeTab, setActiveTab, darkMode, toggleDarkMode }) => {
    const tabs = [
        { id: 'about', label: '01. About me', icon: <FaUser /> },
        { id: 'projects', label: '02. Projects', icon: <FaCode /> },
        { id: 'contact', label: '03. Contact', icon: <FaEnvelope /> },
    ];

    return (
        <div className="navbar-container">
            <div className="navbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="nav-label">{tab.label}</span>
                    </button>
                ))}
            </div>

            <a
                href="https://www.dropbox.com/s/0khbcntugu3z5fo/Leandro-Pessini-CV-eng.pdf?dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
            >
                Resume <FaDownload className="btn-icon" />
            </a>

            <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
};

export default Navbar;
