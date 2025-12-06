// src/components/About.jsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiReact, SiMongodb, SiNodedotjs, SiExpress, SiNpm, SiTailwindcss, SiMui } from 'react-icons/si';
import AnimatedSection from '../utils/AnimatedSection'; // 👈 Import the wrapper

const About = () => {
    // Shortened, concise services list
    const servicesList = [
        "⚡ Build modern, responsive UIs with React & Tailwind.",
        "⚡ Develop clean, scalable MERN full-stack applications.",
        "⚡ Create secure REST APIs using Node.js & Express.",
        "⚡ Design efficient MongoDB schemas for real-world apps.",
        "⚡ Integrate APIs, authentication, and third-party services.",
    ];

    const skillIcons = [
        { icon: FaJs, name: 'JavaScript' },
        { icon: SiReact, name: 'Reactjs' },
        { icon: SiNodedotjs, name: 'Nodejs' },
        { icon: SiExpress, name: 'Expressjs' },
        { icon: SiNpm, name: 'Npm' },
        { icon: SiMongodb, name: 'Mongodb' },
        { icon: FaHtml5, name: 'HTML5' },
        { icon: FaCss3Alt, name: 'CSS3' },
        { icon: FaBootstrap, name: 'Bootstrap' },
        { icon: SiTailwindcss, name: 'Tailwind' },
        { icon: SiMui, name: 'Material UI' },
        { icon: FaGitAlt, name: 'Git' },
    ];

    return (
        <section
            id="about"
            // Use your custom color palette (Surface/Cream background in Light Mode, Background/Black in Dark Mode)
            className="py-10 md:py-24 bg-surface dark:bg-background text-background dark:text-surface transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                
                {/* 👈 Wrap the core content container with AnimatedSection */}
                <AnimatedSection>
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        
                        {/* Left Column: Image */}
                        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start order-1">
                            <img
                                src="/my-portfolio/portfolio/images/image2.png" 
                                alt="Developer illustration working at desk"
                                className="w-full max-w-lg h-auto object-contain"
                            />
                        </div>

                        {/* Right Column: Text & Skills */}
                        <div className="lg:w-1/2 w-full order-2 space-y-8 text-center lg:text-left">
                            
                            {/* Heading & Subtitle */}
                            <div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                                    What I do
                                </h2>
                                <p className="text-xl font-medium text-background/90 dark:text-surface/90">
                                    A dedicated MERN Stack Developer who loves turning ideas into clean, functional, and high-performance applications.
                                </p>
                            </div>

                            {/* Skills Grid */}
                            <div className="space-y-6">
                                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-items-center">
                                    {skillIcons.map((skill) => (
                                        <div key={skill.name} className="flex flex-col items-center group">
                                            <skill.icon
                                                className="text-4xl text-background/60 dark:text-surface/60 group-hover:text-primary transition duration-300"
                                                title={skill.name}
                                            />
                                            <span className="text-xs mt-1 text-background/70 dark:text-surface/70">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Services List */}
                            <div className="pt-6 space-y-3 max-w-xl lg:max-w-2xl">
                                {servicesList.map((service, index) => (
                                    <p
                                        key={index}
                                        className="text-lg leading-relaxed text-background/80 dark:text-surface/80"
                                    >
                                        {service}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

            </div>
        </section>
    );
};

export default About;