import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaCode, FaEnvelope, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const location = useLocation();
    const tabs = [
        { id: 'about', path: '/about', label: '01. About me', icon: <FaUser /> },
        { id: 'projects', path: '/projects', label: '02. Projects', icon: <FaCode /> },
        { id: 'contact', path: '/contact', label: '03. Contact', icon: <FaEnvelope /> },
    ];

    return (
        <div className="navbar-container">
            <div className="navbar">
                {tabs.map((tab) => (
                    <Link
                        key={tab.id}
                        to={tab.path}
                        className={`nav-item ${location.pathname === tab.path ? 'active' : ''}`}
                    >
                        <span className="nav-label">{tab.label}</span>
                    </Link>
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
