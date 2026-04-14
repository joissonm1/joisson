"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
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
  const { locale, setLocale, theme, setTheme } = usePreferences();
  const labels = content[locale];
  const year = new Date().getFullYear();
  const [cursor, setCursor] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const updateCursor = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

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
                <Link className="nav-link" href="/">
                  {labels.nav.home}
                </Link>
                <Link className="nav-link" href="/#projects">
                  {labels.nav.projects}
                </Link>
                <Link className="nav-link" href="/#contact">
                  {labels.nav.contact}
                </Link>
              </>
            ) : (
              <>
                <a className="nav-link" href="#hero">
                  {labels.nav.home}
                </a>
                <a className="nav-link" href="#about">
                  {labels.nav.about}
                </a>
                <a className="nav-link" href="#skills">
                  {labels.nav.skills}
                </a>
                <Link className="nav-link" href="/projects">
                  {labels.nav.projects}
                </Link>
                <a className="nav-link" href="#contact">
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
            <a href="mailto:joisson.miguel@outlook.com">Email</a>
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
