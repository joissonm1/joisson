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
    slug: "boa-saude",
    title: "Boa Saúde",
    image: "/boa/boa.png",
    gallery: [
      "/boa/boa.png",
      "/boa/boa2.png",
      "/boa/boa3.png",
      "/boa/boa4.png",
      "/boa/boa5.png",
      "/boa/boa6.png",
    ],
    shortDescription: {
      en: "A telemedicine platform connecting patients to independent doctors for remote consultations, with a geolocated directory of clinics and hospitals.",
      pt: "Uma plataforma de telemedicina que conecta pacientes a médicos independentes para consultas remotas, com um diretório geolocalizado de clínicas e hospitais.",
    },
    longDescription: {
      en: "Boa Saúde is a telemedicine platform that connects patients to independent doctors for remote consultations via video or phone. It also integrates a geolocated directory of clinics and hospitals, allowing patients to find nearby healthcare services. The platform enables doctors to register, define their availability, and earn income by attending patients remotely, while clinics can list their services and available procedures.",
      pt: "O Boa Saúde é uma plataforma de telemedicina que conecta pacientes a médicos independentes para consultas remotas por vídeo ou telefone. Integra também um diretório geolocalizado de clínicas e hospitais, permitindo que pacientes encontrem serviços de saúde próximos. A plataforma permite que médicos se registem, definam sua disponibilidade e gerem renda atendendo pacientes remotamente, enquanto clínicas podem cadastrar seus serviços e procedimentos disponíveis.",
    },
    impact: {
      en: "Democratizes access to healthcare in Angola by eliminating geographic and time barriers, optimizing professionals' time, and providing patients with convenience and transparency in finding essential health services.",
      pt: "Democratiza o acesso à saúde em Angola ao eliminar barreiras geográficas e temporais, otimizando o tempo dos profissionais e proporcionando aos pacientes conveniência e transparência na localização de serviços essenciais de saúde.",
    },
    role: {
      en: "Full-stack development and product architecture design.",
      pt: "Desenvolvimento full-stack e design da arquitetura do produto.",
    },
    stack: ["React", "Node.js", "NestJS", "PostgreSQL"],
  },
  {
    slug: "smartquote",
    title: "SmartQuote",
    image: "/smart/smart.png",
    gallery: [
      "/smart/smart.png",
      "/smart/smart1.png",
      "/smart/smart2.png",
      "/smart/smart3.png",
      "/smart/smart4.png",
      "/smart/smart5.png",
      "/smart/smart6.png",
    ],
    shortDescription: {
      en: "An AI-powered platform that automates the procurement quotation pipeline — from email parsing to supplier comparison and approval workflows.",
      pt: "Uma plataforma com IA que automatiza o pipeline de cotação de compras — desde a leitura de e-mails até a comparação de fornecedores e fluxos de aprovação.",
    },
    longDescription: {
      en: "SmartQuote was developed during a hackathon to solve a real procurement problem: companies receive quotation requests by email, and the traditional process is manual, slow, and error-prone. SmartQuote transforms this into an automated pipeline: request capture → AI interpretation → supplier contact → proposal comparison → quotation generation → approval workflow → history and analytics. It uses NLP to extract structured data from emails, classifies and normalizes items, suggests prices based on history, and includes an AI assistant for quick queries on quotation status and supplier performance.",
      pt: "O SmartQuote foi desenvolvido durante um hackathon para resolver um problema real de procurement: empresas recebem pedidos de cotação por e-mail e o processo tradicional é manual, lento e propenso a erros. O SmartQuote transforma isso num pipeline automatizado: captura do pedido → interpretação com IA → contacto de fornecedores → comparação de propostas → geração da cotação → workflow de aprovação → histórico e analytics. Utiliza NLP para extrair dados estruturados de e-mails, classifica e normaliza itens, sugere preços com base em histórico e inclui um assistente com IA para consultas rápidas sobre status de cotações e desempenho de fornecedores.",
    },
    impact: {
      en: "Reduces operational time, standardizes responses, and increases compliance and control in the procurement process through intelligent automation and audit trails.",
      pt: "Reduz o tempo operacional, padroniza respostas e aumenta o compliance e controlo no processo de compras através de automação inteligente e trilhas de auditoria.",
    },
    role: {
      en: "Full-stack development with AI integration and system architecture.",
      pt: "Desenvolvimento full-stack com integração de IA e arquitetura do sistema.",
    },
    stack: ["React", "Node.js", "NestJS", "PostgreSQL", "Python"],
  },
  {
    slug: "vaks",
    title: "VAKS",
    image: "/vaks/vaks1.png",
    gallery: [
      "/vaks/vaks1.png",
      "/vaks/vaks2.png",
      "/vaks/vaks3.png",
      "/vaks/vaks4.png",
      "/vaks/vaks5.png",
      "/vaks/vaks6.png",
    ],
    shortDescription: {
      en: "A crowdfunding platform inspired by 'vaquinha' with an integrated simulated cryptocurrency ecosystem — the final project at 42 Luanda.",
      pt: "Uma plataforma de angariação de fundos inspirada no conceito de 'vaquinha' com um ecossistema de criptomoeda simulada integrado — projeto final na 42 Luanda.",
    },
    longDescription: {
      en: "VAKS is a crowdfunding platform built as the final project (ft_transcendence) at 42 Luanda. It features a simulated internal cryptocurrency that creates a digital ecosystem of trust, transparency, and collaboration. Each user has a VAKS digital wallet to send, receive, and contribute funds. The platform supports public campaigns (open to all, ideal for social causes and creative projects) and private campaigns (invite-based with permission controls, perfect for closed groups like friends, family, or teams).",
      pt: "O VAKS é uma plataforma de angariação de fundos construída como projeto final (ft_transcendence) na 42 Luanda. Integra uma criptomoeda interna simulada, criando um ecossistema digital de confiança, transparência e colaboração. Cada utilizador possui uma carteira digital VAKS para enviar, receber e contribuir com fundos. A plataforma suporta campanhas públicas (abertas a todos, ideais para causas sociais e projetos criativos) e campanhas privadas (baseadas em convites com controlo de permissões, perfeitas para grupos fechados como amigos, família ou equipas).",
    },
    impact: {
      en: "Enables transparent and collaborative fundraising through a digital-first approach, with full transaction traceability and flexible campaign management for both public and private use cases.",
      pt: "Permite angariação de fundos transparente e colaborativa através de uma abordagem digital, com rastreabilidade total de transações e gestão flexível de campanhas para casos de uso públicos e privados.",
    },
    role: {
      en: "Full-stack development, blockchain integration, and platform architecture.",
      pt: "Desenvolvimento full-stack, integração blockchain e arquitetura da plataforma.",
    },
    stack: ["React", "Node.js", "NestJS", "PostgreSQL", "Blockchain"],
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
        { label: "Process visibility", value: "Real-time" },
        { label: "Decision speed", value: "Action-ready" },
        { label: "Data consistency", value: "Single source" },
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
        "Participation - NOSSA Seguros Hackathon",
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
              slug: "olimpiadas-2026",
              title: "1st Place - Olympics Hackathon",
              description:
                "At the 2026 Angolan Youth Knowledge and Talent Olympics, representing ISPTEC, our team won the hackathon. Challenge: how to connect universities to the job market. We built Unibridge, a digital platform that connects students, employers, professors, and universities in one ecosystem with personalized recommendations, progress tracking, and professional profiles.",
              image: "/Olimpiadas/1.png",
              gallery: [
                "/Olimpiadas/1.png",
                "/Olimpiadas/2.png",
                "/Olimpiadas/3.jpeg",
                "/Olimpiadas/4.jpeg",
                "/Olimpiadas/5.jpeg",
              ],
              details: {
                context:
                  "At the 2026 Angolan Youth Knowledge and Talent Olympics, representing ISPTEC, we won the hackathon.",
                challenge:
                  "How to bring universities closer to the job market.",
                solution:
                  "Unibridge, a digital platform connecting students, employers, professors, and universities in a single ecosystem with personalized recommendations, progress tracking, and professional profiles.",
                team: [
                  {
                    area: "Backend",
                    members: [
                      "Jesse Ingles",
                      "Willfredy Vieira Dias",
                      "Sebastiao Sukuakueche",
                    ],
                  },
                  {
                    area: "Infrastructure",
                    members: ["Victor Kangombe"],
                  },
                  {
                    area: "Frontend",
                    members: ["Joisson Miguel", "Orisa Melzira Ebo"],
                  },
                ],
              },
            },
            {
              slug: "mapazzz-hackathon",
              title: "2nd Place - Mapazzz Hackathon",
              description:
                "Participation in the 1st 42 Luanda Hackathon as part of Team Macrofagos, where we developed MapaZZZ, an intelligent and inclusive mobile solution focused on mapping, monitoring, and mitigating malaria, particularly in low-connectivity regions. Within a limited timeframe, we delivered a fully functional end-to-end system that combined artificial intelligence, offline-first capabilities, USSD communication, and climate data analysis to identify and predict high-risk areas. To enhance the platform's impact, we also integrated teleconsultation modules, enabling users to access basic medical guidance remotely, bridging gaps between communities and healthcare services. The project stood out for its innovative approach, technical depth, and strong commitment to social impact, reinforced by a compelling final presentation.",
              image: "/hackathons/mapazzz-hackathon.svg",
            },
            {
              slug: "programacao-competitiva",
              title: "Competitive Programming",
              description:
                "Our team participated in the ISPTEC Programming Marathon in 2025 and finished 4th place among more than 15 teams. The competition involved complex challenges in algorithms and data structures, requiring speed, logical reasoning, and strong teamwork.",
              image: "/hackathons/competitive-programming.svg",
            },
            {
              slug: "nossa-seguros-hackathon",
              title: "NOSSA Seguros Hackathon",
              description:
                "Participation in the NOSSA Seguros Hackathon across three intense and challenging days. Although we did not win this edition, we left with equally valuable outcomes: practical learning, stronger teamwork, and hands-on experience solving real problems under pressure.",
              image: "/nossa/1.jpeg",
              gallery: [
                "/nossa/1.jpeg",
                "/nossa/2.jpeg",
                "/nossa/3.jpeg",
                "/nossa/4.jpeg",
              ],
              details: {
                context:
                  "Three intense days of collaborative work in a highly competitive and inspiring environment.",
                challenge:
                  "Develop a complete and viable solution for the challenge proposed by NOSSA Seguros within a limited timeframe.",
                solution:
                  "Our team built a functional proposal focused on real user value, clear technical direction, and practical applicability.",
                team: [
                  {
                    area: "Key takeaways",
                    members: [
                      "Learning through real-world problem solving",
                      "Healthy competition and strong collaboration",
                      "Greater motivation and readiness for upcoming hackathons",
                    ],
                  },
                ],
              },
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
      home: "Início",
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
      headline: "Analista de Dados & Engenheiro de Software",
      subheadline:
        "Transformando dados em decisões e construindo soluções digitais com impacto mensurável.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Contato",
    },
    about: {
      title: "Sobre Mim",
      summary:
        "Estudante de Engenharia Informática com experiência como Project Manager, focado em Análise de Dados e soluções digitais para otimizar processos e apoiar melhores decisões.",
      highlights: [
        "Pensamento analítico",
        "Resolução de problemas",
        "Comunicação de dados",
        "Liderança",
        "Proatividade",
        "Colaboração",
      ],
    },
    skills: {
      title: "Skills",
      subtitle:
        "Stack técnico organizado como um painel operacional de análise.",
      categories: {
        data: "Análise de Dados",
        programming: "Programação",
        web: "Web",
        backend: "Backend",
        devops: "DevOps",
      },
    },
    projects: {
      title: "Projetos",
      subtitle:
        "Produtos onde execução de software encontra direção por dados.",
      impactLabel: "Impacto",
      stackLabel: "Stack",
      details: "Ver detalhes",
      seeMore: "Ver mais",
      viewAll: "Ver todos os projetos",
      visitProject: "Visitar projeto",
      allProjectsTitle: "Detalhamento dos Projetos",
      allProjectsSubtitle:
        "Visão detalhada de arquitetura, impacto e processo de decisão.",
      backHome: "Voltar ao Início",
    },
    identity: {
      title: "Identidade Analítica",
      subtitle:
        "Uma camada visual inspirada em dashboards operacionais, métricas e movimento de tendência.",
      metrics: [
        { label: "Visibilidade de processos", value: "Tempo real" },
        { label: "Velocidade de decisão", value: "Pronto para ação" },
        { label: "Consistência de dados", value: "Fonte única" },
      ],
    },
    experience: {
      title: "Experiência",
      role: "Project Manager",
      period: "2026 - Presente",
      points: [
        "Tomada de decisão orientada por dados",
        "Otimização de processos de gestão",
        "Atuação como tutor na 42 Luanda",
        "Aumento da eficiência operacional",
      ],
    },
    education: {
      title: "Formação",
      items: [
        "Engenharia Informática - ISPTEC",
        "42 Luanda (Engenharia de Software)",
      ],
    },
    achievements: {
      title: "Conquistas",
      items: [
        "1 lugar - Hackathon das Olimpíadas",
        "Hackathon Mapazzz (42 Luanda)",
        "Participação - Hackathon NOSSA Seguros",
        "Participação em programação competitiva (Isptec)",
      ],
    },
    profile: {
      viewMore: "Ver mais",
      backHome: "Voltar ao Início",
      sections: {
        experience: {
          title: "Experiência Profissional",
          subtitle:
            "Principais pontos da minha atuação em liderança de projetos, otimização operacional e melhoria de resultados.",
          experiences: [
            {
              role: "Project Manager",
              organization: "Projetos Digitais",
              period: "2026 - Presente",
              points: [
                "Liderança de planeamento e execução de projetos com metas claras e acompanhamento contínuo.",
                "Aplicação de práticas orientadas por dados para apoiar decisões estratégicas e operacionais.",
                "Otimização de rotinas internas para reduzir gargalos e aumentar a eficiência na entrega.",
              ],
            },
            {
              role: "Tutor",
              organization: "42 Luanda",
              period: "2026 - Presente",
              points: [
                "Acompanhamento de colegas em fundamentos de programação, depuração e estruturação de projetos.",
                "Orientação em resolução colaborativa de problemas e boas práticas de qualidade de código.",
              ],
            },
          ],
        },
        education: {
          title: "Formação Académica",
          subtitle:
            "Base técnica e prática em engenharia de software, análise de dados e resolução estruturada de problemas.",
          items: [
            "Engenharia Informática - ISPTEC.",
            "42 Luanda - Engenharia de Software.",
          ],
        },
        achievements: {
          title: "Conquistas",
          subtitle:
            "Marcos relevantes que demonstram consistência, evolução técnica e mentalidade competitiva.",
          cards: [
            {
              slug: "olimpiadas-2026",
              title:
                "1 Lugar - Hackthon Olimpíadas do Saber e Talento Juvenil Angolano 2026",
              description:
                "Olimpíadas do Saber e Talento Juvenil Angolano 2026, representando o ISPTEC, e saímos vencedores do hackathon. O desafio proposto foi: como aproximar as universidades ao mercado de trabalho? A nossa solução foi a Unibridge, uma plataforma digital que conecta estudantes, empregadores, professores e universidades num único ecossistema, com recomendações personalizadas, acompanhamento de progresso e perfis profissionais. Equipa - Backend: Jesse Ingles, Willfredy Vieira Dias e Sebastião Sukuakueche; Infraestrutura: Victor Kangombe; Frontend: Joisson Miguel e Orisa Melzira Ebo.",
              image: "/Olimpiadas/1.png",
              gallery: [
                "/Olimpiadas/1.png",
                "/Olimpiadas/2.png",
                "/Olimpiadas/3.jpeg",
                "/Olimpiadas/4.jpeg",
                "/Olimpiadas/5.jpeg",
              ],
              details: {
                context:
                  "Olimpíadas do Saber e Talento Juvenil Angolano 2026, representando o ISPTEC, e saímos vencedores do hackathon.",
                challenge:
                  "Como aproximar as universidades ao mercado de trabalho?",
                solution:
                  "A nossa solução foi a Unibridge, uma plataforma digital que conecta estudantes, empregadores, professores e universidades num único ecossistema, com recomendações personalizadas, acompanhamento de progresso e perfis profissionais.",
                team: [
                  {
                    area: "Backend",
                    members: [
                      "Jesse Ingles",
                      "Willfredy Vieira Dias",
                      "Sebastião Sukuakueche",
                    ],
                  },
                  {
                    area: "Infraestrutura",
                    members: ["Victor Kangombe"],
                  },
                  {
                    area: "Frontend",
                    members: ["Joisson Miguel", "Orisa Melzira Ebo"],
                  },
                ],
              },
            },
            {
              slug: "mapazzz-hackathon",
              title: "Hackathon Mapazzz (42 Luanda)",
              description:
                "Participação no 1º Hackathon da 42 Luanda como parte da Team Macrofagos, onde desenvolvemos o MapaZZZ, uma solução mobile inteligente e inclusiva focada no mapeamento, monitorização e mitigação da malária, especialmente em regiões com baixa conectividade. Em tempo limitado, entregamos um sistema completo ponta a ponta que combinou inteligência artificial, abordagem offline-first, comunicação via USSD e análise de dados climáticos para identificar e prever zonas de alto risco. Para ampliar o impacto da plataforma, integramos também módulos de teleconsulta, permitindo aos utilizadores aceder orientação médica básica remotamente, reduzindo distâncias entre comunidades e serviços de saúde. O projeto destacou-se pela abordagem inovadora, profundidade técnica e forte compromisso com impacto social, reforçado por uma apresentação final convincente.",
              image: "/hackathons/mapazzz-hackathon.svg",
            },
            {
              slug: "programacao-competitiva",
              title: "Programação Competitiva",
              description:
                "O meu time participou na Maratona de Programação do ISPTEC no ano de 2025 e ficou em 4 lugar entre mais de 15 equipas. A competição envolveu desafios complexos de algoritmos e estruturas de dados, exigindo rapidez, raciocínio lógico e forte colaboração em equipa.",
              image: "/hackathons/competitive-programming.svg",
            },
            {
              slug: "nossa-seguros-hackathon",
              title: "Hackathon NOSSA Seguros",
              description:
                "Participei do Hackathon da NOSSA Seguros durante três dias muito intensos e desafiadores. Tivemos a oportunidade de desenvolver uma solução para o problema proposto e, embora desta vez não tenhamos alcançado a vitória, saímos com algo igualmente valioso: aprendizado e experiência. Nem sempre se vence uma competição, mas cada desafio deixa lições importantes. Foi um ambiente incrível, com competição saudável, muito trabalho em equipe e inúmeros aprendizados ao longo de todo o hackathon. Agradeço a organização pela excelente iniciativa e a todos os envolvidos por proporcionarem essa experiência. Com certeza, nos próximos hackathons voltarei mais forte, mais preparado e ainda mais motivado.",
              image: "/nossa/1.jpeg",
              gallery: [
                "/nossa/1.jpeg",
                "/nossa/2.jpeg",
                "/nossa/3.jpeg",
                "/nossa/4.jpeg",
              ],
              details: {
                context:
                  "Participação no Hackathon da NOSSA Seguros em três dias de alta intensidade e colaboração.",
                challenge:
                  "Desenvolver uma solução para o problema proposto em prazo curto, com foco em viabilidade e impacto.",
                solution:
                  "A equipa estruturou e apresentou uma proposta funcional, alinhando clareza técnica, valor prático e potencial de evolução.",
                team: [
                  {
                    area: "Aprendizados",
                    members: [
                      "Experiência real em competição de inovação",
                      "Evolução técnica e trabalho em equipe",
                      "Maior preparação para os próximos hackathons",
                    ],
                  },
                ],
              },
            },
          ],
        },
      },
    },
    contact: {
      title: "Contato",
      subtitle:
        "Aberto a oportunidades em Análise de Dados e Engenharia de Software.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
} as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAchievementBySlug(slug: string) {
  return content.en.profile.sections.achievements.cards.find(
    (achievement) => achievement.slug === slug,
  );
}
