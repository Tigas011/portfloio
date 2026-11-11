import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { dictionaryPtBR } from "@/data/dictionary";
import { Shield, RefreshCw, Cpu, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const about = dictionaryPtBR.sections.about;

  return (
    <section
      id="sobre"
      className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
      aria-label="Sobre o profissional"
    >
      <SectionHeading
        index={about.index}
        title={about.title}
        subtitle={about.subtitle}
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Coluna Principal: Layout Editorial Aberto com Linha Guia Vertical */}
        <div className="lg:col-span-8 relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10">
          {/* Bloco 1: Background em Operações e Infraestrutura */}
          <article className="space-y-3 relative">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-graphite-950 border border-emerald-400 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              <span>01. Fundação em Operações & Infraestrutura</span>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
              Minha base profissional foi construída na linha de frente da{" "}
              <strong className="text-zinc-100 font-semibold">sustentação técnica N2</strong>{" "}
              e administração de infraestruturas corporativas críticas. Atuando diretamente com{" "}
              <strong className="text-zinc-100 font-semibold">Windows Server, Active Directory, redes (DNS, DHCP, VPN)</strong>{" "}
              e segurança de borda com <strong className="text-zinc-100 font-semibold">pfSense e UniFi</strong>,
              desenvolvi disciplina analítica para diagnóstico de causa-raiz e garantia de continuidade operacional.
            </p>
          </article>

          {/* Bloco 2: A Convergência e Automação */}
          <article className="space-y-3 relative">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-graphite-950 border border-blue-400 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>02. Convergência: Suporte Transformado em Código</span>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
              A convivência diária com rotinas manuais repetitivas em ecossistemas como{" "}
              <strong className="text-zinc-100 font-semibold">Microsoft 365 e Google Workspace</strong> despertou
              a necessidade de automação. Utilizando{" "}
              <strong className="text-zinc-100 font-semibold">Google Apps Script</strong>, desenvolvi rotinas determinísticas
              para processamento de fluxos, validação de dados e eliminação de tarefas operacionais,
              comprovando na prática o impacto de resolver problemas de infraestrutura com raciocínio algorítmico.
            </p>
          </article>

          {/* Bloco 3: Foco Atual em Engenharia de Software */}
          <article className="space-y-3 relative">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-graphite-950 border border-amber-400 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
              <span>03. Foco Atual: Engenharia de Software & Arquitetura Limpa</span>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
              Hoje, canalizo essa vivência operacional para a formação contínua em{" "}
              <strong className="text-zinc-100 font-semibold">Engenharia de Software</strong>.
              Dedico-me intensamente ao estudo de{" "}
              <strong className="text-zinc-100 font-semibold">TypeScript, React, Next.js, Python, princípios SOLID, Clean Code e conteinerização com Docker</strong>,
              buscando sempre o equilíbrio entre software robusto, arquitetura escalável e a previsibilidade que aprendi na sustentação de ambientes de produção.
            </p>
          </article>
        </div>

        {/* Coluna Lateral: Pilares Metodológicos */}
        <div className="lg:col-span-4 space-y-6">
          <SurfaceCard className="p-6 space-y-6 bg-graphite-900/90 border-zinc-800">
            <div className="border-b border-subtle pb-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold">
                DIRETRIZES TÉCNICAS DE ATUAÇÃO
              </h3>
            </div>

            <ul className="space-y-4 text-xs font-mono">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-zinc-200 font-semibold">Resolução Analítica</div>
                  <div className="text-zinc-400 font-sans mt-0.5">
                    Investigação aprofundada de causa-raiz para evitar a reincidência de incidentes operacionais.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-zinc-200 font-semibold">Automação com Propósito</div>
                  <div className="text-zinc-400 font-sans mt-0.5">
                    Substituição metódica de processos manuais por scripts testáveis e determinísticos.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-zinc-200 font-semibold">Rigor de Engenharia</div>
                  <div className="text-zinc-400 font-sans mt-0.5">
                    Tipagem estática estrita, baixo acoplamento e clareza estrutural em cada linha de código.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-zinc-200 font-semibold">Documentação & Governança</div>
                  <div className="text-zinc-400 font-sans mt-0.5">
                    Padronização de processos, controle de acessos e rastreabilidade operacional.
                  </div>
                </div>
              </li>
            </ul>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}
