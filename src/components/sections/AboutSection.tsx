export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-16 text-[#f3efe5] md:py-24"
    >
      <div className="grid gap-6 border-t border-[#39443d] pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12 md:pt-10">
        <h2 id="sobre-titulo" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Sobre mim
        </h2>
        <div className="max-w-prose space-y-4 text-base leading-relaxed text-[#c9d0c9] sm:text-lg">
          <p>
            No suporte N2, investigo incidentes em ambientes Windows e redes
            corporativas. Trabalho com Active Directory, DNS, DHCP e VPN e
            administro acessos no Microsoft 365 e no Google Workspace.
          </p>
          <p>
            Com Google Apps Script, escrevi uma rotina que cruza permissões com
            a base de colaboradores e gera relatórios para revisão. Estudo
            Engenharia de Software e aplico TypeScript, React e Next.js neste
            portfólio.
          </p>
        </div>
      </div>
    </section>
  );
}
