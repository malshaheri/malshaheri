import Link from "next/link";
import {
  ArrowUpRight,
  CodeIcon,
  DatabaseIcon,
  GithubIcon,
  LayersIcon,
  TerminalIcon,
} from "@/components/icons";
import { featuredProject } from "@/data/portfolio";
import type { Locale } from "@/data/translations";

const content = {
  en: {
    back: "← Back to selected work",
    eyebrow: "Case study · 2026",
    lead: "A practical delivery platform designed around the workflows of a real courier business.",
    active: "Active development",
    roleLabel: "Role",
    role: "Full-stack product development",
    focusLabel: "Focus",
    focus: "Delivery operations",
    platformLabel: "Platform",
    platform: "Web + Mobile + API",
    repo: "View repository",

    challengeEyebrow: "The challenge",
    challengeTitle: "Turn a WhatsApp-driven delivery workflow into a manageable system.",
    challenge1:
      "Abbod Delivery operates around real delivery requests, drivers and commissions. The challenge is not simply to display data; the software has to make an everyday operational workflow clearer and easier to manage.",
    challenge2:
      "The project therefore spans multiple surfaces: an administrative view for operations, a driver-focused mobile experience, a backend API and a relational data layer.",

    architectureEyebrow: "Architecture",
    architectureTitle: "One workflow, four connected layers.",

    architecture: [
      {
        title: "Admin experience",
        text: "A browser-based operations interface for managing orders, drivers and day-to-day delivery activity.",
      },
      {
        title: "Driver application",
        text: "A React Native / Expo mobile workflow that gives drivers the information and actions they need on the road.",
      },
      {
        title: "Backend API",
        text: "A NestJS API that centralizes business rules, order state transitions and operational data.",
      },
      {
        title: "Data & deployment",
        text: "PostgreSQL and Prisma for relational data, with Docker-based tooling for repeatable environments and deployment.",
      },
    ],

    decisionsEyebrow: "Product decisions",
    decisionsTitle: "Business rules belong in the product, not in a spreadsheet.",

    decisions: [
      {
        title: "Driver-specific commissions",
        text: "The manager can configure commission values per driver rather than forcing one global rate.",
      },
      {
        title: "Clear order lifecycle",
        text: "Orders move through explicit operational states so the admin and driver experiences stay aligned.",
      },
      {
        title: "Separation of concerns",
        text: "Admin, driver and API responsibilities are separated so each part can evolve independently.",
      },
    ],

    outcomeEyebrow: "What this project demonstrates",
    outcomeTitle: "From idea to a multi-application product.",
    outcome:
      "Abbod Delivery is the project that best represents how I like to work: understand the real workflow first, model it clearly, then build the interfaces and systems around it. The project continues to evolve as features are tested against practical delivery needs.",
    discuss: "Discuss a project",
    otherWork: "See other work",
  },

  de: {
    back: "← Zurück zu den ausgewählten Projekten",
    eyebrow: "Fallstudie · 2026",
    lead: "Eine praxisnahe Lieferplattform, die auf den Abläufen eines realen Kurierunternehmens basiert.",
    active: "In aktiver Entwicklung",
    roleLabel: "Rolle",
    role: "Full-Stack-Produktentwicklung",
    focusLabel: "Schwerpunkt",
    focus: "Liefer- und Betriebsabläufe",
    platformLabel: "Plattform",
    platform: "Web + Mobile + API",
    repo: "Repository ansehen",

    challengeEyebrow: "Die Herausforderung",
    challengeTitle: "Einen WhatsApp-basierten Lieferprozess in ein strukturiertes System überführen.",
    challenge1:
      "Abbod Delivery arbeitet mit realen Lieferaufträgen, Fahrern und unterschiedlichen Provisionen. Die Aufgabe besteht nicht nur darin, Daten darzustellen, sondern einen täglichen operativen Ablauf übersichtlicher und einfacher steuerbar zu machen.",
    challenge2:
      "Das Projekt umfasst deshalb mehrere miteinander verbundene Bereiche: eine Administrationsoberfläche, eine mobile Fahrer-App, eine Backend-API und eine relationale Datenbank.",

    architectureEyebrow: "Architektur",
    architectureTitle: "Ein Geschäftsprozess, vier miteinander verbundene Ebenen.",

    architecture: [
      {
        title: "Admin-Oberfläche",
        text: "Eine webbasierte Oberfläche zur Verwaltung von Aufträgen, Fahrern und den täglichen Lieferprozessen.",
      },
      {
        title: "Fahrer-App",
        text: "Eine mobile Anwendung mit React Native und Expo, die Fahrern die relevanten Informationen und Aktionen für ihre Touren bereitstellt.",
      },
      {
        title: "Backend-API",
        text: "Eine NestJS-API zur zentralen Verwaltung von Geschäftsregeln, Auftragsstatus und operativen Daten.",
      },
      {
        title: "Daten & Deployment",
        text: "PostgreSQL und Prisma für relationale Daten sowie Docker für reproduzierbare Entwicklungs- und Deployment-Umgebungen.",
      },
    ],

    decisionsEyebrow: "Produktentscheidungen",
    decisionsTitle: "Geschäftsregeln gehören in das Produkt – nicht in eine Tabellenkalkulation.",

    decisions: [
      {
        title: "Individuelle Fahrerprovisionen",
        text: "Die Provision kann für jeden Fahrer separat festgelegt werden, anstatt einen einzigen globalen Wert zu verwenden.",
      },
      {
        title: "Klare Auftragszustände",
        text: "Aufträge durchlaufen definierte Status, damit Admin-Oberfläche und Fahrer-App jederzeit denselben Prozess abbilden.",
      },
      {
        title: "Saubere Trennung der Bereiche",
        text: "Admin, Fahrer-App und API haben klar getrennte Verantwortlichkeiten und können dadurch unabhängig weiterentwickelt werden.",
      },
    ],

    outcomeEyebrow: "Was dieses Projekt zeigt",
    outcomeTitle: "Von einer Idee zu einem Produkt aus mehreren Anwendungen.",
    outcome:
      "Abbod Delivery zeigt besonders gut, wie ich arbeite: zuerst den realen Geschäftsprozess verstehen, ihn strukturiert modellieren und anschließend die passenden Oberflächen und Systeme entwickeln. Das Projekt wird laufend anhand praktischer Anforderungen weiterentwickelt.",
    discuss: "Projekt besprechen",
    otherWork: "Weitere Projekte",
  },
} as const;

