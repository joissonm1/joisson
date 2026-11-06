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
  FaArrowRight,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaDatabase,
  FaEnvelope,
  FaFileExcel,
  FaGraduationCap,
  FaLightbulb,
  FaPython,
  FaServer,
  FaUsers,
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

const traitIcons: Record<string, IconType> = {
  data: FaChartLine,
  projects: FaUsers,
  learning: FaGraduationCap,
  impact: FaLightbulb,
};

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <div className="section-head">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" aria-hidden="true" />
    </div>
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
      <section id="hero" className="hero-stage">
        <div className="hero-photo" aria-hidden="true">
          <Image
            src="/joisson.jpeg"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 34rem"
            priority
          />
        </div>

        <div className="hero-inner">
          <div data-reveal className="reveal slide-up hero-copy">
            <p className="hero-kicker">{text.hero.greeting}</p>
            <h1 className="hero-title">
              <span>{text.hero.firstName}</span>
              <span className="is-last">{text.hero.lastName}</span>
            </h1>
            <p className="hero-roles">
              {text.hero.roles.map((role, index) => (
                <span key={role}>
                  {index > 0 ? <span className="sep">|</span> : null}
                  {role}
                </span>
              ))}
            </p>
            <p className="hero-tagline">{text.hero.subheadline}</p>
            <div className="hero-actions">
              <Link className="action-button" href="/projects">
                {text.hero.ctaProjects}
                <FaArrowRight aria-hidden="true" />
              </Link>
              <a className="action-button ghost" href="#contact">
                <FaEnvelope aria-hidden="true" />
                {text.hero.ctaContact}
              </a>
            </div>
          </div>
        </div>

        <a className="hero-scroll" href="#about">
          {text.hero.scroll}
        </a>
      </section>

      <main className="mx-auto flex w-[min(94vw,72rem)] flex-col gap-16 pb-20 pt-10">
        <section id="about" data-reveal className="reveal slide-up">
          <SectionHead index="01" title={text.about.title} />

          <div className="about-intro mt-4">
            {text.about.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-traits">
            {text.about.traits.map((trait, index) => {
              const Icon = traitIcons[trait.key];

              return (
                <article key={trait.key} className="trait-card">
                  <div className="trait-head">
                    <span className="trait-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="trait-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="trait-title">{trait.title}</h3>
                  <p className="trait-description">{trait.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="skills" data-reveal className="reveal slide-up space-y-5">
          <SectionHead index="02" title={text.skills.title} />
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
          <SectionHead index="03" title={text.projects.title} />
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
          <SectionHead index="04" title={text.contact.title} />
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
