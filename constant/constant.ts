import type { IconType } from "react-icons";
import {
  FaCode,
  FaServer,
  FaProjectDiagram,
  FaGitAlt,
  FaPhp,
  FaReact,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiMysql,SiC,SiCplusplus, } from "react-icons/si";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface NavLink {
  id: number;
  label: string;
  url: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

export interface ResumeItem {
  id: number;
  title: string;
  subtitle: string;
  description?: string;
  date?: string;
  image?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

export interface SkillItem {
  id: number;
  name: string;
  badge: string;
  icon: IconType;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export interface SocialLink {
  id: number;
  label: string;
  url: string;
  icon: IconType;
}

/* ------------------------------------------------------------------ */
/* Branding                                                            */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: "Subas Nepali",
  shortName: "Subas",
  domain: "subasnepali.com.np",
  location: "Damauli, Tanahun, Nepal",
  email: "nepalisubas18@gmail.com",
  phone: "+977 9817126133",
  github: "https://github.com/nepalisubasworks",
  avatar: "/images/subas.jpeg",
  cv: "/cv/Subas-Nepali-CV.pdf",
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks: NavLink[] = [
  { id: 1, label: "Home", url: "#home" },
  { id: 2, label: "Services", url: "#services" },
  { id: 3, label: "Resume", url: "#resume" },
  { id: 4, label: "Projects", url: "#projects" },
  { id: 5, label: "Skills", url: "#skills" },
  { id: 6, label: "Endorsements", url: "#endorsements" },
  { id: 7, label: "Contact", url: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroRoles: string[] = [
  "Full-Stack Web Development Intern",
  "BICTE Undergrad Student",
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development with Next.js",
    description:
      "Building responsive web applications using Next.js, React, TypeScript, and Tailwind CSS. Currently developing a futsal management system.",
    icon: FaCode,
  },
  {
    id: 2,
    title: "Database-Driven Projects",
    description:
      "Creating PHP and MySQL applications with login roles and record management, such as my Student Registration Record System.",
    icon: FaDatabase,
  },
  {
    id: 3,
    title: "System Analysis & Design",
    description:
      "Planning systems through requirements, database design, and role-based workflows as part of my BICTE coursework.",
    icon: FaProjectDiagram,
  },
  {
    id: 4,
    title: "Learning GraphQL & APIs",
    description:
      "Gained hands-on experience during my InPro Academy internship by migrating a project from REST endpoints to GraphQL.",
    icon: FaServer,
  },
];
/* ------------------------------------------------------------------ */
/* Resume                                                              */
/* ------------------------------------------------------------------ */

export const experience: ResumeItem[] = [
  {
    id: 1,
    title: "Full-Stack Web Development Intern",
    subtitle: "InPro Academy (3-Month Internship, Aug – Oct 2026)",
    description:
      "Built full-stack features and migrated the Secure Asset Tracker project from REST endpoints to GraphQL.",
  date: "Aug – Oct 2026",
  },
  {
    id: 2,
    title: "Academic Project Developer",
    subtitle: "System Analysis & Design Coursework (2026)",
    description:
      "Architected database-driven management systems with role-based access control.",
    date: "2026",
  },
];

export const education: ResumeItem[] = [
  {
    id: 1,
    title: "Bachelor of Information Communication Technology Education (BICTE)",
    subtitle: "Aadikavi Bhanubhakta Campus (Tribhuvan University)",
    date: "Ongoing (5th Semester, Expected Graduation 2028)",
  },
  {
    id: 2,
    title: "+2 in Management with Computer Science",
    subtitle: "Aadikavi Bhanubhakta Secondary School",
    date: "Completed (3.14 GPA)",
  },
  {
    id: 3,
    title: "Digital Marketing Bootcamp (Phase 1 & 2)",
    subtitle: "College Certification",
    date: "April 2026",
    image: "/images/dm1.jpeg",
  },
    {
    id: 4,
    title: "Sandbox Session 2083: Build & Deploy Modern Web Apps with Next.js",
    subtitle: "Aadikavi Bhanubhakta Campus (Participation Certificate)",
    date: "10–11 July 2026",
    image: "/images/sb1.jpg",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Personal Developer Portfolio",
    description:
      "Responsive portfolio featuring interactive particles, scroll animations, and modular Next.js architecture.",
    image: "/images/project-2.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: SITE.github,
    live: `https://${SITE.domain}`,
  },

  {
    id: 2,
    title: "Student Registration Record System",
    description:
      "Academic record management web application created for fourth-semester System Analysis and Design.",
    image: "/images/project-4.svg",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    github: "https://github.com/nepalisubasworks/bs-university-student-system",
    live: "#projects",
  },
  {
    id: 3,
    title: "Futsal Management System",
    description:
      "Work in progress: a Next.js web app for managing futsal court bookings, schedules, and players.",
    image: "/images/futsal.png",
    tags: ["Next.js", "TypeScript", "In Progress"],
    github: SITE.github,
    live: "#projects",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skills: SkillItem[] = [
  { id: 1, name: "Next.js", badge: "Core Focus", icon: SiNextdotjs },
  { id: 2, name: "TypeScript", badge: "Core Focus", icon: SiTypescript },
  { id: 3, name: "React", badge: "Core Focus", icon: FaReact },
  { id: 4, name: "Tailwind CSS", badge: "Proficient", icon: SiTailwindcss },
  { id: 5, name: "GraphQL", badge: "Learning & Applying", icon: SiGraphql },
  { id: 6, name: "PHP", badge: "Academic Projects", icon: FaPhp },
  { id: 7, name: "MySQL", badge: "Database Design", icon: SiMysql },
   { id: 8, name: "Git & pnpm", badge: "Daily Workflow", icon: FaGitAlt },
  { id: 9, name: "C", badge: "Academic Foundation", icon: SiC },
  { id: 10, name: "C++", badge: "Academic Foundation", icon: SiCplusplus },
  { id: 11, name: "Java", badge: "OOP & Coursework", icon: FaJava },
];

/* ------------------------------------------------------------------ */
/* Endorsements                                                        */
/* ------------------------------------------------------------------ */

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Internship Supervisor",
    role: "InPro Academy",
    initials: "IS",
    quote:
      "Picked up the GraphQL migration quickly and kept the Secure Asset Tracker moving with clean, well-typed code and steady communication throughout the internship.",
  },
  {
    id: 2,
    name: "Project Reviewer",
    role: "System Analysis & Design Course",
    initials: "PR",
    quote:
      "The Student Registration Record System showed a clear grasp of database modeling and structured analysis, and the documentation made it easy to evaluate.",
  },
  {
    id: 3,
    name: "Team Collaborator",
    role: "BICTE Group Project",
    initials: "TC",
    quote:
      "Reliable teammate who takes ownership of the web development tasks, shares progress openly and helps others get unblocked.",
  },
  {
    id: 4,
    name: "Faculty Advisor",
    role: "Aadikavi Bhanubhakta Campus",
    initials: "FA",
    quote:
      "Consistently applies classroom concepts to practical projects, with a strong focus on building systems that are organized, secure, and maintainable.",
  },
];

/* ------------------------------------------------------------------ */
/* Contact / Social                                                    */
/* ------------------------------------------------------------------ */

export const socialLinks: SocialLink[] = [
  { id: 1, label: "GitHub", url: "https://github.com/nepalisubasworks", icon: FaGithub },
  { id: 2, label: "LinkedIn", url: "https://www.linkedin.com/in/subas-nepali-494577321/", icon: FaLinkedinIn },
  { id: 3, label: "Facebook", url: "https://www.facebook.com/subas.nepali.5680", icon: FaFacebookF },
];