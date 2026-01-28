import React from 'react';
import { Shield, Cloud, Terminal, UserCheck, Search, FileText } from 'lucide-react';
import './Skills.css';

const skillsData = [
    {
        category: "Application Security",
        icon: <Shield size={24} />,
        skills: ["Web App Penetration Testing", "Mobile App Security (APK/IPA)", "OWASP Top 10", "Auth & Authorization Testing", "API Security Testing"]
    },
    {
        category: "Cloud Security (AWS)",
        icon: <Cloud size={24} />,
        skills: ["EC2, S3, CloudWatch, CloudTrail", "IAM & Access Control Review", "Log Monitoring & Alerting", "Backup Auditing"]
    },
    {
        category: "Security Testing",
        icon: <Search size={24} />,
        skills: ["VAPT", "SAST", "SCA", "Threat Modeling"]
    },
    {
        category: "Tools",
        icon: <Terminal size={24} />,
        skills: ["Kali Linux", "Burp Suite", "Nmap", "OWASP ZAP", "APKTool", "Postman", "AWS Console"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                <div className="icon-box">{category.icon}</div>
                                <h3>{category.category}</h3>
                            </div>
                            <ul className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
