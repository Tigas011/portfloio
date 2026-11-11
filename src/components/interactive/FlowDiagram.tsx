"use client";

import { motion } from "framer-motion";
import { ArchitectureStep } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import { useIsMounted } from "@/hooks/useIsMounted";

export interface FlowDiagramProps {
  steps: ArchitectureStep[];
  className?: string;
}

export function FlowDiagram({ steps, className }: FlowDiagramProps) {
  const isMounted = useIsMounted();

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className={cn("w-full space-y-3 select-none", className)}>
      <div className="flex items-center justify-between">
        <div className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span>Fluxo da Solução (Pipeline de Execução)</span>
        </div>
        <span className="font-mono text-[10px] text-zinc-600">60FPS PULSE</span>
      </div>

      <div className="flex flex-col md:flex-row items-stretch md:items-center p-4 rounded-lg bg-graphite-950/90 border border-subtle overflow-x-auto">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.stepNumber || index}
              className="flex flex-col md:flex-row items-center flex-1 min-w-[200px]"
            >
              {/* Card do Passo com pulso luminoso sequencial */}
              <motion.div
                className="w-full p-3.5 rounded-lg bg-graphite-900 border border-zinc-800 space-y-1.5 cursor-default transition-colors"
                animate={
                  isMounted
                    ? {
                        borderColor: [
                          "rgba(39, 39, 42, 0.8)",
                          "rgba(52, 211, 153, 0.6)",
                          "rgba(39, 39, 42, 0.8)",
                        ],
                        boxShadow: [
                          "0 0 0 rgba(16, 185, 129, 0)",
                          "0 0 16px rgba(16, 185, 129, 0.12)",
                          "0 0 0 rgba(16, 185, 129, 0)",
                        ],
                      }
                    : {}
                }
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  delay: index * 0.8,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  borderColor: "rgba(255, 255, 255, 0.25)",
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {step.stepNumber}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    PASSO {index + 1}
                  </span>
                </div>

                <div className="text-xs font-semibold text-zinc-200">{step.label}</div>

                <p className="text-[11px] text-zinc-400 font-mono leading-relaxed">
                  {step.detail}
                </p>
              </motion.div>

              {/* Trilho entre as etapas com feixe de dados luminoso contínuo */}
              {!isLast && (
                <div className="shrink-0 flex items-center justify-center my-2 md:my-0 md:mx-2 w-full md:w-16">
                  {/* Trilho Horizontal (Desktop) */}
                  <div className="hidden md:block w-16 h-0.5 bg-zinc-800 relative overflow-hidden rounded-full">
                    {isMounted && (
                      <motion.div
                        className="w-16 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                        animate={{ x: ["-100%", "300%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                          delay: index * 0.6,
                          ease: "linear",
                        }}
                      />
                    )}
                  </div>

                  {/* Trilho Vertical (Mobile) */}
                  <div className="md:hidden w-0.5 h-6 bg-zinc-800 relative overflow-hidden rounded-full my-1">
                    {isMounted && (
                      <motion.div
                        className="w-full h-6 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
                        animate={{ y: ["-100%", "300%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                          delay: index * 0.6,
                          ease: "linear",
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
