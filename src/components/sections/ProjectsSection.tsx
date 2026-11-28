import { ArrowUpRight } from "lucide-react";
import { FlowDiagram } from "@/components/interactive/FlowDiagram";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projetos" aria-labelledby="projects-title" className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8 md:pb-24">
      <h2 id="projects-title" className="mb-8 text-3xl font-semibold tracking-tight text-[#f3efe5] md:text-5xl">
        Projetos
      </h2>
      {projects.map((project) => (
        <article
          key={project.slug}
          id={project.slug}
          aria-labelledby={`${project.slug}-title`}
          className="grid gap-6 border-t border-white/20 py-9 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14 md:py-12"
        >
          <div>
            <p className="mb-3 text-sm font-semibold text-[#bcebd2]">
              {project.isSanitizedCorporateCase ? "Em produção" : "Projeto pessoal"}
            </p>
            <h3 id={`${project.slug}-title`} className="text-2xl font-semibold leading-tight tracking-tight text-[#f3efe5] sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-300">{project.shortDescription}</p>
            {project.repositoryUrl && (
              <a href={project.repositoryUrl} className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-medium text-[#bcebd2] underline underline-offset-4">
                Ver código no GitHub <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
          <div className="space-y-5 text-base leading-relaxed text-zinc-300">
            <div>
              <h4 className="mb-1 font-semibold text-[#f3efe5]">O problema</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-[#f3efe5]">O que fiz</h4>
              <p>{project.solution}</p>
            </div>
            {(project.architectureSteps.length > 0 || project.technologies.length > 0) && (
              <details className="border-y border-white/15">
                <summary className="cursor-pointer py-3 font-semibold text-[#bcebd2]">Ver etapas e tecnologias</summary>
                <FlowDiagram steps={project.architectureSteps} />
                <p className="pb-4 text-sm leading-relaxed text-zinc-400">{project.technologies.join(" · ")}</p>
              </details>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
