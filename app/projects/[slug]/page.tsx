import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { getProjectBySlug, projects } from "@/lib/portfolio-content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | Joisson Miguel",
    };
  }

  return {
    title: `${project.title} | Joisson Miguel`,
    description: project.shortDescription.en,
  };
}

export default async function ProjectRoute({ params }: ProjectPageProps) {
  const { slug } = await params;

  if (!getProjectBySlug(slug)) {
    notFound();
  }

  return <ProjectDetailPage slug={slug} />;
}
