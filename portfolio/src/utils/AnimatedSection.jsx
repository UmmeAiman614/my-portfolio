// src/utils/AnimatedSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * AnimatedSection wrapper with directional animation
 * @param {object} props
 * @param {'bottom' | 'left' | 'right'} [props.direction='bottom'] - Direction from which the element enters
 * @param {number} [props.delay=0] - Delay in ms before animation
 * @param {number} [props.threshold=0.1] - Visibility threshold to trigger animation
 * @param {string} [props.className=''] - Additional classes
 */
const AnimatedSection = ({ children, delay = 0, threshold = 0.1, className = '', direction = 'bottom' }) => {
    const { ref, inView } = useInView({
        threshold: threshold,
        triggerOnce: true,
    });

    // Base animation classes
    let translateClass = '';
    switch(direction) {
        case 'left':
            translateClass = inView ? 'translate-x-0' : '-translate-x-8';
            break;
        case 'right':
            translateClass = inView ? 'translate-x-0' : 'translate-x-8';
            break;
        default:
            translateClass = inView ? 'translate-y-0' : 'translate-y-8';
    }

    const animationClasses = `
        transition-all duration-1000 ease-out
        ${inView ? 'opacity-100' : 'opacity-0'} 
        ${translateClass}
    `;

    const style = {
        transitionDelay: `${delay}ms`,
    };

    return (
        <div ref={ref} className={`${animationClasses} ${className}`} style={style}>
            {children}
        </div>
    );
};

export default AnimatedSection;
