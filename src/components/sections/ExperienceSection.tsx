import { experience } from "@/data/experience";
import { dictionaryPtBR } from "@/data/dictionary";
import { ChevronDown } from "lucide-react";

const employer = "Inside Soluções e Gestão de TI";

export function ExperienceSection() {
  const { title, subtitle } = dictionaryPtBR.sections.experience;

  return (
    <section
      id="experiencia"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-16 md:py-24"
      aria-labelledby="experiencia-titulo"
    >
      <div className="border-t border-[#39443d] pt-7 md:pt-10">
        <h2
          id="experiencia-titulo"
          className="text-3xl font-semibold tracking-tight text-[#f3efe5] md:text-5xl"
        >
          {title}
        </h2>
        <p className="mt-3 max-w-prose text-base leading-relaxed text-[#c9d0c9]">
          {subtitle}
        </p>
      </div>

      <div className="mt-9 md:mt-12">
        <h3 className="pb-4 text-base font-semibold text-[#bcebd2]">
          {employer}
        </h3>
        <ul className="divide-y divide-[#39443d] border-y border-[#39443d]">
          {experience.map((item) => (
            <li
              key={item.id}
              className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:gap-6 sm:py-7"
            >
              <p className="text-sm font-medium tabular-nums text-[#bcebd2] sm:pt-1">
                {item.periodLabel}
              </p>

              <div className="min-w-0">
                <h4 className="text-xl font-semibold tracking-tight text-[#f3efe5] md:text-2xl">
                  {item.role}
                </h4>
                <p className="mt-1 text-sm font-medium text-[#c9d0c9]">
                  {item.environmentType.replace(`${employer} — `, "")}
                </p>
                <p className="mt-3 max-w-prose text-base leading-relaxed text-[#c9d0c9]">
                  {item.summary}
                </p>

                <details className="group mt-2 max-w-prose">
                  <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 text-sm font-medium text-[#bcebd2] underline decoration-[#bcebd2]/40 underline-offset-4 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bcebd2] [&::-webkit-details-marker]:hidden">
                    <ChevronDown
                      className="h-4 w-4 shrink-0 group-open:rotate-180"
                      aria-hidden="true"
                    />
                    Atribuições e tecnologias
                  </summary>
                  <div className="mt-2 space-y-5 border-l border-[#536c5d] pl-4 text-sm leading-relaxed text-[#c9d0c9]">
                    <ul className="list-disc space-y-2 pl-4 marker:text-[#bcebd2]">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                    <p>
                      <span className="font-semibold text-[#f3efe5]">Tecnologias</span>
                      <span className="mt-1 block">{item.technologiesUsed.join(", ")}</span>
                    </p>
                  </div>
                </details>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
