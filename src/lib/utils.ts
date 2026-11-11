import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EvidenceNature, ProjectCategory, SkillDomain } from "@/types/portfolio";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export interface BadgeStyleConfig {
  label: string;
  badgeClass: string;
  dotClass: string;
}

export function getNatureBadgeConfig(nature: EvidenceNature): BadgeStyleConfig {
  switch (nature) {
    case "professional":
      return {
        label: "Experiência Profissional",
        badgeClass: "bg-zinc-900/90 text-zinc-300 border-zinc-800",
        dotClass: "bg-emerald-400",
      };
    case "personal-project":
      return {
        label: "Projeto Próprio",
        badgeClass: "bg-zinc-900/90 text-zinc-300 border-zinc-800",
        dotClass: "bg-blue-400",
      };
    case "academic":
      return {
        label: "Projeto Acadêmico",
        badgeClass: "bg-zinc-900/90 text-zinc-300 border-zinc-800",
        dotClass: "bg-purple-400",
      };
    case "study":
      return {
        label: "Em Estudo / Lab",
        badgeClass: "bg-zinc-900/90 text-zinc-300 border-zinc-800",
        dotClass: "bg-amber-400",
      };
  }
}

export function getCategoryLabel(category: ProjectCategory): string {
  switch (category) {
    case "infra-cloud":
      return "Infraestrutura & Nuvem";
    case "software-eng":
      return "Engenharia de Software";
    case "automation":
      return "Automação de Processos";
    case "devops-systems":
      return "DevOps & Sistemas";
  }
}

export function getDomainLabel(domain: SkillDomain): string {
  switch (domain) {
    case "infrastructure-networks":
      return "Infraestrutura & Redes";
    case "corporate-platforms":
      return "Plataformas Corporativas";
    case "software-development":
      return "Desenvolvimento de Software";
    case "architecture-devops":
      return "Arquitetura & DevOps";
  }
}
