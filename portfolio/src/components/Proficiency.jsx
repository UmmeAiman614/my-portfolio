// src/components/Proficiency.jsx
import React from 'react';
import AnimatedSection from '../utils/AnimatedSection';

const proficiencyData = [
  { category: 'Frontend Development (React)', level: 95, description: 'Expertise in modern React, Hooks, Context API, and state management.', colorClass: 'bg-primary' },
  { category: 'Backend Development (Node.js/Express)', level: 90, description: 'Building robust, scalable RESTful APIs, authentication (JWT), and Express routing.', colorClass: 'bg-secondary' },
  { category: 'Database & Data Modeling (Mongo)', level: 85, description: 'Optimizing MongoDB schemas, aggregation pipelines, and secure data handling.', colorClass: 'bg-primary/70' },
  { category: 'Programming & DevOps', level: 75, description: 'Git flow, containerization (Docker basics), testing (Jest/Mocha), and clean code principles.', colorClass: 'bg-secondary/70' },
];

const expertiseHighlights = [
    'React Mastery',
    'Node.js/Express APIs',
    'MongoDB Data Modeling',
    'Tailwind CSS & Material UI',
    'Git & CI/CD Basics',
    'RESTful API Design',
];

const Proficiency = () => {
  const ProgressBar = ({ category, level, description, colorClass }) => (
    <AnimatedSection direction="left" delay={level * 10}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <span className="text-lg font-medium text-background dark:text-surface">{category}</span>
          <span className="text-md font-semibold text-primary">{level}%</span>
        </div>
        
        <div className="w-full bg-primary/20 dark:bg-surface/20 rounded-full h-2.5 shadow-inner">
          <div 
            className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${colorClass}`} 
            style={{ width: `${level}%` }}
          ></div>
        </div>
        
        <p className="text-sm mt-1 text-background/70 dark:text-surface/70">{description}</p>
      </div>
    </AnimatedSection>
  );

  return (
    <section id="proficiency" className="py-16 md:py-24 bg-surface dark:bg-background text-background dark:text-surface transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Heading */}
        <AnimatedSection direction="bottom" delay={0}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary border-b-2 border-primary/50 pb-2 inline-block mx-auto">
            Proficiency
          </h2>
        </AnimatedSection>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {proficiencyData.map((data, index) => (
            <ProgressBar 
              key={index}
              category={data.category}
              level={data.level}
              description={data.description}
              colorClass={data.colorClass}
            />
          ))}
        </div>
        
        {/* Core Expertise Highlights */}
        <AnimatedSection direction="bottom" delay={400}>
          <div className="mt-16 pt-8 border-t border-primary/30">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Core Expertise Highlights</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {expertiseHighlights.map((skill, index) => (
                <span key={index} className="px-4 py-2 rounded-full text-md font-semibold border border-primary bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary hover:bg-primary hover:text-surface dark:hover:bg-secondary transition duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Proficiency;
