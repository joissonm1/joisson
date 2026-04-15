import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AchievementDetailPage } from "@/components/achievement-detail-page";
import { content, getAchievementBySlug } from "@/lib/portfolio-content";

type AchievementRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return content.en.profile.sections.achievements.cards.map((card) => ({
    slug: card.slug,
  }));
}

export async function generateMetadata({
  params,
}: AchievementRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const achievement = getAchievementBySlug(slug);

  if (!achievement) {
    return {
      title: "Achievement not found | Joisson Miguel",
    };
  }

  return {
    title: `${achievement.title} | Joisson Miguel`,
    description: achievement.description,
  };
}

export default async function AchievementRoute({
  params,
}: AchievementRouteProps) {
  const { slug } = await params;

  if (!getAchievementBySlug(slug)) {
    notFound();
  }

  return <AchievementDetailPage slug={slug} />;
}
