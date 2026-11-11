import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { ContextBadge } from "@/components/ui/ContextBadge";
import { experience } from "@/data/experience";
import { dictionaryPtBR } from "@/data/dictionary";
import { Briefcase, Building2, CheckCircle2, Cpu } from "lucide-react";

export function ExperienceSection() {
  const expDict = dictionaryPtBR.sections.experience;

  return (
    <section
      id="experiencia"
      className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
      aria-label="Experiência profissional corporativa"
    >
      <SectionHeading
        index={expDict.index}
        title={expDict.title}
        subtitle={expDict.subtitle}
        className="mb-12"
      />

      {/* Timeline Vertical */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12 ml-2 sm:ml-4">
        {experience.map((item) => (
          <div key={item.id} className="relative">
            {/* Marcador de Linha do Tempo */}
            <div
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-graphite-950 border-2 border-emerald-400 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* Card Principal da Experiência */}
            <SurfaceCard className="p-6 sm:p-8 space-y-6 bg-graphite-900/80 border-zinc-800">
              {/* Header: Cargo, Período e Badges */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-subtle pb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-zinc-100 tracking-tight">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Building2 className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
                    <span>{item.environmentType}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    {item.periodLabel}
                  </span>
                  <ContextBadge nature="professional" />
                </div>
              </div>

              {/* Resumo da Atuação */}
              <div className="space-y-2">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Lista de Responsabilidades */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>Atribuições & Sustentação Operacional</span>
                </h4>

                <ul className="grid grid-cols-1 gap-2.5">
                  {item.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shrink-0 mt-2" aria-hidden="true" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tecnologias Utilizadas */}
              <div className="pt-4 border-t border-subtle space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
                  <span>Tecnologias de Suporte & Infraestrutura</span>
                </h4>

                <div className="flex flex-wrap gap-2">
                  {item.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-graphite-950/80 border border-subtle text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SurfaceCard>
          </div>
        ))}
      </div>
    </section>
  );
}
