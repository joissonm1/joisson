"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectCarousel } from "@/components/project-carousel";
import { SiteShell } from "@/components/site-shell";
import { usePreferences } from "@/components/preferences-provider";
import { content, projects } from "@/lib/portfolio-content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

export function ProjectsPage() {
  const { locale } = usePreferences();
  const text = content[locale];
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

        <section className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              data-reveal
              className="reveal slide-up project-card"
            >
              {project.gallery?.length ? (
                <ProjectCarousel
                  images={project.gallery}
                  title={project.title}
                />
              ) : (
                <div className="project-preview-media">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={1200}
                    height={700}
                  />
                </div>
              )}

              <div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="mt-3 text-muted leading-7">
                  {project.longDescription[locale]}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.14em] text-muted">
                  {text.projects.impactLabel}
                </p>
                <p className="mt-1 leading-7">{project.impact[locale]}</p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.14em] text-muted">
                  {text.projects.stackLabel}
                </p>
                <div className="tag-wrap">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  className="inline-link"
                  href={`/projects/${project.slug}`}
                >
                  {text.projects.details}
                </Link>
                {project.liveUrl ? (
                  <a
                    className="inline-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text.projects.visitProject}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <Link href="/" className="action-button ghost w-fit">
          {text.projects.backHome}
        </Link>
      </main>
    </SiteShell>
  );
}
