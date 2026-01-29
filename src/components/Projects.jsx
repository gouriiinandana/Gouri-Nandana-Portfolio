import React from 'react';
import { Lock, Cloud, ShieldCheck, Globe, Activity, Wifi } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: "OpenWRT Integrated Raspberry Pi Router",
        category: "Network Security",
        icon: <Wifi size={20} />,
        desc: "Designed and deployed a custom router using OpenWRT on Raspberry Pi. Implemented VPN, firewall rules for traffic control and network stability.",
        tech: ["Raspberry Pi", "OpenWRT", "Python"]
    },
    {
        title: "Swift Help (Hospital Management)",
        category: "Full Stack Development",
        icon: <Activity size={20} />,
        desc: "Built a blood bank platform to streamline donor-recipient interactions. Integrated real-time inventory monitoring and automated replenishment.",
        tech: ["React", "ExpressJS", "NodeJS", "MongoDB"]
    },
    {
        title: "Secure Cloud Storage (Hybrid Crypto)",
        category: "Cloud Security",
        icon: <Lock size={20} />,
        desc: "Architected a secure cloud storage solution using hybrid cryptography. Integrated dynamic key rotation and multi-layered encryption.",
        tech: ["Cryptography", "Cloud", "Security"]
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
