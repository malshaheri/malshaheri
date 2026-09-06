import type { Locale } from "./translations";

export const localizedContent = {
  en: {
    role: "Full-Stack Developer",

    featuredProject: {
      description:
        "A delivery-management platform built around real courier operations: order administration, driver workflows, commission handling and operational visibility.",
      highlights: [
        "Admin workflow for managing orders and drivers",
        "Driver mobile experience for delivery operations",
        "REST API and relational data model",
        "Per-driver commission configuration",
      ],
    },

    projects: [
      {
        name: "Automobile Picobello",
        description:
          "A live website built for a real automotive business in Speyer, presenting vehicle sales, trade-in, financing and contact information in a clear and responsive interface.",
      },
      {
        name: "JAM — Language Learning",
        description:
          "A DCI final team project developed with two other students. The application supports language learning through digital flashcards and collaborative software development.",
      },
      {
        name: "Portfolio 2026",
        description:
          "A complete redesign of my developer portfolio using Next.js, TypeScript, bilingual content, responsive design and modern SEO practices.",
      },
    ],
    skillTitles: ["Frontend", "Backend", "Data", "Tools"],

    experience: [
      {
        title: "Full-Stack Product Development",
        company: "Abbod Delivery",
        description:
          "Building a real-world delivery management platform with an admin dashboard, driver mobile app, REST API, PostgreSQL and Prisma database layer, and Docker-based deployment workflow.",
      },
      {
        title: "Delivery Driver",
        company: "REWE Lieferservice · Mannheim",
        description:
          "Working in last-mile delivery operations in Germany, with direct experience in route execution, customer handoff and day-to-day logistics workflows.",
      },
      {
        title: "Full-Stack Web Development",
        company: "Digital Career Institute · Germany",
        description:
          "Completed intensive training in frontend and backend web development, including JavaScript, React, Node.js, databases, Git and modern development workflows.",
      },
      {
        title: "Operations, HR & Business Roles",
        company: "Saudi Arabia",
        description:
          "Progressive experience across operations management, personnel coordination, government relations, sales development, administration and executive support.",
      },
    ],

    education: [
      {
        title: "Full-Stack Web Development",
        institution: "Digital Career Institute · Germany",
      },
      {
        title: "Bachelor of English Language",
        institution: "Sana'a University · Faculty of Arts",
      },
    ],

    languages: [
      { language: "Arabic", level: "Native" },
      { language: "English", level: "Professional" },
      { language: "German", level: "Intermediate" },
    ],
  },

  de: {
    role: "Full-Stack-Entwickler",

    featuredProject: {
      description:
        "Eine Plattform zur Steuerung eines realen Kurierbetriebs – von der Auftragsverwaltung und den Fahrerabläufen bis zur Provisionsverwaltung und operativen Übersicht.",
      highlights: [
        "Administrationsbereich zur Verwaltung von Aufträgen und Fahrern",
        "Mobile Fahrer-App für den täglichen Zustellprozess",
        "REST-API mit relationalem Datenmodell",
        "Individuell konfigurierbare Provisionen je Fahrer",
      ],
    },

    projects: [
      {
        name: "Automobile Picobello",
        description:
          "Eine live geschaltete Website für ein reales Autohaus in Speyer mit Informationen zu Fahrzeugverkauf, Inzahlungnahme, Finanzierung und Kontaktmöglichkeiten.",
      },
      {
        name: "JAM — Language Learning",
        description:
          "Ein DCI-Abschlussprojekt, das gemeinsam mit zwei weiteren Studierenden entwickelt wurde. Die Anwendung unterstützt das Sprachenlernen mit digitalen Karteikarten.",
      },
      {
        name: "Portfolio 2026",
        description:
          "Komplettes Redesign meines Entwickler-Portfolios mit Next.js, TypeScript, zweisprachigen Inhalten, responsivem Design und moderner Suchmaschinenoptimierung.",
      },
    ],
    skillTitles: ["Frontend", "Backend", "Daten", "Werkzeuge"],

    experience: [
      {
        title: "Full-Stack-Produktentwicklung",
        company: "Abbod Delivery",
        description:
          "Entwicklung einer praxisnahen Lieferplattform mit Admin-Dashboard, mobiler Fahrer-App, REST-API, PostgreSQL-/Prisma-Datenbank und Docker-basiertem Deployment.",
      },
      {
        title: "Auslieferungsfahrer",
        company: "REWE Lieferservice · Mannheim",
        description:
          "Tätigkeit in der letzten Meile mit direkter Erfahrung in Tourenabläufen, Kundenübergaben und den täglichen Prozessen einer modernen Lieferlogistik.",
      },
      {
        title: "Full-Stack-Webentwicklung",
        company: "Digital Career Institute · Deutschland",
        description:
          "Intensive Ausbildung in Frontend- und Backend-Webentwicklung mit JavaScript, React, Node.js, Datenbanken, Git und modernen Entwicklungsabläufen.",
      },
      {
        title: "Operations, Personalwesen & Geschäftsentwicklung",
        company: "Saudi-Arabien",
        description:
          "Langjährige Erfahrung in Operations Management, Personaladministration, Behördenangelegenheiten, Vertriebsentwicklung, Administration und Executive Support.",
      },
    ],

    education: [
      {
        title: "Full-Stack-Webentwicklung",
        institution: "Digital Career Institute · Deutschland",
      },
      {
        title: "Bachelorabschluss – Englische Sprache",
        institution: "Universität Sanaa · Faculty of Arts",
      },
    ],

    languages: [
      { language: "Arabisch", level: "Muttersprache" },
      { language: "Englisch", level: "Professionell" },
      { language: "Deutsch", level: "Mittelstufe" },
    ],
  },
} satisfies Record<Locale, object>;