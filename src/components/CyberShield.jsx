import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
import './CyberShield.css';

const CyberShield = () => {
    return (
        <div className="shield-container">
            <motion.div
                className="shield-wrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
            >
                {/* Outer Rotating Ring */}
                <div className="ring ring-outer"></div>

                {/* Middle Rotating Ring (Reverse) */}
                <div className="ring ring-middle"></div>

                {/* Inner Static Glow Ring */}
                <div className="ring ring-inner"></div>

                {/* Central Shield Icon */}
                <motion.div
                    className="shield-core"
                    animate={{
                        boxShadow: ["0 0 20px rgba(0, 255, 157, 0.4)", "0 0 50px rgba(0, 255, 157, 0.6)", "0 0 20px rgba(0, 255, 157, 0.4)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Shield size={120} strokeWidth={1} className="main-shield-icon" />
                    <Lock size={40} className="lock-icon" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CyberShield;
