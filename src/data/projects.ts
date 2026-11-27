import { ProjectItem } from "@/types/portfolio";

export const projects: ProjectItem[] = [
  {
    slug: "automacao-auditoria-google-workspace",
    title: "Auditoria de permissões no Google Drive",
    shortDescription:
      "Uma rotina em Apps Script que reúne, em um relatório, quem pode acessar cada pasta compartilhada.",
    category: "automation",
    nature: "professional",
    isSanitizedCorporateCase: true,
    context:
      "Ambiente corporativo com múltiplos drives compartilhados necessitando de controle de privilégio mínimo e auditoria periódica de acessos.",
    problem:
      "Revisar pasta por pasta dificultava encontrar permissões herdadas, contas inativas e acessos externos que precisavam de atenção.",
    solution:
      "Escrevi um script que percorre as pastas pela API do Drive, cruza os acessos com a lista de colaboradores e reúne os resultados para revisão.",
    architectureSteps: [
      {
        stepNumber: "01",
        label: "Coleta e Varredura",
        detail: "Mapeamento recursivo de pastas, arquivos e permissões via Drive API / Apps Script.",
      },
      {
        stepNumber: "02",
        label: "Normalização e Filtro",
        detail: "Cruzamento com base corporativa para detecção de privilégios excessivos e acessos externos.",
      },
      {
        stepNumber: "03",
        label: "Relatório de Governança",
        detail: "Exportação automatizada de dados consolidados para revisão periódica de segurança.",
      },
    ],
    technologies: [
      "Google Apps Script",
      "Google Workspace Admin",
      "Drive API",
      "Governança de Acessos",
      "Automação Operacional",
    ],
  },
  {
    slug: "arquitetura-portfolio-nextjs",
    title: "Este portfólio, por dentro",
    shortDescription:
      "Como organizei meus projetos, minha experiência e um terminal interativo em uma aplicação Next.js.",
    category: "software-eng",
    nature: "personal-project",
    isSanitizedCorporateCase: false,
    context:
      "Construção de plataforma profissional orientada a alto desempenho, acessibilidade e demonstração prática de habilidades em desenvolvimento frontend e arquitetura limpa.",
    problem:
      "Eu precisava mostrar quais tecnologias uso no trabalho, quais estudo e como as aplico em projetos concretos.",
    solution:
      "Separei o conteúdo em dados tipados e criei componentes para os casos de projeto. No laboratório, dá para explorar meu perfil digitando comandos predefinidos.",
    architectureSteps: [
      {
        stepNumber: "01",
        label: "Camada de Dados Tipada",
        detail: "Contratos TypeScript rígidos e separação clara entre produção corporativa e projetos de estudo.",
      },
      {
        stepNumber: "02",
        label: "Design Tokens & UI",
        detail: "Cores, tipografia e componentes compartilhados com Tailwind CSS.",
      },
      {
        stepNumber: "03",
        label: "CLI & Renderização Estática",
        detail: "Terminal determinístico client-side sem chamadas externas e SSG para performance máxima.",
      },
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS",
      "Design System",
      "App Router",
    ],
    repositoryUrl: "https://github.com/Tigas011/portfloio",
  },
];
