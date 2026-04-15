"use client";

import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaDatabase,
  FaFileExcel,
  FaPython,
  FaServer,
} from "react-icons/fa";
import { SiteShell } from "@/components/site-shell";
import { ProjectCarousel } from "@/components/project-carousel";
import { usePreferences } from "@/components/preferences-provider";
import { content, projects, skills } from "@/lib/portfolio-content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

const skillIcons: Record<string, IconType> = {
  Excel: FaFileExcel,
  "Power BI": FaChartBar,
  SQL: FaDatabase,
  PostgreSQL: SiPostgresql,
  "Google Analytics": SiGoogleanalytics,
  NumPy: FaPython,
  Pandas: FaChartBar,
  "Data Analysis": FaChartLine,
  "KPI Dashboards": FaChartPie,
  C: SiC,
  "C++": SiCplusplus,
  Java: SiOpenjdk,
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  FastAPI: SiFastapi,
  Prisma: SiPrisma,
  MySQL: FaDatabase,
  MongoDB: FaServer,
  Docker: SiDocker,
  Linux: SiLinux,
  Git: SiGit,
};

const skillIconColors: Record<string, string> = {
  Excel: "#22c55e",
  "Power BI": "#facc15",
  SQL: "#60a5fa",
  PostgreSQL: "#3b82f6",
  "Google Analytics": "#f97316",
  NumPy: "#4f86c6",
  Pandas: "#8b5cf6",
  "Data Analysis": "#22d3ee",
  "KPI Dashboards": "#f472b6",
  C: "#5b6ee1",
  "C++": "#659ad2",
  Java: "#f97316",
  Python: "#facc15",
  TypeScript: "#2f74c0",
  JavaScript: "#f7df1e",
  React: "#61dafb",
  "Next.js": "#e2e8f0",
  "Node.js": "#22c55e",
  NestJS: "#ea2845",
  FastAPI: "#06b6d4",
  Prisma: "#a78bfa",
  MySQL: "#2563eb",
  MongoDB: "#22c55e",
  Docker: "#2496ed",
  Linux: "#f4d03f",
  Git: "#f97316",
};

function SkillTag({ label }: { label: string }) {
  const Icon = skillIcons[label];
  const iconColor = skillIconColors[label];

  return (
    <span className="tag skill-tag">
      {Icon ? (
        <Icon
          className="skill-tag-icon"
          style={iconColor ? { color: iconColor } : undefined}
          aria-hidden="true"
        />
      ) : null}
      <span className="skill-tag-label">{label}</span>
    </span>
  );
}

