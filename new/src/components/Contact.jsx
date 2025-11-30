import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="content-section fade-in contact-section">
            <div className="section-header">
                <h1>Contact</h1>
                <div className="title-underline"></div>
            </div>

            <div className="contact-content">
                <div className="contact-message-container">
                    <h2 className="contact-message">
                        Drop me an email and let's discuss how we can collaborate.
                    </h2>

                    <a href="mailto:leandro@pessini.me" className="contact-btn">
                        <FaEnvelope /> GET IN TOUCH
                    </a>
                </div>

                <div className="contact-socials">
                    <p className="socials-label">Or reach out to me</p>
                    <div className="social-links-row">
                        <a href="https://www.linkedin.com/in/leandropessini/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <span className="separator">•</span>
                        <a href="https://github.com/pessini" target="_blank" rel="noopener noreferrer" className="social-link-item">
                            <FaGithub /> GitHub
                        </a>
                        <span className="separator">•</span>
                        <a href="https://pessini.medium.com/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                            <FaMedium /> Medium
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
