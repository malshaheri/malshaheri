export const siteConfig = {
  name: "Mohammed Alshaheri",
  shortName: "MA",
  role: "Full-Stack Developer",
  location: "Ludwigshafen am Rhein, Germany",
  email: "malshaheri@gmail.com",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://malshaheri.de",
  github: "https://github.com/malshaheri",
  linkedin: "https://www.linkedin.com/in/alshaheri/",
  resumeDe: "/cv/Mohammed-Alshaheri-Lebenslauf-DE.pdf",
  resumeEn: "/cv/Mohammed-Alshaheri-CV-EN.pdf",
  intro:
    "I build practical web and mobile applications that connect solid engineering with real business needs.",
  summary:
    "I'm a full-stack developer with a background in operations, HR and business management. That experience shapes how I build software: I focus on practical workflows, clear interfaces and solutions that solve real operational problems.",
};

export const featuredProject = {
  slug: "abbod-delivery",
  name: "Abbod Delivery",
  eyebrow: "Featured project · 2026",
  description:
    "A delivery-management platform built around real courier operations: order administration, driver workflows, commission handling and operational visibility.",
  role: "Full-stack product development",
  status: "Active development",
  github: "https://github.com/malshaheri/abbod-delivery",
  href: "/projects/abbod-delivery",
  stack: [
    "React",
    "React Native",
    "Expo",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Docker",
  ],
  highlights: [
    "Admin workflow for managing orders and drivers",
    "Driver mobile experience for delivery operations",
    "REST API and relational data model",
    "Per-driver commission configuration",
  ],
};

export const projects = [
  {
    name: "Automobile Picobello",
    description:
      "A live website built for a real automotive business in Speyer, presenting vehicle sales, trade-in, financing and contact information in a clear and responsive interface.",
    href: "https://automobile-picobello.de/",
    stack: ["Live Website", "Client Project", "Responsive Web"],
    year: "2024",
    badge: "LIVE",
  },
  {
    name: "JAM — Language Learning",
    description:
      "A DCI final team project developed with two other students to support language learning through digital flashcards and collaborative software development.",
    href: "https://github.com/JoBeck1/Final-Project-JAM",
    stack: ["Team Project", "Language Learning", "Flashcards"],
    year: "2023",
    badge: "TEAM PROJECT",
  },
  {
    name: "Portfolio 2026",
    description:
      "A complete redesign of my developer portfolio using Next.js, TypeScript, bilingual content, responsive design and modern SEO practices.",
    href: "https://github.com/malshaheri/malshaheri",
    stack: ["Next.js", "TypeScript", "React", "i18n", "SEO"],
    year: "2026",
    badge: "CURRENT",
  },
];
export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "REST APIs", "Authentication", "API design"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Relational modeling"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Expo", "PowerShell"],
  },
];

export const experience = [
  {
    period: "2026 — Present",
    title: "Full-Stack Product Development",
    company: "Abbod Delivery",
    description:
      "Building a real-world delivery management platform with an admin dashboard, driver mobile app, REST API, PostgreSQL and Prisma database layer, and Docker-based deployment workflow.",
  },
  {
    period: "Nov 2025 — Present",
    title: "Delivery Driver",
    company: "REWE Lieferservice · Mannheim",
    description:
      "Working in last-mile delivery operations in Germany, with direct experience of route execution, customer handoff and day-to-day logistics workflows.",
  },
  {
    period: "2021 — Jan 2023",
    title: "Full-Stack Web Development",
    company: "Digital Career Institute · Germany",
    description:
      "Completed intensive training in frontend and backend web development, including JavaScript, React, Node.js, databases, Git and modern development workflows.",
  },
  {
    period: "2002 — 2018",
    title: "Operations, HR & Business Roles",
    company: "Saudi Arabia",
    description:
      "Progressive experience across operations management, personnel coordination, government relations, sales development, administration and executive support.",
  },
];

export const education = [
  {
    title: "Full-Stack Web Development",
    institution: "Digital Career Institute",
    period: "2021 — Jan 2023",
    detail: "Full-time practical training in modern web development.",
  },
  {
    title: "Bachelor of English Language",
    institution: "Sana'a University · Faculty of Arts",
    period: "2000 — 2004",
    detail: "English Language and Literature.",
  },
];

export const languages = [
  { language: "Arabic", level: "Native" },
  { language: "English", level: "Professional" },
  { language: "German", level: "Intermediate" },
];
