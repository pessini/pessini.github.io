import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

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
                        Let's discuss how we can collaborate.
                    </h2>

                    <a href="mailto:leandro@pessini.me" className="contact-btn">
                        <FaEnvelope /> GET IN TOUCH
                    </a>
                </div>

                <div className="contact-socials">
                    <p className="socials-label">
                        Or reach out to me on <a href="https://www.linkedin.com/in/leandropessini/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
