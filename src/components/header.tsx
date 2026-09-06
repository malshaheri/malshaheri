"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { translations, Locale } from "@/data/translations";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const locale: Locale = pathname.startsWith("/en") ? "en" : "de";
  const t = translations[locale];

  const navItems = [
    [t.nav.work, `/${locale}#work`],
    [t.nav.skills, `/${locale}#skills`],
    [t.nav.experience, `/${locale}#experience`],
    [t.nav.about, `/${locale}#about`],
    [t.nav.contact, `/${locale}#contact`],
  ] as const;

  const otherLocale: Locale = locale === "de" ? "en" : "de";

  return (
    <header className="siteHeader">
      <div className="headerInner container">
        <Link
          className="brand"
          href={`/${locale}`}
          aria-label="Mohammed Alshaheri home"
        >
          <span className="brandMark">{siteConfig.shortName}</span>
          <span className="brandText">Mohammed Alshaheri</span>
        </Link>

        <nav className="desktopNav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="headerActions">
          <div className="languageSwitch" aria-label="Language">
            <Link
              href="/de"
              className={locale === "de" ? "activeLanguage" : ""}
            >
              DE
            </Link>

            <span>·</span>

            <Link
              href="/en"
              className={locale === "en" ? "activeLanguage" : ""}
            >
              EN
            </Link>
          </div>

          <ThemeToggle />

          <a className="headerContact" href={`mailto:${siteConfig.email}`}>
            {t.nav.talk}
          </a>

          <button
            className="iconButton menuButton"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="mobileNav" aria-label="Mobile navigation">
          <div className="container mobileNavInner">
            {navItems.map(([label, href]) => (
              <Link
                href={href}
                key={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Link
              href={`/${otherLocale}`}
              onClick={() => setOpen(false)}
            >
              {otherLocale === "de" ? "Deutsch" : "English"}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}