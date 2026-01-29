import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import './Certifications.css';

const certifications = [
    "CEH (ECCouncil)",
    "AWS Certified Cloud Practitioner (AWS)",
    "Ethical Hacker (Cisco)",
    "Blockchain and its Application (NPTEL)",
    "Cybersecurity Fundamentals (IBM)",
    "AWS Solutions Architect- Associate (Ethnus)"
];

const education = {
    degree: "B.Tech – Computer Science Engineering",
    specialization: "Specialization: Cybersecurity & Digital Forensics",
    university: "VIT Bhopal University"
};

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <div className="cert-edu-grid">

                    <div className="cert-column">
                        <h2 className="section-title">Certifications</h2>
                        <ul className="cert-list">
                            {certifications.map((cert, index) => (
                                <li key={index} className="cert-item">
                                    <Award size={20} className="cert-icon" />
                                    <span>{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="edu-column">
                        <h2 className="section-title">Education</h2>
                        <div className="edu-card">
                            <BookOpen size={32} className="edu-icon" />
                            <h3>{education.degree}</h3>
                            <p className="edu-spec">{education.specialization}</p>
                            <p className="edu-uni">{education.university}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;
