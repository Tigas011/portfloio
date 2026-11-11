import { ProjectItem } from "@/types/portfolio";

export const projects: ProjectItem[] = [
  {
    slug: "automacao-auditoria-google-workspace",
    title: "Automação de Auditoria de Permissões no Google Workspace",
    shortDescription:
      "Script em Google Apps Script para mapeamento automatizado de acessos, auditoria de permissões em diretórios compartilhados e geração de relatórios de governança.",
    category: "automation",
    nature: "professional",
    isSanitizedCorporateCase: true,
    context:
      "Ambiente corporativo com múltiplos drives compartilhados necessitando de controle de privilégio mínimo e auditoria periódica de acessos.",
    problem:
      "Verificação manual demorada e propensa a falhas na identificação de permissões herdadas, acessos externos e contas inativas em diretórios compartilhados.",
    solution:
      "Desenvolvimento de rotina determinística em Google Apps Script que itera sobre árvores de pastas, cruza dados com a lista de colaboradores e compila relatórios consolidados.",
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
    title: "Arquitetura Web & Portfólio Interativo em Next.js",
    shortDescription:
      "Aplicação web moderna construída com Next.js 16, React 19 e TypeScript estrito, com design system customizado em grafite e terminal determinístico interativo.",
    category: "software-eng",
    nature: "personal-project",
    isSanitizedCorporateCase: false,
    context:
      "Construção de plataforma profissional orientada a alto desempenho, acessibilidade e demonstração prática de habilidades em desenvolvimento frontend e arquitetura limpa.",
    problem:
      "Portfólios convencionais costumam depender de templates genéricos, bibliotecas pesadas e designs repetitivos sem identidade técnica autêntica.",
    solution:
      "Desenvolvimento de interface baseada em tokens Precision Graphite, App Router estável, tipagem TypeScript rígida e emulação de CLI para exploração técnica no cliente.",
    architectureSteps: [
      {
        stepNumber: "01",
        label: "Camada de Dados Tipada",
        detail: "Contratos TypeScript rígidos e separação clara entre produção corporativa e projetos de estudo.",
      },
      {
        stepNumber: "02",
        label: "Design Tokens & UI",
        detail: "Paleta Graphite minimalista com Tailwind CSS 3.4 e componentes atômicos desacoplados.",
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
    repositoryUrl: "https://github.com/Tigas011",
  },
];
