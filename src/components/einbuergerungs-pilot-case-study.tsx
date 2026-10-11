import Link from "next/link";
import { ArrowUpRight, GithubIcon } from "@/components/icons";
import type { Locale } from "@/data/translations";

const copy = {
  en: {
    back: "← Back to selected work",
    eyebrow: "Case study · 2026 · Private beta",
    lead: "Making the German naturalization preparation process easier to understand, organize and navigate across languages.",
    overview: "Project overview",
    overviewTitle: "A practical guide for a complex administrative journey.",
    intro: "Applicants often work with different document lists, deadlines, official guidance and personal circumstances. EinbürgerungsPilot brings preparatory tasks into one responsive web experience, without presenting itself as an authority or replacing legal advice.",
    approach: "Product approach",
    approachTitle: "From questions to an actionable checklist.",
    features: [
      ["Guided questionnaire", "Structured questions about residence, family, employment, language and other circumstances help shape a personal preparation overview."],
      ["Document organization", "A tailored checklist shows which documents are present, missing or require review, with explanations of where to obtain them."],
      ["Optional account and file storage", "Users can optionally sign in and organize documents in their own account, with a guest experience for preparation."],
      ["AI-assisted explanation", "An optional tool helps explain letters and documents in accessible language, with reminders to verify AI outputs against originals."],
      ["Interview practice", "German-language practice cards with translations and speech playback support preparation for an appointment."],
      ["Multilingual design", "German, Arabic, English and Turkish interfaces, including right-to-left Arabic and mobile-friendly navigation."],
    ],
    engineering: "Engineering & design",
    engineeringTitle: "A user-centered full-stack web experience.",
    engineeringBody: "Built with Next.js, React, TypeScript and Tailwind CSS, with Supabase for optional account-related data and file storage and a server-side AI integration for document explanations. The interface is designed to work across desktop and mobile, with theme and interaction feedback improvements.",
    privacyTitle: "Privacy-aware product decisions",
    privacyBody: "Personal documents are sensitive. Uploads are optional, and AI explanations may involve sending submitted content to an external provider. The project remains in private testing while legal information, access rules and production-readiness are reviewed.",
    outcome: "Current result",
    outcomeTitle: "A working preview, with responsible limitations.",
    outcomeBody: "The app is deployed for private testing. It already combines the guided flow, document tracking, local authority information and interview practice. It is an independent preparation aid—not a government service, a legal eligibility determination or a substitute for official advice.",
    preview: "Open live preview",
    github: "View source code",
    other: "See more projects",
  },
  de: {
    back: "← Zurück zu den ausgewählten Projekten",
    eyebrow: "Fallstudie · 2026 · Private Testphase",
    lead: "Die Vorbereitung auf die deutsche Einbürgerung verständlicher, übersichtlicher und mehrsprachig zugänglich machen.",
    overview: "Projektüberblick",
    overviewTitle: "Eine praktische Begleitung für einen komplexen Verwaltungsweg.",
    intro: "Antragstellende müssen unterschiedliche Unterlagenlisten, Fristen, Behördenhinweise und persönliche Umstände berücksichtigen. EinbürgerungsPilot bündelt die Vorbereitung in einer responsiven Webanwendung, ohne eine Behörde oder Rechtsberatung zu ersetzen.",
    approach: "Produktkonzept",
    approachTitle: "Von persönlichen Fragen zur konkreten Dokumentenliste.",
    features: [
      ["Geführter Frageassistent", "Strukturierte Fragen zu Aufenthalt, Familie, Arbeit, Sprache und weiteren Umständen helfen, die persönliche Vorbereitung einzuordnen."],
      ["Dokumentenorganisation", "Eine individuelle Übersicht kennzeichnet vorhandene, fehlende oder noch zu prüfende Unterlagen und erklärt mögliche Bezugsquellen."],
      ["Optionales Konto und Dateispeicherung", "Nutzende können sich optional anmelden und Unterlagen in ihrem Konto organisieren. Auch die Vorbereitung als Gast ist möglich."],
      ["KI-gestützte Erklärungen", "Eine optionale Funktion erklärt Schreiben und Dokumente in verständlicher Sprache und weist auf die Prüfung am Original hin."],
      ["Interviewtraining", "Deutsche Übungsfragen mit Übersetzungen und Sprachausgabe unterstützen die Vorbereitung auf einen Termin."],
      ["Mehrsprachige Oberfläche", "Deutsch, Arabisch, Englisch und Türkisch mit RTL-Unterstützung für Arabisch sowie mobiler Navigation."],
    ],
    engineering: "Technik & Gestaltung",
    engineeringTitle: "Eine nutzerorientierte Full-Stack-Webanwendung.",
    engineeringBody: "Entwickelt mit Next.js, React, TypeScript und Tailwind CSS. Supabase unterstützt optionale Kontodaten und Dateispeicherung; eine serverseitige KI-Anbindung dient der Dokumentenerklärung. Das responsive Design umfasst Hell-/Dunkelmodus und visuelles Interaktionsfeedback.",
    privacyTitle: "Datenschutzbewusste Produktentscheidungen",
    privacyBody: "Persönliche Unterlagen sind sensibel. Uploads bleiben optional; bei KI-Erklärungen können eingereichte Inhalte an einen externen Anbieter übertragen werden. Das Projekt bleibt in privater Testphase, während Rechtstexte, Zugriffsregeln und die Produktionsreife geprüft werden.",
    outcome: "Aktueller Stand",
    outcomeTitle: "Eine nutzbare Vorschau mit klaren Grenzen.",
    outcomeBody: "Die Anwendung ist für private Tests bereitgestellt. Sie verbindet Frageassistent, Dokumentenübersicht, lokale Behördeninformationen und Interviewtraining. Sie ist ein unabhängiges Hilfsmittel und weder ein staatliches Angebot noch eine rechtsverbindliche Prüfung.",
    preview: "Live-Vorschau öffnen",
    github: "Quellcode ansehen",
    other: "Weitere Projekte",
  },
} as const;

