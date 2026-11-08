"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ProjectTile } from "@/components/project-cards";
import { SiteShell } from "@/components/site-shell";
import { usePreferences } from "@/components/preferences-provider";
import { content, projects } from "@/lib/portfolio-content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

export function ProjectsPage() {
  const { locale } = usePreferences();
  const text = content[locale];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useRevealOnScroll();

  return (
    <SiteShell isProjectsPage>
      <main className="mx-auto flex w-[min(94vw,72rem)] flex-col gap-8 pb-20 pt-32 md:pt-36">
        <section data-reveal className="reveal slide-up">
          <h1 className="text-4xl font-bold md:text-5xl">
            {text.projects.allProjectsTitle}
          </h1>
          <p className="mt-3 max-w-3xl text-muted">
            {text.projects.allProjectsSubtitle}
          </p>
        </section>

        <section className="project-tiles is-two-cols">
          {projects.map((project, index) => (
            <ProjectTile
              key={project.slug}
              project={project}
              index={index}
              locale={locale}
              detailsLabel={text.projects.details}
              className="reveal slide-up"
            />
          ))}
        </section>

        <Link href="/" className="action-button ghost w-fit">
          {text.projects.backHome}
        </Link>
      </main>
    </SiteShell>
  );
}
