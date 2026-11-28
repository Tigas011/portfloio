import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="intro-title" className="w-full bg-[#f3efe5] text-[#18201c]">
      <div className="mx-auto max-w-6xl px-6 pb-6 pt-12 sm:pt-16 lg:pt-20">
        <h1
          id="intro-title"
          className="mb-7 font-serif text-[clamp(2.75rem,7.4vw,6rem)] font-normal leading-[0.98] tracking-[-0.04em] text-[#21392d]"
        >
          Thiago Souza <span className="inline-block">de Almeida</span>
        </h1>

        <div className="grid gap-x-12 gap-y-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div>
            <p className="text-lg font-semibold">Analista de Suporte N2</p>
            <p className="mt-1 text-sm text-[#526158]">Guarulhos, SP</p>
          </div>
          <div>
            <p className="max-w-[56ch] text-base leading-relaxed text-[#405047]">
              Comecei no helpdesk da Inside. Hoje investigo incidentes de rede e escrevo scripts para automatizar tarefas no Microsoft 365 e no Google Workspace.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6">
              <a href="#drive-audit" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-[#35614d]">
                Ver a auditoria do Drive <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a href="/docs/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-[#35614d]">
                Currículo (PDF) <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
