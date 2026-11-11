import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-subtle bg-graphite-950 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-subtle">
          {/* Identificação */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-sm text-zinc-100">
                Thiago Souza de Almeida
              </span>
              <span className="text-xs font-mono text-zinc-500">
                {"// GUARULHOS, SP"}
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md">
              Sustentação de Ambientes Críticos, Infraestrutura Corporativa & Engenharia de Software.
            </p>
          </div>

          {/* Links e Stack */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <a
              href="https://www.linkedin.com/in/thiago-souza07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              LinkedIn ↗
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href="https://github.com/Tigas011"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              GitHub ↗
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href="/docs/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              Currículo (PDF) ↗
            </a>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} Thiago Souza de Almeida. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500">
              Next.js 16 • React 19 • Tailwind CSS • TypeScript
            </span>
            <span className="text-zinc-700">|</span>
            <Link
              href="#top"
              className="inline-flex items-center gap-1 hover:text-zinc-300 transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <span>TOPO</span>
              <ArrowUp className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
