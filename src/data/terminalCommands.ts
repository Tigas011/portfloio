import { TerminalCommand } from "@/types/portfolio";

export const terminalCommands: TerminalCommand[] = [
  {
    id: "whoami",
    command: "whoami",
    label: "Identificação do perfil profissional",
    outputLines: [
      "Perfil: Analista de Suporte Técnico N2 / Infraestrutura Corporativa",
      "Foco: Sustentação de Sistemas, Governança de TI e Engenharia de Software",
      "Abordagem: Pragmatismo técnico, resolução analítica de incidentes e automação contínua",
      "Status: Disponível para atuações estratégicas em Operações e Desenvolvimento",
    ],
  },
  {
    id: "stack-list",
    command: "stack --list",
    label: "Listagem de tecnologias por maturidade",
    outputLines: [
      "[PRODUÇÃO CORPORATIVA COMPROVADA]",
      "  - Infraestrutura: Windows, Active Directory, Servidores, Redes (DNS, DHCP, VPN)",
      "  - Segurança: pfSense, UniFi",
      "  - Plataformas: Microsoft 365 (Exchange, SharePoint), Google Workspace",
      "  - Automação Operacional: Google Apps Script",
      "",
      "[ESTUDO ESTRUTURADO & PROJETOS EXPERIMENTAIS]",
      "  - Frontend / Backend: React, Next.js, TypeScript, Python, APIs REST",
      "  - Dados & Persistência: Bancos de dados SQL e NoSQL",
      "  - Engenharia & Práticas: Clean Code, SOLID, Design Patterns, Testes",
      "  - DevOps & Cloud: Docker, CI/CD, Fundamentos de Computação em Nuvem",
    ],
  },
  {
    id: "automation-case",
    command: "automation --case",
    label: "Demonstração do caso de automação operacional",
    outputLines: [
      "[CASO: Otimização de Processos com Google Apps Script]",
      "  - Contexto: Processamento manual recorrente em rotinas administrativas de suporte",
      "  - Solução: Script determinístico integrado a formulários e planilhas corporativas",
      "  - Resultado: Eliminação de tarefas manuais repetitivas e padronização na entrada de dados",
      "  - Classificação: Experiência Prática Comprovada (Produção)",
    ],
  },
  {
    id: "studies-roadmap",
    command: "studies --roadmap",
    label: "Eixos prioritários de estudo e evolução técnica",
    outputLines: [
      "[EIXO 1] Arquitetura de Software e Código Limpo (SOLID, Design Patterns)",
      "[EIXO 2] Desenvolvimento Full Stack com TypeScript, Next.js e Python",
      "[EIXO 3] Automação, Integração de APIs e Bancos de Dados",
      "[EIXO 4] Conteinerização com Docker e Pipelines de CI/CD",
    ],
  },
];
