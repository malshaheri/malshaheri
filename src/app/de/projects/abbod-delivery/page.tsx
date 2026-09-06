import type { Metadata } from "next";
import { LocalizedCaseStudy } from "@/components/localized-case-study";

export const metadata: Metadata = {
  title: "Abbod Delivery – Fallstudie",
  description:
    "Fallstudie zu Abbod Delivery: eine Full-Stack-Plattform für reale Liefer- und Kurierprozesse.",
  alternates: {
    canonical: "/de/projects/abbod-delivery",
    languages: {
      de: "/de/projects/abbod-delivery",
      en: "/en/projects/abbod-delivery",
    },
  },
};

export default function GermanAbbodDelivery() {
  return <LocalizedCaseStudy locale="de" />;
}