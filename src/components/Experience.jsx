import React from 'react';
import './Experience.css';

const experiences = [
    {
        title: "Cloud Security Consultant / Security Engineer",
        company: "GKS Infotech Pvt Ltd",
        period: "May 2025 – Present",
        desc: [
            "Conduct vulnerability assessment and penetration testing (VAPT) on web and mobile applications (APK & IPA)",
            "Identify, validate, and document security vulnerabilities with remediation guidance",
            "Monitor AWS cloud environments using CloudWatch and CloudTrail",
            "Perform data backup auditing and security compliance checks",
            "Collaborate with DevOps teams to improve cloud security posture"
        ]
    },
    {
        title: "Cybersecurity Intern",
        company: "Cyber Cell Police Station, Kochi City",
        period: "Previous",
        desc: [
            "Worked on secure file storage using hybrid cryptography",
            "Assisted in security analysis and documentation",
            "Gained exposure to real-world cybercrime investigations"
        ]
    },
    {
        title: "Project Coordinator Intern",
        company: "JIITAK Inc. (Japan-based Company)",
        period: "Previous",
        desc: [
            "Coordinated app development projects between Japanese and Indian teams",
            "Tracked requirements, tasks, and quality checks",
            "Supported sustainability-focused system development"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="exp-header">
                                    <h3>{exp.title}</h3>
                                    <span className="company">{exp.company}</span>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <ul className="exp-list">
                                    {exp.desc.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
