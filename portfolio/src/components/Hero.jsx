// src/components/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaGoogle, FaInstagram, FaFilePdf, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    // Define the social links (Update URLs with your actual links)
    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/UmmeAiman614', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/umme-aiman-6302862a9/', label: 'LinkedIn' },
        { icon: FaGoogle, href: 'ummeaiman614@gmail.com', label: 'Gmail' }, 
        { icon: FaInstagram, href: 'YOUR_INSTAGRAM_URL', label: 'Instagram' }, 
    ];

    return (
        // Section uses dark/light mode colors and full viewport height 
        <section id="hero" 
                 className="min-h-screen pt-20 pb-16 flex items-center 
                            bg-surface dark:bg-background 
                            text-background dark:text-surface 
                            transition-colors duration-500 relative overflow-hidden">
            
            <div className="max-w-7xl container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                
                {/* Left Column: Text and CTAs */}
                <div className="lg:w-3/5 text-center lg:text-left z-10 space-y-4">
                    
                    {/* Greeting & Name - Added animate-wave class to the 👋 icon */}
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 
                                   text-background dark:text-surface animate-fadeInDown">
                        Hello, I'm <span className="text-primary">Aiman</span>! 
                        <span role="img" aria-label="waving hand" className="inline-block animate-wave">👋</span>
                    </h1>
                    
                    {/* Persuasive Value Proposition & Skills */}
                    <p className="text-2xl md:text-xl font-light max-w-xl mx-auto lg:mx-0 mb-4 
                                  text-background/90 dark:text-surface/90 animate-fadeIn delay-300 leading-loose">
                        I am a MERN Stack and Frontend Developer passionate about building clean and responsive web applications. I specialize in <span className='text-primary'>React, Tailwind, Node.js, Express, and MongoDB.</span> I focus on creating smooth user experiences with modern, efficient, and scalable code. I love turning ideas into functional interfaces and improving products through good UI/UX. Always learning, always improving — and always excited to build something impactful.
                    </p>
                   

                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start space-x-6 mb-12 animate-fadeIn delay-500">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.label}
                                href={link.href}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary text-3xl 
                                           transform hover:scale-125 transition duration-300"
                                aria-label={link.label}
                            >
                                <link.icon />
                            </a>
                        ))}
                    </div>

                    {/* Main Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                        
                        {/* Contact Me Button */}
                        <a 
                            href="#contact" 
                            className="inline-flex items-center 
                                       bg-primary hover:bg-secondary text-surface 
                                       font-bold py-3 px-8 rounded-lg text-lg 
                                       transition duration-300 transform hover:scale-105 
                                       shadow-lg shadow-primary/50 animate-fadeInRight" 
                        >
                            <FaEnvelope className="mr-2" />
                            CONTACT ME
                        </a>

                        {/* See My Resume Button */}
                        <a 
                            href="/images/My CV.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center 
                                       border-2 border-primary text-primary hover:bg-primary hover:text-background 
                                       font-bold py-3 px-8 rounded-lg text-lg 
                                       transition duration-300 transform hover:scale-105 
                                       shadow-lg shadow-primary/20 animate-fadeInLeft"
                        >
                            <FaFilePdf className="mr-2" />
                            SEE MY CV
                        </a>
                    </div>
                </div>

                {/* Right Column: Illustration Image Tag */}
                <div className="hidden lg:flex lg:w-2/5 justify-center items-center mt-12 lg:mt-0 z-0">
                    <img 
                        src="my-portfolio/portfolio/public/images/image-1.png" 
                        alt="Developer illustration working at desk" 
                        className="w-full max-w-md h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;