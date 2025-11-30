import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer fade-in">
            <div className="footer-content">
                <div className="social-links-footer">
                    <a href="https://www.linkedin.com/in/leandropessini/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/pessini" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://pessini.medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                        <FaMedium />
                    </a>
                    <a href="mailto:leandro@pessini.me" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
                <div className="footer-text">
                    <p>&copy; {new Date().getFullYear()} Leandro Pessini.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
