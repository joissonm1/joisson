import type { Metadata } from "next";
import { ProfileSectionPage } from "@/components/profile-section-page";

export const metadata: Metadata = {
  title: "Achievements | Joisson Miguel",
  description:
    "Key milestones including hackathon placements and technical growth achievements.",
};

export default function AchievementsRoute() {
  return <ProfileSectionPage section="achievements" />;
}
