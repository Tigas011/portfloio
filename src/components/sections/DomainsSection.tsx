import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { ContextBadge } from "@/components/ui/ContextBadge";
import { dictionaryPtBR } from "@/data/dictionary";
import { Server, Cloud, Terminal, Code2 } from "lucide-react";

export function DomainsSection() {
  const domains = dictionaryPtBR.sections.domains;

  const domainCards = [
    {
      id: "infra-networks",
      title: "Infraestrutura & Redes",
      icon: Server,
      accentColor: "text-emerald-400",
      accentBg: "bg-emerald-400/10 border-emerald-500/20",
      nature: "professional" as const,
      description:
        "Administração de ambientes corporativos Windows Server, governança de Active Directory, estruturação de serviços de rede (DNS, DHCP, VPN) e segurança de perímetro com firewalls pfSense e infraestrutura UniFi.",
      highlights: [
        "Windows Server & Active Directory",
        "Redes (DNS, DHCP e Túneis VPN)",
        "Firewall pfSense & UniFi",
        "Alta Disponibilidade & Continuidade",
      ],
    },
    {
      id: "corporate-platforms",
      title: "Plataformas Corporativas & Sustentação N2",
      icon: Cloud,
      accentColor: "text-emerald-400",
      accentBg: "bg-emerald-400/10 border-emerald-500/20",
      nature: "professional" as const,
      description:
        "Gestão e suporte avançado às suítes Microsoft 365 (Exchange Online e SharePoint) e Google Workspace, controle rigoroso de identidades, aplicação de políticas de acesso e atendimento a incidentes críticos de nível N2.",
      highlights: [
        "Microsoft 365 (Exchange & SharePoint)",
        "Google Workspace Admin",
        "Auditoria de Acessos & Permissões",
        "Troubleshooting Analítico de Incidentes",
      ],
    },
    {
      id: "process-automation",
      title: "Automação de Processos & Integração",
      icon: Terminal,
      accentColor: "text-blue-400",
      accentBg: "bg-blue-400/10 border-blue-500/20",
      nature: "professional" as const,
      natureLabel: "Automação em Produção",
      description:
        "Desenvolvimento prático de scripts com Google Apps Script para automatização de planilhas, formulários operacionais e fluxos administrativos, somado ao estudo de integração entre sistemas e serviços REST em laboratório.",
      highlights: [
        "Google Apps Script em Produção",
        "Eliminação de Rotinas Manuais",
        "Consumo de APIs REST (Estudo)",
        "Integração e Automação de Fluxos",
      ],
    },
    {
      id: "software-engineering",
      title: "Engenharia de Software & Arquitetura",
      icon: Code2,
      accentColor: "text-amber-400",
      accentBg: "bg-amber-400/10 border-amber-500/20",
      nature: "study" as const,
      description:
        "Construção de aplicações web estruturadas com TypeScript, React, Next.js e Python, com foco prioritário em boas práticas de arquitetura limpa, princípios SOLID, testes automatizados e conteinerização via Docker.",
      highlights: [
        "TypeScript & Next.js (App Router)",
        "Clean Code & Princípios SOLID",
        "Bancos de Dados SQL e NoSQL",
        "Conteinerização com Docker & CI/CD",
      ],
    },
  ];

  return (
    <section
      id="atuacao"
      className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
      aria-label="Áreas de atuação profissional"
    >
      <SectionHeading
        index={domains.index}
        title={domains.title}
        subtitle={domains.subtitle}
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {domainCards.map((domain) => {
          const Icon = domain.icon;

          return (
            <SurfaceCard
              key={domain.id}
              className="p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-graphite-900/80 border-zinc-800 hover:border-zinc-700 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Header do Card */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border ${domain.accentBg}`}
                  >
                    <Icon className={`w-5 h-5 ${domain.accentColor}`} aria-hidden="true" />
                  </div>
                  <ContextBadge
                    nature={domain.nature}
                    labelOverride={domain.natureLabel}
                  />
                </div>

                {/* Título e Descrição */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
                    {domain.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              </div>

              {/* Tags / Destaques do Pilar */}
              <div className="pt-4 border-t border-subtle">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  Principais Tópicos & Tecnologias
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {domain.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2.5 py-1 rounded bg-graphite-950/80 border border-subtle text-xs font-mono text-zinc-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </SurfaceCard>
          );
        })}
      </div>
    </section>
  );
}
