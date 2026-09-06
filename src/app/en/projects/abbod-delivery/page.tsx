import type { Metadata } from "next";
import { LocalizedCaseStudy } from "@/components/localized-case-study";

export const metadata: Metadata = {
  title: "Abbod Delivery – Case Study",
  description:
    "Case study of Abbod Delivery, a full-stack platform built around real delivery and courier operations.",
  alternates: {
    canonical: "/en/projects/abbod-delivery",
    languages: {
      de: "/de/projects/abbod-delivery",
      en: "/en/projects/abbod-delivery",
    },
  },
};

export default function EnglishAbbodDelivery() {
  return <LocalizedCaseStudy locale="en" />;
}