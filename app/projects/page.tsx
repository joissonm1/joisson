import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects-page";

export const metadata: Metadata = {
  title: "Projects | Joisson Miguel",
  description:
    "Detailed projects by Joisson Miguel at the intersection of software engineering and data analysis.",
};

export default function ProjectsRoute() {
  return <ProjectsPage />;
}
