import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { ContextBadge } from "@/components/ui/ContextBadge";
import { FlowDiagram } from "@/components/interactive/FlowDiagram";
import { projects } from "@/data/projects";
import { dictionaryPtBR } from "@/data/dictionary";
import { Github, Building2, CheckCircle2 } from "lucide-react";

export function ProjectsSection() {
  const projDict = dictionaryPtBR.sections.projects;

  return (
    <section
      id="projetos"
      className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
      aria-label="Projetos e casos técnicos"
    >
      <SectionHeading
        index={projDict.index}
        title={projDict.title}
        subtitle={projDict.subtitle}
        className="mb-12"
      />

      <div className="space-y-8">
        {projects.map((project) => (
          <SurfaceCard
            key={project.slug}
            className="p-6 sm:p-8 space-y-6 bg-graphite-900/90 border-zinc-800"
          >
            {/* Header do Projeto */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-subtle pb-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl font-bold text-zinc-100">
                    {project.title}
                  </h3>
                  <ContextBadge nature={project.nature} />
                  {project.isSanitizedCorporateCase && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400">
                      <Building2 className="w-3 h-3 text-zinc-500" aria-hidden="true" />
                      <span>Estudo de Caso Corporativo</span>
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-400">
                  {project.shortDescription}
                </p>
              </div>

              {/* Links Externos (se existirem) */}
              {project.repositoryUrl && (
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-graphite-950 border border-subtle hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                    aria-label={`Ver repositório do projeto ${project.title}`}
                  >
                    <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Repositório</span>
                  </a>
                </div>
              )}
            </div>

            {/* Contexto, Problema e Solução */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded bg-graphite-950/80 border border-subtle space-y-1.5">
                <div className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Cenário & Problema
                </div>
                <p className="text-zinc-300 leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded bg-graphite-950/80 border border-subtle space-y-1.5">
                <div className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Solução & Impacto</span>
                </div>
                <p className="text-zinc-300 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Diagrama de Arquitetura */}
            {project.architectureSteps && project.architectureSteps.length > 0 && (
              <FlowDiagram steps={project.architectureSteps} />
            )}

            {/* Tecnologias Utilizadas */}
            <div className="pt-4 border-t border-subtle flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-graphite-950 border border-subtle text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SurfaceCard>
        ))}
      </div>
    </section>
  );
}
