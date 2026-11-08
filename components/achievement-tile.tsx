"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaTrophy } from "react-icons/fa";

type AchievementTileProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  meta: readonly string[];
  detailsLabel: string;
};

/** Cartão de conquista: foto de capa, selo com a classificação e meta. */
export function AchievementTile({
  slug,
  title,
  description,
  image,
  badge,
  meta,
  detailsLabel,
}: AchievementTileProps) {
  return (
    <Link
      href={`/achievements/${slug}`}
      className="project-tile achievement-tile reveal slide-up"
      data-reveal
    >
      <div className="project-tile-media">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 720px) 100vw, 36rem"
        />
        <AchievementBadge label={badge} />
      </div>
      <div className="project-tile-body">
        <p className="project-tile-meta">
          {meta.map((item, index) => (
            <span key={item}>
              {index > 0 ? <span className="sep">/</span> : null}
              {item}
            </span>
          ))}
        </p>
        <h2 className="project-tile-title">{title}</h2>
        <p className="project-tile-teaser">{description}</p>
        <span className="arrow-link">
          {detailsLabel}
          <FaArrowRight aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function AchievementBadge({
  label,
  inline = false,
}: {
  label: string;
  inline?: boolean;
}) {
  return (
    <span className={`achievement-badge ${inline ? "is-inline" : ""}`}>
      <FaTrophy aria-hidden="true" />
      {label}
    </span>
  );
}
