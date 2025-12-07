// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        // BACKGROUND: surface (Cream) in Light Mode / background (Black) in Dark Mode
        // TEXT COLOR: background (Black) in Light Mode / surface (Cream) in Dark Mode
        <footer className="py-8 
                           bg-surface dark:bg-background 
                           text-background dark:text-surface/80 
                           transition-colors duration-500">
            <div className="container mx-auto px-4 text-center">
                
                {/* Personalized Footer Text */}
                <p className="text-sm">
                    Made with ❤️ by Umme Aiman | © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;