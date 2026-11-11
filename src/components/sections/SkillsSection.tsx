"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
} from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import { dictionaryPtBR } from "@/data/dictionary";
import { SkillDomain } from "@/types/portfolio";
import { getDomainLabel } from "@/lib/utils";
import { Filter, Layers } from "lucide-react";

// ─── Variantes de animação ─────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export function SkillsSection() {
  const skillsDict = dictionaryPtBR.sections.skills;
  const [activeDomain, setActiveDomain] = useState<SkillDomain | "all">("all");

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const domainList: SkillDomain[] = [
    "infrastructure-networks",
    "corporate-platforms",
    "software-development",
    "architecture-devops",
  ];

  const displayedDomains = activeDomain === "all" ? domainList : [activeDomain];

  return (
    <section
      id="competencias"
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
      aria-label="Matriz de competências técnicas"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SectionHeading
          index={skillsDict.index}
          title={skillsDict.title}
          subtitle={skillsDict.subtitle}
        />

        <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-graphite-900 border border-subtle text-xs font-mono text-zinc-400 shrink-0">
          <Layers className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
          <span>{skills.length} COMPETÊNCIAS CATALOGADAS</span>
        </div>
      </div>

      {/* ── Barra de Filtros com AnimatePresence + layoutId ─────────────── */}
      <div
        className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-subtle"
        role="group"
        aria-label="Filtrar por domínio"
      >
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mr-2">
          <Filter className="w-3.5 h-3.5" aria-hidden="true" />
          <span>FILTRAR:</span>
        </div>

        {/* "Todas" button */}
        <button
          type="button"
          onClick={() => setActiveDomain("all")}
          className={`relative px-3 py-1.5 rounded-md text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-400 ${
            activeDomain === "all"
              ? "text-graphite-950 font-semibold z-10"
              : "bg-graphite-900/80 text-zinc-400 hover:text-zinc-200 border border-subtle"
          }`}
          aria-pressed={activeDomain === "all"}
        >
          {activeDomain === "all" && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-md bg-zinc-100"
              style={{ zIndex: -1 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          {skillsDict.filterAll} ({skills.length})
        </button>

        {domainList.map((domain) => {
          const count = skills.filter((s) => s.domain === domain).length;
          const isSelected = activeDomain === domain;

          return (
            <button
              key={domain}
              type="button"
              onClick={() => setActiveDomain(domain)}
              className={`relative px-3 py-1.5 rounded-md text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-400 ${
                isSelected
                  ? "text-graphite-950 font-semibold z-10"
                  : "bg-graphite-900/80 text-zinc-400 hover:text-zinc-200 border border-subtle"
              }`}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-md bg-zinc-100"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              {getDomainLabel(domain)} ({count})
            </button>
          );
        })}
      </div>

      {/* ── Tabela de Habilidades com cascata ───────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDomain}
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {displayedDomains.map((domain) => {
            const domainSkills = skills.filter((s) => s.domain === domain);
            const domainLabel = getDomainLabel(domain);
            const isProfessionalDomain = domainSkills.every(
              (s) => s.nature === "professional"
            );

            return (
              <motion.div
                key={domain}
                className="space-y-3"
                variants={rowVariants}
              >
                {/* Header do Grupo */}
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isProfessionalDomain ? "bg-emerald-400" : "bg-blue-400"
                      }`}
                      aria-hidden="true"
                    />
                    <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-zinc-200">
                      {domainLabel}
                    </h3>
                  </div>
                  <div className="font-mono text-xs text-zinc-500">
                    {domainSkills.length} itens
                  </div>
                </div>

                {/* Tabela Técnica */}
                <motion.div
                  className="border-y border-white/[0.08] divide-y divide-white/[0.06]"
                  variants={containerVariants}
                >
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
                      <motion.div
                        key={skill.id}
                        variants={rowVariants}
                        className="py-3 px-2 sm:px-3 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-6 hover:bg-white/[0.02] transition-colors"
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
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
