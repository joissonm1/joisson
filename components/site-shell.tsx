"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { content } from "@/lib/portfolio-content";
import { usePreferences } from "@/components/preferences-provider";

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
  const [cursor, setCursor] = useState({ x: -500, y: -500 });
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
    const updateCursor = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

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
      .filter((section): section is HTMLElement => !!section);

    if (!sections.length) {
      return;
    }

    const mapIdToTab = (id: string) =>
      id === "hero"
        ? "home"
        : (id as "about" | "skills" | "projects" | "contact");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const topVisible = visibleEntries[0];
        const sectionId = (topVisible.target as HTMLElement).id;
        setActiveNav(mapIdToTab(sectionId));
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-16% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    const applyHashState = () => {
      const hashId = window.location.hash.replace("#", "");
      if (!hashId) {
        return;
      }

      if (ids.includes(hashId as (typeof ids)[number])) {
        setActiveNav(mapIdToTab(hashId));
      }
    };

    applyHashState();
    window.addEventListener("hashchange", applyHashState);

    return () => {
      window.removeEventListener("hashchange", applyHashState);
      observer.disconnect();
    };
  }, [isProjectsPage, pathname]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-70"
        style={{
          background: `radial-gradient(520px circle at ${cursor.x}px ${cursor.y}px, color-mix(in oklab, var(--accent-400) 22%, transparent), transparent 55%)`,
        }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-layer-grid" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-layer-noise" />
      <div className="pointer-events-none fixed -top-52 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-orb blur-3xl" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 h-24 bg-top-scrim" />

      <header className="fixed left-1/2 top-4 z-30 w-[min(94vw,64rem)] -translate-x-1/2">
        <div className="glass-panel flex items-center justify-between gap-2 rounded-2xl px-3 py-2 md:px-4">
          <div className="avatar-chip" aria-label="Profile avatar">
            <Image
              src="/sem_fundo.png"
              alt="Joisson Miguel avatar"
              width={34}
              height={34}
            />
          </div>

          <nav className="mx-auto flex items-center gap-1 text-xs uppercase tracking-[0.18em] md:text-sm">
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

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="control-button"
              onClick={() => setLocale(locale === "en" ? "pt" : "en")}
              aria-label="Toggle language"
            >
              {labels.controls.language}
            </button>

            <a
              className="control-button"
              href={`/api/cv?locale=${locale}`}
              aria-label="Download CV"
            >
              CV
            </a>

            <button
              type="button"
              className="control-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? labels.controls.light : labels.controls.dark}
            </button>
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
