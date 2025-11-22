import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "EMSI Central Portal",
    category: "Academic Platform",
    image: "/project1.png",
    description: "The central digital gateway for the EMSI ecosystem. This platform aggregates news, academic schedules, and institutional announcements, serving as the primary information point for thousands of students across multiple campuses.",
    techStack: ["Next.js", "Tailwind CSS", "Rest API"],
    liveUrl: "https://emsi.info",
    githubUrl: "https://github.com/aymanefakihi/emsi-central-portal",
    isPrivate: true
  },
  {
    id: 2,
    title: "EMSI Connect",
    category: "Social Networking",
    image: "/project2.png",
    description: "A dedicated social and professional networking platform connecting current students with alumni. Features include real-time messaging, event management, and a directory system to foster professional growth within the school community.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://connect.emsi.info",
    githubUrl: "https://github.com/username/emsi-connect",
    isPrivate: true
  },
  {
    id: 3,
    title: "EMSI StudyHub",
    category: "EMSI-Learning / LMS",
    image: "/project3.png",
    description: "A comprehensive academic resource repository. Allows students to access course materials, share notes, and view past exams. Optimized for performance to handle heavy traffic during exam periods.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3"],
    liveUrl: "https://studyhub.emsi.info",
    githubUrl: "https://github.com/aymanefakihi/studyhub",
    isPrivate: true
  },
  {
    id: 4,
    title: "EMSI-Delegation System",
    category: "Management Tool",
    image: "/project4.png",
    description: "An administrative tool designed to streamline the operations of student representatives (délégués). Facilitates communication between the administration and student body, including voting mechanisms and feedback collection.",
    techStack: ["MERN Stack", "Redux", "JWT Auth"],
    liveUrl: "https://delegation.emsi.info",
    githubUrl: "https://github.com/aymanefakihi/e-delegation-system",
    isPrivate: true
  },
  {
    id: 5, 
    title: "Solar System Explorer",
    category: "3D Visualisation & Data",
    image: "/project5.png", 
    description: "An interactive web application that renders a scaled model of the solar system. Designed to demonstrate complex physics concepts and data visualization using a pure JavaScript frontend for a highly engaging educational experience.",
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "3D Librarys"],
    liveUrl: "https://aymanefakihi.github.io/solar-system-explorar",
    githubUrl: "https://github.com/AYMANEFAKIHI/solar-system-explorar",
    isPrivate: false,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="h-48 bg-gray-700 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">{project.category}</span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-[#14b8a6]/10 text-[#14b8a6] rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800">
    
                  {/* Live Demo Button - Always the same */}
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-[#14b8a6] hover:bg-[#0d9488] text-white text-center rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {/* Conditional Second Button */}
                  {project.isPrivate ? (
                    // OPTION A: If Private -> Show "Request Access" with a Lock Icon
                    <button 
                      onClick={() => window.location.href = 'mailto:your-email@example.com?subject=Request Access to ' + project.title}
                      className="flex-1 px-4 py-2.5 border border-gray-700 text-gray-300 hover:text-white hover:border-[#14b8a6] rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 bg-transparent"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Request Access</span>
                    </button>
                  ) : (
                    // OPTION B: If Public -> Show "Source Code" with GitHub Icon
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 border border-gray-700 text-gray-300 hover:text-white hover:border-[#14b8a6] rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 bg-transparent"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
