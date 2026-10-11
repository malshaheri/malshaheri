import type { Metadata } from "next";
import { EinbuergerungsPilotCaseStudy } from "@/components/einbuergerungs-pilot-case-study";

export const metadata: Metadata = {
  title: "EinbürgerungsPilot – Case Study",
  description: "Multilingual German naturalization preparation app with guided checklists, document organization and interview practice.",
  alternates: {
    canonical: "/en/projects/einbuergerungs-pilot",
    languages: { de: "/de/projects/einbuergerungs-pilot", en: "/en/projects/einbuergerungs-pilot" },
  },
};

export default function CaseStudyPage() {
  return <EinbuergerungsPilotCaseStudy locale="en" />;
}
