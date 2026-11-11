import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { ContextBadge } from "@/components/ui/ContextBadge";
import { studyTracks, academicFormation, certifications } from "@/data/studies";
import { dictionaryPtBR } from "@/data/dictionary";
import {
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle,
  Clock,
  ArrowRightLeft,
} from "lucide-react";

function statusIcon(status: string) {
  if (status === "Concluído" || status === "Certificação Concluída")
    return <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />;
  if (status.startsWith("Transferido") || status.startsWith("Transição"))
    return <ArrowRightLeft className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />;
  return <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />;
}

export function StudiesSection() {
  const studiesDict = dictionaryPtBR.sections.studies;

  return (
    <section
      id="estudos"
      className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
      aria-label="Formação acadêmica, certificações e trilhas de estudo"
    >
      <SectionHeading
        index={studiesDict.index}
        title={studiesDict.title}
        subtitle={studiesDict.subtitle}
        className="mb-12"
      />

      {/* ─── Bloco 1: Formação Acadêmica ──────────────────────────── */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <GraduationCap className="w-4 h-4 text-purple-400" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest font-semibold text-zinc-400">
            Formação Acadêmica
          </span>
        </div>

        <div className="border-y border-white/[0.08] divide-y divide-white/[0.06]">
          {academicFormation.map((item) => (
            <div
              key={item.id}
              className="py-4 px-2 sm:px-3 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 hover:bg-white/[0.02] transition-colors"
            >
              <div className="md:flex-1 space-y-0.5">
                <div className="font-medium text-sm text-zinc-100">{item.degree}</div>
                <div className="font-mono text-xs text-zinc-500">{item.institution}</div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="font-mono text-xs text-zinc-500">{item.period}</span>
                <div className="flex items-center gap-1.5">
                  {statusIcon(item.status)}
                  <span
                    className={`font-mono text-[11px] ${
                      item.status === "Concluído"
                        ? "text-emerald-400"
                        : item.status.startsWith("Transferido") || item.status.startsWith("Transição")
                        ? "text-amber-400"
                        : "text-blue-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Bloco 2: Certificações ───────────────────────────────── */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <Award className="w-4 h-4 text-amber-400" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest font-semibold text-zinc-400">
            Certificações & Qualificações
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-start gap-3 p-4 rounded-lg bg-graphite-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-0.5 min-w-0">
                <div className="font-medium text-sm text-zinc-100 leading-snug">
                  {cert.title}
                </div>
                <div className="font-mono text-xs text-zinc-500">{cert.issuer}</div>
                <div className="font-mono text-[11px] text-emerald-400/80">{cert.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Bloco 3: Trilhas de Estudo em Andamento ─────────────── */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <BookOpen className="w-4 h-4 text-blue-400" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest font-semibold text-zinc-400">
            Trilhas de Evolução Técnica
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyTracks.map((track) => {
            const isAcademic = track.nature === "academic";

            return (
              <SurfaceCard
                key={track.id}
                className={`p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-graphite-900/80 border-zinc-800 hover:border-zinc-700 transition-all duration-200 ${
                  isAcademic ? "border-purple-500/30 bg-purple-950/10" : ""
                }`}
              >
                <div className="space-y-4">
                  {/* Header do Card */}
                  <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] pb-3">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                        {track.area}
                      </span>
                      <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mt-1">
                        {track.title}
                      </h3>
                    </div>
                    <ContextBadge nature={track.nature} />
                  </div>

                  {/* Tópicos da Trilha */}
                  <div className="space-y-2 pt-1">
                    <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                      Eixos de Conhecimento
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {track.topics.map((topic, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${
                              isAcademic ? "bg-purple-400" : "bg-amber-400"
                            }`}
                            aria-hidden="true"
                          />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Foco Atual integrado ao card */}
                <div className="border-t border-white/[0.06] pt-3 mt-4 text-xs font-mono text-zinc-300">
                  <span className="text-zinc-500 font-semibold mr-1.5">FOCO ATUAL:</span>
                  <span className="text-zinc-300 font-sans">{track.currentFocus}</span>
                </div>
              </SurfaceCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
