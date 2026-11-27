"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  FileText,
  Folder,
  GitBranch,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

const stages = [
  {
    label: "Mapear",
    title: "Mapeamento de pastas",
    detail: "O script percorre as pastas do Drive e registra as permissões de pastas e arquivos.",
  },
  {
    label: "Cruzar",
    title: "Cruzamento de permissões",
    detail: "Os acessos são cruzados com a base de colaboradores para identificar permissões que exigem revisão.",
  },
  {
    label: "Relatar",
    title: "Relatório de governança",
    detail: "Os registros são consolidados em um relatório para a revisão periódica de acessos.",
  },
];

const stageDuration = 4200;
const lastStage = stages.length - 1;
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

export function DriveAuditFeature() {
  const headingId = useId();
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;

    const timer = window.setTimeout(() => {
      if (stage === lastStage) {
        setPlaying(false);
      } else {
        setStage(stage + 1);
      }
    }, stageDuration);

    return () => window.clearTimeout(timer);
  }, [playing, stage]);

  const playback = playing
    ? { label: "Pausar", Icon: Pause }
    : stage === lastStage
      ? { label: "Rever", Icon: RotateCcw }
      : { label: "Reproduzir", Icon: Play };

  const PlaybackIcon = playback.Icon;

  function togglePlayback() {
    if (playing) {
      setPlaying(false);
      return;
    }

    if (stage === lastStage) setStage(0);
    setPlaying(true);
  }

  const externalAccess = (
    <motion.span
      layoutId={reduceMotion ? undefined : "external-access"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="inline-flex w-fit items-center rounded-sm bg-[#f4ce9b] px-1.5 py-0.5 text-[11px] font-semibold text-[#49321c]"
    >
      Externo
    </motion.span>
  );

  return (
    <section
      id="drive-audit"
      aria-labelledby={headingId}
      className="w-full max-w-6xl scroll-mt-24 px-6 py-16 md:py-24"
    >
      <div className="grid items-center gap-9 rounded-[1.75rem] bg-[#f3efe5] px-5 py-7 text-[#18201c] sm:px-9 sm:py-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-12 lg:px-12 lg:py-14">
        <div className="min-w-0">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#426351]">
            Caso em destaque
          </p>
          <h2
            id={headingId}
            className="mt-4 text-3xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-5xl xl:text-[3.5rem]"
          >
            Quem tem acesso a quê no Google Drive?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#46554c]">
            Automatizei a auditoria de permissões em drives compartilhados com Google Apps Script. A rotina transforma a árvore de pastas e seus acessos em um relatório para revisão.
          </p>
          <a
            href="#automacao-auditoria-google-workspace"
            className={`mt-6 inline-flex min-h-[2.75rem] items-center gap-2 rounded-sm font-semibold underline decoration-[#668875] decoration-2 underline-offset-4 hover:text-[#32624a] ${focusRing} focus-visible:outline-[#32624a]`}
          >
            Ler o caso completo
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>

        <figure
          aria-label="Demonstração das etapas da auditoria"
          className="min-w-0 overflow-hidden rounded-2xl bg-[#18201c] text-[#f3efe5]"
        >
          <div
            className="px-3.5 pb-5 pt-4 sm:px-6 sm:pb-6"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 35%, #294137 0%, transparent 70%), radial-gradient(#bcebd226 1px, transparent 1px)",
              backgroundSize: "auto, 16px 16px",
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-[#c4d3ca] sm:text-[11px]">
              <span>Dados ilustrativos</span>
              <span aria-hidden="true" className="tabular-nums text-[#bcebd2]">
                0{stage + 1} / 0{stages.length}
              </span>
            </div>

            <LayoutGroup id={headingId}>
              <div aria-hidden="true" className="mt-3 grid min-h-[13rem] items-center">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={stage}
                    className="col-start-1 row-start-1 mx-auto w-full max-w-[22rem]"
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                    transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
                  >
                    {stage === 0 && (
                      <div>
                        <div className="flex items-center gap-2.5 rounded-md border border-[#719c85] bg-[#273f33] px-3 py-2.5 text-sm font-semibold text-[#e2f4ea]">
                          <Folder size={18} className="shrink-0 text-[#bcebd2]" />
                          Drive compartilhado
                        </div>
                        <ul className="ml-4 space-y-2 border-l border-[#6c897a] pb-1 pl-4 pt-3">
                          <li className="relative flex flex-wrap items-center justify-between gap-x-2 gap-y-1 rounded-md border border-[#506759] bg-[#202b24] px-2.5 py-2 text-xs before:absolute before:-left-[17px] before:top-1/2 before:w-4 before:border-t before:border-[#6c897a] sm:text-sm">
                            <span className="inline-flex items-center gap-2"><Folder size={15} />Operações</span>
                            <span className="text-[11px] text-[#bcebd2]">Herdado</span>
                          </li>
                          <li className="relative flex flex-wrap items-center justify-between gap-x-2 gap-y-1 rounded-md border border-[#506759] bg-[#202b24] px-2.5 py-2 text-xs before:absolute before:-left-[17px] before:top-1/2 before:w-4 before:border-t before:border-[#6c897a] sm:text-sm">
                            <span className="inline-flex items-center gap-2"><Folder size={15} />Parceiros</span>
                            {externalAccess}
                          </li>
                        </ul>
                      </div>
                    )}
                    {stage === 1 && (
                      <div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="grid min-h-[3.5rem] place-items-center rounded-md border border-[#719c85] bg-[#273f33] px-2 text-center text-xs font-semibold text-[#e2f4ea] sm:text-sm">
                            Permissões do Drive
                          </span>
                          <span className="grid min-h-[3.5rem] place-items-center rounded-md border border-[#719c85] bg-[#273f33] px-2 text-center text-xs font-semibold text-[#e2f4ea] sm:text-sm">
                            Base de colaboradores
                          </span>
                        </div>
                        <div className="mx-auto flex w-1/2 justify-center rounded-b-md border-x border-b border-[#6c897a] pt-2">
                          <ArrowDown size={19} className="relative top-2.5 bg-[#24372d] text-[#bcebd2]" />
                        </div>
                        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 rounded-md border border-[#927856] bg-[#382f24] px-3 py-2.5 text-sm text-[#f4ce9b]">
                          <span className="inline-flex items-center gap-2">
                            <GitBranch size={16} /> Revisar acesso
                          </span>
                          {externalAccess}
                        </div>
                      </div>
                    )}
                    {stage === 2 && (
                      <div className="mx-2 rounded-xl border border-[#a9bcb0] bg-[#f3efe5] p-3 text-[#18201c] shadow-[0_5px_0_#bcebd240] sm:p-4">
                        <div className="flex items-center gap-2 border-b border-[#cbd6cb] pb-2 text-sm font-semibold">
                          <FileText size={17} className="shrink-0 text-[#426351]" />
                          Relatório de acessos
                        </div>
                        <dl className="divide-y divide-[#cbd6cb] text-xs sm:text-sm">
                          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 py-2">
                            <dt>Operações</dt><dd className="text-[#426351]">Herdado</dd>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 py-2">
                            <dt>Parceiros</dt><dd>{externalAccess}</dd>
                          </div>
                        </dl>
                        <div className="mt-1 flex items-center gap-1.5 rounded bg-[#d9ebde] px-2 py-1.5 text-xs font-semibold text-[#31503d]">
                          <ShieldCheck size={14} className="shrink-0" />
                          Disponível para revisão
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </LayoutGroup>

            <div aria-live="polite" aria-atomic="true" className="mt-2 min-h-[6rem] sm:min-h-[5rem]">
              <span className="block text-base font-semibold">{stages[stage].title}</span>
              <span className="mt-1 block max-w-[40ch] text-sm leading-relaxed text-[#c4d3ca]">
                {stages[stage].detail}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-[#506759] px-3.5 py-3 sm:px-6">
            <div role="group" aria-label="Etapas da demonstração" className="flex flex-wrap gap-1">
              {stages.map(({ label }, index) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={stage === index}
                  onClick={() => {
                    setPlaying(false);
                    setStage(index);
                  }}
                  className={`min-h-[2.75rem] rounded-md px-2 text-xs font-semibold hover:bg-[#34483e] hover:text-[#f3efe5] motion-safe:transition-colors sm:px-3 ${focusRing} focus-visible:outline-[#bcebd2] ${stage === index ? "bg-[#bcebd2] text-[#18201c]" : "text-[#c4d3ca]"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={togglePlayback}
              className={`ml-auto inline-flex min-h-[2.75rem] min-w-[6.75rem] items-center justify-center gap-1.5 rounded-md border border-[#719c85] px-2.5 text-xs font-semibold text-[#e2f4ea] hover:bg-[#34483e] motion-safe:transition-colors ${focusRing} focus-visible:outline-[#bcebd2]`}
            >
              <PlaybackIcon size={14} aria-hidden="true" />
              {playback.label}
            </button>
          </div>
        </figure>
      </div>
    </section>
  );
}
