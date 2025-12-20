'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projectsData'; // IMPORT DATA

const ProjectList = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center text-white mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Projects
                </motion.h2>
                
                <div className="space-y-20">
                    {projectsData.map((project, index) => {
                        // isEven determines the layout order
                        const isEven = index % 2 === 0; 
                        
                        return (
                            <motion.div 
                                key={project.id}
                                id={`project-${project.id}`}
                                className={`flex flex-col md:flex-row items-center gap-12`}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                {/* Project Image */}
                                <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                                    {/* You should replace this standard <img> tag with Next.js <Image> component for optimization */}
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="rounded-xl shadow-2xl border border-gray-700/50"
                                    />
                                </div>

                                {/* Project Summary and Details */}
                                <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'}`}>
                                    <h3 className={`text-3xl font-bold mb-4 ${isEven ? 'text-left' : 'text-right'} text-white`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-gray-400 mb-6 ${isEven ? 'text-left' : 'text-right'}`}>
                                        {project.summary}
                                    </p>
                                    
                                    {/* Tech Stack Pills */}
                                    <div className={`flex flex-wrap gap-2 mb-8 ${isEven ? 'justify-start' : 'justify-end'}`}>
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-sm rounded-full bg-[#14b8a6] text-white font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View More Button */}
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className={`px-6 py-3 text-lg font-medium rounded-lg 
                                                    bg-transparent border border-[#14b8a6] text-[#14b8a6] 
                                                    hover:bg-[#14b8a6] hover:text-black transition-colors`}
                                    >
                                        View More →
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            
            {/* Modal is rendered outside the loop */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};

export default ProjectList;
