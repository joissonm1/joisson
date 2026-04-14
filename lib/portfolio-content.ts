export type Locale = "en" | "pt";

export type Project = {
  slug: string;
  title: string;
  image: string;
  gallery?: string[];
  liveUrl?: string;
  shortDescription: {
    en: string;
    pt: string;
  };
  longDescription: {
    en: string;
    pt: string;
  };
  impact: {
    en: string;
    pt: string;
  };
  role: {
    en: string;
    pt: string;
  };
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "descobreArea",
    title: "DescobreArea",
    image: "/project-discoverarea.svg",
    gallery: [
      "/descobreArea/1.png",
      "/descobreArea/2.png",
      "/descobreArea/3.png",
      "/descobreArea/4.png",
      "/descobreArea/5.png",
    ],
    liveUrl: "https://www.descobrearea.app/",
    shortDescription: {
      en: "A platform that helps beginners choose the right tech career path based on profile and market demand.",
      pt: "Uma plataforma que ajuda iniciantes a escolherem a carreira tech ideal com base no perfil e na demanda do mercado.",
    },
    longDescription: {
      en: "DescobreArea combines user profiling, learning-path recommendations, and market trend snapshots. The product was designed to reduce early-stage frustration and improve clarity for people entering tech.",
      pt: "O DescobreArea combina perfil de usuário, recomendações de trilhas de aprendizagem e visão de tendências do mercado. O produto foi desenhado para reduzir frustração no início da jornada e aumentar a clareza para quem entra em tecnologia.",
    },
    impact: {
      en: "Helped improve confidence in career decisions and reduced uncertainty during onboarding journeys.",
      pt: "Ajudou a aumentar a confiança nas decisões de carreira e a reduzir incertezas durante a fase inicial da jornada.",
    },
    role: {
      en: "Product strategy, analytics definition, and full-stack implementation.",
      pt: "Estratégia de produto, definição de métricas analíticas e implementação full-stack.",
    },
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    slug: "good-health",
    title: "Good Health",
    image: "/project-good-health.svg",
    shortDescription: {
      en: "Digital health platform focused on teleconsultation workflows and secure authentication.",
      pt: "Plataforma digital de saúde focada em fluxos de teleconsulta e autenticação segura.",
    },
    longDescription: {
      en: "Good Health centralizes appointment scheduling, teleconsultation access, and patient records into one secure workflow. The system emphasizes reliability, traceability, and data privacy.",
      pt: "O Good Health centraliza agendamento, acesso à teleconsulta e registros de pacientes em um fluxo seguro. O sistema enfatiza confiabilidade, rastreabilidade e privacidade de dados.",
    },
    impact: {
      en: "Improved care accessibility and reduced process friction with secure, streamlined digital interactions.",
      pt: "Melhorou a acessibilidade ao cuidado e reduziu atritos operacionais com interações digitais seguras e otimizadas.",
    },
    role: {
      en: "Architecture planning, backend integration, and performance-oriented UX decisions.",
      pt: "Planejamento de arquitetura, integração de backend e decisões de UX orientadas a desempenho.",
    },
    stack: ["React", "Node.js", "NestJS", "FastAPI", "Docker", "PostgreSQL"],
  },
];

