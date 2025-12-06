// src/components/Projects.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

// Import images directly from assets
import ecommerceImage from '../assets/E-commerce website.png';
import eventManagerImage from '../assets/furniture 1.png';
import constructionImage from '../assets/Screenshot 2025-06-29 125043.png';
import restaurantImage from '../assets/Screenshot 2025-06-29 182738.png';
import apiGatewayImage from '../assets/Screenshot 2025-06-29 183341.png';
import userManagementImage from '../assets/Screenshot 2025-09-02 202022.png';
import chatAppImage from '../assets/Screenshot 2025-06-29 183658.png';
import blogBackendImage from '../assets/Screenshot 2025-09-02 201935.png';
import landingPageImage from '../assets/Screenshot 2025-09-02 202022.png';
import weatherWidgetImage from '../assets/Screenshot 2025-09-05 124625.png';
import todoAppImage from '../assets/Screenshot 2025-12-06 152817.png';
import portfolioImage from '../assets/Screenshot 2025-12-06 152918.png';

// Updated project array using imported images
const projectVisuals = [
    { name: 'E-commerce Platform', image: ecommerceImage, githubLink: 'YOUR_ECOMMERCE_GITHUB_URL' },
    { name: 'Event Manager Dashboard', image: eventManagerImage, githubLink: 'YOUR_EVENT_MANAGER_GITHUB_URL' },
    { name: 'Construction Site Portal', image: constructionImage, githubLink: 'YOUR_CONSTRUCTION_GITHUB_URL' },
    { name: 'Restaurant Site UI', image: restaurantImage, githubLink: 'YOUR_RESTAURANT_GITHUB_URL' },
    { name: 'API Gateway Dashboard', image: apiGatewayImage, githubLink: 'YOUR_API_GATEWAY_GITHUB_URL' },
    { name: 'User Management System', image: userManagementImage, githubLink: 'YOUR_USER_MANAGER_GITHUB_URL' },
    { name: 'Real-time Chat App', image: chatAppImage, githubLink: 'YOUR_CHAT_APP_GITHUB_URL' },
    { name: 'Blog Platform Backend', image: blogBackendImage, githubLink: 'YOUR_BLOG_BACKEND_GITHUB_URL' },
    { name: 'Landing Page Showcase', image: landingPageImage, githubLink: 'YOUR_LANDING_PAGE_GITHUB_URL' },
    { name: 'Weather Widget', image: weatherWidgetImage, githubLink: 'YOUR_WEATHER_APP_GITHUB_URL' },
    { name: 'To-Do List Advanced', image: todoAppImage, githubLink: 'YOUR_TODO_APP_GITHUB_URL' },
    { name: 'Simple Portfolio', image: portfolioImage, githubLink: 'YOUR_SIMPLE_PORTFOLIO_GITHUB_URL' },
];

const Projects = () => {

    const ProjectCard = ({ name, image, githubLink }) => (
        <div className="group relative overflow-hidden rounded-xl shadow-2xl transition duration-500 border-2 border-primary/20
                        bg-transparent hover:shadow-primary/50 aspect-video">
            <div className="overflow-hidden w-full h-full flex items-center justify-center">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View code for ${name}`}>
                    <img
                        src={image}
                        alt={`Screenshot of ${name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05] rounded-xl"
                    />
                </a>
            </div>
        </div>
    );

    return (
        <section id="projects" className="py-16 md:py-24 bg-surface dark:bg-background text-background dark:text-surface transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary border-b-2 border-primary/50 pb-2 inline-block mx-auto">
                    Visual Projects Showcase
                </h2>

                <p className="text-center text-xl mb-12 text-background/90 dark:text-surface/90">
                    A collection of high-impact projects built with React and the MERN stack.
                </p>

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
