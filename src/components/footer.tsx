"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/portfolio";
import { translations, Locale } from "@/data/translations";

export function Footer() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "de";
  const t = translations[locale];

  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.builtWith}
        </p>

        <div className="footerLinks">
          <a href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <Link href={`/${locale}#top`}>
            {t.footer.backToTop}
          </Link>
        </div>
      </div>
    </footer>
  );
}