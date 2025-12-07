// src/components/Contact.jsx
import React from 'react';
import AnimatedSection from '../utils/AnimatedSection';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const socialLinks = [
        { icon: FaGithub, url: "https://github.com/UmmeAiman614", label: "GitHub Profile" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/umme-aiman-6302862a9/", label: "LinkedIn Profile" },
        { icon: FaInstagram, url: "YOUR_TWITTER_URL", label: "Instagram Profile" },
    ];

    return (
        <section 
            id="contact" 
            className="py-16 md:py-24 bg-surface dark:bg-background text-background dark:text-surface transition-colors duration-500"
        >
            <div className="container mx-auto px-4 max-w-4xl text-center">

                {/* Heading */}
                <AnimatedSection direction="bottom" delay={0}>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
                        Let's Connect and Build Together
                    </h2>
                    <p className="text-xl mb-16 text-background/80 dark:text-surface">
                        I am currently open to new opportunities. Reach out via email or connect with me on social media.
                    </p>
                </AnimatedSection>

                {/* Direct Contact Info */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
                    <AnimatedSection direction="left" delay={100}>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-3xl text-secondary flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-xl">Email Me</h4>
                                <a 
                                    href="mailto:ummeaiman614@gmail.com" 
                                    className="text-primary hover:text-secondary transition duration-300"
                                >
                                    ummeaiman614@gmail.com
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={200}>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-3xl text-secondary flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-xl">Location</h4>
                                <p className="text-primary">Rawalpindi, Pakistan</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Social Icons */}
                <AnimatedSection direction="bottom" delay={300}>
                    <div className="flex justify-center space-x-8">
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary transition duration-300 text-4xl"
                                aria-label={link.label}
                            >
                                <link.icon />
                            </a>
                        ))}
                    </div>
                </AnimatedSection>

            </div>
        </section>
    );
};

export default Contact;
