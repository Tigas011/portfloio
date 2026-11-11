"use client";

import { useState, useRef, useEffect, useId, FormEvent } from "react";
import { terminalCommands } from "@/data/terminalCommands";
import { Terminal, CornerDownLeft, Trash2, HelpCircle } from "lucide-react";

interface HistoryEntry {
  id: string;
  command: string;
  outputLines: string[];
  isError?: boolean;
}

export function SafeTerminal() {
  const terminalInputId = useId();
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: "initial-welcome",
      command: "init --session",
      outputLines: [
        "thiago@workstation:~$ — Interactive Profile Shell v1.0",
        "Console interativo para inspeção rápida de stack, rotinas e experiência.",
        "Selecione um comando sugerido abaixo ou digite 'help' para listar opções.",
      ],
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll para a última linha quando o histórico é atualizado
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  function executeCommand(rawCommand: string) {
    const cleanCmd = rawCommand.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (cleanCmd === "help") {
      const helpLines = [
        "COMANDOS DISPONÍVEIS:",
        "  whoami             - Resumo do perfil técnico e objetivos profissionais",
        "  stack --list       - Tecnologias divididas entre produção e estudo contínuo",
        "  automation --case  - Estudo de caso de automação com Google Apps Script",
        "  studies --roadmap  - Eixos prioritários de especialização e arquitetura",
        "  help               - Exibe esta mensagem de ajuda",
        "  clear              - Limpa o histórico da sessão",
      ];
      setHistory((prev) => [
        ...prev,
        { id: String(Date.now()), command: rawCommand, outputLines: helpLines },
      ]);
      setInputVal("");
      return;
    }

    const matched = terminalCommands.find(
      (c) => c.command.toLowerCase() === cleanCmd
    );

    if (matched) {
      setHistory((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          command: matched.command,
          outputLines: matched.outputLines,
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          command: rawCommand,
          outputLines: [
            `bash: ${rawCommand}: command not found.`,
            `Digite 'help' para ver os comandos suportados.`,
          ],
          isError: true,
        },
      ]);
    }

    setInputVal("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    executeCommand(inputVal);
  }

  return (
    <div className="w-full rounded-lg border border-subtle bg-graphite-950 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Barra Superior do Terminal */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-graphite-900 border-b border-subtle">
        <div className="flex items-center gap-2">
          {/* Controles de janela */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-zinc-700/60" />
            <span className="w-3 h-3 rounded-full bg-zinc-700/60" />
            <span className="w-3 h-3 rounded-full bg-zinc-700/60" />
          </div>
          <span className="text-zinc-400 text-xs ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            <span className="text-zinc-300 font-semibold">thiago@workstation:~</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setHistory([])}
            className="p-1.5 rounded hover:bg-graphite-850 text-zinc-500 hover:text-zinc-300 transition-colors"
            title="Limpar terminal (clear)"
            aria-label="Limpar histórico do terminal"
          >
            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Barra de Comandos Rápidos Sugeridos */}
      <div className="px-4 py-2 bg-graphite-900/60 border-b border-subtle flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-zinc-500 flex items-center gap-1 mr-1">
          <HelpCircle className="w-3 h-3" aria-hidden="true" />
          <span>SUGESTÕES:</span>
        </span>
        {terminalCommands.map((cmd) => (
          <button
            key={cmd.id}
            type="button"
            onClick={() => executeCommand(cmd.command)}
            className="px-2.5 py-1 rounded bg-graphite-950 border border-subtle hover:border-zinc-700 text-zinc-300 hover:text-emerald-400 text-xs transition-colors"
          >
            $ {cmd.command}
          </button>
        ))}
        <button
          type="button"
          onClick={() => executeCommand("help")}
          className="px-2 py-1 rounded bg-graphite-950 border border-subtle hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs transition-colors"
        >
          $ help
        </button>
      </div>

      {/* Área de Visualização e Logs com Scroll */}
      <div
        className="p-4 sm:p-5 space-y-4 min-h-[300px] max-h-[460px] overflow-y-auto overflow-x-auto text-zinc-300 leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry) => (
          <div key={entry.id} className="space-y-1.5">
            {/* Linha do Comando Digitado */}
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-400 font-semibold shrink-0">
                thiago@workstation
              </span>
              <span className="text-zinc-600">:</span>
              <span className="text-blue-400 font-semibold shrink-0">~</span>
              <span className="text-zinc-600">$</span>
              <span className="text-zinc-100 font-medium">{entry.command}</span>
            </div>

            {/* Linhas de Saída */}
            <div
              className={`pl-2 sm:pl-4 space-y-0.5 border-l-2 ${
                entry.isError ? "border-amber-500/40 text-amber-400" : "border-zinc-800 text-zinc-300"
              }`}
            >
              {entry.outputLines.map((line, lIdx) => {
                const isSectionHeader = line.startsWith("[");
                return (
                  <div
                    key={lIdx}
                    className={`${
                      isSectionHeader
                        ? "text-emerald-400 font-semibold pt-1"
                        : "text-zinc-300"
                    }`}
                  >
                    {line || "\u00A0"}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Linha de Prompt Ativa para Entrada Interativa */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
          <label htmlFor={terminalInputId} className="flex items-center gap-2 shrink-0 cursor-text">
            <span className="text-emerald-400 font-semibold">thiago@workstation</span>
            <span className="text-zinc-600">:</span>
            <span className="text-blue-400 font-semibold">~</span>
            <span className="text-zinc-600">$</span>
          </label>
          <input
            id={terminalInputId}
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent text-zinc-100 focus:outline-none placeholder-zinc-700 text-xs sm:text-sm font-mono caret-emerald-400"
            placeholder="digite um comando (ex: whoami, help)..."
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="text-zinc-500 hover:text-zinc-300 p-1 rounded focus:outline-none focus:ring-1 focus:ring-zinc-500"
            aria-label="Executar comando"
          >
            <CornerDownLeft className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </form>

        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
