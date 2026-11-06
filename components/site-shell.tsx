"use client";

import Link from "next/link";
import { FiDownload, FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { content } from "@/lib/portfolio-content";
import { usePreferences } from "@/components/preferences-provider";

import Image from "next/image";

type SiteShellProps = {
  children: ReactNode;
  isProjectsPage?: boolean;
};

export function SiteShell({
  children,
  isProjectsPage = false,
}: SiteShellProps) {
  const pathname = usePathname();
  const { locale, setLocale, theme, setTheme } = usePreferences();
  const labels = content[locale];
  const year = new Date().getFullYear();
  const [activeNav, setActiveNav] = useState<
    "home" | "about" | "skills" | "projects" | "contact"
  >(isProjectsPage && pathname.startsWith("/projects") ? "projects" : "home");
  const [clickedNav, setClickedNav] = useState<
    "home" | "about" | "skills" | "projects" | "contact" | null
  >(null);
  const routeActiveNav = isProjectsPage
    ? pathname.startsWith("/projects")
      ? "projects"
      : "home"
    : activeNav;

  const navClassName = (
    tab: "home" | "about" | "skills" | "projects" | "contact",
  ) => {
    const classes = ["nav-link"];

    if (routeActiveNav === tab) {
      classes.push("is-active");
    }

    if (clickedNav === tab) {
      classes.push("is-clicked");
    }

    return classes.join(" ");
  };

  const handleNavClick = (
    tab: "home" | "about" | "skills" | "projects" | "contact",
  ) => {
    setActiveNav(tab);
    setClickedNav(tab);
  };

  useEffect(() => {
    if (!clickedNav) {
      return;
    }

    const timer = window.setTimeout(() => {
      setClickedNav(null);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [clickedNav]);

  useEffect(() => {
  if (isProjectsPage) {
    return;
  }

  const ids = ["hero", "about", "skills", "projects", "contact"] as const;

  const sections = ids
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null);

  if (!sections.length) return;

  const mapIdToTab = (id: string) =>
    id === "hero"
      ? "home"
      : (id as "about" | "skills" | "projects" | "contact");

  const updateActiveSection = () => {
    // Linha imaginária que determina a secção activa.
    const activationPoint = window.scrollY + window.innerHeight * 0.45;

    let currentSection = sections[0];

    for (const section of sections) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      if (sectionPosition <= activationPoint) {
        currentSection = section;
      }
    }

    // Ao chegar ao fundo da página, activa Contacto.
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

    if (isAtBottom) {
      currentSection =
        sections.find((section) => section.id === "contact") ??
        sections[sections.length - 1];
    }

    setActiveNav(mapIdToTab(currentSection.id));
  };

  const applyHashState = () => {
    const hashId = window.location.hash.replace("#", "");

    if (hashId && ids.includes(hashId as (typeof ids)[number])) {
      setActiveNav(mapIdToTab(hashId));
    }
  };

  window.addEventListener("scroll", updateActiveSection, {
    passive: true,
  });

  window.addEventListener("hashchange", applyHashState);

  updateActiveSection();
  applyHashState();

  return () => {
    window.removeEventListener("scroll", updateActiveSection);
    window.removeEventListener("hashchange", applyHashState);
  };
}, [isProjectsPage, pathname]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <header className="site-header">
        <div className="nav-bar">
          <Link className="nav-brand" href="/" aria-label="Joisson Miguel — início">
          <Image
            src="/sem_fundo.png"
            alt="Joisson Miguel"
            width={45}
            height={45}
            className="nav-avatar"
            priority
          />
        </Link>

          <nav className="nav-links">
            {isProjectsPage ? (
              <>
                <Link
                  className={navClassName("home")}
                  href="/"
                  onClick={() => handleNavClick("home")}
                >
                  {labels.nav.home}
                </Link>
                <Link
                  className={navClassName("projects")}
                  href="/projects"
                  onClick={() => handleNavClick("projects")}
                >
                  {labels.nav.projects}
                </Link>
                <Link
                  className={navClassName("contact")}
                  href="/#contact"
                  onClick={() => handleNavClick("contact")}
                >
                  {labels.nav.contact}
                </Link>
              </>
            ) : (
              <>
                <a
                  className={navClassName("home")}
                  href="#hero"
                  onClick={() => handleNavClick("home")}
                >
                  {labels.nav.home}
                </a>
                <a
                  className={navClassName("about")}
                  href="#about"
                  onClick={() => handleNavClick("about")}
                >
                  {labels.nav.about}
                </a>
                <a
                  className={navClassName("skills")}
                  href="#skills"
                  onClick={() => handleNavClick("skills")}
                >
                  {labels.nav.skills}
                </a>
                <Link
                  className={navClassName("projects")}
                  href="/projects"
                  onClick={() => handleNavClick("projects")}
                >
                  {labels.nav.projects}
                </Link>
                <a
                  className={navClassName("contact")}
                  href="#contact"
                  onClick={() => handleNavClick("contact")}
                >
                  {labels.nav.contact}
                </a>
              </>
            )}
          </nav>

          <div className="nav-controls">
            <div className="lang-switch">
              {(["pt", "en"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`lang-option${locale === code ? " is-active" : ""}`}
                  onClick={() => setLocale(code)}
                  aria-pressed={locale === code}
                  aria-label={code === "pt" ? "Português" : "English"}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={
                theme === "dark"
                  ? locale === "pt"
                    ? "Mudar para tema claro"
                    : "Switch to light theme"
                  : locale === "pt"
                    ? "Mudar para tema escuro"
                    : "Switch to dark theme"
              }
            >
              {theme === "dark" ? (
                <FiSun aria-hidden="true" />
              ) : (
                <FiMoon aria-hidden="true" />
              )}
            </button>

            <a
              className="nav-cta"
              href={`/api/cv?locale=${locale}`}
              aria-label={locale === "pt" ? "Descarregar CV" : "Download CV"}
            >
              <FiDownload aria-hidden="true" />
              CV
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="footer-shell">
        <div className="footer-inner">
          <p className="footer-copy">
            {locale === "pt"
              ? `Joisson Miguel. Todos os direitos reservados. ${year}`
              : `Joisson Miguel. All rights reserved. ${year}`}
          </p>

          <div className="footer-links">
            <a href="mailto:joissonm.miguel@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/joisson-miguel"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/joissonmiguel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
