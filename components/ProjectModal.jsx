import Link from 'next/link';

const ProjectModal = ({ project, onClose }) => {
    return (
        // Overlay (fades in)
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4 backdrop-blur-sm" onClick={onClose}>
            
            {/* Modal Content */}
            <div 
                className="bg-[#1e293b] rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header and Close Button */}
                <div className="sticky top-0 p-6 border-b border-gray-700 bg-[#1e293b]/95 backdrop-blur-md flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-[#14b8a6]">{project.title}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-white transition-colors text-3xl font-light"
                    >
                        &times;
                    </button>
                </div>

                {/* Body Content */}
                <div className="p-6">
                    {/* Image */}
                    <img src={project.image} alt={project.title} className="w-full rounded-lg mb-6 shadow-xl" />

                    {/* Full Description */}
                    {/* The dangerouslySetInnerHTML is used here to render the markdown **bold** and line breaks \n\n */}
                    <p 
                        className="text-gray-300 leading-relaxed mb-8"
                        dangerouslySetInnerHTML={{ __html: project.fullDescription.replace(/\n\n/g, '<br/><br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                    >
                    </p>


                    {/* Tech Stack */}
                    <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-sm rounded-full bg-[#374151] text-white font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                        <Link href={project.liveUrl} target="_blank" className="px-6 py-3 bg-[#14b8a6] hover:bg-[#0d9488] text-black rounded-lg font-medium transition-colors">
                            Visit Live Site
                        </Link>
                        {!project.isPrivate && (
                            <Link href={project.githubUrl} target="_blank" className="px-6 py-3 border border-gray-500 hover:border-white text-white rounded-lg font-medium transition-colors">
                                Source Code
                            </Link>
                        )}
                        {project.isPrivate && (
                            <Link href={`mailto:faymane12@gmail.com?subject=Access Request: ${project.title}`} className="px-6 py-3 border border-gray-500 hover:border-white text-white rounded-lg font-medium transition-colors">
                                Request Access
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
