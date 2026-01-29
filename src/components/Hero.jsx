import React from 'react';
import { Download, Rocket, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">

                {/* Badge */}
                <div className="hero-badge">
                    <span className="dot"></span> Security Engineer • Cloud Security
                </div>

                {/* Title */}
                <h1 className="hero-title">
                    Hi, I'm <span className="text-highlight">Gouri Nandana</span>
                </h1>

                {/* Roles */}
                <div className="hero-roles">
                    <span>Security Engineer</span>
                    <span className="divider">|</span>
                    <span className="green-text">Cloud Security Consultant</span>
                    <span className="divider">|</span>
                    <span className="blue-text">VAPT Specialist</span>
                </div>

                {/* Description */}
                <p className="hero-description">
                    "Securing Applications, Cloud Infrastructure, and Digital Assets through Proactive Security Testing and Monitoring"
                </p>

                {/* Buttons */}
                <div className="hero-buttons">
                    <a href="/resume.pdf" className="btn btn-green" download>
                        <Download size={18} /> View Resume
                    </a>
                    <a href="#projects" className="btn btn-outline-cyan">
                        <Rocket size={18} /> View Projects
                    </a>
                    <a href="#contact" className="btn btn-outline-cyan">
                        <Mail size={18} /> Contact Me
                    </a>
                </div>

                {/* Scroll Indicator */}
                <a href="#about" className="scroll-indicator">
                    <div className="shield-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <span>Scroll Down</span>
                </a>

            </div>
        </section>
    );
};

export default Hero;
