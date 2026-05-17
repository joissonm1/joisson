import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PreferencesProvider } from "@/components/preferences-provider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joisson.me"),
  title: {
    default: "Joisson Miguel | Data Analyst & Software Engineer",
    template: "%s | Joisson Miguel",
  },
  description:
    "Portfolio website presenting projects, experience, and technical strengths at the intersection of software engineering and data analysis.",
  keywords: [
    "Data Analyst",
    "Software Engineer",
    "Power BI",
    "SQL",
    "Python",
    "Next.js",
  ],
  openGraph: {
    title: "Joisson Miguel | Data Analyst & Software Engineer",
    description:
      "Transforming data into decisions and engineering digital solutions with measurable impact.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/sem_fundo.png",
        alt: "Joisson Miguel | Data Analyst & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joisson Miguel | Data Analyst & Software Engineer",
    description:
      "Transforming data into decisions and engineering digital solutions with measurable impact.",
    images: ["/sem_fundo.png"],
  },
  icons: {
    icon: [{ url: "/sem_fundo.png", type: "image/png", sizes: "192x192" }],
    shortcut: [{ url: "/sem_fundo.png", type: "image/png" }],
    apple: [{ url: "/sem_fundo.png", sizes: "192x192" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
