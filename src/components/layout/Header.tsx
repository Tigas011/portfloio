"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal, Globe } from "lucide-react";
import { dictionaryPtBR } from "@/data/dictionary";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = dictionaryPtBR.navigation;

  const navLinks = [
    { href: "#sobre", label: nav.about },
    { href: "#atuacao", label: nav.domains },
    { href: "#competencias", label: nav.skills },
    { href: "#experiencia", label: nav.experience },
    { href: "#projetos", label: nav.projects },
    { href: "#tech-lab", label: nav.techLab },
    { href: "#contato", label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-subtle bg-graphite-950/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Identificação com Nome Completo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-zinc-400 rounded"
          aria-label="Início"
        >
          <div className="w-8 h-8 rounded bg-graphite-900 border border-subtle flex items-center justify-center font-mono font-bold text-sm text-zinc-100 group-hover:border-zinc-500 transition-colors shrink-0">
            TS<span className="text-emerald-400">.</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              Thiago Souza de Almeida
            </span>
            <span className="font-mono text-[10px] text-zinc-500 tracking-wider hidden sm:inline-block">
              INFRAESTRUTURA & ENGENHARIA
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav
          className="hidden lg:flex items-center gap-6"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações à Direita */}
        <div className="flex items-center gap-3">
          {/* Idioma Placeholder */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-graphite-900 border border-subtle text-xs font-mono text-zinc-400 select-none"
            title="Idioma: Português (Brasil)"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
            <span className="font-medium text-zinc-300">PT</span>
          </div>

          {/* Atalho Tech Lab (Desktop) */}
          <a
            href="#tech-lab"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-graphite-900/90 border border-subtle hover:border-hover text-xs font-mono text-zinc-300 hover:text-zinc-100 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            <span>TERMINAL</span>
          </a>

          {/* Botão Hambúrguer Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-zinc-400 hover:text-zinc-100 hover:bg-graphite-900 focus:outline-none focus:ring-1 focus:ring-zinc-400"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-subtle bg-graphite-950 px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-2.5" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-zinc-400 hover:text-zinc-100 py-1 uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-subtle">
              <a
                href="#tech-lab"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm font-mono text-emerald-400 py-1"
              >
                <Terminal className="w-4 h-4" aria-hidden="true" />
                <span>TERMINAL CLI</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
