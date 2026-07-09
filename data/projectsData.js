export const projectsData = [
    {
        id: 1,
        title: "EMSI Central Portal",
        category: { en: "Academic Platform", fr: "Plateforme Académique" },
        image: "/project1.png",
        summary: {
            en: "The central digital gateway for the EMSI ecosystem, aggregating news, schedules, and institutional announcements for thousands of students.",
            fr: "La passerelle numérique centrale de l'écosystème EMSI, agrégeant actualités, emplois du temps et annonces institutionnelles pour des milliers d'étudiants."
        },
        fullDescription: {
            en: `**The Central Portal** acts as the primary digital hub for the entire EMSI ecosystem, serving thousands of students and faculty across multiple campuses.\n\n**Problem & Goal:** The institution lacked a single, unified source for real-time academic information, leading to fragmented communication across different departments and outdated paper announcements. The goal was to consolidate news, schedules, and administrative announcements into one responsive, high-availability platform.\n\n**Solution & Implementation:** Built with a **Next.js** frontend for rapid rendering and SEO, the platform consumes data via a secure **REST API**. The architecture is designed for **scalability**, ensuring it handles high concurrent traffic volumes, particularly during critical periods like registration and exam results announcements.\n\n**Results:** Significantly improved institutional transparency and reduced administrative load by automating the distribution of essential academic and regulatory information. This platform is now the first point of contact for students seeking official updates.`,
            fr: `**Le Portail Central** constitue le hub numérique principal de l'ensemble de l'écosystème EMSI, au service de milliers d'étudiants et de membres du corps enseignant sur plusieurs campus.\n\n**Problème & Objectif:** L'établissement manquait d'une source unique et unifiée d'informations académiques en temps réel, ce qui entraînait une communication fragmentée entre les départements et des annonces papier obsolètes. L'objectif était de centraliser actualités, emplois du temps et communications administratives en une seule plateforme réactive et hautement disponible.\n\n**Solution & Mise en œuvre:** Développé avec un frontend **Next.js** pour un rendu rapide et un bon référencement SEO, la plateforme consomme des données via une **API REST** sécurisée. L'architecture est conçue pour la **scalabilité**, garantissant la gestion de volumes de trafic élevés, notamment lors des périodes critiques comme les inscriptions et la publication des résultats d'examens.\n\n**Résultats:** A significativement amélioré la transparence institutionnelle et réduit la charge administrative en automatisant la diffusion des informations académiques et réglementaires essentielles. Cette plateforme est désormais le premier point de contact des étudiants pour les mises à jour officielles.`
        },
        techStack: ["Next.js", "Tailwind CSS", "REST API"],
        liveUrl: "https://emsi.info",
        githubUrl: "https://github.com/aymanefakihi/emsi-central-portal",
        isPrivate: true,
    },
    {
        id: 2,
        title: "EMSI Connect",
        category: { en: "Social Networking", fr: "Réseau Social" },
        image: "/project2.png",
        summary: {
            en: "A dedicated social and professional networking platform connecting current students with alumni, featuring real-time messaging and event management.",
            fr: "Une plateforme de réseau social et professionnel dédiée, reliant les étudiants actuels aux anciens, avec messagerie en temps réel et gestion d'événements."
        },
        fullDescription: {
            en: `**EMSI Connect** is a dedicated professional and social networking platform engineered to bridge the gap between current students and the extensive alumni network.\n\n**Problem & Goal:** Students needed a formal, career-focused networking tool dedicated to the school environment, distinct from general social media. The goal was to foster professional mentoring, career guidance, and community building.\n\n**Solution & Implementation:** This is a full **MERN stack** application utilizing **Node.js** and **MongoDB** for flexible backend data storage. The key technical challenge was implementing **real-time communication**, achieved through **Socket.io** for features like instant messaging and live event updates. The platform features user directories, event management, and group creation tailored for professional growth.\n\n**Results:** Successfully facilitated professional connections, boosted event attendance, and established a private, secure environment for alumni mentorship and job postings, enhancing the overall student experience and career readiness.`,
            fr: `**EMSI Connect** est une plateforme de réseau social et professionnel dédiée, conçue pour combler le fossé entre les étudiants actuels et le vaste réseau des anciens élèves.\n\n**Problème & Objectif:** Les étudiants avaient besoin d'un outil de networking formel et orienté carrière, distinct des réseaux sociaux classiques. L'objectif était de favoriser le mentorat professionnel, l'orientation de carrière et la création de communauté.\n\n**Solution & Mise en œuvre:** Application complète en **stack MERN** utilisant **Node.js** et **MongoDB** pour un stockage de données flexible en backend. Le défi technique principal était l'implémentation de la **communication en temps réel**, réalisée avec **Socket.io** pour la messagerie instantanée et les mises à jour d'événements en direct. La plateforme propose des annuaires d'utilisateurs, la gestion d'événements et la création de groupes.\n\n**Résultats:** A facilité des connexions professionnelles, augmenté la participation aux événements et établi un environnement privé et sécurisé pour le mentorat des anciens élèves et les offres d'emploi.`
        },
        techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
        liveUrl: "https://connect.emsi.info",
        githubUrl: "https://github.com/AYMANEFAKIHI/emsi-connect",
        isPrivate: true,
    },
    {
        id: 3,
        title: "EMSI StudyHub",
        category: { en: "EMSI-Learning / LMS", fr: "LMS / Apprentissage" },
        image: "/project3.png",
        summary: {
            en: "A comprehensive academic resource repository allowing students to access course materials and share notes. Optimized for performance during high-traffic exam periods.",
            fr: "Un référentiel académique complet permettant aux étudiants d'accéder aux supports de cours et de partager des notes. Optimisé pour les périodes d'examen à fort trafic."
        },
        fullDescription: {
            en: `**StudyHub** is a comprehensive Learning Management System (LMS) and academic resource repository, optimized for high traffic and reliability.\n\n**Problem & Goal:** Students needed a reliable, centralized location to access and share learning materials. Existing file-sharing methods were slow and unorganized, especially during high-demand periods like final exams.\n\n**Solution & Implementation:** Engineered with **Next.js** and **TypeScript** for robust, type-safe code, the system utilizes **PostgreSQL** for structured metadata storage and **AWS S3** for secure, high-speed storage and delivery of large course materials (notes, videos, past exams). The deployment and caching strategy were specifically optimized to maintain performance under the peak load experienced during exam periods.\n\n**Results:** Provided a significantly faster and more reliable resource access experience, enabling thousands of students to effectively prepare for exams without site downtime or performance degradation.`,
            fr: `**StudyHub** est un système de gestion de l'apprentissage (LMS) complet et un référentiel de ressources académiques, optimisé pour le trafic élevé et la fiabilité.\n\n**Problème & Objectif:** Les étudiants avaient besoin d'un espace centralisé et fiable pour accéder aux supports de cours et les partager. Les méthodes de partage de fichiers existantes étaient lentes et désorganisées, surtout pendant les périodes de forte demande comme les examens finaux.\n\n**Solution & Mise en œuvre:** Développé avec **Next.js** et **TypeScript** pour un code robuste et sécurisé, le système utilise **PostgreSQL** pour le stockage structuré des métadonnées et **AWS S3** pour le stockage et la livraison sécurisés et rapides des supports de cours volumineux. La stratégie de déploiement et de mise en cache a été spécifiquement optimisée pour maintenir les performances sous charge maximale.\n\n**Résultats:** A fourni une expérience d'accès aux ressources significativement plus rapide et plus fiable, permettant à des milliers d'étudiants de préparer efficacement leurs examens sans interruption de service.`
        },
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3"],
        liveUrl: "https://studyhub.emsi.info",
        githubUrl: "https://github.com/aymanefakihi/studyhub",
        isPrivate: true,
    },
    {
        id: 4,
        title: "EMSI-Delegation System",
        category: { en: "Management Tool", fr: "Outil de Gestion" },
        image: "/project4.png",
        summary: {
            en: "An administrative tool streamlining the operations of student representatives (délégués). Facilitates secure voting and feedback collection.",
            fr: "Un outil administratif optimisant les opérations des représentants étudiants (délégués). Facilite le vote sécurisé et la collecte de retours."
        },
        fullDescription: {
            en: `The **E-Delegation System** is a vital administrative tool designed to streamline student representation and administrative workflows.\n\n**Problem & Goal:** The process of electing student representatives (délégués), collecting student feedback, and communicating with administration was manual and inefficient. The goal was to digitize and formalize these administrative operations.\n\n**Solution & Implementation:** Built using the **MERN Stack** (MongoDB, Express, React, Node) with **Redux** for predictable state management across complex voting and communication interfaces. **JWT Authentication** was implemented to ensure secure, verifiable voting and role-based access control (administration vs. student delegates). Features include secure voting mechanisms, automated feedback collection forms, and specialized communication channels.\n\n**Results:** Reduced manual administrative overhead, ensured the transparency and integrity of student elections, and provided a structured method for collecting actionable feedback from the student body.`,
            fr: `Le **Système E-Délégation** est un outil administratif essentiel conçu pour optimiser la représentation étudiante et les processus administratifs.\n\n**Problème & Objectif:** Le processus d'élection des représentants étudiants (délégués), de collecte des retours et de communication avec l'administration était manuel et inefficace. L'objectif était de numériser et de formaliser ces opérations administratives.\n\n**Solution & Mise en œuvre:** Développé avec la **stack MERN** (MongoDB, Express, React, Node) et **Redux** pour une gestion d'état prévisible. L'**authentification JWT** garantit un vote sécurisé et vérifiable avec un contrôle d'accès basé sur les rôles. Les fonctionnalités incluent des mécanismes de vote sécurisés, des formulaires de collecte de retours automatisés et des canaux de communication spécialisés.\n\n**Résultats:** A réduit la charge administrative manuelle, assuré la transparence et l'intégrité des élections étudiantes, et fourni une méthode structurée pour collecter des retours exploitables.`
        },
        techStack: ["MERN Stack", "Redux", "JWT Auth"],
        liveUrl: "https://delegation.emsi.info",
        githubUrl: "https://github.com/aymanefakihi/e-delegation-system",
        isPrivate: true,
    },
    {
        id: 5,
        title: "Solar System Explorer",
        category: { en: "3D Visualisation & Data", fr: "Visualisation 3D & Données" },
        image: "/project5.png",
        summary: {
            en: "An interactive web application rendering a scaled model of the solar system, demonstrating complex physics concepts using pure JavaScript.",
            fr: "Une application web interactive rendant un modèle à l'échelle du système solaire, illustrant des concepts physiques complexes en JavaScript pur."
        },
        fullDescription: {
            en: `The **Solar System Explorer** is an interactive front-end application focused on data visualization and educational rendering.\n\n**Problem & Goal:** To create an engaging, technical demonstration of core front-end skills by modeling complex, dynamic data (orbital paths, relative sizes, and positions of planets) without relying on large frameworks.\n\n**Solution & Implementation:** Developed using **Vanilla JavaScript** (HTML5 and CSS3) augmented with a **3D Library** to handle the geometric rendering. The focus was on optimizing rendering performance and accurately translating real-world astronomical data into a scaled, interactive digital model.\n\n**Results:** Successfully created a highly interactive demonstration proving deep competence in foundational JavaScript, DOM manipulation, and performance-critical front-end rendering techniques.`,
            fr: `**Solar System Explorer** est une application front-end interactive axée sur la visualisation de données et le rendu éducatif.\n\n**Problème & Objectif:** Créer une démonstration technique engageante des compétences front-end fondamentales en modélisant des données complexes et dynamiques (trajectoires orbitales, tailles relatives et positions des planètes) sans dépendre de frameworks lourds.\n\n**Solution & Mise en œuvre:** Développé en **JavaScript Vanilla** (HTML5 et CSS3) complété par une **bibliothèque 3D** pour le rendu géométrique. L'accent a été mis sur l'optimisation des performances de rendu et la traduction fidèle des données astronomiques réelles en modèle numérique interactif à l'échelle.\n\n**Résultats:** A créé avec succès une démonstration hautement interactive prouvant une maîtrise approfondie de JavaScript fondamental, de la manipulation du DOM et des techniques de rendu front-end critiques en termes de performance.`
        },
        techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "3D Library"],
        liveUrl: "https://aymanefakihi.github.io/solar-system-explorar",
        githubUrl: "https://github.com/AYMANEFAKIHI/solar-system-explorar",
        isPrivate: false,
    },
    {
        id: 6,
        title: "Offline Chatbot & Rule Editor",
        category: { en: "Front-end Fundamentals & Logic", fr: "Fondamentaux Front-end & Logique" },
        image: "/project6.png",
        summary: {
            en: "A standalone, offline-capable chatbot featuring a custom rule editor. Demonstrates strong command of vanilla JavaScript logic and JSON data handling.",
            fr: "Un chatbot autonome fonctionnant hors ligne avec un éditeur de règles personnalisé. Démontre une maîtrise solide de la logique JavaScript et du traitement JSON."
        },
        fullDescription: {
            en: `The **Offline Chatbot & Rule Editor** is a standalone application built to demonstrate mastery of client-side logic and state persistence.\n\n**Problem & Goal:** To create a functional, customizable chatbot that operates entirely client-side, proving strong command over core JavaScript fundamentals, parsing, and data manipulation.\n\n**Solution & Implementation:** A **Vanilla JavaScript** application where conversational rules are defined and managed within a **JSON** structure. A custom front-end editor allows users to define new rule patterns and responses stored locally (via localStorage or IndexedDB, enabling **offline capability**). The core technical challenge was developing efficient logic to parse user input against the dynamic rule set.\n\n**Results:** A clean, functional demonstration of fundamental **JavaScript logic, JSON processing, and reliable client-side state management** — skills essential for any modern front-end developer.`,
            fr: `Le **Chatbot Hors Ligne & Éditeur de Règles** est une application autonome démontrant la maîtrise de la logique côté client et de la persistance d'état.\n\n**Problème & Objectif:** Créer un chatbot fonctionnel et personnalisable opérant entièrement côté client, prouvant une solide maîtrise des fondamentaux JavaScript, du parsing et de la manipulation de données.\n\n**Solution & Mise en œuvre:** Une application en **JavaScript Vanilla** où les règles conversationnelles sont définies et gérées dans une structure **JSON**. Un éditeur front-end personnalisé permet de définir de nouveaux patterns de règles et des réponses, stockés localement (via localStorage ou IndexedDB, activant la **capacité hors ligne**). Le défi technique principal était de développer une logique efficace pour parser les entrées utilisateur.\n\n**Résultats:** Une démonstration claire et fonctionnelle de la **logique JavaScript fondamentale, du traitement JSON et de la gestion fiable de l'état côté client** — compétences essentielles pour tout développeur front-end moderne.`
        },
        techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "JSON"],
        liveUrl: "https://aymanefakihi.github.io/chatbot-offline/",
        githubUrl: "https://github.com/AYMANEFAKIHI/chatbot-offline",
        isPrivate: false,
    },
    {
        id: 7,
        title: "WebSlide Generator",
        category: { en: "Declarative UI & Export Tooling", fr: "UI Déclarative & Export" },
        image: "/project7.png",
        summary: {
            en: "A developer-centric tool for creating responsive HTML/CSS presentations from declarative templates, supporting PDF and ZIP export.",
            fr: "Un outil orienté développeur pour créer des présentations HTML/CSS responsives à partir de templates déclaratifs, avec export PDF et ZIP."
        },
        fullDescription: {
            en: `**WebSlide Generator** was conceived in direct response to the surge of AI-driven presentation tools. While these tools offer speed, they often compromise on design control, thematic coherence, and portability of the final asset.\n\n**Problem & Goal:** To provide a robust, developer-centric solution: a declarative template system built on Next.js. The architecture guarantees a **"high-fidelity, dependency-free HTML/CSS export"**, giving the user aesthetic mastery and technical longevity that automated tools cannot match.\n\n**Solution & Implementation:** Utilizes a **Next.js** framework with **TypeScript** for type-safe rendering of complex, nested slide structures. Implements a custom export mechanism to generate clean, self-contained HTML/CSS packaged as a ZIP file. The generated code is dependency-free, promoting portability and longevity.\n\n**Results:** A professional-grade presentation tool highly valued by developers and designers who require full control over their output without heavy third-party software.`,
            fr: `**WebSlide Generator** a été conçu en réponse directe à la prolifération des outils de présentation basés sur l'IA. Ces outils offrent de la rapidité mais compromettent souvent le contrôle du design, la cohérence thématique et la portabilité du fichier final.\n\n**Problème & Objectif:** Fournir une solution robuste orientée développeur : un système de templates déclaratif construit sur Next.js. L'architecture garantit un **"export HTML/CSS haute-fidélité et sans dépendances"**, offrant à l'utilisateur une maîtrise esthétique et une longévité technique qu'aucun outil automatisé ne peut égaler.\n\n**Solution & Mise en œuvre:** Utilise le framework **Next.js** avec **TypeScript** pour un rendu sécurisé de structures de slides complexes et imbriquées. Implémente un mécanisme d'export personnalisé pour générer du HTML/CSS propre et autonome empaqueté en fichier ZIP. Le code généré est sans dépendances, favorisant la portabilité.\n\n**Résultats:** Un outil de présentation de qualité professionnelle très apprécié des développeurs et designers qui nécessitent un contrôle total sur leur output.`
        },
        techStack: ["Next.js", "TypeScript", "HTML/CSS Generation", "Export Tooling"],
        liveUrl: "https://presentation-pied-nine.vercel.app/",
        githubUrl: "https://github.com/AYMANEFAKIHI/presentation",
        isPrivate: false,
    },
    {
        id: 8,
        title: "The Arduino Student Lab",
        category: { en: "Technical Education / IoT", fr: "Éducation Technique / IoT" },
        image: "/project8.png",
        summary: {
            en: "An educational platform providing clear, project-based tutorials for mastering Arduino programming, focusing on electronics and physical computing.",
            fr: "Une plateforme éducative proposant des tutoriels clairs et basés sur des projets pour maîtriser la programmation Arduino, axée sur l'électronique et l'informatique physique."
        },
        fullDescription: {
            en: `**The Arduino Student Lab** bridges the gap between theoretical electrical/physical concepts and practical application. It serves as a comprehensive educational resource for students interested in hardware programming and IoT.\n\n**Problem & Goal:** Existing Arduino tutorials are often fragmented or overly technical. The goal was to create a single, clear, highly visual learning path using a project-based approach to master fundamental concepts like digital/analog I/O, PWM, and sensor integration.\n\n**Solution & Implementation:** Developed using pure **HTML5, CSS3, and JavaScript** (Vanilla JS) for maximum compatibility and lightweight performance. Features detailed, step-by-step tutorials with embedded circuit diagrams and runnable code snippets, making complex concepts accessible.\n\n**Results:** Provides a reliable starting point for physical computing, demonstrating the ability to translate technical knowledge into clear, structured, and user-friendly documentation.`,
            fr: `**The Arduino Student Lab** comble le fossé entre les concepts théoriques électriques/physiques et leur application pratique. Il constitue une ressource éducative complète pour les étudiants intéressés par la programmation matérielle et l'IoT.\n\n**Problème & Objectif:** Les tutoriels Arduino existants sont souvent fragmentés ou trop techniques. L'objectif était de créer un parcours d'apprentissage unique, clair et très visuel, basé sur des projets concrets pour maîtriser les concepts fondamentaux comme les E/S numériques/analogiques, le PWM et l'intégration de capteurs.\n\n**Solution & Mise en œuvre:** Développé en **HTML5, CSS3 et JavaScript pur** pour une compatibilité maximale et des performances légères. Propose des tutoriels détaillés étape par étape avec des schémas de circuits intégrés et des extraits de code exécutables, rendant les concepts complexes accessibles.\n\n**Résultats:** Fournit un point de départ fiable pour l'informatique physique, démontrant la capacité à traduire des connaissances techniques en documentation claire, structurée et conviviale.`
        },
        techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "Technical Writing"],
        liveUrl: "https://aymanefakihi.github.io/ARDUINO/",
        githubUrl: "https://github.com/AYMANEFAKIHI/ARDUINO",
        isPrivate: false,
    },
    {
        id: 9,
        title: "ExamBuilder",
        category: { en: "AI-Powered EdTech", fr: "EdTech propulsée par l'IA" },
        image: "/project9.png",
        summary: {
            en: "An intelligent platform powered by Google Gemini AI that allows educators to generate professional, formatted exams in seconds with instant PDF export.",
            fr: "Une plateforme intelligente propulsée par Google Gemini AI permettant aux enseignants de générer des examens professionnels et formatés en quelques secondes avec export PDF instantané."
        },
        fullDescription: {
            en: `**ExamBuilder** (L'Examen Parfait) is an AI-driven solution designed to streamline the workflow for demanding educators. By leveraging large language models, it removes the friction of manual exam drafting and formatting.\n\n**Problem & Goal:** Teachers spend significant time creating balanced exam questions and managing layout. The goal was to build a tool that generates high-quality content instantly while ensuring a clean, printable output.\n\n**Solution & Implementation:** Integrated **Google Gemini API** to generate contextually relevant questions based on teacher input. Built with a focus on speed and data security. Implemented an instant **PDF Export** engine converting AI-generated content into a professional, ready-to-print document. Fully localized in **French** for the target market.\n\n**Results:** A 100% free, secure, and highly efficient tool that can save teachers hours of preparation time per week.`,
            fr: `**ExamBuilder** (L'Examen Parfait) est une solution pilotée par l'IA conçue pour optimiser le flux de travail des enseignants exigeants. En exploitant les grands modèles de langage, elle supprime la friction de la rédaction et de la mise en page manuelle des examens.\n\n**Problème & Objectif:** Les enseignants consacrent un temps considérable à la création de questions d'examen équilibrées et à la gestion de la mise en page. L'objectif était de créer un outil générant du contenu de qualité instantanément avec une sortie propre et imprimable.\n\n**Solution & Mise en œuvre:** Intégration de l'**API Google Gemini** pour générer des questions contextuellement pertinentes basées sur les entrées de l'enseignant. Développé en mettant l'accent sur la rapidité et la sécurité des données. Implémentation d'un moteur d'**export PDF instantané** convertissant le contenu généré par l'IA en document professionnel prêt à imprimer. Entièrement localisé en **français** pour le marché cible.\n\n**Résultats:** Un outil 100% gratuit, sécurisé et très efficace qui peut faire économiser aux enseignants des heures de préparation par semaine.`
        },
        techStack: ["Next.js", "Google Gemini AI", "Tailwind CSS", "TypeScript", "PDF Generation"],
        liveUrl: "https://exam-builder-frontend.vercel.app/",
        githubUrl: "https://github.com/AYMANEFAKIHI/Exam-Builder",
        isPrivate: false,
    },
    {
        id: 10,
        title: "InternIQ",
        category: { en: "AI-Powered JobTech / SaaS", fr: "JobTech IA / SaaS" },
        image: "/project10.png",
        summary: {
            en: "A specialized AI platform for Moroccan students that automates internship hunting by scraping local job boards, scoring CV matches, and generating tailored cover letters.",
            fr: "Une plateforme IA spécialisée pour les étudiants marocains qui automatise la recherche de stages en scrappant les job boards locaux, en notant les correspondances de CV et en générant des lettres de motivation personnalisées."
        },
        fullDescription: {
            en: `**InternIQ** was built to disrupt the inefficient manual internship search process. It provides an automated, intelligence-driven bridge between students and recruiters in the Moroccan market (Rekrute.ma, Emploi.ma, LinkedIn).

**Problem & Goal:** Most students use generic applications that yield low response rates. The goal was to build a tool that provides "10x speed" by automating the search, analysis, and customization phases of the job hunt.

**Solution & Implementation:**
* **AI Engine:** Integrated **Groq AI** for ultra-fast natural language processing to score CVs against job descriptions and generate personalized cover letters in seconds.
* **Smart Scraping:** Developed a simultaneous search mechanism for major Moroccan and international job boards.
* **Backend Architecture:** Leveraged **Supabase** for secure user data management and application tracking, with **Vercel Serverless** functions for scalable backend logic.
* **User Experience:** Built with **React** and **Vite** for a high-performance, minimalist UI that includes a centralized dashboard for tracking application status.

**Results:** A free-to-use platform that empowers students with data-driven insights and professional-grade application materials, significantly increasing their chances of landing a PFA or stage.`,
            fr: `**InternIQ** a été construit pour révolutionner le processus inefficace de recherche de stage manuel. Il fournit un pont automatisé et intelligent entre les étudiants et les recruteurs sur le marché marocain (Rekrute.ma, Emploi.ma, LinkedIn).

**Problème & Objectif:** La plupart des étudiants utilisent des candidatures génériques qui donnent de faibles taux de réponse. L'objectif était de créer un outil offrant une vitesse "10x" en automatisant les phases de recherche, d'analyse et de personnalisation de la recherche d'emploi.

**Solution & Mise en œuvre:**
* **Moteur IA :** Intégration de **Groq AI** pour un traitement du langage ultra-rapide afin de noter les CV par rapport aux descriptions de poste et générer des lettres de motivation personnalisées en quelques secondes.
* **Scraping intelligent :** Développement d'un mécanisme de recherche simultanée pour les principaux job boards marocains et internationaux.
* **Architecture backend :** Utilisation de **Supabase** pour une gestion sécurisée des données utilisateur et du suivi des candidatures, avec des fonctions serverless **Vercel** pour une logique backend évolutive.
* **Expérience utilisateur :** Conçu avec **React** et **Vite** pour une interface minimaliste et haute performance incluant un tableau de bord centralisé de suivi des candidatures.

**Résultats:** Une plateforme gratuite qui donne aux étudiants des informations pilotées par les données et des documents de candidature professionnels, augmentant significativement leurs chances d'obtenir un PFA ou un stage.`
        },
        techStack: ["React", "Vite", "Tailwind", "Supabase", "Groq AI", "Node.js"],
        liveUrl: "https://resume-cyan-pi.vercel.app/",
        githubUrl: "https://github.com/AYMANEFAKIHI/resume",
        isPrivate: false,
    },
    {
        id: 11,
        title: "TIPE CPGE",
        category: { en: "EdTech / Coaching Platform", fr: "EdTech / Plateforme de Coaching" },
        image: "/project11.png",
        summary: {
            en: "A French-language coaching platform helping CPGE (French preparatory classes) students succeed in their TIPE research project, with experimental simulations, oral prep, and scientific mentoring.",
            fr: "Une plateforme de coaching en français aidant les étudiants de CPGE à réussir leur TIPE, avec des simulations expérimentales, une préparation à l'oral et un accompagnement scientifique."
        },
        fullDescription: {
            en: `**TIPE CPGE** is a coaching platform built to support French preparatory-class (CPGE) students through their TIPE — a mandatory personal research project that plays a major role in admission to top engineering schools (Grandes Écoles).\n\n**Problem & Goal:** TIPE season is high-stakes and time-constrained: students need to design an experimental setup, produce simulations, and defend their subject orally, often without structured guidance. The goal was to package that guidance into a self-serve platform.\n\n**Solution & Implementation:** Built with **React** and **Vite** for a fast, minimal SPA experience. The platform offers experimental simulation walkthroughs (physics/engineering models rendered with Python-style scientific tooling), an oral-defense preparation track, a "Guide TIPE" resource library, and yearly-specific content (e.g. CNC exam session). Positioned as an independent side project run alongside my engineering studies.\n\n**Results:** Has supported 200+ students preparing their TIPE, with a reported 95% success rate and students admitted to 50+ Grandes Écoles.`,
            fr: `**TIPE CPGE** est une plateforme de coaching conçue pour accompagner les étudiants de classes préparatoires (CPGE) dans la réalisation de leur TIPE — un projet de recherche personnel obligatoire qui joue un rôle majeur dans l'admission aux Grandes Écoles.\n\n**Problème & Objectif:** La période du TIPE est exigeante et limitée dans le temps : les étudiants doivent concevoir un dispositif expérimental, produire des simulations et défendre leur sujet à l'oral, souvent sans accompagnement structuré. L'objectif était de regrouper cet accompagnement dans une plateforme en libre-service.\n\n**Solution & Mise en œuvre:** Développée avec **React** et **Vite** pour une expérience SPA rapide et minimaliste. La plateforme propose des simulations expérimentales guidées (modèles physiques/scientifiques), un parcours de préparation à l'oral, une bibliothèque de ressources "Guide TIPE" et du contenu spécifique par session (ex. CNC). Positionnée comme un projet indépendant mené en parallèle de mes études d'ingénieur.\n\n**Résultats:** A accompagné plus de 200 étudiants dans leur TIPE, avec un taux de réussite rapporté de 95% et des admissions dans plus de 50 Grandes Écoles.`
        },
        techStack: ["React", "Vite", "Tailwind CSS"],
        liveUrl: "https://tipecpge.vercel.app/",
        isPrivate: false,
    }
];
