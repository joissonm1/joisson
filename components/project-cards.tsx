"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { ProjectCarousel } from "@/components/project-carousel";
import type { Locale, Project } from "@/lib/portfolio-content";

function coverOf(project: Project) {
  return project.gallery?.[0] ?? project.image;
}

type FeaturedProjectProps = {
  project: Project;
  index: number;
  locale: Locale;
  label: string;
  detailsLabel: string;
  visitLabel: string;
};

/** Painel dividido: media à esquerda, informação à direita. */
export function FeaturedProject({
  project,
  index,
  locale,
  label,
  detailsLabel,
  visitLabel,
}: FeaturedProjectProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="featured-project">
      <div className="featured-media">
        <div className="featured-window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        {project.gallery?.length ? (
          <ProjectCarousel images={project.gallery} title={project.title} />
        ) : (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 900px) 100vw, 40rem"
          />
        )}
      </div>

      <div className="featured-body">
        <p className="featured-kicker">
          [ {label} — {number} ]
        </p>
        <h3 className="featured-title">{project.title}</h3>
        <p className="featured-meta">{project.category[locale]}</p>
        <p className="featured-description">
          {project.shortDescription[locale]}
        </p>
        <div className="tag-wrap">
          {project.stack.map((item) => (
            <span key={item} className="code-tag">
              {item}
            </span>
          ))}
        </div>
        <div className="featured-links">
          <Link className="arrow-link" href={`/projects/${project.slug}`}>
            {detailsLabel}
            <FaArrowRight aria-hidden="true" />
          </Link>
          {project.liveUrl ? (
            <a
              className="arrow-link is-muted"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {visitLabel}
              <FaArrowRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

type ProjectTileProps = {
  project: Project;
  index: number;
  locale: Locale;
  detailsLabel: string;
  className?: string;
};

/** Cartão com imagem de capa, selo numerado, meta, título e ligação. */
export function ProjectTile({
  project,
  index,
  locale,
  detailsLabel,
  className = "",
}: ProjectTileProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`project-tile ${className}`}
      data-reveal
    >
      <div className="project-tile-media">
        <Image
          src={coverOf(project)}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 24rem"
        />
        <span className="project-tile-badge">#{number}</span>
      </div>
      <div className="project-tile-body">
        <p className="project-tile-meta">
          {project.category[locale]}
          <span className="sep">/</span>
          {project.stack[0]}
        </p>
        <h3 className="project-tile-title">{project.title}</h3>
        <p className="project-tile-teaser">
          {project.shortDescription[locale]}
        </p>
        <span className="arrow-link">
          {detailsLabel}
          <FaArrowRight aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
