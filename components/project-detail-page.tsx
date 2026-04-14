"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCarousel } from "@/components/project-carousel";
import { SiteShell } from "@/components/site-shell";
import { usePreferences } from "@/components/preferences-provider";
import { content, getProjectBySlug } from "@/lib/portfolio-content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

export function ProjectDetailPage({ slug }: { slug: string }) {
  const { locale } = usePreferences();
  const text = content[locale];
  const project = getProjectBySlug(slug);

  useRevealOnScroll();

  if (!project) {
    notFound();
  }

  return (
    <SiteShell isProjectsPage>
      <main className="mx-auto flex w-[min(94vw,68rem)] flex-col gap-8 pb-20 pt-32 md:pt-36">
        <section data-reveal className="reveal slide-up space-y-3">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">
            Project
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">{project.title}</h1>
          <p className="max-w-3xl leading-8 text-muted">
            {project.longDescription[locale]}
          </p>
        </section>

        <section data-reveal className="reveal slide-up">
          {project.gallery?.length ? (
            <ProjectCarousel images={project.gallery} title={project.title} />
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
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article data-reveal className="reveal slide-up info-card">
            <h2 className="section-title">{text.projects.impactLabel}</h2>
            <p className="mt-3 leading-8 text-muted">
              {project.impact[locale]}
            </p>
          </article>

          <article data-reveal className="reveal slide-up info-card">
            <h2 className="section-title">Role</h2>
            <p className="mt-3 leading-8 text-muted">{project.role[locale]}</p>
          </article>
        </section>

        <section data-reveal className="reveal slide-up info-card">
          <h2 className="section-title">{text.projects.stackLabel}</h2>
          <div className="mt-4 tag-wrap">
            {project.stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </section>

        <div className="flex gap-3">
          <Link href="/projects" className="action-button ghost">
            {text.projects.allProjectsTitle}
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="action-button"
            >
              {text.projects.visitProject}
            </a>
          ) : null}
          <Link href="/" className="action-button ghost">
            {text.projects.backHome}
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
