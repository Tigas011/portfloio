import { ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    id: "support-n2-inside",
    role: "Analista de Suporte N2",
    periodLabel: "Jul 2026 – Atual",
    environmentType: "Inside Soluções e Gestão de TI — Infraestrutura & Cloud",
    summary:
      "Responsável pela sustentação crítica de ambientes corporativos híbridos, governança de identidades e acessos (IAM), automação de processos operacionais via PowerShell e Scripts, além da administração de redes, firewalls pfSense e centrais PABX Yeastar.",
    responsibilities: [
      "Automação Cloud & Governança: Gestão de Microsoft 365 e Exchange Online, otimizando o tempo operacional no onboarding/offboarding através de scripts em PowerShell e políticas de grupo (GPO).",
      "Sustentação de Sistemas & ERP: Sustentação crítica e resolução de incidentes fiscais/operacionais em sistemas ERP, prevenindo paradas no faturamento de ambientes corporativos.",
      "Governança de Acessos (IAM): Auditoria de diretórios de permissão e falhas de autenticação em ambientes híbridos NTFS (Windows Server) e Samba (Linux), mitigando vulnerabilidades de acesso indevido.",
      "Administração de Redes & VoIP: Gerenciamento de regras de tráfego, NAT e VPN em firewalls pfSense e administração de centrais PABX Yeastar (SIP/Trunks), reduzindo chamados recorrentes com CFTV/VoIP e impressoras de rede.",
    ],
    technologiesUsed: [
      "Windows Server",
      "Active Directory",
      "GPO",
      "PowerShell",
      "Microsoft 365",
      "Exchange Online",
      "Linux Samba",
      "pfSense",
      "VPN",
      "PABX Yeastar",
      "Google Apps Script",
    ],
  },
  {
    id: "helpdesk-n1-inside",
    role: "Técnico Helpdesk N1",
    periodLabel: "Jan 2026 – Jul 2026",
    environmentType: "Inside Soluções e Gestão de TI — Suporte Técnico",
    summary:
      "Manutenção de alta taxa de resolução no primeiro contato (FCR) e cumprimento rigoroso de SLAs, com triagem técnica estruturada de incidentes para redução do TMA e retrabalho da equipe de infraestrutura.",
    responsibilities: [
      "Resolução e Métricas de SLA: Manutenção de alta taxa de resolução no primeiro contato (FCR) e cumprimento de SLA no atendimento de hardware, sistemas operacionais Windows, Office e redes locais.",
      "Triagem e Escalonamento Qualificado: Estruturação da triagem técnica de incidentes N1/N2 com registro padronizado de logs, reduzindo o retrabalho da equipe de infraestrutura e o tempo médio de atendimento (TMA).",
    ],
    technologiesUsed: [
      "Windows",
      "Office 365",
      "Active Directory",
      "ITSM",
      "Redes Locais",
      "Hardware",
    ],
  },
  {
    id: "estagio-helpdesk-inside",
    role: "Estágio em Helpdesk",
    periodLabel: "Out 2025 – Dez 2025",
    environmentType: "Inside Soluções e Gestão de TI — Suporte Operacional",
    summary:
      "Suporte ágil presencial e remoto, manutenção preventiva de estações de trabalho, padronização de ambientes e controle de inventário de ativos de TI.",
    responsibilities: [
      "Diagnóstico e Suporte Operacional: Suporte ágil presencial e remoto, manutenção preventiva de estações de trabalho, padronização de ambientes e controle de inventário de ativos.",
    ],
    technologiesUsed: [
      "Windows",
      "Office",
      "Hardware",
      "Suporte Presencial & Remoto",
      "Inventário de Ativos",
    ],
  },
];
