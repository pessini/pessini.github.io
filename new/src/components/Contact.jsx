import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="content-section fade-in">
            <div className="section-header">
                <h2 className="section-title">Contact</h2>
                <div className="title-underline"></div>
            </div>

            <div className="contact-container">
                <p className="contact-text">
                    Drop me an email and let’s discuss how we can collaborate.
                </p>

                <div className="email-box">
                    <FaEnvelope className="email-icon" />
                    <a href="mailto:leandro@pessini.me" className="email-link">leandro@pessini.me</a>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Your Message" rows="5"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
