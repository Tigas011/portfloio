import Link from "next/link";
import { ArrowRight, FileText, Terminal } from "lucide-react";
import { dictionaryPtBR } from "@/data/dictionary";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { ContextBadge } from "@/components/ui/ContextBadge";
import { SystemArchitectureMotion } from "@/components/interactive/SystemArchitectureMotion";

export function HeroSection() {
  const hero = dictionaryPtBR.sections.hero;
  const author = dictionaryPtBR.author;

  return (
    <section
      id="top"
      className="w-full max-w-6xl mx-auto px-6 pt-12 pb-20 md:pt-20 md:pb-28"
      aria-label="Apresentação inicial"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Coluna Esquerda: Apresentação e Mensagem de Valor */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Badge: Status / Localização */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-900 border border-subtle text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>ONLINE // GUARULHOS, SP</span>
            </div>
            <ContextBadge nature="professional" labelOverride="Suporte N2 & Infra" />
          </div>

          {/* Nome em Destaque e Headline */}
          <div className="space-y-2">
            <div className="text-zinc-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
              <span>{author.role}</span>
              <span className="h-px w-6 bg-zinc-800" aria-hidden="true" />
              <span className="text-zinc-500">PORTFÓLIO PROFISSIONAL</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-[1.15]">
              {author.name}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-zinc-300 leading-snug">
              {hero.headline}
            </p>
          </div>

          {/* Sub-headline Descritiva */}
          <p className="text-base text-zinc-400 leading-relaxed max-w-2xl">
            {hero.subheadline}
          </p>

          {/* Call to Actions (Botões) */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-zinc-100 text-graphite-950 font-medium text-sm hover:bg-zinc-200 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2 focus:ring-offset-graphite-950"
            >
              <span>Ver Projetos em Destaque</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <a
              href="/docs/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-graphite-900/90 border border-subtle hover:border-hover text-zinc-200 hover:text-zinc-100 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-graphite-950"
            >
              <FileText className="w-4 h-4 text-zinc-400" aria-hidden="true" />
              <span>Acessar Currículo (PDF)</span>
            </a>
          </div>

          {/* Linha de Indicadores Rápidos */}
          <div className="pt-6 border-t border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-400">
            <div>
              <div className="text-zinc-500 text-[11px]">NÍVEL DE ATUAÇÃO</div>
              <div className="text-zinc-200 font-medium mt-0.5">Suporte N2 / Infra</div>
            </div>
            <div>
              <div className="text-zinc-500 text-[11px]">FOCO DE EVOLUÇÃO</div>
              <div className="text-zinc-200 font-medium mt-0.5">Engenharia de Software</div>
            </div>
            <div>
              <div className="text-zinc-500 text-[11px]">LOCALIZAÇÃO & MODALIDADE</div>
              <div className="text-zinc-200 font-medium mt-0.5">
                Guarulhos, SP (Presencial / Híbrido / Remoto)
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Motion Video Player de Arquitetura + Telemetria */}
        <div className="lg:col-span-5 w-full space-y-4">
          <SystemArchitectureMotion />

          <SurfaceCard className="p-4 space-y-3 border-zinc-800 bg-graphite-900/90 shadow-xl">
            {/* Cabeçalho do Card */}
            <div className="flex items-center justify-between border-b border-subtle pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-zinc-200 tracking-wider">
                  SYSTEM_TELEMETRY // LIVE
                </span>
              </div>
              <Link
                href="#tech-lab"
                className="text-zinc-400 hover:text-emerald-400 flex items-center gap-1 text-[11px] font-mono transition-colors"
              >
                <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Abrir CLI</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 rounded bg-graphite-950/80 border border-subtle space-y-0.5">
                <div className="text-[10px] text-zinc-500 uppercase">Ambiente N2</div>
                <div className="text-zinc-200 font-medium truncate">Windows & Cloud</div>
              </div>
              <div className="p-2 rounded bg-graphite-950/80 border border-subtle space-y-0.5">
                <div className="text-[10px] text-zinc-500 uppercase">Engenharia</div>
                <div className="text-zinc-200 font-medium truncate">Next.js & TypeScript</div>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}
