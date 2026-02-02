
import React, { useState, useEffect } from 'react';
import { FaBrain, FaCode, FaDatabase, FaCloud, FaDropbox } from 'react-icons/fa';
import drawingImg from '../assets/profile_pixel.png';

const About = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = [
        "I build AI solutions.",
        "I find patterns in chaos.",
        "I solve with data.",
        "I turn data into decisions."
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, phrases]);

    return (
        <div className="content-section fade-in">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-name">Hi, I'm Leandro.</h1>
                    <div className="hero-tagline-container">
                        <h2 className="hero-tagline">
                            {text}
                            <span className="typing-cursor"></span>
                        </h2>
                    </div>

                    {/* <div className="hero-description">
                        <p>
                            With over 15 years of experience spanning software engineering, data science, and AI development, I build end-to-end machine learning solutions—from intelligent knowledge systems and agentic AI workflows to predictive models and automated pipelines—combining deep technical expertise with a proven ability to deliver measurable business impact.
                        </p>
                    </div> */}
                </div>

                <div className="hero-image-container">
                    <img src={drawingImg} alt="Leandro Pessini" className="hero-image" />
                </div>
            </div>

            {/* <div className="mobile-resume-container">
                <a
                    href="https://www.dropbox.com/s/0khbcntugu3z5fo/Leandro-Pessini-CV-eng.pdf?dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-resume-btn"
                >
                    <span className="resume-text">Resume</span> <FaDropbox className="btn-icon" />
                </a>
            </div> */}

            <div className="section-header">
                <h1>Tech Skills</h1>
                <div className="title-underline"></div>
            </div>

            <div className="cards-grid four-cards">
                {/* Card 1: Data Science & ML */}
                <div className="info-card">
                    <div className="card-header-row">
                        <div className="card-icon-wrapper color-1">
                            <FaBrain className="card-icon" />
                        </div>
                        <h3>Data Science & ML</h3>
                    </div>
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
                    <div className="card-header-row">
                        <div className="card-icon-wrapper color-2">
                            <FaDatabase className="card-icon" />
                        </div>
                        <h3>Data Engineering</h3>
                    </div>
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
                    <div className="card-header-row">
                        <div className="card-icon-wrapper color-3">
                            <FaCloud className="card-icon" />
                        </div>
                        <h3>Cloud & Infrastructure</h3>
                    </div>
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
                    <div className="card-header-row">
                        <div className="card-icon-wrapper color-4">
                            <FaCode className="card-icon" />
                        </div>
                        <h3>Software & Web</h3>
                    </div>
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
