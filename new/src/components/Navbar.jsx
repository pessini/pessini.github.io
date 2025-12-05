import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaCode, FaEnvelope, FaSun, FaMoon, FaDropbox, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const tabs = [
        { id: 'about', path: '/about', label: 'About me', number: '01.', icon: <FaUser /> },
        { id: 'projects', path: '/projects', label: 'Projects', number: '02.', icon: <FaCode /> },
        { id: 'contact', path: '/contact', label: 'Contact', number: '03.', icon: <FaEnvelope /> },
    ];

    return (
        <div className="navbar-container">
            <button className="burger-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <div className="navbar">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.id}
                            to={tab.path}
                            className={`nav-item ${location.pathname === tab.path ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            <span className="nav-number">{tab.number}</span>
                            <span className="nav-label">{tab.label}</span>
                        </Link>
                    ))}
                </div>

                <a
                    href="https://www.dropbox.com/s/0khbcntugu3z5fo/Leandro-Pessini-CV-eng.pdf?dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn"
                    onClick={closeMenu}
                >
                    <span className="resume-text">Resume</span> <FaDropbox className="btn-icon" />
                </a>
            </div>

            <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
};

export default Navbar;
