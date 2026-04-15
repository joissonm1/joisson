"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCarousel } from "@/components/project-carousel";
import { SiteShell } from "@/components/site-shell";
import { usePreferences } from "@/components/preferences-provider";
import { content } from "@/lib/portfolio-content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

type AchievementDetailPageProps = {
  slug: string;
};

export function AchievementDetailPage({ slug }: AchievementDetailPageProps) {
  const { locale } = usePreferences();
  const text = content[locale];
  const achievement = text.profile.sections.achievements.cards.find(
    (card) => card.slug === slug,
  );

  useRevealOnScroll();

  if (!achievement) {
    notFound();
  }

  const labels =
    locale === "pt"
      ? {
          context: "Contexto",
          challenge: "Desafio",
          solution: "Solucao",
          team: "Equipa",
          back: "Voltar para Conquistas",
        }
      : {
          context: "Context",
          challenge: "Challenge",
          solution: "Solution",
          team: "Team",
          back: "Back to Achievements",
        };

  return (
    <SiteShell isProjectsPage>
      <main className="mx-auto flex w-[min(94vw,72rem)] flex-col gap-8 pb-20 pt-32 md:pt-36">
        <section data-reveal className="reveal slide-up space-y-3">
          <h1 className="text-4xl font-bold md:text-5xl">
            {achievement.title}
          </h1>
          <p className="max-w-3xl leading-8 text-muted">
            {achievement.description}
          </p>
        </section>

        <section data-reveal className="reveal slide-up">
          {"gallery" in achievement && achievement.gallery?.length ? (
            <ProjectCarousel
              images={[...achievement.gallery]}
              title={achievement.title}
              intervalMs={3200}
            />
          ) : (
            <div className="project-preview-media achievement-media">
              <Image
                src={achievement.image}
                alt={`${achievement.title} image`}
                width={1200}
                height={700}
              />
            </div>
          )}
        </section>

        {"details" in achievement && achievement.details ? (
          <section
            data-reveal
            className="reveal slide-up info-card achievement-details"
          >
            <div>
              <p className="achievement-label">{labels.context}</p>
              <p className="mt-1 leading-7 text-muted">
                {achievement.details.context}
              </p>
            </div>

            <div>
              <p className="achievement-label">{labels.challenge}</p>
              <p className="mt-1 leading-7 text-muted">
                {achievement.details.challenge}
              </p>
            </div>

            <div>
              <p className="achievement-label">{labels.solution}</p>
              <p className="mt-1 leading-7 text-muted">
                {achievement.details.solution}
              </p>
            </div>

            <div>
              <p className="achievement-label">{labels.team}</p>
              <ul className="mt-3 info-list text-sm text-muted">
                {achievement.details.team.map((group) => (
                  <li key={group.area}>
                    <span className="font-semibold text-white/90">
                      {group.area}:
                    </span>{" "}
                    {group.members.join(", ")}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <div data-reveal className="reveal slide-up flex flex-wrap gap-3">
          <Link href="/achievements" className="action-button ghost">
            {labels.back}
          </Link>
          <Link href="/" className="action-button ghost">
            {text.profile.backHome}
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
