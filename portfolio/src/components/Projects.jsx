// src/components/Projects.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

// Data structure updated for 12 projects (Content unchanged)
const projectVisuals = [
    { name: 'E-commerce Platform', image: '/images/E-commerce website.png', githubLink: 'YOUR_ECOMMERCE_GITHUB_URL' },
    { name: 'Event Manager Dashboard', image: '/images/furniture 1.png', githubLink: 'YOUR_EVENT_MANAGER_GITHUB_URL' },
    { name: 'Construction Site Portal', image: '/images/Screenshot 2025-06-29 125043.png', githubLink: 'YOUR_CONSTRUCTION_GITHUB_URL' },
    { name: 'Restaurant Site UI', image: '/images/Screenshot 2025-06-29 182738.png', githubLink: 'YOUR_RESTAURANT_GITHUB_URL' },
    { name: 'API Gateway Dashboard', image: '/images/Screenshot 2025-06-29 183341.png', githubLink: 'YOUR_API_GATEWAY_GITHUB_URL' },
    { name: 'User Management System', image: '/images/Screenshot 2025-09-02 202022.png', githubLink: 'YOUR_USER_MANAGER_GITHUB_URL' },
    { name: 'Real-time Chat App', image: '/images/Screenshot 2025-06-29 183658.png', githubLink: 'YOUR_CHAT_APP_GITHUB_URL' },
    { name: 'Blog Platform Backend', image: '/images/Screenshot 2025-09-02 201935.png', githubLink: 'YOUR_BLOG_BACKEND_GITHUB_URL' },
    { name: 'Landing Page Showcase', image: '/images/Screenshot 2025-09-02 202022.png', githubLink: 'YOUR_LANDING_PAGE_GITHUB_URL' },
    { name: 'Weather Widget', image: '/images/Screenshot 2025-09-05 124625.png', githubLink: 'YOUR_WEATHER_APP_GITHUB_URL' },
    { name: 'To-Do List Advanced', image: '/images/Screenshot 2025-12-06 152817.png', githubLink: 'YOUR_TODO_APP_GITHUB_URL' },
    { name: 'Simple Portfolio', image: '/images/Screenshot 2025-12-06 152918.png', githubLink: 'YOUR_SIMPLE_PORTFOLIO_GITHUB_URL' },
];

const Projects = () => {

    const ProjectCard = ({ name, image, githubLink }) => {
        
        // Uniform grid class applied to all cards
        const gridClasses = 'col-span-1'; 

        return (
            <div className={`group relative overflow-hidden rounded-xl shadow-2xl transition duration-500 border-2 border-primary/20
                            /* Card background is transparent */
                            bg-transparent hover:shadow-primary/50 ${gridClasses} border-2 border-primary/20
                            /* Uniform aspect ratio for all cards (e.g., 4:3) */
                            aspect-video`}> 
                
                {/* Project Image Container: Ensures image fills the space */}
                <div className="overflow-hidden w-full h-full flex items-center justify-center"> 
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View code for ${name}`}>
                        <img 
                            src={image} 
                            alt={`Screenshot of ${name}`} 
                            /* object-cover ensures the image fills the area completely */
                            className="w-full h-full object-cover transition-transform duration-500 
                                        group-hover:scale-[1.05] rounded-xl" /* Adjusted rounded corners */
                        />
                    </a>
                </div>
            </div>
        );
    };

    return (
        // Section Background color uses your custom surface/background colors
        <section id="projects" 
                 className="py-16 md:py-24 
                            bg-surface dark:bg-background 
                            text-background dark:text-surface 
                            transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-6xl">
                
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary 
                               border-b-2 border-primary/50 pb-2 inline-block mx-auto">
                    Visual Projects Showcase
                </h2>

                <p className="text-center text-xl mb-12 text-background/90 dark:text-surface/90">
                    A collection of high-impact projects built with React and the MERN stack.
                </p>

                {/* Project Grid - FIX: Changed grid-cols-2 to grid-cols-1 for mobile, md:grid-cols-3 for desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projectVisuals.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;