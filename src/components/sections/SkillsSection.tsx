"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import { dictionaryPtBR } from "@/data/dictionary";
import { getDomainLabel } from "@/lib/utils";
import type { EvidenceNature, SkillDomain } from "@/types/portfolio";

const highlights: Record<SkillDomain, string> = {
  "infrastructure-networks": "Windows Server, Active Directory, DNS, DHCP e VPN",
  "corporate-platforms": "Microsoft 365, Google Workspace e Apps Script",
  "software-development": "React, Next.js, TypeScript e Python",
  "architecture-devops": "Git, GitHub, Docker e CI/CD",
};

const domainList: SkillDomain[] = [
  "infrastructure-networks",
  "corporate-platforms",
  "software-development",
  "architecture-devops",
];

const domains = domainList.map((domain) => ({
  domain,
  label: getDomainLabel(domain),
  items: skills.filter((skill) => skill.domain === domain),
}));

const natureLabels: Record<EvidenceNature, string> = {
  professional: "Produção",
  "personal-project": "Projeto próprio",
  academic: "Acadêmico",
  study: "Estudo",
};

export function SkillsSection() {
  const skillsDict = dictionaryPtBR.sections.skills;
  const [activeDomain, setActiveDomain] = useState<SkillDomain | "all">("all");

  const filters = [
    { domain: "all" as const, label: skillsDict.filterAll },
    ...domains,
  ];
  const displayedDomains = activeDomain === "all"
    ? domains
    : domains.filter(({ domain }) => domain === activeDomain);

  return (
    <section
      id="competencias"
      className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24"
      aria-label="Competências técnicas"
    >
      <SectionHeading
        index={skillsDict.index}
        title={skillsDict.title}
        className="mb-8"
      />

      <ul className="grid border-t border-white/15 sm:grid-cols-2">
        {domains.map(({ domain, label, items }) => (
          <li
            key={domain}
            className="border-b border-white/15 py-5 sm:py-6 sm:odd:pr-6 sm:even:pl-6"
          >
            <p className="mb-2 text-xs font-medium text-[#bcebd2]">
              {items.every((skill) => skill.nature === "professional")
                ? "Experiência profissional"
                : "Projetos e estudos"}
            </p>
            <h3 className="mb-1.5 text-lg font-semibold text-[#f3efe5]">{label}</h3>
            <p className="text-sm leading-relaxed text-zinc-300">{highlights[domain]}</p>
          </li>
        ))}
      </ul>

      <details className="group mt-5">
        <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-sm pr-2 text-sm font-semibold text-[#bcebd2] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bcebd2] [&::-webkit-details-marker]:hidden">
          Lista completa de competências
          <ChevronDown
            aria-hidden="true"
            className="size-4 motion-safe:transition-transform group-open:rotate-180"
          />
        </summary>

        <div className="pt-5">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por domínio">
            {filters.map(({ domain, label }) => (
              <button
                key={domain}
                type="button"
                onClick={() => setActiveDomain(domain)}
                aria-pressed={activeDomain === domain}
                aria-controls="lista-competencias"
                className="min-h-11 rounded-md border border-white/20 px-3 text-sm text-zinc-300 hover:border-[#bcebd2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bcebd2] aria-pressed:border-[#bcebd2] aria-pressed:bg-[#bcebd2] aria-pressed:text-[#18201c]"
              >
                {label}
              </button>
            ))}
          </div>

          <p className="sr-only" role="status">
            {displayedDomains.reduce((count, { items }) => count + items.length, 0)} competências exibidas.
          </p>
          <div id="lista-competencias" className="mt-8 space-y-8">
            {displayedDomains.map(({ domain, label, items }) => (
              <div key={domain}>
                <h3 className="mb-3 text-base font-semibold text-[#f3efe5]">{label}</h3>
                <ul className="divide-y divide-white/10 border-y border-white/10">
                  {items.map((skill) => (
                    <li key={skill.id} className="grid gap-1 py-3 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_7rem] md:gap-6">
                      <span className="text-sm font-medium text-[#f3efe5]">{skill.name}</span>
                      <p className="text-sm leading-relaxed text-zinc-300">{skill.description}</p>
                      <span className="text-xs leading-5 text-[#bcebd2] md:text-right">
                        {natureLabels[skill.nature]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}
