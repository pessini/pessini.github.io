
import React, { useState, useEffect } from 'react';
import { FaBrain, FaCode, FaDatabase, FaCloud } from 'react-icons/fa';
import drawingImg from '../assets/Drawing.png';

const About = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = [
        "I build things for the web.",
        "I analyze data.",
        "I create digital experiences.",
        "I solve problems."
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
                    <h4 className="hero-intro">Hi, my name is</h4>
                    <h1 className="hero-name">Leandro Pessini.</h1>
                    <div className="hero-tagline-container">
                        <h2 className="hero-tagline">
                            {text}
                            <span className="typing-cursor"></span>
                        </h2>
                    </div>

                    <div className="hero-description">
                        <p>
                            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                            Currently, I'm focused on building accessible, human-centered products.
                        </p>
                    </div>
                </div>

                <div className="hero-image-container">
                    <img src={drawingImg} alt="Leandro Pessini" className="hero-image" />
                </div>
            </div>

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
