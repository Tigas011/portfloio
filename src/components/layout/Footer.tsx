import { ArrowUp } from "lucide-react";
import { dictionaryPtBR } from "@/data/dictionary";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-white/15">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-4 text-sm text-zinc-400">
        <p>© {currentYear} {dictionaryPtBR.author.name}</p>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-2 font-medium text-[#f3efe5] transition-colors hover:text-[#bcebd2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bcebd2]"
        >
          Voltar ao topo
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
