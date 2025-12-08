
export const projectsData = [
    {
        id: 1,
        title: "EMSI Central Portal",
        category: "Academic Platform",
        image: "/project1.png",
        summary: "The central digital gateway for the EMSI ecosystem, aggregating news, schedules, and institutional announcements for thousands of students.",
        fullDescription: `**The Central Portal** acts as the primary digital hub for the entire EMSI ecosystem, serving thousands of students and faculty across multiple campuses.

**Problem & Goal:** The institution lacked a single, unified source for real-time academic information, leading to fragmented communication across different departments and outdated paper announcements. The goal was to consolidate news, schedules, and administrative announcements into one responsive, high-availability platform.

**Solution & Implementation:** Built with a **Next.js** frontend for rapid rendering and SEO, the platform consumes data via a secure **REST API**. The architecture is designed for **scalability**, ensuring it handles high concurrent traffic volumes, particularly during critical periods like registration and exam results announcements.

**Results:** Significantly improved institutional transparency and reduced administrative load by automating the distribution of essential academic and regulatory information. This platform is now the first point of contact for students seeking official updates.`,
        techStack: ["Next.js", "Tailwind CSS", "REST API"],
        liveUrl: "https://emsi.info",
        githubUrl: "https://github.com/aymanefakihi/emsi-central-portal",
        isPrivate: true,
    },
    {
        id: 2,
        title: "EMSI Connect",
        category: "Social Networking",
        image: "/project2.png",
        summary: "A dedicated social and professional networking platform connecting current students with alumni, featuring real-time messaging and event management.",
        fullDescription: `**EMSI Connect** is a dedicated professional and social networking platform engineered to bridge the gap between current students and the extensive alumni network.

**Problem & Goal:** Students needed a formal, career-focused networking tool dedicated to the school environment, distinct from general social media. The goal was to foster professional mentoring, career guidance, and community building.

**Solution & Implementation:** This is a full **MERN stack** application utilizing **Node.js** and **MongoDB** for flexible backend data storage. The key technical challenge was implementing **real-time communication**, achieved through **Socket.io** for features like instant messaging and live event updates. The platform features user directories, event management, and group creation tailored for professional growth.

**Results:** Successfully facilitated professional connections, boosted event attendance, and established a private, secure environment for alumni mentorship and job postings, enhancing the overall student experience and career readiness.`,
        techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
        liveUrl: "https://connect.emsi.info",
        githubUrl: "https://github.com/username/emsi-connect",
        isPrivate: true,
    },
    {
        id: 3,
        title: "EMSI StudyHub",
        category: "EMSI-Learning / LMS",
        image: "/project3.png",
        summary: "A comprehensive academic resource repository allowing students to access course materials and share notes. Optimized for performance during high-traffic exam periods.",
        fullDescription: `**StudyHub** is a comprehensive Learning Management System (LMS) and academic resource repository, optimized for high traffic and reliability.

**Problem & Goal:** Students needed a reliable, centralized location to access and share learning materials. Existing file-sharing methods were slow and unorganized, especially during high-demand periods like final exams.

**Solution & Implementation:** Engineered with **Next.js** and **TypeScript** for robust, type-safe code, the system utilizes **PostgreSQL** for structured metadata storage and **AWS S3** for secure, high-speed storage and delivery of large course materials (notes, videos, past exams). The deployment and caching strategy were specifically optimized to maintain performance under the peak load experienced during exam periods.

**Results:** Provided a significantly faster and more reliable resource access experience, enabling thousands of students to effectively prepare for exams without site downtime or performance degradation.`,
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3"],
        liveUrl: "https://studyhub.emsi.info",
        githubUrl: "https://github.com/aymanefakihi/studyhub",
        isPrivate: true,
    },
    {
        id: 4,
        title: "EMSI-Delegation System",
        category: "Management Tool",
        image: "/project4.png",
        summary: "An administrative tool streamlining the operations of student representatives (délégués). Facilitates secure voting and feedback collection.",
        fullDescription: `The **E-Delegation System** is a vital administrative tool designed to streamline student representation and administrative workflows.

**Problem & Goal:** The process of electing student representatives (délégués), collecting student feedback, and communicating with administration was manual and inefficient. The goal was to digitize and formalize these administrative operations.

**Solution & Implementation:** Built using the **MERN Stack** (MongoDB, Express, React, Node) with **Redux** for predictable state management across complex voting and communication interfaces. **JWT Authentication** was implemented to ensure secure, verifiable voting and role-based access control (administration vs. student delegates). Features include secure voting mechanisms, automated feedback collection forms, and specialized communication channels.

**Results:** Reduced manual administrative overhead, ensured the transparency and integrity of student elections, and provided a structured method for collecting actionable feedback from the student body.`,
        techStack: ["MERN Stack", "Redux", "JWT Auth"],
        liveUrl: "https://delegation.emsi.info",
        githubUrl: "https://github.com/aymanefakihi/e-delegation-system",
        isPrivate: true,
    },
    {
        id: 5, 
        title: "Solar System Explorer",
        category: "3D Visualisation & Data",
        image: "/project5.png", 
        summary: "An interactive web application rendering a scaled model of the solar system, demonstrating complex physics concepts using pure JavaScript.",
        fullDescription: `The **Solar System Explorer** is an interactive front-end application focused on data visualization and educational rendering.

**Problem & Goal:** To create an engaging, technical demonstration of core front-end skills by modeling complex, dynamic data (orbital paths, relative sizes, and positions of planets) without relying on large frameworks.

**Solution & Implementation:** This project was developed using **Vanilla JavaScript** (HTML5 and CSS3) augmented with a **3D Library** (such as Three.js, or similar specialized libraries) to handle the geometric rendering. The focus was on optimizing rendering performance and accurately translating real-world astronomical data into a scaled, interactive digital model, showcasing proficiency in complex mathematical manipulation within the browser.

**Results:** Successfully created a highly interactive demonstration that proves deep competence in foundational JavaScript, DOM manipulation, and performance-critical front-end rendering techniques.`,
        techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "3D Librarys"],
        liveUrl: "https://aymanefakihi.github.io/solar-system-explorar",
        githubUrl: "https://github.com/AYMANEFAKIHI/solar-system-explorar",
        isPrivate: false, // Updated to false based on the URL
    },
    {
        id: 6,
        title: "Offline Chatbot & Rule Editor",
        category: "Front-end Fundamentals & Logic",
        image: "/project6.png",
        summary: "A standalone, offline-capable chatbot featuring a custom rule editor. Demonstrates strong command of vanilla JavaScript logic and JSON data handling.",
        fullDescription: `The **Offline Chatbot & Rule Editor** is a standalone application built to demonstrate mastery of client-side logic and state persistence.

**Problem & Goal:** To create a functional, customizable chatbot that operates entirely client-side, proving strong command over core JavaScript fundamentals, parsing, and data manipulation.

**Solution & Implementation:** This is a **Vanilla JavaScript** application where the conversational rules are defined and managed within a **JSON** structure. A custom front-end editor allows users to define new rule patterns and responses, which are then stored and retrieved locally (via local storage or IndexedDB, enabling **offline capability**). The core technical challenge was developing the logic to efficiently parse user input against the dynamic rule set.

**Results:** A clean, functional demonstration of fundamental **JavaScript logic, JSON processing, and reliable client-side state management**—skills essential for any modern front-end developer.`,
        techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "JSON"],
        liveUrl: "https://aymanefakihi.github.io/chatbot-offline/",
        githubUrl: "https://github.com/AYMANEFAKIHI/chatbot-offline",
        isPrivate: false, // Updated to false based on the URL
    },
];
