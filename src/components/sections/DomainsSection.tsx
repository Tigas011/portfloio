import { SectionHeading } from "@/components/ui/SectionHeading";
import { dictionaryPtBR } from "@/data/dictionary";

export function DomainsSection() {
  const domains = dictionaryPtBR.sections.domains;

  const areas = [
    {
      id: "infra-networks",
      title: "Infraestrutura & Redes",
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

      <ul className="divide-y divide-white/15 border-y border-white/15">
        {areas.map((area) => (
          <li key={area.id} className="grid gap-3 py-5 md:grid-cols-[1fr_2fr] md:gap-10">
            <h3 className="text-lg font-semibold text-[#f3efe5]">{area.title}</h3>
            <div>
              <p className="max-w-prose leading-relaxed text-zinc-300">{area.description}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#bcebd2]">{area.highlights.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