export function HomePage() {
  const { locale } = usePreferences();
  const text = content[locale];
  const featuredProjects = projects.slice(0, 2);
  const skillRows = [
    { title: text.skills.categories.data, items: skills.data },
    { title: text.skills.categories.programming, items: skills.programming },
    { title: text.skills.categories.web, items: skills.web },
    { title: text.skills.categories.backend, items: skills.backend },
    { title: text.skills.categories.devops, items: skills.devops },
  ];
  useRevealOnScroll();

  return (
    <SiteShell>
      <main className="mx-auto flex w-[min(94vw,72rem)] flex-col gap-16 pb-20 pt-32 md:pt-36">
        <section
          id="hero"
          className="flex min-h-[72vh] items-center justify-center"
        >
          <div
            data-reveal
            className="reveal slide-up flex max-w-4xl flex-col items-center space-y-8 text-center"
          >
            <p className="hero-name">{text.hero.name}</p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              {text.hero.headline}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link className="action-button" href="/projects">
                {text.hero.ctaProjects}
              </Link>
              <a className="action-button ghost" href="#contact">
                {text.hero.ctaContact}
              </a>
            </div>
            <a className="scroll-down" href="#about" aria-label="Scroll down" />
          </div>
        </section>

        <section
          id="about"
          data-reveal
          className="reveal slide-up glass-panel rounded-3xl p-6 md:p-9"
        >
          <h2 className="section-title">{text.about.title}</h2>
          <p className="mt-4 max-w-3xl text-muted leading-8">
            {text.about.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {text.about.highlights.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="skills" data-reveal className="reveal slide-up space-y-5">
          <h2 className="section-title">{text.skills.title}</h2>
          <p className="text-muted">{text.skills.subtitle}</p>
          <div className="skills-rows">
            {skillRows.map((group) => (
              <article key={group.title} className="skill-row">
                <h3 className="skill-row-title">{group.title}</h3>
                <div className="tag-wrap skill-row-tags">
                  {group.items.map((item) => (
                    <SkillTag key={item} label={item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          data-reveal
          className="reveal slide-up space-y-5"
        >
          <h2 className="section-title">{text.projects.title}</h2>
          <p className="text-muted">{text.projects.subtitle}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="project-card">
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
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="project-teaser mt-3 text-muted leading-7">
                    {project.shortDescription[locale]}...
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

                <Link
                  className="inline-link"
                  href={`/projects/${project.slug}`}
                >
                  {text.projects.seeMore}
                </Link>
              </article>
            ))}
          </div>
          <div className="pt-2">
            <Link className="action-button ghost" href="/projects">
              {text.projects.viewAll}
            </Link>
          </div>
        </section>

        <section
          data-reveal
          className="reveal slide-up glass-panel rounded-3xl p-6 md:p-9"
        >
          <h2 className="section-title">{text.identity.title}</h2>
          <p className="mt-3 text-muted">{text.identity.subtitle}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {text.identity.metrics.map((metric) => (
              <div key={metric.label} className="metric-tile">
                <div className="text-sm uppercase tracking-[0.14em] text-muted">
                  {metric.label}
                </div>
                <div className="mt-2 text-3xl font-semibold">
                  {metric.value}
                </div>
                <div className="sparkline" />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article
            data-reveal
            className="reveal slide-up info-card flex h-full flex-col"
          >
            <h2 className="section-title">{text.experience.title}</h2>
            <p className="mt-3 font-semibold">{text.experience.role}</p>
            <p className="text-muted">{text.experience.period}</p>
            <ul className="mt-4 info-list text-sm text-muted">
              {text.experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-auto flex justify-end pt-6">
              <Link className="inline-link" href="/experience">
                {text.profile.viewMore}
              </Link>
            </div>
          </article>

          <article
            data-reveal
            className="reveal slide-up info-card flex h-full flex-col"
          >
            <h2 className="section-title">{text.education.title}</h2>
            <ul className="mt-4 info-list text-sm text-muted">
              {text.education.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-auto flex justify-end pt-6">
              <Link className="inline-link" href="/education">
                {text.profile.viewMore}
              </Link>
            </div>
          </article>

          <article
            data-reveal
            className="reveal slide-up info-card flex h-full flex-col"
          >
            <h2 className="section-title">{text.achievements.title}</h2>
            <ul className="mt-4 info-list text-sm text-muted">
              {text.achievements.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-auto flex justify-end pt-6">
              <Link className="inline-link" href="/achievements">
                {text.profile.viewMore}
              </Link>
            </div>
          </article>
        </section>

        <section
          id="contact"
          data-reveal
          className="reveal slide-up glass-panel rounded-3xl p-6 md:p-9"
        >
          <h2 className="section-title">{text.contact.title}</h2>
          <p className="mt-2 text-muted">{text.contact.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="action-button ghost"
              href="mailto:joissonm.miguel@gmail.com"
            >
              {text.contact.email}
            </a>
            <a
              className="action-button ghost"
              href="https://www.linkedin.com/in/joisson-miguel"
              target="_blank"
              rel="noreferrer"
            >
              {text.contact.linkedin}
            </a>
            <a
              className="action-button ghost"
              href="https://github.com/joissonm1"
              target="_blank"
              rel="noreferrer"
            >
              {text.contact.github}
            </a>
          </div>
        </section>

        <section
          data-reveal
          className="reveal slide-up flex justify-center pb-4"
        >
          <div className="avatar-showcase">
            <Image
              src="/sem_fundo.png"
              alt="Joisson Miguel avatar"
              width={280}
              height={280}
              priority={false}
            />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
