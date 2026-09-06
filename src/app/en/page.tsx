import type { Metadata } from "next";
import { LocalizedHome } from "@/components/localized-home";

export const metadata: Metadata = {
  title: "Mohammed Alshaheri – Full-Stack Developer",
  description:
    "Portfolio of Mohammed Alshaheri, a Full-Stack Developer based in Ludwigshafen, Germany, working with React, Next.js, TypeScript, Node.js and practical digital products.",
  alternates: {
    canonical: "/en",
    languages: {
      de: "/de",
      en: "/en",
    },
  },
  openGraph: {
    locale: "en_US",
    title: "Mohammed Alshaheri – Full-Stack Developer",
    description:
      "Full-stack development focused on practical web, mobile and business solutions.",
    url: "/en",
  },
};

export default function EnglishHome() {
  return <LocalizedHome locale="en" />;
}