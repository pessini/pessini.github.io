import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Data Science Project",
            category: "Machine Learning / AWS",
            description: "An end-to-end project to optimize Operations team daily activities with real-time Dashboard & Demand Forecasting. Deployment on Streamlit and AWS.",
            tags: ["Machine Learning", "AWS", "Streamlit"],
            image: "/assets/portfolio/streamlit-webapp_2.jpeg",
            link: "https://pessini.me/moby-bikes/",
            source: null
        },
        {
            title: "Bird Flu in Ireland",
            category: "Spatial Analysis",
            description: "Spatial analysis on how Avian Influenza spreads providing insights on possible risky areas and wild birds species.",
            tags: ["Spatial Analysis", "R"],
            image: "/assets/portfolio/choropleth_map.png",
            link: "https://pessini.me/avian-flu-wild-birds-ireland/",
            source: null
        },
        {
            title: "SFI Awards Distribution",
            category: "R / Tableau",
            description: "Report on research funding and geographical distribution of grant awardees.",
            tags: ["R", "Tableau"],
            image: "/assets/portfolio/awards-dist-dashboard.png",
            link: "https://sfi-grants-and-awards.streamlit.app/",
            source: null
        },
        {
            title: "Gender differences in research grant applications",
            description: "Analysis on gender differences in research grants offered by SFI whether the award was accepted or declined by the applicant.",
            tags: ["R", "Tableau"],
            image: "/assets/portfolio/gender-dashboard.png",
            link: "https://sfi-grants-and-awards.streamlit.app/",
            source: null
        }
    ];

    return (
        <div className="content-section fade-in">
            <div className="section-header">
                <h1>Projects</h1>
                <div className="title-underline"></div>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {project.image && (
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                        )}
                        <div className="project-content">
                            {project.tags && project.tags.length > 0 && (
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                            <h3 className="project-title">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            </h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaExternalLinkAlt /> Website
                                    </a>
                                )}
                                {project.source && (
                                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> Source
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
