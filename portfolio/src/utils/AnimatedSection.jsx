// src/utils/AnimatedSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * A wrapper component to apply fade-in/slide-up animation when an element enters the viewport.
 * @param {object} props - Component props.
 * @param {number} [props.delay=0] - Delay in milliseconds before the animation starts.
 * @param {number} [props.threshold=0.1] - Percentage of element visible before trigger (0.0 to 1.0).
 * @param {string} [props.className=''] - Additional classes for the container.
 */
const AnimatedSection = ({ children, delay = 0, threshold = 0.1, className = '' }) => {
    
    // useInView hook tracks if the element is currently visible
    const { ref, inView } = useInView({
        threshold: threshold, // Trigger when 10% of the element is visible
        triggerOnce: true,   // Only trigger the animation once
    });

    // Define Tailwind CSS classes for the animation
    const animationClasses = `
        transition-all duration-1000 ease-out 
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `;

    // Calculate delay style
    const style = {
        transitionDelay: `${delay}ms`,
    };

    return (
        <div 
            ref={ref} 
            className={`${animationClasses} ${className}`} 
            style={style}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;