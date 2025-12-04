import React from 'react';
import { FaBrain, FaCloud, FaRobot, FaTools } from 'react-icons/fa';

const TechSkills = () => {
    return (
        <div className="tech-skills-section">
            <div className="section-header">
                <h2>Tech Skills</h2>
                <div className="title-underline"></div>
            </div>

            <div className="skills-grid">
                {/* AI Systems Engineering */}
                <div className="skill-group">
                    <div className="skill-header">
                        <FaRobot className="skill-icon color-1" />
                        <h3>AI Systems Engineering</h3>
                    </div>
                    <div className="skills-list">
                        <ul>
                            <li>Multi-Agent Orchestration Frameworks</li>
                            <li>RAG (Retrieval-Augmented Generation)</li>
                            <li>Vector Databases</li>
                            <li>Prompt Engineering & Optimization</li>
                        </ul>
                    </div>
                </div>

                {/* Data Science & ML */}
                <div className="skill-group">
                    <div className="skill-header">
                        <FaBrain className="skill-icon color-2" />
                        <h3>Data Science & ML</h3>
                    </div>
                    <div className="skills-list">
                        <ul>
                            <li>Statistical Analysis & A/B Testing</li>
                            <li>Supervised ML & Time Series Forecasting</li>
                            <li>Feature Engineering & Experiment Design</li>
                            <li>Data Visualization (Tableau, Seaborn, Matplotlib)</li>
                        </ul>
                    </div>
                </div>

                {/* Data Engineering & MLOps */}
                <div className="skill-group">
                    <div className="skill-header">
                        <FaTools className="skill-icon color-3" />
                        <h3>Data Engineering & MLOps</h3>
                    </div>
                    <div className="skills-list">
                        <ul>
                            <li>ETL/ELT, Data Pipelines, API Ingestion</li>
                            <li>Python + SQL (PostgreSQL/MySQL/MongoDB)</li>
                            <li>Data Lakes (S3/MinIO) & Warehouse (Snowflake)</li>
                            <li>Model Deployment & Monitoring</li>
                        </ul>
                    </div>
                </div>

                {/* Cloud & Infrastructure */}
                <div className="skill-group">
                    <div className="skill-header">
                        <FaCloud className="skill-icon color-4" />
                        <h3>Cloud & Infrastructure</h3>
                    </div>
                    <div className="skills-list">
                        <ul>
                            <li>Azure + AWS Cloud</li>
                            <li>Kubernetes, Docker, Containerized Workloads</li>
                            <li>Microservices Architecture</li>
                            <li>Git, CI/CD & DevOps Practices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechSkills;
