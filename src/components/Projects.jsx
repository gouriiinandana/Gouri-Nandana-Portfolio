import React from 'react';
import { Lock, Cloud, ShieldCheck, Globe } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: "Secure File Storage (Hybrid Cryptography)",
        category: "Application Security",
        icon: <Lock size={20} />,
        desc: "Designed a secure file storage system using symmetric & asymmetric encryption to ensure confidentiality and integrity of sensitive data.",
        tech: ["Cryptography", "Python/Java", "Security"]
    },
    {
        title: "AWS Cloud Monitoring & Security",
        category: "Cloud Security",
        icon: <Cloud size={20} />,
        desc: "Implemented log monitoring and alerts using CloudWatch & CloudTrail and reviewed IAM permissions and access control.",
        tech: ["AWS", "CloudWatch", "IAM"]
    },
    {
        title: "Mobile Application VAPT",
        category: "VAPT",
        icon: <ShieldCheck size={20} />,
        desc: "Conducted static and dynamic analysis of Android APKs. Reviewed permissions, hardcoded secrets, and insecure storage.",
        tech: ["APKTool", "MobSF", "Android"]
    },
    {
        title: "Web Application VAPT",
        category: "VAPT",
        icon: <Globe size={20} />,
        desc: "Identified vulnerabilities based on OWASP Top 10. Provided exploitation proof-of-concepts and mitigation steps.",
        tech: ["Burp Suite", "OWASP ZAP", "Web Security"]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <div className="project-icon">{project.icon}</div>
                                <span className="project-category">{project.category}</span>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
