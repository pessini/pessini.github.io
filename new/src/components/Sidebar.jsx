import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="/Logo-dark.svg" alt="Logo" className="sidebar-logo" />
      </div>
      <div className="profile-container">
        <img
          src="/profile.jpg"
          alt="Leandro Pessini"
          className="profile-img"
        />
      </div>
      {/* <h2 className="name">Leandro <span>Pessini</span></h2> */}
      {/* <div className="title-badge">Data Scientist</div> */}

      <div className="social-links">
        <a href="https://www.linkedin.com/in/leandropessini/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/pessini" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://pessini.medium.com/" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
      </div>

      <a href="https://www.dropbox.com/s/0khbcntugu3z5fo/Leandro-Pessini-CV-eng.pdf?dl=0" target="_blank" rel="noopener noreferrer" className="download-btn">
        RESUME
      </a>

      <div className="contact-info">
        <div className="info-row">
          <FaMapMarkerAlt className="icon" />
          <span>Brazil</span>
        </div>
        <div className="info-row">
          <FaEnvelope className="icon" />
          <span>leandro@pessini.me</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
