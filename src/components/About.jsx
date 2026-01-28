import React from 'react';
import { User, MapPin, Mail, Phone, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title code-style">&lt;About Me/&gt;</h2>
                <p className="section-subtitle">Security Professional with a passion for protecting digital assets</p>

                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="window-controls">
                            <span className="control red"></span>
                            <span className="control yellow"></span>
                            <span className="control green"></span>
                        </div>
                        <span className="terminal-title">about_me.sh</span>
                    </div>

                    <div className="terminal-body">
                        <div className="command-line">
                            <span className="prompt">$</span> <span className="cmd">cat profile.txt</span>
                        </div>

                        <div className="profile-data">
                            <div className="data-row">
                                <User size={18} className="data-icon" />
                                <span className="key">name:</span>
                                <span className="value">Gouri Nandana</span>
                            </div>

                            <div className="data-row">
                                <Terminal size={18} className="data-icon" />
                                <span className="key">role:</span>
                                <span className="value">Security Engineer</span>
                            </div>

                            <div className="data-row">
                                <MapPin size={18} className="data-icon" />
                                <span className="key">location:</span>
                                <span className="value">India</span>
                            </div>

                            <div className="data-row">
                                <Mail size={18} className="data-icon" />
                                <span className="key">email:</span>
                                <span className="value">nandanagouri47@gmail.com</span>
                            </div>

                            <div className="data-row">
                                <Phone size={18} className="data-icon" />
                                <span className="key">phone:</span>
                                <span className="value">+91-9207141944</span>
                            </div>
                        </div>

                        <div className="command-line">
                            <span className="prompt">$</span> <span className="cursor">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
