import { StudyTrackItem } from "@/types/portfolio";

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
  year?: string;
}

export interface AcademicItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  nature: "academic" | "study";
}

export const academicFormation: AcademicItem[] = [
  {
    id: "eng-software-ucsal",
    degree: "Bacharelado em Engenharia de Software (3º Semestre)",
    institution: "Universidade Cruzeiro do Sul",
    period: "Ago 2026 – Jul 2029",
    status: "Previsto",
    nature: "academic",
  },
  {
    id: "ads-ung",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
    institution: "Universidade Guarulhos – UNG",
    period: "Fev 2025 – Jun 2026",
    status: "Transferido para Eng. de Software",
    nature: "academic",
  },
  {
    id: "tecnico-informatica-senac",
    degree: "Técnico em Informática",
    institution: "Senac São Paulo",
    period: "Fev 2023 – Out 2024",
    status: "Transição para ADS & Estágio",
    nature: "academic",
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "yeastar-ysct",
    title: "Yeastar Certified Technician (YSCT)",
    issuer: "Yeastar — Administração de PABX IP e VoIP",
    status: "Certificação Concluída",
  },
  {
    id: "pfsense-udemy",
    title: "pfSense Firewall & VPN: Do Zero ao Avançado",
    issuer: "Udemy — Formação Técnica",
    status: "Concluído",
  },
  {
    id: "az900-udemy",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Udemy — Curso Preparatório Completo",
    status: "Concluído",
  },
  {
    id: "python-js-web",
    title: "Programação em Python & JavaScript Moderno para Web",
    issuer: "Formação Complementar",
    status: "Concluído",
  },
];

export const studyTracks: StudyTrackItem[] = [
  {
    id: "software-engineering-principles",
    title: "Arquitetura de Software & Boas Práticas",
    area: "Evolução Técnica Contínua",
    nature: "study",
    topics: [
      "Princípios SOLID aplicados à orientação a objetos e funções",
      "Clean Code, refatoração segura e boas práticas de nomenclatura",
      "Padrões de projeto criacionais e estruturais",
      "Separação de conceitos em camadas arquiteturais",
    ],
    currentFocus: "Aprofundamento em design patterns e modularização de código desacoplado.",
  },
  {
    id: "fullstack-modern",
    title: "Desenvolvimento Full Stack & APIs",
    area: "Aplicações Web",
    nature: "study",
    topics: [
      "Ecossistema TypeScript com tipagem estrita e contratos de dados",
      "Next.js (App Router, Server/Client Components, SSR e otimização)",
      "Desenvolvimento de scripts e lógicas em Python",
      "Consumo e construção de APIs REST padronizadas",
      "Fundamentos de modelagem e persistência em bancos SQL e NoSQL",
    ],
    currentFocus: "Aplicações práticas conectando interfaces React a serviços e persistência de dados.",
  },
  {
    id: "devops-cloud",
    title: "DevOps, Conteinerização e Cloud",
    area: "Infraestrutura Moderna",
    nature: "study",
    topics: [
      "Isolamento e empacotamento de aplicações com Docker e Docker Compose",
      "Conceitos fundamentais de integração e entrega contínua (CI/CD)",
      "Modelos de serviço em nuvem (IaaS, PaaS) e provisionamento básico",
      "Automação e integração entre sistemas via scripts e webhooks",
    ],
    currentFocus: "Construção de pipelines de validação automatizada e laboratórios com contêineres Docker.",
  },
];