const architectureIcons = [
  LayersIcon,
  CodeIcon,
  TerminalIcon,
  DatabaseIcon,
];

export function LocalizedCaseStudy({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <main id="main-content" className="caseStudy">
      <section className="caseHero">
        <div className="container narrowContainer">
          <Link className="backLink" href={`/${locale}#work`}>
            {t.back}
          </Link>

          <p className="eyebrow">{t.eyebrow}</p>

          <div className="caseTitleRow">
            <div>
              <h1>Abbod Delivery</h1>
              <p className="caseLead">{t.lead}</p>
            </div>

            <span className="statusBadge">
              <span /> {t.active}
            </span>
          </div>

          <div className="caseMeta">
            <div>
              <small>{t.roleLabel}</small>
              <strong>{t.role}</strong>
            </div>

            <div>
              <small>{t.focusLabel}</small>
              <strong>{t.focus}</strong>
            </div>

            <div>
              <small>{t.platformLabel}</small>
              <strong>{t.platform}</strong>
            </div>
          </div>

          <div className="tagList caseTags">
            {featuredProject.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <a
            className="button secondaryButton caseGithub"
            href={featuredProject.github}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon /> {t.repo} <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="section caseBodySection">
        <div className="container narrowContainer caseTwoColumn">
          <div>
            <p className="eyebrow">{t.challengeEyebrow}</p>
            <h2>{t.challengeTitle}</h2>
          </div>

          <div className="caseProse">
            <p>{t.challenge1}</p>
            <p>{t.challenge2}</p>
          </div>
        </div>
      </section>

      <section className="section subtleSection">
        <div className="container narrowContainer">
          <div className="caseSectionHeading">
            <p className="eyebrow">{t.architectureEyebrow}</p>
            <h2>{t.architectureTitle}</h2>
          </div>

          <div className="architectureGrid">
            {t.architecture.map((item, index) => {
              const Icon = architectureIcons[index];

              return (
                <article className="architectureCard" key={item.title}>
                  <div className="skillIcon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrowContainer caseTwoColumn">
          <div>
            <p className="eyebrow">{t.decisionsEyebrow}</p>
            <h2>{t.decisionsTitle}</h2>
          </div>

          <div className="decisionList">
            {t.decisions.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section caseOutcomeSection">
        <div className="container narrowContainer outcomeCard">
          <p className="eyebrow">{t.outcomeEyebrow}</p>
          <h2>{t.outcomeTitle}</h2>
          <p>{t.outcome}</p>

          <div className="outcomeActions">
            <Link
              className="button primaryButton"
              href={`/${locale}#contact`}
            >
              {t.discuss} <ArrowUpRight />
            </Link>

            <Link className="textLink" href={`/${locale}#work`}>
              {t.otherWork}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}