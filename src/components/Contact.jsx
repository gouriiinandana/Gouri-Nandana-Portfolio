import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [feedback, setFeedback] = useState({ message: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setFeedback({ message: '', type: '' });

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_n0q5ffc';
        const TEMPLATE_ID = 'template_2f93cui';
        const PUBLIC_KEY = 'x2-MbeGVqSCp1Fjbz';
        
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setFeedback({ message: 'Message sent successfully!', type: 'success' });
                    setIsSending(false);
                    form.current.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setFeedback({ message: 'Failed to send message. Please try again.', type: 'error' });
                    setIsSending(false);
                },
            );
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-container">

                    <div className="contact-info">
                        <h3>Let's Work Together</h3>
                        <p>I am interested in opportunities involving Web/Mobile VAPT, Cloud Security, and Secure Architecture. Let's build secure and resilient systems together.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail className="c-icon" size={20} />
                                <span>nandanagouri47@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="c-icon" size={20} />
                                <span>+91-9207141944</span>
                            </div>
                            <div className="contact-item">
                                <MapPin className="c-icon" size={20} />
                                <span>India</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form ref={form} className="contact-form" onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="user_name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="user_email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" rows="5" placeholder="How can I help you?" required></textarea>
                            </div>

                            {feedback.message && (
                                <div className={`feedback-msg ${feedback.type}`}>
                                    {feedback.message}
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary" disabled={isSending}>
                                {isSending ? (
                                    <>Sending... <Loader2 className="animate-spin" size={16} /></>
                                ) : (
                                    <>Send Message <Send size={16} /></>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
