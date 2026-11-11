"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { dictionaryPtBR } from "@/data/dictionary";
import {
  Mail,
  Copy,
  Check,
  Linkedin,
  Github,
  Download,
  FileText,
  Send,
  MapPin,
} from "lucide-react";

export function ContactSection() {
  const contactDict = dictionaryPtBR.sections.contact;
  const author = dictionaryPtBR.author;
  const [copied, setCopied] = useState(false);
  const emailAddress = "ts9590104@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/thiago-souza07/";
  const githubUrl = "https://github.com/Tigas011";

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback em caso de bloqueio da Clipboard API
      const input = document.createElement("input");
      input.value = emailAddress;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <section
      id="contato"
      className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
      aria-label="Canais de comunicação e contato profissional"
    >
      <SectionHeading
        index={contactDict.index}
        title={contactDict.title}
        subtitle={contactDict.subtitle}
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Card Principal: Comunicação Direta e Ações de Conversão */}
        <SurfaceCard className="lg:col-span-8 p-6 sm:p-10 space-y-8 bg-graphite-900/90 border-zinc-800 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-950 border border-subtle text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>DISPONÍVEL PARA CONEXÕES & OPORTUNIDADES</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Vamos construir soluções robustas juntos?
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Seja para atuações estratégicas em sustentação de infraestrutura corporativa,
              automação de processos ou desenvolvimento de aplicações web com TypeScript e Next.js,
              estou à disposição para diálogo técnico.
            </p>
          </div>

          {/* Área de Ação do E-mail (Clipboard API) */}
          <div className="space-y-3 pt-4 border-t border-subtle">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              E-mail Profissional (Clique para Copiar)
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-graphite-950 border border-subtle hover:border-zinc-700 text-left transition-all duration-200 group focus:outline-none focus:ring-1 focus:ring-zinc-400"
                aria-label="Copiar endereço de e-mail para a área de transferência"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded bg-graphite-900 border border-subtle flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-zinc-200 truncate">
                    {emailAddress}
                  </span>
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-colors shrink-0 ${
                    copied
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : "bg-graphite-900 text-zinc-400 group-hover:text-zinc-200 border border-subtle"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copiar</span>
                    </>
                  )}
                </div>
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-100 text-graphite-950 font-medium text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-300 shrink-0"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Enviar E-mail</span>
              </a>
            </div>
          </div>
        </SurfaceCard>

        {/* Coluna Lateral: Redes Profissionais, Localização e Currículo */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
          {/* Card de Redes */}
          <SurfaceCard className="p-6 space-y-4 bg-graphite-900/90 border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold border-b border-subtle pb-3">
              Perfis Técnicos & Conexão
            </div>

            <div className="space-y-2.5">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-md bg-graphite-950 border border-subtle hover:border-zinc-700 text-zinc-200 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  <span className="text-xs font-mono font-medium">LinkedIn</span>
                </div>
                <span className="text-xs text-zinc-500 group-hover:text-zinc-300 font-mono">
                  in/thiago-souza07 ↗
                </span>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-md bg-graphite-950 border border-subtle hover:border-zinc-700 text-zinc-200 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-zinc-300" aria-hidden="true" />
                  <span className="text-xs font-mono font-medium">GitHub</span>
                </div>
                <span className="text-xs text-zinc-500 group-hover:text-zinc-300 font-mono">
                  github.com/Tigas011 ↗
                </span>
              </a>
            </div>
          </SurfaceCard>

          {/* Card de Currículo */}
          <SurfaceCard className="p-6 space-y-4 bg-graphite-900/90 border-zinc-800">
            <div className="flex items-center gap-2 border-b border-subtle pb-3">
              <FileText className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Currículo Profissional
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Documento detalhado com histórico consolidado em suporte corporativo, infraestrutura e engenharia de software.
            </p>

            <a
              href="/docs/curriculo.pdf"
              download="Curriculo-Thiago-Souza-Almeida.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-graphite-950 border border-subtle hover:border-zinc-600 text-zinc-200 hover:text-zinc-100 text-xs font-mono transition-colors"
            >
              <Download className="w-4 h-4 text-zinc-400" aria-hidden="true" />
              <span>Baixar Currículo (PDF)</span>
            </a>
          </SurfaceCard>

          {/* Bloco de Localização */}
          <div className="p-4 rounded-lg bg-graphite-900/60 border border-subtle text-xs font-mono text-zinc-400 flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>{author.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
