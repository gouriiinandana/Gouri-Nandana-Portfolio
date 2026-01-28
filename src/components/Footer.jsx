import React from 'react';
import './Footer.css';

import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>© 2025 Gouri Nandana. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/gouri-nandana/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/gouriiinandana" target="_blank" rel="noopener noreferrer">
                        <Github size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
