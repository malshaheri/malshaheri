import type { Metadata } from "next";
import { EinbuergerungsPilotCaseStudy } from "@/components/einbuergerungs-pilot-case-study";

export const metadata: Metadata = {
  title: "EinbürgerungsPilot – Fallstudie",
  description: "Mehrsprachige Webanwendung zur Vorbereitung auf die deutsche Einbürgerung mit Dokumentenorganisation und Interviewtraining.",
  alternates: {
    canonical: "/de/projects/einbuergerungs-pilot",
    languages: { de: "/de/projects/einbuergerungs-pilot", en: "/en/projects/einbuergerungs-pilot" },
  },
};

export default function CaseStudyPage() {
  return <EinbuergerungsPilotCaseStudy locale="de" />;
}
