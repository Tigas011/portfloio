"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  FolderLock,
  FileCode2,
  Play,
  Pause,
} from "lucide-react";

import { useIsMounted } from "@/hooks/useIsMounted";

type SceneId = 0 | 1 | 2;

interface SceneMeta {
  id: SceneId;
  label: string;
  tag: string;
  description: string;
}

const SCENES: SceneMeta[] = [
  {
    id: 0,
    label: "01. Edge Firewall",
    tag: "pfSense & VPN",
    description: "Inspeção de pacotes e túnel criptografado",
  },
  {
    id: 1,
    label: "02. IAM Audit",
    tag: "Workspace & AD",
    description: "Varredura contínua e correção de permissões",
  },
  {
    id: 2,
    label: "03. CI/CD Pipeline",
    tag: "Next.js & Edge",
    description: "Validação estrita e deploy automatizado",
  },
];

export function SystemArchitectureMotion() {
  const isMounted = useIsMounted();
  const [currentScene, setCurrentScene] = useState<SceneId>(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Timer da barra de progresso (5s por cena)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentScene((prev) => ((prev + 1) % 3) as SceneId);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying]);

  // Seletor manual de cena
  const handleSelectScene = (sceneId: SceneId) => {
    setCurrentScene(sceneId);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div
      className="w-full font-mono select-none rounded-lg bg-graphite-950 border border-zinc-800/80 overflow-hidden shadow-2xl"
      aria-label="Reprodutor interativo de Motion Graphics de arquitetura"
    >
      {/* ─── Top Bar: Player Header & Controles ─────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-graphite-900/90 border-b border-subtle">
        {/* Indicador REC / 60FPS */}
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isPlaying
                ? "bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"
                : "bg-zinc-600"
            }`}
            aria-hidden="true"
          />
          <span className="text-[10px] font-bold tracking-wider text-zinc-300">
            {isPlaying ? "REC // 60FPS MOTION" : "PAUSADO // 60FPS"}
          </span>
        </div>

        {/* Botão Play / Pause */}
        <button
          type="button"
          onClick={togglePlay}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-graphite-950 border border-zinc-700/80 hover:border-zinc-500 text-zinc-300 hover:text-white text-[11px] font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-400"
          aria-label={isPlaying ? "Pausar animação" : "Reproduzir animação"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-amber-400" aria-hidden="true" />
              <span>PAUSAR</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-emerald-400" aria-hidden="true" />
              <span>REPRODUZIR</span>
            </>
          )}
        </button>
      </div>

      {/* ─── Seletor de Cenas (Abas Rápidas) ────────────────────────── */}
      <div className="flex items-center border-b border-subtle bg-graphite-950/70 text-[11px] overflow-x-auto">
        {SCENES.map((scene) => {
          const isActive = currentScene === scene.id;
          return (
            <button
              key={scene.id}
              type="button"
              onClick={() => handleSelectScene(scene.id)}
              className={`flex-1 min-w-[110px] py-2 px-3 text-left transition-colors relative focus:outline-none ${
                isActive
                  ? "bg-zinc-900/90 text-zinc-100 font-semibold"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="truncate">{scene.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 ml-1.5" />
                )}
              </div>
              {isActive && (
                <motion.div
                  layoutId="active-scene-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ─── Palco de Animação (Scene Stage) ───────────────────────── */}
      <div className="p-4 min-h-[220px] flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-graphite-950 to-graphite-900/40">
        {!isMounted ? (
          // Skeleton estático para renderização perfeita no SSR / Hydration
          <div className="h-44 w-full flex items-center justify-center text-zinc-600 text-xs font-mono">
            Carregando simulação de arquitetura...
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {currentScene === 0 && <SceneFirewall key="scene-0" isPlaying={isPlaying} />}
            {currentScene === 1 && <SceneScanner key="scene-1" isPlaying={isPlaying} />}
            {currentScene === 2 && <ScenePipeline key="scene-2" isPlaying={isPlaying} />}
          </AnimatePresence>
        )}
      </div>

      {/* ─── Barra de Progresso Contínua da Cena (5s) ──────────────── */}
      <div className="relative w-full h-1 bg-zinc-900 overflow-hidden">
        {isMounted && isPlaying && (
          <motion.div
            key={currentScene}
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        )}
      </div>

      {/* ─── Footer da Telemetria com Descrição ─────────────────────── */}
      <div className="px-3 py-2 bg-graphite-950 border-t border-subtle flex items-center justify-between text-[10px] text-zinc-500">
        <span className="truncate">
          <strong className="text-zinc-400 uppercase mr-1">Cena {currentScene + 1}/3:</strong>
          {SCENES[currentScene].description}
        </span>
        <span className="shrink-0 text-zinc-600 ml-2">AUTO_CYCLE // 5s</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CENA 1: Edge Firewall & VPN (pfSense)
// ─────────────────────────────────────────────────────────────────────────────
function SceneFirewall({ isPlaying }: { isPlaying: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="space-y-3"
    >
      <div className="flex items-center justify-between text-[11px] border-b border-zinc-800/80 pb-2">
        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <Shield className="w-3.5 h-3.5" />
          <span>FIREWALL DE BORDA // pfSense Gateway</span>
        </div>
        <span className="text-[10px] text-zinc-500">TÚNEL VPN AES-256</span>
      </div>

      {/* Diagrama de Pacotes Fluindo */}
      <div className="grid grid-cols-12 gap-2 items-center py-2">
        {/* Origem: Tráfego Externo */}
        <div className="col-span-3 p-2 rounded bg-graphite-900 border border-zinc-800 text-center space-y-1">
          <span className="text-[9px] text-zinc-500 block uppercase font-bold">WAN Ingress</span>
          <div className="text-[10px] text-zinc-300 font-medium">Internet / VPN</div>
          {/* Pacotes saindo */}
          <div className="flex justify-center gap-1 pt-1">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              animate={isPlaying ? { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] } : {}}
              transition={{ repeat: Infinity, duration: 1.2 }}
            />
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-rose-500"
              animate={isPlaying ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
              transition={{ repeat: Infinity, duration: 1.6, delay: 0.4 }}
            />
          </div>
        </div>

        {/* Conector com Animação de Feixes e Bloqueio */}
        <div className="col-span-6 flex flex-col items-center justify-center relative px-2">
          {/* Escudo Central pfSense */}
          <motion.div
            className="w-full p-2.5 rounded-lg bg-zinc-900/90 border border-emerald-500/40 text-center space-y-1 relative overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.1)]"
            animate={
              isPlaying
                ? {
                    borderColor: [
                      "rgba(16,185,129,0.4)",
                      "rgba(16,185,129,0.8)",
                      "rgba(16,185,129,0.4)",
                    ],
                  }
                : {}
            }
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-zinc-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>pfSense Inspection</span>
            </div>

            {/* Feixe Verde Autorizado */}
            <div className="relative h-2 w-full bg-graphite-950 rounded-full overflow-hidden my-1">
              {isPlaying && (
                <motion.div
                  className="h-full w-12 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                  animate={{ x: ["-100%", "280%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
              )}
            </div>

            {/* Alerta de Pacote Bloqueado */}
            <div className="flex items-center justify-center gap-1 text-[9px] text-rose-400 pt-0.5">
              <ShieldAlert className="w-2.5 h-2.5 text-rose-500 shrink-0" />
              <span>DROPPED: SYN_FLOOD_ANOMALY</span>
            </div>
          </motion.div>
        </div>

        {/* Destino: LAN Corporativa Protegida */}
        <div className="col-span-3 p-2 rounded bg-graphite-900 border border-zinc-800 text-center space-y-1">
          <span className="text-[9px] text-zinc-500 block uppercase font-bold">LAN Egress</span>
          <div className="text-[10px] text-emerald-400 font-medium">AD / ERP / M365</div>
          <div className="text-[9px] text-zinc-400">10.0.0.0/24 OK</div>
        </div>
      </div>

      {/* Barras de Tráfego e Métricas em Tempo Real */}
      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-zinc-800/70 text-[10px]">
        <div className="p-1.5 rounded bg-zinc-950/80 border border-subtle">
          <span className="text-zinc-500 block text-[9px]">THROUGHPUT</span>
          <span className="text-zinc-200 font-bold">840 Mbps</span>
        </div>
        <div className="p-1.5 rounded bg-zinc-950/80 border border-subtle">
          <span className="text-zinc-500 block text-[9px]">AMEAÇAS DROP</span>
          <span className="text-emerald-400 font-bold">142/min (100%)</span>
        </div>
        <div className="p-1.5 rounded bg-zinc-950/80 border border-subtle">
          <span className="text-zinc-500 block text-[9px]">LATÊNCIA VPN</span>
          <span className="text-blue-400 font-bold">11ms (AES-GCM)</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CENA 2: Google Workspace & AD Permission Scanner
// ─────────────────────────────────────────────────────────────────────────────
function SceneScanner({ isPlaying }: { isPlaying: boolean }) {
  const [scannedFiles, setScannedFiles] = useState(1480);
  const [remediated, setRemediated] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setScannedFiles((prev) => prev + 2);
    }, 1200);

    const remTimer = setTimeout(() => {
      setRemediated(true);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(remTimer);
    };
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="space-y-3"
    >
      <div className="flex items-center justify-between text-[11px] border-b border-zinc-800/80 pb-2">
        <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
          <FolderLock className="w-3.5 h-3.5" />
          <span>GOVERNANÇA IAM // Scanner de Permissões</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-mono">
          {scannedFiles.toLocaleString()} ARQUIVOS AUDITADOS
        </span>
      </div>

      {/* Grade de Pastas com Scanner Laser Passando */}
      <div className="relative rounded-lg bg-zinc-950 border border-zinc-800/80 p-2.5 space-y-1.5 overflow-hidden">
        {/* Feixe Laser Neon Horizontal Varrendo */}
        {isPlaying && (
          <motion.div
            className="absolute left-0 right-0 h-8 pointer-events-none z-10 bg-gradient-to-b from-transparent via-emerald-500/20 to-emerald-400/30 border-b border-emerald-400 shadow-[0_0_12px_#34d399]"
            animate={{ top: ["-10%", "90%", "-10%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        )}

        {/* Item 1: Balancetes */}
        <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900/80 text-[10px]">
          <div className="flex items-center gap-2 truncate">
            <span className="text-zinc-500">📁</span>
            <span className="text-zinc-300 truncate">/Drive/Financeiro/Balancetes_2026</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
            AUDITED_PRIVATE
          </span>
        </div>

        {/* Item 2: Contratos (Transformação Animada de Risco -> Remediado) */}
        <motion.div
          className={`flex items-center justify-between p-1.5 rounded text-[10px] transition-colors duration-500 ${
            remediated
              ? "bg-zinc-900/80 border border-emerald-500/30"
              : "bg-amber-500/10 border border-amber-500/30"
          }`}
          animate={
            remediated
              ? { scale: [1, 1.02, 1] }
              : {}
          }
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-zinc-500">📁</span>
            <span className="text-zinc-300 truncate">/Drive/Diretoria/Contratos_Confidenciais</span>
          </div>
          {remediated ? (
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0 flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
              <span>REVOGADO_SEGURO</span>
            </span>
          ) : (
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0 animate-pulse">
              PUBLIC_LINK_RISK
            </span>
          )}
        </motion.div>

        {/* Item 3: AD Folhas */}
        <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900/80 text-[10px]">
          <div className="flex items-center gap-2 truncate">
            <span className="text-zinc-500">📁</span>
            <span className="text-zinc-300 truncate">/NTFS_Share/RH/Folhas_Pagamento</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
            RBAC_ENFORCED
          </span>
        </div>
      </div>

      {/* Estatísticas da Auditoria */}
      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-zinc-800/70 text-[10px]">
        <div className="p-1.5 rounded bg-zinc-950/80 border border-subtle">
          <span className="text-zinc-500 block text-[9px]">DIRETIVAS GAS</span>
          <span className="text-zinc-200 font-bold">100% Determinístico</span>
        </div>
        <div className="p-1.5 rounded bg-zinc-950/80 border border-subtle">
          <span className="text-zinc-500 block text-[9px]">LINKS REVOGADOS</span>
          <span className="text-emerald-400 font-bold">Zero Vazamento</span>
        </div>
        <div className="p-1.5 rounded bg-zinc-950/80 border border-subtle">
          <span className="text-zinc-500 block text-[9px]">CONFORMIDADE</span>
          <span className="text-blue-400 font-bold">IAM OK</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CENA 3: Software Engineering & Automated Deploy
// ─────────────────────────────────────────────────────────────────────────────
function ScenePipeline({ isPlaying }: { isPlaying: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="space-y-3"
    >
      <div className="flex items-center justify-between text-[11px] border-b border-zinc-800/80 pb-2">
        <div className="flex items-center gap-1.5 text-violet-400 font-semibold">
          <FileCode2 className="w-3.5 h-3.5" />
          <span>PIPELINE CI/CD // Next.js & TypeScript Estrito</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-mono">BUILD: SUCCESS (0 ERRORS)</span>
      </div>

      {/* 3 Módulos de Deploy Conectados */}
      <div className="grid grid-cols-3 gap-2">
        {/* Bloco 1: TypeScript Strict */}
        <div className="p-2 rounded bg-zinc-900/90 border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-200">TypeScript</span>
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-[9px] text-zinc-400">tsc --noEmit</div>
          <div className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden mt-1">
            <motion.div
              className="h-full bg-emerald-400"
              initial={{ width: "0%" }}
              animate={isPlaying ? { width: "100%" } : { width: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* Bloco 2: Next.js SSR Webpack */}
        <div className="p-2 rounded bg-zinc-900/90 border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-200">Next.js 16</span>
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-[9px] text-zinc-400">Webpack Static</div>
          <div className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden mt-1">
            <motion.div
              className="h-full bg-blue-400"
              initial={{ width: "0%" }}
              animate={isPlaying ? { width: "100%" } : { width: "100%" }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </div>
        </div>

        {/* Bloco 3: Production Edge */}
        <div className="p-2 rounded bg-zinc-900/90 border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-200">Edge CDN</span>
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-[9px] text-zinc-400">Global Cache</div>
          <div className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden mt-1">
            <motion.div
              className="h-full bg-violet-400"
              initial={{ width: "0%" }}
              animate={isPlaying ? { width: "100%" } : { width: "100%" }}
              transition={{ duration: 1.6, delay: 0.8 }}
            />
          </div>
        </div>
      </div>

      {/* Medidor de Performance 100/100 */}
      <div className="p-2 rounded-lg bg-zinc-950 border border-emerald-500/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-xs text-emerald-400">
            100
          </div>
          <div>
            <div className="text-[10px] font-bold text-zinc-200">Core Web Vitals Impecável</div>
            <div className="text-[9px] text-zinc-400">Performance • A11y • Best Practices • SEO</div>
          </div>
        </div>

        <div className="text-right text-[10px] font-mono">
          <span className="text-emerald-400 font-bold block">100/100</span>
          <span className="text-zinc-500 text-[9px]">Lighthouse Score</span>
        </div>
      </div>

      {/* Rodapé de Métricas de Engenharia */}
      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-zinc-800/70 text-[10px]">
        <div className="p-1.5 rounded bg-zinc-950/80 border border-subtle">
          <span className="text-zinc-500 block text-[9px]">PACOTES</span>
          <span className="text-zinc-200 font-bold">React 19 LTS</span>
        </div>
        <div className="p-1.5 rounded bg-zinc-950/80 border border-subtle">
          <span className="text-zinc-500 block text-[9px]">ESTRUTURA</span>
          <span className="text-emerald-400 font-bold">SOLID & Clean</span>
        </div>
        <div className="p-1.5 rounded bg-zinc-950/80 border border-subtle">
          <span className="text-zinc-500 block text-[9px]">EDGE LATENCY</span>
          <span className="text-blue-400 font-bold">9ms Global</span>
        </div>
      </div>
    </motion.div>
  );
}
