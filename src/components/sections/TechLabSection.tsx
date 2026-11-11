import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { SafeTerminal } from "@/components/interactive/SafeTerminal";
import { dictionaryPtBR } from "@/data/dictionary";
import { terminalCommands } from "@/data/terminalCommands";
import { Terminal, Command, CheckCircle2 } from "lucide-react";

export function TechLabSection() {
  const lab = dictionaryPtBR.sections.techLab;

  return (
    <section
      id="tech-lab"
      className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
      aria-label="Laboratório de sistema e terminal interativo"
    >
      <SectionHeading
        index={lab.index}
        title={lab.title}
        subtitle={lab.subtitle}
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Terminal Interativo (Coluna Principal) */}
        <div className="lg:col-span-8 w-full">
          <SafeTerminal />
        </div>

        {/* Coluna Lateral: Guia Rápido de Comandos */}
        <div className="lg:col-span-4 space-y-5">
          <SurfaceCard className="p-6 space-y-5 bg-graphite-900/90 border-zinc-800">
            <div className="flex items-center gap-2 border-b border-subtle pb-3">
              <Command className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-200 font-semibold">
                GUIA DE COMANDOS DO SHELL
              </h3>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Utilize o terminal interativo para explorar detalhes da minha experiência, automações em produção e trilhas de especialização.
            </p>

            {/* Lista dos Comandos e Finalidade */}
            <div className="space-y-3 pt-1">
              {terminalCommands.map((cmd) => (
                <div
                  key={cmd.id}
                  className="p-3 rounded bg-graphite-950/80 border border-subtle/80 space-y-1 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-400">
                    <Terminal className="w-3 h-3" aria-hidden="true" />
                    <span>$ {cmd.command}</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                    {cmd.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-subtle flex items-center gap-2 text-[11px] font-mono text-zinc-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
              <span>Dica: você também pode digitar comandos diretamente no prompt.</span>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}
