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
  {
    id: 6,
    title: "Offline Chatbot & Rule Editor",
    category: "Front-end Fundamentals & Logic",
    image: "/project6.png",
    description: "A standalone, offline-capable chatbot application featuring a custom rule editor. It demonstrates strong command of fundamental JavaScript logic, state management, and efficient JSON data handling for parsing conversational rules.",
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "JSON"],
    liveUrl: "https://aymanefakihi.github.io/chatbot-offline/",
    githubUrl: "https://github.com/AYMANEFAKIHI/chatbot-offline",
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
                  {/* Always render the Primary Button (Live Demo) */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1 px-4 py-2.5 bg-[#14b8a6] hover:bg-[#0d9488] text-white text-center rounded-lg font-medium transition-all duration-300"
                  >
                    Live Demo
                  </a>

                  {/* Always render the Secondary Button (Source Code OR Request Access) */}
                  <a
                    href={project.isPrivate ? `mailto:faymane12@gmail.com?subject=Access Request for ${project.title}` : project.githubUrl}
                    target={project.isPrivate ? '_self' : '_blank'}
                    className="flex-1 px-4 py-2.5 border border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white rounded-lg font-medium transition-all duration-300"
                  >
                    {project.isPrivate ? 'Request Access' : 'Source Code'}
                  </a>
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
