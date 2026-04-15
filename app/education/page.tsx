import type { Metadata } from "next";
import { ProfileSectionPage } from "@/components/profile-section-page";

export const metadata: Metadata = {
  title: "Education | Joisson Miguel",
  description:
    "Academic background and continuous learning path in software engineering and data analysis.",
};

export default function EducationRoute() {
  return <ProfileSectionPage section="education" />;
}
