"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { dictionaryPtBR } from "@/data/dictionary";

const { author, navigation } = dictionaryPtBR;
const navLinks = [
  { href: "#projetos", label: navigation.projects },
  { href: "#experiencia", label: navigation.experience },
  { href: "#competencias", label: navigation.skills },
  { href: "#tech-lab", label: navigation.techLab },
  { href: "#contato", label: navigation.contact },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bcebd2]";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navId = useId();

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMobileMenuOpen(false);
      menuButton.current?.focus();
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#3b4b42] bg-[#18201c] text-[#f3efe5]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className={`flex min-h-[2.75rem] items-center gap-2.5 rounded-sm text-sm font-semibold hover:text-[#bcebd2] motion-safe:transition-colors ${focusRing}`}
          aria-label={`${author.name}, início`}
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-[#bcebd2] font-mono text-xs font-bold text-[#18201c]"
          >
            TS
          </span>
          {author.name}
        </Link>

        <button
          ref={menuButton}
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-[#506459] hover:bg-[#293b32] motion-safe:transition-colors lg:hidden ${focusRing}`}
          aria-controls={navId}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>

        <nav
          id={navId}
          aria-label="Navegação principal"
          className={`${mobileMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100dvh_-_4rem)] flex-col gap-1 overflow-y-auto border-y border-[#3b4b42] bg-[#18201c] px-6 py-3 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-1.5 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 xl:gap-3`}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={`inline-flex min-h-[2.75rem] items-center rounded-sm px-2.5 text-sm font-medium motion-safe:transition-colors lg:whitespace-nowrap ${focusRing} ${
                href === "#contato"
                  ? "bg-[#bcebd2] text-[#18201c] hover:bg-[#d5f2e3]"
                  : "text-[#d8ded8] hover:bg-[#293b32] hover:text-[#f3efe5]"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
