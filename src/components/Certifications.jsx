import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import './Certifications.css';

const certifications = [
    "Foundations of Cybersecurity – Coursera",
    "Introduction to Cybersecurity Tools & Cyberattacks – IBM",
    "Operating Systems: Overview, Administration, and Security – IBM",
    "Postman API Fundamentals – Student Expert",
    "Oracle Discover and Train in Cybersecurity"
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
