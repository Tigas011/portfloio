"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import { dictionaryPtBR } from "@/data/dictionary";
import type { SkillDomain } from "@/types/portfolio";
import { getDomainLabel } from "@/lib/utils";
import { Filter } from "lucide-react";

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

export function SkillsSection() {
  const skillsDict = dictionaryPtBR.sections.skills;
  const [activeDomain, setActiveDomain] = useState<SkillDomain | "all">("all");

  const filters = [
    { domain: "all" as const, label: skillsDict.filterAll, count: skills.length },
    ...domains.map(({ domain, label, items }) => ({
      domain,
      label,
      count: items.length,
    })),
  ];
  const displayedDomains = activeDomain === "all"
    ? domains
    : domains.filter(({ domain }) => domain === activeDomain);

  return (
    <section
      id="competencias"
      className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
      aria-label="Matriz de competências técnicas"
    >
      <SectionHeading
        index={skillsDict.index}
        title={skillsDict.title}
        subtitle={skillsDict.subtitle}
        className="mb-10"
      />

      <div
        className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-subtle"
        role="group"
        aria-label="Filtrar por domínio"
      >
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mr-2">
          <Filter className="w-3.5 h-3.5" aria-hidden="true" />
          <span>FILTRAR</span>
        </div>

        {filters.map(({ domain, label, count }) => {
          const isSelected = activeDomain === domain;

          return (
            <button
              key={domain}
              type="button"
              onClick={() => setActiveDomain(domain)}
              className={`min-h-[2.75rem] rounded-md border px-3 py-1.5 font-mono text-xs motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bcebd2] ${
                isSelected
                  ? "border-[#bcebd2] bg-[#bcebd2] text-[#18201c] hover:bg-[#d3f1e1]"
                  : "border-zinc-700 bg-graphite-900 text-zinc-300 hover:border-zinc-500 hover:text-white"
              }`}
              aria-pressed={isSelected}
            >
              {label} ({count})
            </button>
          );
        })}
      </div>

      <div className="space-y-12">
        {displayedDomains.map(({ domain, label, items: domainSkills }) => {
          const isProfessionalDomain = domainSkills.every(
            (s) => s.nature === "professional"
          );

          return (
            <div key={domain} className="space-y-3">
              <div className="flex items-center justify-between gap-4 pb-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isProfessionalDomain ? "bg-emerald-400" : "bg-blue-400"
                    }`}
                    aria-hidden="true"
                  />
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-zinc-200">
                    {label}
                  </h3>
                </div>
                <div className="shrink-0 font-mono text-xs text-zinc-400">
                  {domainSkills.length} itens
                </div>
              </div>

              <div className="border-y border-white/[0.08] divide-y divide-white/[0.06]">
                {domainSkills.map((skill) => {
                  let tagLabel = "Estudo";
                  let tagStyle =
                    "text-amber-400/90 bg-amber-500/10 border-amber-500/20";

                  if (skill.nature === "professional") {
                    tagLabel = "Produção";
                    tagStyle =
                      "text-emerald-400/90 bg-emerald-500/10 border-emerald-500/20";
                  } else if (skill.nature === "personal-project") {
                    tagLabel = "Projeto";
                    tagStyle =
                      "text-blue-400/90 bg-blue-500/10 border-blue-500/20";
                  } else if (skill.nature === "academic") {
                    tagLabel = "Acadêmico";
                    tagStyle =
                      "text-purple-400/90 bg-purple-500/10 border-purple-500/20";
                  }

                  return (
                    <div
                      key={skill.id}
                      className="py-3 px-2 sm:px-3 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-6 hover:bg-white/[0.02] motion-safe:transition-colors"
                    >
                      <div className="md:w-1/3 md:min-w-[220px]">
                        <span className="font-medium text-sm text-zinc-200">
                          {skill.name}
                        </span>
                      </div>

                      <div className="md:flex-1">
                        <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="shrink-0 self-start md:self-center pt-1 md:pt-0">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono border whitespace-nowrap ${tagStyle}`}
                        >
                          {tagLabel}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
