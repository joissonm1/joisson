import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Joisson Miguel | Data Analyst & Software Engineer",
  description:
    "Professional portfolio focused on data analysis, software engineering, and decision-oriented digital solutions.",
};

export default function Home() {
  return <HomePage />;
}