export const skills = {
  data: ["Excel", "Power BI", "SQL", "PostgreSQL"],
  programming: ["Python", "TypeScript", "JavaScript"],
  web: ["React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "NestJS", "FastAPI"],
  devops: ["Docker", "Linux", "Git"],
};

export const content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    controls: {
      language: "PT/EN",
      theme: "Theme",
      dark: "Dark",
      light: "Light",
    },
    hero: {
      name: "Joisson Miguel",
      headline: "Data Analyst & Software Engineer",
      subheadline:
        "Transforming data into decisions and engineering digital solutions with measurable impact.",
      ctaProjects: "View Projects",
      ctaContact: "Contact",
    },
    about: {
      title: "About Me",
      summary:
        "Computer Engineering student with experience as a Project Manager, focused on Data Analysis and digital solutions that optimize processes and support better decisions.",
      highlights: [
        "Analytical thinking",
        "Problem solving",
        "Data communication",
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Technical stack organized as an operational analytics board.",
      categories: {
        data: "Data Analysis",
        programming: "Programming",
        web: "Web",
        backend: "Backend",
        devops: "DevOps",
      },
    },
    projects: {
      title: "Projects",
      subtitle:
        "Products where software execution meets data-driven direction.",
      impactLabel: "Impact",
      stackLabel: "Stack",
      details: "See details",
      seeMore: "See more",
      visitProject: "Visit project",
      allProjectsTitle: "Project Deep Dive",
      allProjectsSubtitle:
        "Detailed view of architecture, impact, and decision-making process.",
      backHome: "Back to Home",
    },
    identity: {
      title: "Analyst Identity",
      subtitle:
        "A visual layer inspired by operational dashboards, metrics, and trend movement.",
      metrics: [
        { label: "Process visibility", value: "+37%" },
        { label: "Decision speed", value: "2.4x" },
        { label: "Data consistency", value: "99.2%" },
      ],
    },
    experience: {
      title: "Experience",
      role: "Project Manager",
      period: "2026 - Present",
      points: [
        "Data-driven decisions",
        "Management process improvement",
        "Efficiency improvement",
      ],
    },
    education: {
      title: "Education",
      items: [
        "Computer Engineering (ISPTEC)",
        "42 Luanda (Software Engineering)",
      ],
    },
    achievements: {
      title: "Achievements",
      items: ["Hackathons - 2nd place Mapazzz", "Competitive Programming"],
    },
    contact: {
      title: "Contact",
      subtitle:
        "Open to opportunities in Data Analysis and Software Engineering.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  pt: {
    nav: {
      home: "Inicio",
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
    },
    controls: {
      language: "PT/EN",
      theme: "Tema",
      dark: "Escuro",
      light: "Claro",
    },
    hero: {
      name: "Joisson Miguel",
      headline: "Data Analyst & Software Engineer",
      subheadline:
        "Transformando dados em decisoes e construindo solucoes digitais com impacto mensuravel.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Contato",
    },
    about: {
      title: "Sobre Mim",
      summary:
        "Estudante de Engenharia Informatica com experiencia como Project Manager, focado em Analise de Dados e solucoes digitais para otimizar processos e apoiar melhores decisoes.",
      highlights: [
        "Pensamento analitico",
        "Resolucao de problemas",
        "Comunicacao de dados",
      ],
    },
    skills: {
      title: "Skills",
      subtitle:
        "Stack tecnico organizado como um painel operacional de analise.",
      categories: {
        data: "Analise de Dados",
        programming: "Programacao",
        web: "Web",
        backend: "Backend",
        devops: "DevOps",
      },
    },
    projects: {
      title: "Projetos",
      subtitle:
        "Produtos onde execucao de software encontra direcao por dados.",
      impactLabel: "Impacto",
      stackLabel: "Stack",
      details: "Ver detalhes",
      seeMore: "Ver mais",
      visitProject: "Visitar projeto",
      allProjectsTitle: "Detalhamento dos Projetos",
      allProjectsSubtitle:
        "Visao detalhada de arquitetura, impacto e processo de decisao.",
      backHome: "Voltar ao Inicio",
    },
    identity: {
      title: "Identidade Analitica",
      subtitle:
        "Uma camada visual inspirada em dashboards operacionais, metricas e movimento de tendencia.",
      metrics: [
        { label: "Visibilidade de processos", value: "+37%" },
        { label: "Velocidade de decisao", value: "2.4x" },
        { label: "Consistencia de dados", value: "99.2%" },
      ],
    },
    experience: {
      title: "Experiencia",
      role: "Project Manager",
      period: "2026 - Presente",
      points: [
        "Decisoes orientadas por dados",
        "Melhoria de processos de gestao",
        "Aumento de eficiencia",
      ],
    },
    education: {
      title: "Formacao",
      items: [
        "Engenharia Informatica (ISPTEC)",
        "42 Luanda (Engenharia de Software)",
      ],
    },
    achievements: {
      title: "Conquistas",
      items: ["Hackathons - 2 lugar no Mapazzz", "Programacao competitiva"],
    },
    contact: {
      title: "Contato",
      subtitle:
        "Aberto a oportunidades em Analise de Dados e Engenharia de Software.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
} as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
