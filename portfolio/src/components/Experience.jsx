// src/components/Experience.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaStar, FaBuilding, FaUtensils, FaShoppingCart } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa'; 

// Data structure updated with your current projects and statuses (Content unchanged)
const projectExperience = [
    {
        title: 'Full-Stack E-commerce Platform',
        role: 'Lead MERN Stack Developer (Current Focus)',
        duration: 'Current Project',
        badges: ['MERN Stack', 'MongoDB', 'Node/Express', 'Payment Gateway'],
        description: 'Developing a comprehensive e-commerce solution featuring user roles, product management, secure payment integration, and a dedicated admin dashboard.',
        accomplishments: [
            'Currently engineering a robust **RESTful API** with Node.js/Express for product inventory and order processing.',
            'Implementing secure **JWT-based authentication** for user and administrator access.',
            'Designing a scalable **React frontend** using modular components for the product display and checkout flow.',
        ],
        liveLink: 'YOUR_ECOMMERCE_LIVE_URL',
        githubLink: 'YOUR_ECOMMERCE_GITHUB_URL',
        status: 'In Progress',
        icon: FaShoppingCart,
    },
    {
        title: 'Event Management Platform',
        role: 'Full-Cycle MERN Stack Developer',
        duration: 'Completed: Q1 2025',
        badges: ['MERN Stack', 'Completed', 'MongoDB', 'Node/Express', 'Authentication'],
        description: 'A comprehensive full-stack application designed for planning, ticketing, and managing large-scale events, featuring secure user roles and dynamic data handling.',
        accomplishments: [
            'Engineered a highly available RESTful API in Node.js/Express to manage **user authentication, event creation, and booking logistics**.',
            'Implemented robust **JWT-based authentication** and authorization system for admin, organizer, and user roles.',
            'Developed a responsive React frontend that allows **real-time event status updates** and filtering.',
        ],
        liveLink: 'https://event-booking-frontend-kappa.vercel.app',
        githubLink: 'https://github.com/UmmeAiman614/event-booking-frontend.git',
        status: 'Completed',
        icon: FaCheckCircle,
    },
    {
        title: 'Construction Site Portfolio & Bidding Portal',
        role: 'Frontend Architect (React)',
        duration: 'Q4 2024',
        badges: ['React', 'Responsive Design', 'Tailwind CSS', 'Performance Optimization'],
        description: 'A dedicated, high-performance web presence for a construction firm, focusing on showcasing past projects and providing a secure portal for vendor bidding and communication.',
        accomplishments: [
            'Built the entire user interface using **React components and Tailwind CSS**, achieving pixel-perfect, responsive design across all devices.',
            'Implemented lazy loading and performance optimization techniques, resulting in a **90+ PageSpeed score**.',
            'Designed a structured portfolio section with dynamic filtering capabilities for viewing completed projects.',
        ],
        liveLink: 'https://construction-site-opal.vercel.app/',
        githubLink: 'https://github.com/UmmeAiman614/construction-site.git',
        status: 'Completed',
        icon: FaBuilding,
    },
    {
        title: 'Modern Restaurant & Menu Website',
        role: 'Frontend Developer & UI/UX Specialist',
        duration: 'Q3 2024',
        badges: ['React', 'UI/UX', 'Custom Hooks', 'Mobile-First'],
        description: 'A visually appealing, performant website for a restaurant, featuring an interactive menu, reservation forms, and image galleries optimized for fast loading.',
        accomplishments: [
            'Developed complex, reusable stateful components using **React Hooks** for menu interaction and reservation form handling.',
            'Focused heavily on **mobile-first design**, ensuring the interactive menu and image gallery provided an excellent experience on small screens.',
        ],
        liveLink: 'https://ummeaiman614.github.io/restaurant-react-web/',
        githubLink: 'https://github.com/UmmeAiman614/restaurant-react-web.git',
        status: 'Completed',
        icon: FaUtensils,
    },
];

