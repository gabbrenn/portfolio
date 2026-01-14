// ========================================
// PROJECT CONFIGURATION
// ========================================
// Easy to update! Just modify this file to change your projects.
// Replace with your own GitHub projects or any other projects.

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Online Bus Ticketing System and Agency management",
    description: "Spring Boot backend for the Inzira multi‑role bus ticketing platform. Provides authentication, booking, schedules, agency management, payments, analytics, file uploads (logos, tickets), and admin reporting. Supports PostgreSQL, MySQL, or local H2 (default) with zero code changes. ",
    technologies: ["Spring Boot", "Java", "PostgreSQL","Docker", "Stripe API", "sendgrid API"],
    githubUrl: "https://github.com/gabbrenn/inzira_ticket_system",
    featured: true,
  },
  {
    id: "2",
    title: "Garage Service Platform",
    description: "A comprehensive mobile application platform connecting customers with nearby garage services, built with Flutter frontend and Spring Boot backend with features like User Registration & Authentication, Location-Based Garage Discovery, Service Browsing, Service Requests, Request Tracking, Real-time Updates",
    technologies: ["Flutter", "Spring Boot", "Java", "PostgreSQL", "Docker", "Google Maps API", "Firebase", "SendGrid API"],
    githubUrl: "https://github.com/gabbrenn/garage-service-platform",
    featured: true,
  },
  {
    id: "3",
    title: "Rent House Hub",
    description: "Rent House Hub, my final project for the ALX specialization. This project is a comprehensive solution designed to streamline the process of renting houses, showcasing my skills in full-stack development. It features a user-friendly interface built with Bootstrap, a robust backend powered by Django, and a well-structured SqLite3 database to manage property listings, user accounts, and email notifications.",
    technologies: ["Django", "Bootstrap", "SqLite3", "Python"],
    githubUrl: "https://github.com/gabbrenn/rent_house_hub",
    featured: true,
  },
  {
    id: "4",
    title: "Soutien Scolaire Avec Just",
    description: "E-learning platform designed to connect students with their teachers, facilitating online learning and resource sharing. Built with PHP and MySQL, it offers features like user authentication, course management, and interactive content delivery.",
    technologies: ["PHP","JavaScript","MySQL", "HTML", "Bootstrap"],
    liveUrl: "https://www.soutienscolaireavecjust.rw",
  },
];

// ========================================
// PERSONAL INFO CONFIGURATION
// ========================================
// Update this with your own information

export const personalInfo = {
  name: "Vladimir Brenn Gabiro",
  title: "Backend Developer",
  email: "gabvladimirbrenn@gmail.com",
  phone: "+250 786 077 754",
  location: "KK431 St Kigali, Kicukiro, Rwanda",
  bio: "Backend Developer with expertise in building scalable RESTful APIs, optimizing server-side logic, and designing efficient database architectures. Experienced in Python, Django, Flask, Java, and PHP. Also skilled in mobile app development using React Native and Flutter. Passionate about writing clean, performant, and maintainable code.",
  resumeUrl: "/src/assets/Vladimir_Brenn_Gabiro_Resume.pdf",
  social: {
    github: "https://github.com/gabbrenn",
    linkedin: "www.linkedin.com/in/gabiro-vladimir-brenn",
  },
};

// ========================================
// SKILLS CONFIGURATION
// ========================================

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "PHP", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    skills: ["Django", "Flask", "Bootstrap"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "Database Design"],
  },
  {
    category: "Mobile Development",
    skills: ["React Native", "Flutter"],
  },
  {    category: "Version Control & Deployment",
    skills: ["Git", "GitHub", "Docker"],
  },
  {
    category: "Soft Skills",
    skills: ["Teamwork", "Problem-Solving", "Communication"],
  },
];

// ========================================
// EDUCATION CONFIGURATION
// ========================================

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export const education: Education[] = [
  {
    id: "1",
    institution: "IPRC Kigali",
    degree: "Advanced Diploma in Information Technology",
    period: "2023 - 2025",
  },
  {
    id: "2",
    institution: "ALX Software Engineering Programme",
    degree: "Specialization in Back-End Development",
    period: "2023 - 2024",
  },
  {
    id: "3",
    institution: "ACODES TVET School",
    degree: "Diploma in Software Development",
    period: "2019 - 2022",
  },
];

// ========================================
// EXPERIENCE CONFIGURATION
// ========================================

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Engineering Intern",
    company: "IDA Technology",
    period: "Jun 2021 - Jul 2021 / Sep 2024 - Oct 2024 / Jul 2025 - Sep 2025",
    responsibilities: [
      "Developed responsive web applications and backend APIs for internal systems.",
      "Collaborated with team members on solving technical challenges and improving system performance.",
    ],
  },
  {
    id: "2",
    role: "Back-End Developer (Specialization)",
    company: "ALX Africa",
    period: "Jun 2024 - Oct 2024",
    responsibilities: [
      "Developed and optimized back-end components for various web applications as part of ALX's hands-on training.",
      "Built RESTful APIs and ensured seamless database integration for smooth data flow.",
      "Focused on improving server-side logic, reducing system response times by 20%.",
    ],
  },
  {
    id: "3",
    role: "IT Support",
    company: "Universal Quality Investment Ltd (UNQI)",
    period: "Oct 2022 - Jan 2023",
    responsibilities: [
      "Provided technical assistance to users, resolving hardware, software, and network issues.",
      "Installed, configured, and maintained computer systems and applications.",
      "Managed user accounts, permissions, and security settings.",
    ],
  },
];

// ========================================
// CERTIFICATES CONFIGURATION
// ========================================
// Certificate images are imported from src/assets/certificates/

import javaCertificate from "@/assets/certificates/java-certificate.png";
import alxCertificate from "@/assets/certificates/alx-software-engineering.png";
import javaScriptCertificate from "@/assets/certificates/Javascript-certificate.jpg";
export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  imageUrl: string;
  verifyUrl?: string;
  date?: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    name: "Software Engineering (Specialization in Back-End Development)",
    issuer: "ALX Africa (Holberton Inc)",
    imageUrl: alxCertificate,
    verifyUrl: "https://intranet.alxswe.com/certificates/nBP2X9Eze5",
    date: "October 2024",
  },
  {
    id: "2",
    name: "IT Specialist - Java Programming Certificate",
    issuer: "Certiport / Pearson VUE",
    imageUrl: javaCertificate,
    verifyUrl: "https://verify.certiport.com",
    date: "January 2025",
  },
  {
    id: "3",
    name: "Legacy JavaScript Algorithms and Data Structures V7",
    issuer: "freeCodeCamp",
    imageUrl: javaScriptCertificate,
    verifyUrl: "https://freecodecamp.org/certification/fcc6ae1471a-b0ff-457c-8607-c836769a3a17/javascript-algorithms-and-data-structures",
    date: "October 2022",
  }
];

// ========================================
// LANGUAGES CONFIGURATION
// ========================================

export const languages = [
  { name: "Kinyarwanda", level: "Fluent" },
  { name: "English", level: "Fluent" },
];
