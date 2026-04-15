"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { usePreferences } from "@/components/preferences-provider";
import { content } from "@/lib/portfolio-content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

type ProfileSectionKey = "experience" | "education" | "achievements";

type ProfileSectionPageProps = {
  section: ProfileSectionKey;
};

export function ProfileSectionPage({ section }: ProfileSectionPageProps) {
  const { locale } = usePreferences();
  const text = content[locale];
  const sectionData = text.profile.sections[section];
  const hasExperiences = "experiences" in sectionData;
  const hasAchievementCards =
    "cards" in sectionData && !!sectionData.cards?.length;
  const hasItems = "items" in sectionData && !!sectionData.items?.length;

  useRevealOnScroll();

  return (
    <SiteShell isProjectsPage>
      <main className="mx-auto flex w-[min(94vw,72rem)] flex-col gap-8 pb-20 pt-32 md:pt-36">
        <section data-reveal className="reveal slide-up">
          <h1 className="text-4xl font-bold md:text-5xl">
            {sectionData.title}
          </h1>
          <p className="mt-3 max-w-3xl text-muted leading-8">
            {sectionData.subtitle}
          </p>
        </section>

        {hasExperiences ? (
          <section className="grid gap-4 md:grid-cols-2">
            {sectionData.experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.organization}`}
                data-reveal
                className="reveal slide-up info-card"
              >
                <h2 className="section-title">{experience.role}</h2>
                <p className="mt-2 font-semibold">{experience.organization}</p>
                <p className="text-muted">{experience.period}</p>
                <ul className="mt-4 info-list text-sm text-muted">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        ) : hasAchievementCards ? (
          <section className="grid gap-4 md:grid-cols-2">
            {sectionData.cards.map((card) => (
              <article
                key={card.slug}
                data-reveal
                className="reveal slide-up project-card achievement-card"
              >
                <div className="project-preview-media achievement-media">
                  <Image
                    src={card.image}
                    alt={`${card.title} image`}
                    width={1200}
                    height={700}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">{card.title}</h2>
                  <p className="mt-3 leading-7 text-muted achievement-teaser">
                    {card.description}
                  </p>
                  <Link
                    className="inline-link mt-4"
                    href={`/achievements/${card.slug}`}
                  >
                    {text.profile.viewMore}
                  </Link>
                </div>
              </article>
            ))}
          </section>
        ) : hasItems ? (
          <section data-reveal className="reveal slide-up info-card">
            <ul className="info-list text-base text-muted">
              {sectionData.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <div data-reveal className="reveal slide-up flex flex-wrap gap-3">
          <Link href="/experience" className="action-button ghost">
            {text.experience.title}
          </Link>
          <Link href="/education" className="action-button ghost">
            {text.education.title}
          </Link>
          <Link href="/achievements" className="action-button ghost">
            {text.achievements.title}
          </Link>
          <Link href="/" className="action-button ghost">
            {text.profile.backHome}
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
