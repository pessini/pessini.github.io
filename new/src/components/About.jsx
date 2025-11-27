import React from 'react';
import { FaBrain, FaCode, FaDatabase, FaCloud } from 'react-icons/fa';

const About = () => {
    return (
        <div className="content-section fade-in">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <div className="title-underline"></div>
            </div>

            <p className="about-text">
                Hi, I'm Leandro. A Data Scientist based in Brazil with over 7 years of experience. I have strong coding skills in Python, SQL and NoSQL databases, and problem-solving experience.
                I possess knowledge of supervised and unsupervised learning models with classical and deep learning frameworks.
                My goal is to extract actionable insights from raw data for making data-driven decisions and improving processes.
            </p>

            <div className="section-header">
                <h1>Tech Skills</h1>
            </div>

            <div className="cards-grid four-cards">
                {/* Card 1: Data Science & ML */}
                <div className="info-card">
                    <div className="card-icon-wrapper color-1">
                        <FaBrain className="card-icon" />
                    </div>
                    <h3>Data Science & ML</h3>
                    <p className="card-description">
                        Developing predictive models and extracting insights using classical and deep learning frameworks.
                    </p>
                    <div className="tags-container">
                        <span className="tag">Python</span>
                        <span className="tag">Pandas</span>
                        <span className="tag">Scikit-learn</span>
                        <span className="tag">TensorFlow</span>
                        <span className="tag">NLP</span>
                        <span className="tag">Statistics</span>
                    </div>
                </div>

                {/* Card 2: Data Engineering */}
                <div className="info-card">
                    <div className="card-icon-wrapper color-2">
                        <FaDatabase className="card-icon" />
                    </div>
                    <h3>Data Engineering</h3>
                    <p className="card-description">
                        Building robust data pipelines, orchestration, and modeling for large-scale data systems.
                    </p>
                    <div className="tags-container">
                        <span className="tag">SQL</span>
                        <span className="tag">Spark</span>
                        <span className="tag">Kafka</span>
                        <span className="tag">Airflow</span>
                        <span className="tag">DBT</span>
                        <span className="tag">Postgres</span>
                    </div>
                </div>

                {/* Card 3: Cloud & DevOps */}
                <div className="info-card">
                    <div className="card-icon-wrapper color-3">
                        <FaCloud className="card-icon" />
                    </div>
                    <h3>Cloud & Infrastructure</h3>
                    <p className="card-description">
                        Designing scalable cloud architectures and managing infrastructure as code.
                    </p>
                    <div className="tags-container">
                        <span className="tag">AWS</span>
                        <span className="tag">GCP</span>
                        <span className="tag">Docker</span>
                        <span className="tag">Kubernetes</span>
                        <span className="tag">Terraform</span>
                        <span className="tag">Linux</span>
                    </div>
                </div>

                {/* Card 4: Software Engineering */}
                <div className="info-card">
                    <div className="card-icon-wrapper color-4">
                        <FaCode className="card-icon" />
                    </div>
                    <h3>Software & Web</h3>
                    <p className="card-description">
                        Creating web applications and applying software engineering best practices.
                    </p>
                    <div className="tags-container">
                        <span className="tag">Javascript</span>
                        <span className="tag">React</span>
                        <span className="tag">Scala</span>
                        <span className="tag">Git</span>
                        <span className="tag">API Design</span>
                        <span className="tag">CI/CD</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
