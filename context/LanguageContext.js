import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext({ lang: 'en', toggleLang: () => {}, t: (k) => k })

export const translations = {
  en: {
    // Navbar
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact',
    nav_resume: 'Resume',

    // Hero
    hero_title: "Hi, I'm",
    hero_subtitle: 'Full Stack Developer & Designer',
    hero_available: 'Available for new opportunities',

    // About
    about_title: 'About Me',
    about_p1: "I'm a Full-Stack Developer specializing in building scalable web ecosystems. My focus is on the intersection of performance and design — creating applications that not only look modern but handle complex data efficiently.",
    about_p2: "Currently pursuing my Engineering degree at EMSI Rabat, I have shipped platforms serving 5,000+ students and faculty across the EMSI network — from a central portal aggregating real-time academic data to a full MERN-stack social networking platform.",
    about_p3: "My stack of choice is the JavaScript ecosystem (Next.js, Node.js) combined with cloud architecture on AWS. When I'm not coding, I'm exploring DevOps tooling or working on AI-integrated applications.",
    about_available: 'Currently available for freelance projects & internship opportunities',
    about_download: 'Download Resume',
    about_contact: 'Contact Me',

    // Education
    edu_title: 'My Education',

    // Experience
    exp_title: 'Experience',
    exp_subtitle: 'Professional work and independent projects',

    // GitHub Activity
    github_title: 'GitHub Activity',
    github_subtitle: 'Real contribution history, pulled live from GitHub',
    github_loading: 'Loading activity...',
    github_error: "Couldn't load activity right now — check the profile directly.",
    github_view_profile: 'View GitHub profile',
    github_contributions_in_year: 'contributions in the last year',
    github_less: 'Less',
    github_more: 'More',

    // Projects
    projects_subtitle: 'Real products built for real users',
    projects_case: 'Case Study →',
    projects_live: 'Live',
    projects_live_demo: 'Live Demo',
    projects_private: 'Private / production codebase',

    // Project Modal
    modal_close: 'Close',
    modal_tech_used: 'Technologies Used',
    modal_visit_site: 'Visit Live Site',
    modal_source_code: 'Source Code',
    modal_request_access: 'Request Access',
    modal_access_subject: 'Access Request',

    // Skills
    skills_title: 'Skills & Technologies',
    skills_subtitle: 'Tools and technologies I work with daily',
    skills_certs: 'Certifications',
    skills_show_more: '▼ Show all {n} more certifications',
    skills_show_less: '▲ Show featured only',

    // Testimonials
    testimonials_title: 'What People Say',
    testimonials_subtitle: 'Feedback from collaborators and mentors',
    testimonials_linkedin: 'View LinkedIn profile for more recommendations',
    t1_text: "Aymane consistently delivers beyond expectations. His EMSI Central Portal project demonstrated exceptional technical maturity — architecting a scalable Next.js platform that now serves thousands of students daily. A rare blend of engineering rigor and design sensibility.",
    t1_role: 'Academic Supervisor, EMSI Rabat',
    t2_text: "Working with Aymane on the EMSI Connect platform was a seamless experience. He implemented real-time messaging with Socket.io and delivered the feature ahead of schedule with clean, well-documented code. His communication and ownership of the project were outstanding.",
    t2_role: 'Product Lead, EMSI Connect',
    t3_text: "Aymane built the ExamBuilder tool we use in our study group. The AI-powered exam generation and PDF export work flawlessly. He has a talent for turning complex requirements into intuitive, polished interfaces — and he ships fast.",
    t3_role: 'Fellow Engineering Student, EMSI',

    // Contact
    contact_title: 'Get In Touch',
    contact_subtitle: 'Have a project or a question? I respond within 24 hours.',
    contact_available: 'Available for work',
    contact_cta_title: "Let's build something",
    contact_cta_body: "I'm currently open to freelance projects, internships, and collaborations. Drop me a message and let's talk.",
    contact_name: 'Your Name',
    contact_email: 'Email Address',
    contact_subject: 'Subject (optional)',
    contact_message: 'Message',
    contact_send: 'Send Message',
    contact_sending: 'Sending...',
    contact_placeholder_name: 'John Doe',
    contact_placeholder_email: 'you@example.com',
    contact_placeholder_subject: 'Project inquiry, collaboration, etc.',
    contact_placeholder_message: 'Tell me about your project or idea...',
    contact_err_name: 'Name is required.',
    contact_err_email_required: 'Email is required.',
    contact_err_email_invalid: 'Please enter a valid email address.',
    contact_err_message: 'Message is required.',

    // Success Modal
    success_title: 'Message Sent!',
    success_body: 'Thank you for reaching out. I will review your message and respond within 24 hours.',
    success_close: 'Close',

    // Location greeting
    location_greeting: 'Hello from Morocco!',
    location_connecting: "I see you're connecting from",
    location_cta: "Let's build something great together.",

    // Footer
    footer_tagline: 'Full Stack Developer · Rabat, Morocco',
    footer_desc: 'Building scalable web ecosystems at the intersection of performance and design. Currently open to freelance projects and internship opportunities.',
    footer_available: 'Available for work',
    footer_nav: 'Navigation',
    footer_services: 'Services',
    footer_copy: '© {year} Aymane Fakihi. All rights reserved.',
    footer_home: 'Home',

    // Services
    svc1: 'Full Stack Web Development',
    svc2: 'Next.js / React Applications',
    svc3: 'REST API & Backend Design',
    svc4: 'UI/UX Design (Figma)',
    svc5: 'Cloud Deployment (AWS/Vercel)',
  },

  fr: {
    // Navbar
    nav_about: 'À propos',
    nav_experience: 'Expérience',
    nav_projects: 'Projets',
    nav_skills: 'Compétences',
    nav_testimonials: 'Témoignages',
    nav_contact: 'Contact',
    nav_resume: 'CV',

    // Hero
    hero_title: 'Bonjour, je suis',
    hero_subtitle: 'Développeur Full Stack & Designer',
    hero_available: 'Disponible pour de nouvelles opportunités',

    // About
    about_title: 'À propos de moi',
    about_p1: "Je suis un développeur Full Stack spécialisé dans la création d'écosystèmes web évolutifs. Mon objectif est d'allier performance et design — concevoir des applications modernes capables de gérer des données complexes de manière efficace.",
    about_p2: "Actuellement en formation d'ingénieur à l'EMSI Rabat, j'ai livré des plateformes servant plus de 5 000 étudiants et membres du corps enseignant — d'un portail central agrégeant les données académiques en temps réel à une plateforme sociale complète en stack MERN.",
    about_p3: "Mon stack de prédilection est l'écosystème JavaScript (Next.js, Node.js) combiné à une architecture cloud sur AWS. En dehors du code, j'explore les outils DevOps et les applications intégrant l'intelligence artificielle.",
    about_available: 'Actuellement disponible pour des missions freelance et des stages',
    about_download: 'Télécharger le CV',
    about_contact: 'Me contacter',

    // Education
    edu_title: 'Mon Parcours',

    // Experience
    exp_title: 'Expérience',
    exp_subtitle: 'Expérience professionnelle et projets indépendants',

    // GitHub Activity
    github_title: 'Activité GitHub',
    github_subtitle: 'Historique de contributions réel, récupéré en direct depuis GitHub',
    github_loading: "Chargement de l'activité...",
    github_error: "Impossible de charger l'activité pour le moment — consultez directement le profil.",
    github_view_profile: 'Voir le profil GitHub',
    github_contributions_in_year: 'contributions au cours de la dernière année',
    github_less: 'Moins',
    github_more: 'Plus',

    // Projects
    projects_subtitle: 'Des produits réels pour de vrais utilisateurs',
    projects_case: 'Étude de cas →',
    projects_live: 'Voir',
    projects_live_demo: 'Démo en direct',
    projects_private: 'Code source privé / production',

    // Project Modal
    modal_close: 'Fermer',
    modal_tech_used: 'Technologies utilisées',
    modal_visit_site: 'Visiter le site',
    modal_source_code: 'Code source',
    modal_request_access: "Demander l'accès",
    modal_access_subject: "Demande d'accès",

    // Skills
    skills_title: 'Compétences & Technologies',
    skills_subtitle: "Outils et technologies que j'utilise au quotidien",
    skills_certs: 'Certifications',
    skills_show_more: '▼ Afficher les {n} autres certifications',
    skills_show_less: '▲ Afficher uniquement les principales',

    // Testimonials
    testimonials_title: "Ce qu'on dit de moi",
    testimonials_subtitle: 'Retours de collaborateurs et de mentors',
    testimonials_linkedin: 'Voir le profil LinkedIn pour plus de recommandations',
    t1_text: "Aymane dépasse constamment les attentes. Son projet EMSI Central Portal a démontré une maturité technique exceptionnelle — en architecturant une plateforme Next.js évolutive qui sert désormais des milliers d'étudiants chaque jour. Un rare équilibre entre rigueur d'ingénierie et sens du design.",
    t1_role: 'Superviseur académique, EMSI Rabat',
    t2_text: "Travailler avec Aymane sur la plateforme EMSI Connect a été une expérience fluide. Il a mis en place la messagerie en temps réel avec Socket.io et livré la fonctionnalité avant le délai, avec un code propre et bien documenté. Sa communication et son sens des responsabilités étaient remarquables.",
    t2_role: 'Responsable Produit, EMSI Connect',
    t3_text: "Aymane a développé l'outil ExamBuilder que nous utilisons dans notre groupe de travail. La génération d'examens par IA et l'export PDF fonctionnent parfaitement. Il a un talent pour transformer des besoins complexes en interfaces intuitives et soignées — et il livre vite.",
    t3_role: 'Étudiant ingénieur, EMSI',

    // Contact
    contact_title: 'Me Contacter',
    contact_subtitle: 'Un projet ou une question ? Je réponds sous 24 heures.',
    contact_available: 'Disponible',
    contact_cta_title: 'Construisons quelque chose',
    contact_cta_body: 'Je suis actuellement disponible pour des projets freelance, des stages et des collaborations. Envoyez-moi un message et parlons-en.',
    contact_name: 'Votre nom',
    contact_email: 'Adresse e-mail',
    contact_subject: 'Objet (facultatif)',
    contact_message: 'Message',
    contact_send: 'Envoyer le message',
    contact_sending: 'Envoi en cours...',
    contact_placeholder_name: 'Jean Dupont',
    contact_placeholder_email: 'vous@exemple.com',
    contact_placeholder_subject: 'Demande de projet, collaboration, etc.',
    contact_placeholder_message: 'Parlez-moi de votre projet ou de votre idée...',
    contact_err_name: 'Le nom est requis.',
    contact_err_email_required: "L'adresse e-mail est requise.",
    contact_err_email_invalid: 'Veuillez saisir une adresse e-mail valide.',
    contact_err_message: 'Le message est requis.',

    // Success Modal
    success_title: 'Message envoyé !',
    success_body: "Merci de m'avoir contacté. Je lirai votre message et vous répondrai dans les 24 heures.",
    success_close: 'Fermer',

    // Location greeting
    location_greeting: 'Bonjour du Maroc !',
    location_connecting: 'Je vois que vous vous connectez depuis',
    location_cta: 'Construisons quelque chose de grand ensemble.',

    // Footer
    footer_tagline: 'Développeur Full Stack · Rabat, Maroc',
    footer_desc: "Création d'écosystèmes web évolutifs à l'intersection de la performance et du design. Disponible pour des projets freelance et des opportunités de stage.",
    footer_available: 'Disponible',
    footer_nav: 'Navigation',
    footer_services: 'Services',
    footer_copy: '© {year} Aymane Fakihi. Tous droits réservés.',
    footer_home: 'Accueil',

    // Services
    svc1: 'Développement Web Full Stack',
    svc2: 'Applications Next.js / React',
    svc3: 'API REST & Architecture Backend',
    svc4: 'Design UI/UX (Figma)',
    svc5: 'Déploiement Cloud (AWS/Vercel)',
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'en'
    setLang(saved)
  }, [])

  const toggleLang = () => {
    const next = lang === 'en' ? 'fr' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  const t = (key, vars = {}) => {
    let str = translations[lang][key] ?? translations['en'][key] ?? key
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(`{${k}}`, v)
    })
    return str
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
