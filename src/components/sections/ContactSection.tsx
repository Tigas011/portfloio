"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Copy } from "lucide-react";

const emailAddress = "ts9590104@gmail.com";
const profiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thiago-souza07/" },
  { label: "GitHub", href: "https://github.com/Tigas011" },
];

export function ContactSection() {
  const [copyMessage, setCopyMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyMessage("Endereço copiado.");
    } catch {
      setCopyMessage("Não foi possível copiar. Selecione o endereço para copiá-lo manualmente.");
    }
  }

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 pt-12 md:pt-16"
    >
      <div className="grid gap-8 border-t border-white/15 pt-9 md:grid-cols-[minmax(0,1fr)_minmax(15rem,22rem)] md:gap-14 md:pt-12">
        <div className="min-w-0">
          <h2
            id="contact-title"
            className="text-4xl font-semibold tracking-[-0.055em] text-[#f3efe5] sm:text-5xl"
          >
            Contato
          </h2>

          <a
            href={`mailto:${emailAddress}`}
            className="mt-5 inline-block max-w-full text-xl font-medium text-[#bcebd2] underline decoration-[#bcebd2]/40 underline-offset-4 [overflow-wrap:anywhere] hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bcebd2] sm:text-2xl"
          >
            {emailAddress}
          </a>

          <div className="mt-4">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 items-center gap-2 border border-white/25 px-3.5 text-sm font-medium text-[#f3efe5] transition-colors hover:border-[#bcebd2] hover:text-[#bcebd2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bcebd2]"
            >
              <Copy className="size-4" aria-hidden="true" />
              Copiar e-mail
            </button>
            <p role="status" className="mt-2 min-h-5 text-sm text-zinc-300">
              {copyMessage}
            </p>
          </div>
        </div>

        <ul
          aria-label="Perfis e currículo"
          className="self-start divide-y divide-white/15 border-y border-white/15"
        >
          {profiles.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-between gap-2 py-3 text-sm font-medium text-[#f3efe5] transition-colors hover:text-[#bcebd2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bcebd2]"
              >
                {label}
                <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="/docs/curriculo.pdf"
              download="Curriculo-Thiago-Souza-Almeida.pdf"
              className="flex min-h-12 items-center justify-between gap-2 py-3 text-sm font-medium text-[#f3efe5] transition-colors hover:text-[#bcebd2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bcebd2]"
            >
              Baixar currículo (PDF)
              <ArrowDown className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
