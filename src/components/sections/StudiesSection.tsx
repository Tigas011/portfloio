import { academicFormation, certifications, studyTracks } from "@/data/studies";

export function StudiesSection() {
  return (
    <section id="estudos" aria-labelledby="studies-title" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-20">
      <div className="grid gap-8 border-t border-white/20 pt-8 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 id="studies-title" className="font-serif text-4xl text-[#f3efe5] md:text-5xl">
          Formação e estudos
        </h2>

        <div className="space-y-6">
          <ul className="divide-y divide-white/15">
            {academicFormation.map((item) => (
              <li key={item.id} className="py-4 first:pt-0">
                <p className="font-semibold text-[#f3efe5]">{item.degree}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">{item.institution} · {item.period} · {item.status}</p>
              </li>
            ))}
          </ul>

          <details className="border-y border-white/15">
            <summary className="cursor-pointer py-3 font-medium text-[#bcebd2]">Certificações e cursos</summary>
            <ul className="divide-y divide-white/15 pb-3">
              {certifications.map((item) => (
                <li key={item.id} className="py-3 text-sm">
                  <p className="font-medium text-[#f3efe5]">{item.title}</p>
                  <p className="mt-1 text-zinc-300">{item.issuer} · {item.status}</p>
                </li>
              ))}
            </ul>
          </details>

          <details className="border-b border-white/15">
            <summary className="cursor-pointer pb-3 pt-1 font-medium text-[#bcebd2]">O que estou estudando</summary>
            <ul className="divide-y divide-white/15 pb-3">
              {studyTracks.map((track) => (
                <li key={track.id} className="py-4 text-sm leading-relaxed text-zinc-300">
                  <h3 className="font-semibold text-[#f3efe5]">{track.title}</h3>
                  <p className="mt-1">{track.currentFocus}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">{track.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
}
