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
];

export const skills = {
  data: [
    "Excel",
    "Power BI",
    "SQL",
    "PostgreSQL",
    "Google Analytics",
    "NumPy",
    "Pandas",
    "Data Analysis",
    "KPI Dashboards",
  ],
  programming: ["C", "C++", "Java", "Python", "TypeScript", "JavaScript"],
  web: ["React", "Next.js"],
  backend: ["Node.js", "NestJS", "FastAPI", "Prisma", "MySQL", "MongoDB"],
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
        "Leadership",
        "Proactivity",
        "Collaboration",
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
      viewAll: "View all projects",
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
        "Data-driven decision making",
        "Management process optimization",
        "Tutor at 42 Luanda",
        "Operational efficiency improvement",
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
      items: [
        "1st place - Olympics Hackathon",
        "2nd place - Mapazzz Hackathon",
        "Competitive programming participation",
      ],
    },
    profile: {
      viewMore: "View more",
      backHome: "Back to Home",
      sections: {
        experience: {
          title: "Professional Experience",
          subtitle:
            "Highlights of my experience leading projects, optimizing operations, and driving measurable results.",
          experiences: [
            {
              role: "Project Manager",
              organization: "Digital Projects",
              period: "2026 - Present",
              points: [
                "Led project planning and delivery workflows with clear milestones and accountability.",
                "Implemented data-driven monitoring practices to support strategic and operational decisions.",
                "Streamlined internal routines to reduce bottlenecks and increase execution efficiency.",
              ],
            },
            {
              role: "Tutor",
              organization: "42 Luanda",
              period: "2026 - Present",
              points: [
                "Support peers in programming fundamentals, debugging, and project structuring.",
                "Guide students on collaborative problem-solving and code quality practices.",
              ],
            },
          ],
        },
        education: {
          title: "Academic Background",
          subtitle:
            "Foundational and practical education focused on software engineering and analytical thinking.",
          items: [
            "Computer Engineering - ISPTEC.",
            "42 Luanda - Software Engineering.",
            "Continuous self-learning in data analysis, systems design, and product-oriented development.",
          ],
        },
        achievements: {
          title: "Achievements",
          subtitle:
            "Relevant milestones that reflect consistency, technical growth, and competitive mindset.",
          cards: [
            {
              title: "1st Place - Olympics Hackathon",
              description:
                "Awarded first place for delivering an impactful and technically solid solution under competitive constraints.",
              image: "/hackathons/olympics-hackathon.svg",
            },
            {
              title: "2nd Place - Mapazzz Hackathon",
              description:
                "Recognized for product clarity, execution quality, and strong collaboration throughout the challenge.",
              image: "/hackathons/mapazzz-hackathon.svg",
            },
            {
              title: "Competitive Programming",
              description:
                "Continuous participation in algorithmic challenges to strengthen problem-solving speed and code precision.",
              image: "/hackathons/competitive-programming.svg",
            },
          ],
        },
      },
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
        "Lideranca",
        "Proatividade",
        "Colaboracao",
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
      viewAll: "Ver todos os projetos",
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
        "Tomada de decisao orientada por dados",
        "Otimizacao de processos de gestao",
        "Atuacao como tutor na 42 Luanda",
        "Aumento da eficiencia operacional",
      ],
    },
    education: {
      title: "Formacao",
      items: [
        "Engenharia Informatica - ISPTEC",
        "42 Luanda (Engenharia de Software)",
      ],
    },
    achievements: {
      title: "Conquistas",
      items: [
        "1 lugar - Hackathon das Olimpiadas",
        "2 lugar - Hackathon Mapazzz",
        "Participacao em programacao competitiva",
      ],
    },
    profile: {
      viewMore: "Ver mais",
      backHome: "Voltar ao Inicio",
      sections: {
        experience: {
          title: "Experiencia Profissional",
          subtitle:
            "Principais pontos da minha atuacao em lideranca de projetos, otimizacao operacional e melhoria de resultados.",
          experiences: [
            {
              role: "Project Manager",
              organization: "Projetos Digitais",
              period: "2026 - Presente",
              points: [
                "Lideranca de planeamento e execucao de projetos com metas claras e acompanhamento continuo.",
                "Aplicacao de praticas orientadas por dados para apoiar decisoes estrategicas e operacionais.",
                "Otimizacao de rotinas internas para reduzir gargalos e aumentar a eficiencia na entrega.",
              ],
            },
            {
              role: "Tutor",
              organization: "42 Luanda",
              period: "2026 - Presente",
              points: [
                "Acompanhamento de colegas em fundamentos de programacao, depuracao e estruturacao de projetos.",
                "Orientacao em resolucao colaborativa de problemas e boas praticas de qualidade de codigo.",
              ],
            },
          ],
        },
        education: {
          title: "Formacao Academica",
          subtitle:
            "Base tecnica e pratica em engenharia de software, analise de dados e resolucao estruturada de problemas.",
          items: [
            "Engenharia Informatica - ISPTEC.",
            "42 Luanda - Engenharia de Software.",
          ],
        },
        achievements: {
          title: "Conquistas",
          subtitle:
            "Marcos relevantes que demonstram consistencia, evolucao tecnica e mentalidade competitiva.",
          cards: [
            {
              title: "1 Lugar - Hackathon das Olimpiadas",
              description:
                "Conquista do primeiro lugar com uma solucao de forte impacto e execucao tecnica consistente em ambiente competitivo.",
              image: "/hackathons/olympics-hackathon.svg",
            },
            {
              title: "2 Lugar - Hackathon Mapazzz",
              description:
                "Reconhecimento pela clareza do produto, qualidade da entrega e colaboracao eficaz durante o desafio.",
              image: "/hackathons/mapazzz-hackathon.svg",
            },
            {
              title: "Programacao Competitiva",
              description:
                "Participacao continua em desafios de algoritmos para reforcar rapidez de resolucao e precisao na implementacao.",
              image: "/hackathons/competitive-programming.svg",
            },
          ],
        },
      },
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
