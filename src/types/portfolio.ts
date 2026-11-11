export type SupportedLocale = 'pt-BR' | 'en-US';

/**
 * Classificação estrita de origem e maturidade para transparência com o recrutador:
 * - professional: Experiência prática comprovada em ambiente corporativo
 * - personal-project: Conhecimento aplicado em projetos próprios/experimentais
 * - academic: Projetos e práticas desenvolvidas no contexto acadêmico
 * - study: Conhecimento conceitual, laboratório e estudos em andamento
 */
export type EvidenceNature =
  | 'professional'
  | 'personal-project'
  | 'academic'
  | 'study';

export type ProjectCategory =
  | 'infra-cloud'
  | 'software-eng'
  | 'automation'
  | 'devops-systems';

export type SkillDomain =
  | 'infrastructure-networks'
  | 'corporate-platforms'
  | 'software-development'
  | 'architecture-devops';

export interface SkillItem {
  id: string;
  name: string;
  domain: SkillDomain;
  nature: EvidenceNature;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  periodLabel: string;
  environmentType: string; // Ex: "Ambiente Corporativo — Operações de TI" (sem expor clientes)
  summary: string;
  responsibilities: string[];
  technologiesUsed: string[];
}

export interface ArchitectureStep {
  stepNumber: string;
  label: string;
  detail: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  nature: EvidenceNature;
  context: string;
  problem: string;
  solution: string;
  architectureSteps: ArchitectureStep[];
  technologies: string[];
  repositoryUrl?: string; // Opcional (não obrigatório para scripts internos/confidenciais)
  liveDemoUrl?: string;   // Opcional
  isSanitizedCorporateCase?: boolean;
}

export interface TerminalCommand {
  id: string;
  command: string;
  label: string;
  outputLines: string[];
}

export interface StudyTrackItem {
  id: string;
  title: string;
  area: string;
  nature: 'academic' | 'study';
  topics: string[];
  currentFocus: string;
}
