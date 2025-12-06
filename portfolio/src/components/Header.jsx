// src/components/Header.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; 
import { useTheme } from '../context/ThemeContext'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Assuming you have 'theme' and 'toggleTheme' coming from ThemeContext
    const { theme, toggleTheme } = useTheme(); 

    const navLinks = [
        { name: 'Skills', href: '#about' },
        { name: 'Experience', href: '#experience' }, // New link
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },   // New link
        { name: 'Contact Me', href: '#contact' },     // Updated name
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // Base Header Styling (Sticky top means it's always visible when scrolling)
        <header className="sticky top-0 z-50 
                           /* Background matches light/dark main background */
                           bg-surface dark:bg-background 
                           /* Text contrasts with the background */
                           text-background dark:text-surface 
                           shadow-xl shadow-primary/10 border-b border-primary/20 
                           transition-colors duration-500">
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                
                {/* Logo / Branding - Umme Aiman */}
                <a href="#hero" 
                   className="text-2xl font-extrabold tracking-wider 
                              text-primary hover:text-secondary 
                              transition duration-300 group"
                >
                    <span className="text-3xl text-primary group-hover:text-secondary">{`<`}</span>
                    <span className="text-xl group-hover:text-secondary transition-colors duration-300">UmmeAiman</span>
                    <span className="text-3xl text-primary group-hover:text-secondary">{`/>`}</span>
                </a>

                <div className="flex items-center space-x-6">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                // Text color uses background/surface, hover uses primary for accent
                                className="hover:text-primary transition duration-300 font-medium text-lg"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        // Icon color uses primary, hover uses secondary
                        className="text-primary hover:text-secondary text-2xl transition duration-300 p-1"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />} 
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        // Icon color uses primary, hover uses secondary
                        className="md:hidden text-primary hover:text-secondary text-2xl transition duration-300"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - ANIMATION */}
            <div 
                className={`md:hidden overflow-hidden 
                           /* Background matches desktop header for smooth transition */
                           bg-surface dark:bg-background border-t border-primary/20 
                           transition-all duration-500 ease-in-out
                           ${isOpen ? 'max-h-screen' : 'max-h-0'}`
                }
            >
                <nav className="flex flex-col p-4 space-y-2">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={() => setIsOpen(false)} 
                            // Mobile Link Styling: Text contrasts with background, hover uses primary background
                            className="block py-2 px-3 
                                       text-background dark:text-surface 
                                       hover:bg-primary hover:text-surface 
                                       dark:hover:text-background 
                                       rounded-lg transition duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;