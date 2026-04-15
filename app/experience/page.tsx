import type { Metadata } from "next";
import { ProfileSectionPage } from "@/components/profile-section-page";

export const metadata: Metadata = {
  title: "Experience | Joisson Miguel",
  description:
    "Professional experience details, leadership highlights, and operational impact.",
};

export default function ExperienceRoute() {
  return <ProfileSectionPage section="experience" />;
}
