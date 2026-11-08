"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ProjectCarousel } from "@/components/project-carousel";
import { SiteShell } from "@/components/site-shell";
import { usePreferences } from "@/components/preferences-provider";
import { content, getProjectBySlug, projects } from "@/lib/portfolio-content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

export function ProjectDetailPage({ slug }: { slug: string }) {
  const { locale } = usePreferences();
  const text = content[locale];
  const project = getProjectBySlug(slug);

  useRevealOnScroll();

  if (!project) {
    notFound();
  }

  const number = String(
    projects.findIndex((item) => item.slug === project.slug) + 1,
  ).padStart(2, "0");

  return (
    <SiteShell isProjectsPage>
      <main className="mx-auto flex w-[min(94vw,68rem)] flex-col gap-10 pb-20 pt-32 md:pt-36">
        <header data-reveal className="reveal slide-up detail-hero">
          <Link href="/projects" className="arrow-link is-muted detail-back">
            <FaArrowLeft aria-hidden="true" />
            {text.projects.title}
          </Link>
          <p className="featured-kicker">
            [ {text.projects.projectLabel} — {number} ]
          </p>
          <h1 className="detail-title">{project.title}</h1>
          <p className="featured-meta">{project.category[locale]}</p>
          <p className="detail-lede">{project.shortDescription[locale]}</p>
        </header>

        <section data-reveal className="reveal slide-up detail-layout">
          <div className="detail-overview">
            <h2 className="detail-label">{text.projects.overviewLabel}</h2>
            <p>{project.longDescription[locale]}</p>
          </div>

          <aside className="detail-facts" aria-label={text.projects.factsLabel}>
            <h2 className="detail-label">{text.projects.factsLabel}</h2>
            <dl>
              <div>
                <dt>{text.projects.categoryLabel}</dt>
                <dd>{project.category[locale]}</dd>
              </div>
              <div>
                <dt>{text.projects.roleLabel}</dt>
                <dd>{project.role[locale]}</dd>
              </div>
              <div>
                <dt>{text.projects.stackLabel}</dt>
                <dd className="tag-wrap">
                  {project.stack.map((item) => (
                    <span key={item} className="code-tag">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="action-button w-full justify-center"
              >
                {text.projects.visitProject}
                <FaArrowRight aria-hidden="true" />
              </a>
            ) : null}
          </aside>
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

        <section data-reveal className="reveal slide-up detail-impact">
          <h2 className="detail-label">{text.projects.impactLabel}</h2>
          <p>{project.impact[locale]}</p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className="action-button ghost">
            <FaArrowLeft aria-hidden="true" />
            {text.projects.allProjectsTitle}
          </Link>
          <Link href="/" className="action-button ghost">
            {text.projects.backHome}
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
