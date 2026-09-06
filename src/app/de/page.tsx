import type { Metadata } from "next";
import { LocalizedHome } from "@/components/localized-home";

export const metadata: Metadata = {
  title: "Mohammed Alshaheri – Full-Stack-Entwickler",
  description:
    "Portfolio von Mohammed Alshaheri, Full-Stack-Entwickler aus Ludwigshafen am Rhein mit Fokus auf React, Next.js, TypeScript, Node.js und praxisnahe digitale Produkte.",
  alternates: {
    canonical: "/de",
    languages: {
      de: "/de",
      en: "/en",
    },
  },
  openGraph: {
    locale: "de_DE",
    title: "Mohammed Alshaheri – Full-Stack-Entwickler",
    description:
      "Full-Stack-Entwicklung mit Fokus auf praxisnahe Web-, Mobile- und Geschäftsprozesse.",
    url: "/de",
  },
};

export default function GermanHome() {
  return <LocalizedHome locale="de" />;
}