export function EinbuergerungsPilotCaseStudy({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <main id="main-content" className="caseStudy">
      <section className="caseHero">
        <div className="container narrowContainer">
          <Link className="backLink" href={`/${locale}#work`}>{t.back}</Link>
          <p className="eyebrow">{t.eyebrow}</p>
          <div className="caseTitleRow">
            <div><h1>EinbürgerungsPilot</h1><p className="caseLead">{t.lead}</p></div>
            <span className="statusBadge"><span /> {locale === "de" ? "Private Testphase" : "Private beta"}</span>
          </div>
          <div className="tagList caseTags">{["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "AI", "i18n"].map(item => <span key={item}>{item}</span>)}</div>
          <div className="projectActions">
            <a className="button primaryButton" href="https://einbuerungs-pilot-app.vercel.app/" target="_blank" rel="noreferrer">{t.preview} <ArrowUpRight /></a>
            <a className="button secondaryButton" href="https://github.com/malshaheri/einbuerungs-pilot-app" target="_blank" rel="noreferrer"><GithubIcon /> {t.github}</a>
          </div>
        </div>
      </section>
      <section className="section caseBodySection">
        <div className="container narrowContainer caseTwoColumn">
          <div><p className="eyebrow">{t.overview}</p><h2>{t.overviewTitle}</h2></div>
          <div className="caseProse"><p>{t.intro}</p></div>
        </div>
      </section>
      <section className="section subtleSection">
        <div className="container narrowContainer">
          <div className="caseSectionHeading"><p className="eyebrow">{t.approach}</p><h2>{t.approachTitle}</h2></div>
          <div className="architectureGrid">{t.features.map(([title, description]) => <article className="architectureCard" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container narrowContainer caseTwoColumn">
          <div><p className="eyebrow">{t.engineering}</p><h2>{t.engineeringTitle}</h2></div>
          <div className="caseProse"><p>{t.engineeringBody}</p><h3>{t.privacyTitle}</h3><p>{t.privacyBody}</p></div>
        </div>
      </section>
      <section className="section caseOutcomeSection">
        <div className="container narrowContainer outcomeCard">
          <p className="eyebrow">{t.outcome}</p><h2>{t.outcomeTitle}</h2><p>{t.outcomeBody}</p>
          <div className="outcomeActions"><a className="button primaryButton" href="https://einbuerungs-pilot-app.vercel.app/" target="_blank" rel="noreferrer">{t.preview} <ArrowUpRight /></a><Link className="textLink" href={`/${locale}#work`}>{t.other}</Link></div>
        </div>
      </section>
    </main>
  );
}
