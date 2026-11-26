import { ArrowDown, ArrowUpRight } from "lucide-react";
import { dictionaryPtBR } from "@/data/dictionary";

export function HeroSection() {
  const { name } = dictionaryPtBR.author;

  return (
    <section
      id="top"
      aria-labelledby="intro-title"
      className="w-full scroll-mt-16 bg-[#f3efe5] text-[#18201c] selection:bg-[#bcebd2] selection:text-[#18201c]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-11 sm:pb-12 sm:pt-14 lg:pt-16">
        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
          <span className="font-semibold">{name}</span>
          <span className="text-[#526158]">Guarulhos, SP</span>
        </p>

        <h1
          id="intro-title"
          className="mb-7 mt-5 text-[clamp(2rem,6.6vw,5.25rem)] font-semibold leading-[1.04] tracking-[-0.07em] sm:mb-8 sm:mt-6"
        >
          <span className="block">Cuido da infraestrutura.</span>
          <span className="block text-[#35614d]">Automatizo o que se repete.</span>
        </h1>

        <div className="flex flex-col gap-5 border-t border-[#c9cec2] pt-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-base leading-relaxed text-[#405047]">
            Atuo no suporte N2, com redes corporativas, ambientes Windows e
            administração do Google Workspace.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:shrink-0">
            <a
              href="#drive-audit"
              className="inline-flex min-h-11 items-center gap-2 border border-[#18201c] bg-[#bcebd2] px-4 text-sm font-semibold transition-colors hover:bg-[#a9dbbf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18201c]"
            >
              Ver o estudo de caso
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>

            <a
              href="/docs/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold underline decoration-[#75867c] underline-offset-4 transition-colors hover:text-[#35614d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18201c]"
            >
              Currículo (PDF)
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
