import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Data Science Project",
            category: "Machine Learning / AWS",
            description: "An end-to-end project to optimize Operations team daily activities with real-time Dashboard & Demand Forecasting. Deployment on Streamlit and AWS.",
            link: "https://pessini.me/moby-bikes/"
        },
        {
            title: "Bird Flu in Ireland",
            category: "Spatial Analysis",
            description: "Spatial analysis on how Avian Influenza spreads providing insights on possible risky areas and wild birds species.",
            link: "https://pessini.me/avian-flu-wild-birds-ireland/"
        },
        {
            title: "SFI Awards Distribution",
            category: "R / Tableau",
            description: "Report on research funding and geographical distribution of grant awardees.",
            link: "https://sfi-grants-and-awards.streamlit.app/"
        },
        {
            title: "Gender Differences in Grants",
            category: "R / Tableau",
            description: "Analysis on gender differences in research grants offered by SFI whether the award was accepted or declined.",
            link: "https://sfi-grants-and-awards.streamlit.app/"
        }
    ];

    return (
        <div className="content-section fade-in">
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <div className="title-underline"></div>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-category">{project.category}</div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
