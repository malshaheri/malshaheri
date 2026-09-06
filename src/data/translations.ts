export type Locale = "de" | "en";

export const locales: Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const translations = {
  en: {
    nav: {
      work: "Work",
      skills: "Skills",
      experience: "Experience",
      about: "About",
      contact: "Contact",
      talk: "Let's talk",
    },

    hero: {
      availability: "Based in Germany · Open to opportunities",
      greeting: "Hello, I'm Mohammed.",
      titleStart: "I build digital products that solve",
      titleHighlight: "real problems.",
      intro:
        "I build practical web and mobile applications that connect solid engineering with real business needs.",
      workButton: "View my work",
      cvButton: "View CV",
      location: "Ludwigshafen, Germany",
    },

    work: {
      eyebrow: "Selected work",
      title: "Projects built around learning and real operations.",
      description:
        "I prefer useful products over demo-only code. My current focus is software that improves everyday business workflows.",
      caseStudy: "Read case study",
      featured: "Featured project · 2026",
      active: "Active development",
    },

    skills: {
      eyebrow: "Capabilities",
      title: "A practical full-stack toolkit.",
      description:
        "The stack changes with the problem. These are the technologies I currently work with most.",
    },

    experience: {
      eyebrow: "Experience",
      title: "Software development backed by real-world operations experience.",
      description:
        "My background combines hands-on software development with years of experience understanding business operations, people and real-world workflows.",
    },

    about: {
      eyebrow: "About me",
      title: "Developer mindset. Business perspective.",
      paragraph1:
        "I'm a full-stack developer with a background in operations, HR and business management. That experience shapes how I build software: I focus on practical workflows, clear interfaces and solutions that solve real operational problems.",
      paragraph2:
        "Today, I work with modern JavaScript and TypeScript technologies across frontend, backend and mobile applications, with a particular interest in products that connect software with real-world services and logistics.",
      education: "Education",
      languages: "Languages",
    },

    contact: {
      eyebrow: "Contact",
      title: "Have a project or opportunity in mind?",
      description:
        "I'm always happy to talk about practical software, full-stack roles and interesting collaboration.",
    },

    footer: {
      builtWith: "Built with Next.js & TypeScript.",
      backToTop: "Back to top ↑",
    },
  },

  de: {
    nav: {
      work: "Projekte",
      skills: "Kenntnisse",
      experience: "Erfahrung",
      about: "Über mich",
      contact: "Kontakt",
      talk: "Kontakt aufnehmen",
    },

    hero: {
      availability: "Standort Deutschland · Offen für neue Möglichkeiten",
      greeting: "Hallo, ich bin Mohammed.",
      titleStart: "Ich entwickle digitale Produkte, die",
      titleHighlight: "reale Probleme lösen.",
      intro:
        "Ich entwickle praxisnahe Web- und Mobile-Anwendungen, die solide Technik mit echten Geschäftsanforderungen verbinden.",
      workButton: "Projekte ansehen",
      cvButton: "Lebenslauf ansehen",
      location: "Ludwigshafen, Deutschland",
    },

    work: {
      eyebrow: "Ausgewählte Projekte",
      title: "Software für reale Abläufe – nicht nur für Demos.",
      description:
        "Mein Schwerpunkt liegt auf praxisnahen Produkten, die reale Geschäftsprozesse vereinfachen und verbessern.",
      caseStudy: "Fallstudie ansehen",
      featured: "Hauptprojekt · 2026",
      active: "In aktiver Entwicklung",
    },

    skills: {
      eyebrow: "Kenntnisse",
      title: "Ein praxisorientierter Full-Stack-Werkzeugkasten.",
      description:
        "Die Technologie richtet sich nach der Aufgabe. Mit diesen Werkzeugen arbeite ich derzeit am häufigsten.",
    },

    experience: {
      eyebrow: "Berufserfahrung",
      title: "Softwareentwicklung mit Erfahrung aus realen Geschäftsprozessen.",
      description:
        "Meine Erfahrung verbindet praktische Softwareentwicklung mit langjährigem Verständnis für Geschäftsabläufe, Menschen und operative Prozesse.",
    },

    about: {
      eyebrow: "Über mich",
      title: "Entwickler-Denken. Geschäftliche Perspektive.",
      paragraph1:
        "Ich bin Full-Stack-Entwickler mit beruflichem Hintergrund in Operations, Personalwesen und Unternehmensorganisation. Diese Erfahrung prägt meine Art, Software zu entwickeln: praxisnahe Abläufe, klare Benutzeroberflächen und Lösungen für reale betriebliche Herausforderungen.",
      paragraph2:
        "Heute arbeite ich mit modernen JavaScript- und TypeScript-Technologien im Frontend, Backend und bei mobilen Anwendungen. Besonders interessieren mich Produkte, die Software mit realen Dienstleistungen, Logistik und Geschäftsprozessen verbinden.",
      education: "Ausbildung",
      languages: "Sprachen",
    },

    contact: {
      eyebrow: "Kontakt",
      title: "Sie möchten ein Projekt besprechen oder suchen Verstärkung?",
      description:
        "Ich freue mich über Gespräche zu praxisnaher Softwareentwicklung, Full-Stack-Positionen und interessanten Projekten.",
    },

    footer: {
      builtWith: "Erstellt mit Next.js & TypeScript.",
      backToTop: "Nach oben ↑",
    },
  },
} as const;