// src/components/Education.jsx
import React from 'react';
import AnimatedSection from '../utils/AnimatedSection';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
    const educationHistory = [
        {
            institution: 'International Islamic University, Islamabad (IIUI)',
            degree: 'B.S. in Software Enginering',
            duration: '2023 - Present (Second Year)',
            icon: FaGraduationCap,
            details: 'Currently focused on advanced software engineering, data structures, algorithms, and full-stack web development (MERN focus). Maintaining a strong academic record.',
            primary: true,
        },
        {
            institution: 'Army Public School (APS)',
            degree: 'Intermediate & Matriculation',
            duration: '2021 - 2023',
            icon: FaSchool,
            details: 'Achieved excellent results in pre-engineering sciences, providing a robust foundation for my university studies in software engineering.',
            primary: false,
        },
    ];

    return (
        <section id="education" 
                 className="py-16 md:py-24 bg-surface dark:bg-background text-background dark:text-surface transition-colors duration-500">
            
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* Section Heading */}
                <AnimatedSection direction="bottom" delay={0}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary border-b-2 border-primary/50 pb-2 inline-block mx-auto">
                        Education
                    </h2>
                </AnimatedSection>

                <div className="space-y-12">
                    {educationHistory.map((item, index) => (
                        <AnimatedSection 
                            key={index} 
                            direction={index % 2 === 0 ? 'left' : 'right'} 
                            delay={index * 200}
                        >
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                                
                                {/* Icon & Institution Name (Left Side) */}
                                <div className="md:w-1/3 flex flex-col items-start space-y-2">
                                    <div className="flex items-center space-x-3">
                                        <item.icon className="w-14 h-16 text-primary" />
                                        <h3 className="text-xl font-bold text-primary">{item.institution}</h3>
                                    </div>

                                    <p className="text-md italic text-background/70 dark:text-surface/70">{item.duration}</p>
                                </div>

                                {/* Details (Right Side) */}
                                <div className="md:w-2/3 border-l-4 border-secondary/50 pl-6">
                                    <h4 className="text-2xl font-semibold mb-2 text-secondary">{item.degree}</h4>
                                    <p className="text-lg text-background/80 dark:text-surface/80">{item.details}</p>
                                    {item.primary && (
                                        <span className="mt-3 inline-block px-3 py-1 text-sm font-semibold bg-primary text-surface rounded-full shadow-md">
                                            Current Focus
                                        </span>
                                    )}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