const Experience = () => {
    return (
        // Section Background: Light Mode (bg-surface/Cream) | Dark Mode (dark:bg-background/Black)
        <section id="experience" 
                 className="py-16 md:py-24 
                            bg-surface dark:bg-background 
                            text-background dark:text-surface 
                            transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-5xl">
                
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary 
                               border-b-2 border-primary/50 pb-2 inline-block mx-auto">
                    Key Projects & Technical Experience
                </h2>

                {/* Timeline Container - Relative position for absolute line and dots */}
                <div className="relative space-y-16">
                    
                    {/* Vertical Timeline Line (Only visible on medium screens and up) */}
                    <div className="hidden md:block absolute left-1 top-0 bottom-0 w-1 bg-primary/30 rounded-full"></div>

                    {projectExperience.map((project, index) => (
                        <div key={index} className="relative">
                            
                            {/* Timeline Dot/Numbering (Absolute position on medium screens) */}
                            <div className="absolute top-1 left-0 transform -translate-x-1/2 
                                            hidden md:flex items-center justify-center 
                                            w-8 h-8 rounded-full border-4 border-surface dark:border-background 
                                            bg-primary text-surface font-bold text-sm z-10 
                                            shadow-lg">
                                {/* Display the project number (1, 2, 3...) */}
                                {index + 1}
                            </div>
                            
                            {/* Project Card */}
                            <div className="flex flex-col lg:flex-row shadow-xl 
                                        rounded-lg p-6 transition duration-300 
                                        
                                        /* Card Base Color Fix */
                                        bg-surface dark:bg-background 
                                        
                                        /* Dark Mode Border Fix */
                                        dark:border dark:border-surface/40
                                        
                                        /* Hover Fix */
                                        hover:bg-secondary/20 dark:hover:bg-surface/10
                                        
                                        /* Offset card content slightly to the right of the line on desktop */
                                        md:ml-12"> 
                                
                                {/* Left Side: Role, Duration, Links */}
                                <div className="lg:w-1/4 flex flex-col space-y-2 mb-4 lg:mb-0 lg:pr-8">
                                    <h3 className="text-xl font-bold text-primary">
                                        {project.title}
                                    </h3>
                                    <p className="text-md font-medium text-secondary">
                                        {project.role}
                                    </p>
                                    <p className="text-sm flex items-center text-background/70 dark:text-surface/70">
                                        <FaCalendarAlt className="mr-2 text-primary" /> {project.duration}
                                    </p>

                                    {/* Status Badge (Uses secondary/primary accents) */}
                                    <div className={`text-xs font-bold px-2 py-1 rounded-full w-fit mt-1 ${
                                        project.status === 'In Progress' 
                                            ? 'bg-secondary/30 text-secondary' 
                                            : 'bg-primary/30 text-primary'
                                    }`}>
                                        {project.status}
                                    </div>

                                    {/* Links (Always primary accent color) */}
                                    <div className="flex space-x-4 pt-2">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                                        className="text-primary hover:text-secondary transition duration-300 flex items-center text-sm"
                                        aria-label={`GitHub for ${project.title}`}>
                                            <FaGithub className="mr-1" /> Code
                                        </a>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                                        className="text-primary hover:text-secondary transition duration-300 flex items-center text-sm"
                                        aria-label={`Live Demo for ${project.title}`}>
                                            <FaExternalLinkAlt className="mr-1 text-xs" /> Live Demo
                                        </a>
                                    </div>
                                </div>

                                {/* Right Side: Description and Accomplishments */}
                                <div className="lg:w-3/4 space-y-4 border-l-0 lg:border-l-2 
                                            /* Inner Border Fix: Always visible using an accent color */
                                            border-primary/50 dark:border-secondary/50 lg:pl-8"> 
                                    {/* Description text color swaps correctly */}
                                    <p className="text-lg italic text-background/90 dark:text-surface/90">
                                        {project.description}
                                    </p>

                                    {/* Badges (Uses primary/secondary accent colors) */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.badges.map((badge, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/20 text-secondary dark:bg-primary/20 dark:text-primary">
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Key Accomplishments (Bullet Points) */}
                                    <ul className="list-disc list-inside space-y-2 pt-2 text-base">
                                        {project.accomplishments.map((ac, i) => (
                                            <li key={i} className="flex items-start">
                                                <FaStar className="mt-1 mr-2 text-primary flex-shrink-0 text-xs" />
                                                {/* Accomplishment text color swaps correctly */}
                                                <span className='text-background dark:text-surface'>{ac}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;