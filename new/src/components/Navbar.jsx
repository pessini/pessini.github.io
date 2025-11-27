import React from 'react';
import { FaUser, FaBriefcase, FaCode } from 'react-icons/fa';

const Navbar = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'about', label: 'About', icon: <FaUser /> },
        { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
        { id: 'projects', label: 'Projects', icon: <FaCode /> },
    ];

    return (
        <div className="navbar">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    <span className="nav-icon">{tab.icon}</span>
                    <span className="nav-label">{tab.label.toUpperCase()}</span>
                </button>
            ))}
        </div>
    );
};

export default Navbar;
