import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaMapMarkerAlt, FaDropbox } from 'react-icons/fa';
import TypingAnimation from './components/TypingAnimation';
import TechSkills from './components/TechSkills';
import drawingImg from './assets/profile_pixel.png';

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
        <div className="card">
            <div className="app-layout">
                {/* Header Grid: Logo/Intro + Profile Image */}
                <div className="header-grid">
                    <div className="intro-column">
                        <div className="logo-container">
                            <img src={darkMode ? "/Logo-dark.svg" : "/Logo-light.svg"} alt="Leandro Pessini" className="site-logo" />
                        </div>

                        <div className="hero-content">
                            <h1 className="hero-name">Hi, I'm Leandro.</h1>
                            <div className="hero-tagline-container">
                                <TypingAnimation />
                            </div>

                            <div className="about-me-section">
                                <div className="section-header">
                                    <h2>About Me</h2>
                                    <div className="title-underline"></div>
                                </div>
                                <p className="about-text">
                                    Former software engineer and PM turned data scientist and AI engineer — building end-to-end Machine Learning and AI solutions from raw data to real-world applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="profile-column">
                        <div className="profile-image-wrapper">
                            <img src={drawingImg} alt="Leandro Pessini" className="profile-image" />
                        </div>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span> Sao Paulo 🇧🇷 (GMT-3) </span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:leandro@pessini.me">leandro@pessini.me</a>
                            </div>
                            <a href="https://www.dropbox.com/s/0khbcntugu3z5fo/Leandro-Pessini-CV-eng.pdf?dl=0" className="resume-button" target="_blank" rel="noopener noreferrer">
                                <FaDropbox /> RESUME
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tech Skills */}
                <TechSkills />

                {/* Footer */}
                <div className="footer-section">
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/leandropessini/" target="_blank" className="social-link"><FaLinkedin /></a>
                        <a href="https://github.com/pessini" target="_blank" className="social-link"><FaGithub /></a>
                        <a href="https://pessini.medium.com/" target="_blank" className="social-link"><FaMedium /></a>
                    </div>
                    <div className="copyright">
                        All rights reserved © {new Date().getFullYear()} Leandro Pessini
                    </div>
                </div>
            </div>

            {/* Dark Mode Toggle */}
            <button className="theme-toggle" onClick={toggleDarkMode}>
                <span className="toggle-circle"></span>
            </button>
        </div>
    );
}

export default App;
