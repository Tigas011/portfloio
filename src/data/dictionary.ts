import { SupportedLocale } from "@/types/portfolio";

export interface DictionaryContent {
  meta: {
    title: string;
    description: string;
    locale: SupportedLocale;
  };
  author: {
    name: string;
    role: string;
    location: string;
    availability: string;
  };
  navigation: {
    home: string;
    about: string;
    domains: string;
    skills: string;
    experience: string;
    projects: string;
    techLab: string;
    studies: string;
    contact: string;
  };
  sections: {
    hero: {
      index: string;
      eyebrow: string;
      headline: string;
      subheadline: string;
      primaryCta: string;
      secondaryCta: string;
    };
    about: {
      index: string;
      title: string;
      subtitle: string;
      paragraphs: string[];
    };
    domains: {
      index: string;
      title: string;
      subtitle: string;
    };
    skills: {
      index: string;
      title: string;
      subtitle: string;
      filterAll: string;
    };
    experience: {
      index: string;
      title: string;
      subtitle: string;
    };
    projects: {
      index: string;
      title: string;
      subtitle: string;
      emptyStateNotice: string;
    };
    techLab: {
      index: string;
      title: string;
      subtitle: string;
    };
    studies: {
      index: string;
      title: string;
      subtitle: string;
    };
    contact: {
      index: string;
      title: string;
      subtitle: string;
    };
  };
  common: {
    verifiedLabel: string;
    studyLabel: string;
    statusPending: string;
  };
}

export const dictionaryPtBR: DictionaryContent = {
  meta: {
    title: "Thiago Souza de Almeida | Infraestrutura & Engenharia de Software",
    description:
      "Portfólio profissional. Especialista em diagnosticar ambientes críticos, blindar redes corporativas e construir automações com código.",
    locale: "pt-BR",
  },
  author: {
    name: "Thiago Souza de Almeida",
    role: "Analista de Suporte N2 (Infra & Cloud) | Engenharia de Software",
    location: "Guarulhos, SP (Presencial / Híbrido / Remoto)",
    availability: "Disponível para Conexões & Oportunidades",
  },
  navigation: {
    home: "Início",
    about: "Sobre",
    domains: "Áreas de Atuação",
    skills: "Competências",
    experience: "Experiência",
    projects: "Projetos",
    techLab: "Tech Lab",
    studies: "Estudos & Evolução",
    contact: "Contato",
  },
  sections: {
    hero: {
      index: "01 // APRESENTAÇÃO",
      eyebrow: "INFRAESTRUTURA & ENGENHARIA DE SOFTWARE",
      headline: "Sustentação de Ambientes Críticos & Engenharia de Software",
      subheadline:
        "Experiência consolidada em suporte técnico N2, administração de ambientes corporativos Windows, redes, segurança de borda e automações operacionais, combinada ao estudo contínuo de arquitetura de software, desenvolvimento full stack e práticas modernas de DevOps.",
      primaryCta: "Ver Projetos em Destaque",
      secondaryCta: "Acessar Currículo (PDF)",
    },
    about: {
      index: "02 // SOBRE MIM",
      title: "Trajetória Técnica e Abordagem Prática",
      subtitle: "Da sustentação operacional e infraestrutura à construção de software confiável.",
      paragraphs: [
        "Atuo com foco na estabilidade, governança e resolução analítica de problemas em ambientes corporativos de tecnologia.",
        "Minha vivência prática abrange a sustentação de sistemas, administração de usuários e políticas em Active Directory e ecossistemas Microsoft 365 e Google Workspace, além do gerenciamento de redes e firewalls para garantir continuidade operacional.",
        "Paralelamente, aprofundo continuamente meus conhecimentos em Engenharia de Software, aplicando conceitos de Clean Code, SOLID, tipagem estática e conteinerização em laboratórios e estudos práticos.",
      ],
    },
    domains: {
      index: "03 // ÁREAS DE ATUAÇÃO",
      title: "Domínios de Conhecimento e Aplicação",
      subtitle: "Equilíbrio entre confiabilidade de infraestrutura e engenharia de aplicações.",
    },
    skills: {
      index: "04 // COMPETÊNCIAS",
      title: "Matriz Técnica de Habilidades",
      subtitle: "Especificações detalhadas divididas por pilares de atuação.",
      filterAll: "Todas as Competências",
    },
    experience: {
      index: "05 // EXPERIÊNCIA",
      title: "Atuação Profissional Corporativa",
      subtitle: "Histórico de responsabilidade técnica em sustentação, suporte N2 e infraestrutura.",
    },
    projects: {
      index: "06 // PROJETOS",
      title: "Projetos em Destaque",
      subtitle: "Estudos de caso reais em automação corporativa e desenvolvimento web.",
      emptyStateNotice: "Casos documentados em auditoria e governança técnica.",
    },
    techLab: {
      index: "07 // TECH LAB",
      title: "Interactive System CLI — Inspecione meu Perfil via Linha de Comando",
      subtitle: "Simulação interativa de terminal para consulta técnica e visualização da stack.",
    },
    studies: {
      index: "08 // ESTUDOS & EVOLUÇÃO",
      title: "Trilha de Formação e Especialização",
      subtitle: "Foco contínuo em boas práticas de arquitetura, testes e cloud computing.",
    },
    contact: {
      index: "09 // CONTATO",
      title: "Canais de Comunicação",
      subtitle: "Conexão profissional para oportunidades e troca técnica.",
    },
  },
  common: {
    verifiedLabel: "Produção",
    studyLabel: "Estudo",
    statusPending: "Em Validação",
  },
};
