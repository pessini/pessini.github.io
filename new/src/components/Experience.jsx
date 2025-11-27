import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
    const [activeTabId, setActiveTabId] = React.useState(0);

    const experiences = [
        {
            role: "Data Scientist",
            company: "Company Name",
            period: "2020 - Present",
            description: [
                "Led the development of predictive models for customer churn, resulting in a 15% reduction in attrition.",
                "Collaborated with cross-functional teams to define data requirements and deliver actionable insights.",
                "Implemented automated data pipelines using Python and SQL to streamline reporting processes."
            ]
        },
        {
            role: "Data Engineer",
            company: "Previous Company",
            period: "2018 - 2020",
            description: [
                "Designed and maintained scalable data warehouses to support business intelligence initiatives.",
                "Optimized ETL workflows, reducing data processing time by 40%.",
                "Ensured data quality and integrity through rigorous testing and validation procedures."
            ]
        },
        {
            role: "Software Developer",
            company: "Another Company",
            period: "2016 - 2018",
            description: [
                "Developed and maintained full-stack web applications using React and Node.js.",
                "Participated in code reviews and contributed to the improvement of coding standards.",
                "Resolved critical bugs and performance issues to enhance user experience."
            ]
        }
    ];

    return (
        <div className="content-section fade-in">
            <div className="section-header">
                <h2 className="section-title">Experience</h2>
                <div className="title-underline"></div>
            </div>

            <div className="jobs-container">
                <div className="jobs-tabs">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            className={`jobs-tab-button ${activeTabId === index ? 'active' : ''}`}
                            onClick={() => setActiveTabId(index)}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>
                <div className="jobs-content">
                    <div className="job-header">
                        <h3 className="job-role">
                            {experiences[activeTabId].role}
                            <span className="job-company"> @ {experiences[activeTabId].company}</span>
                        </h3>
                        <p className="job-period">{experiences[activeTabId].period}</p>
                    </div>
                    <div className="job-description">
                        <ul>
                            {experiences[activeTabId].description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
