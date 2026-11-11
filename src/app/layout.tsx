import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Thiago Souza de Almeida | Infraestrutura & Engenharia de Software",
  description:
    "Portfólio profissional. Especialista em diagnosticar ambientes críticos, blindar redes corporativas e construir automações com código.",
  metadataBase: new URL("https://portfolio.local"),
  authors: [{ name: "Thiago Souza de Almeida" }],
  creator: "Thiago Souza de Almeida",
  openGraph: {
    title: "Thiago Souza de Almeida | Infraestrutura & Engenharia de Software",
    description:
      "Portfólio profissional. Especialista em diagnosticar ambientes críticos, blindar redes corporativas e construir automações com código.",
    type: "website",
    locale: "pt_BR",
    siteName: "Portfólio Profissional — Thiago Souza de Almeida",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thiago Souza de Almeida",
  jobTitle: "Analista de Suporte N2 (Infra & Cloud) | Engenharia de Software",
  email: "mailto:ts9590104@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/thiago-souza07/",
    "https://github.com/Tigas011",
  ],
  description:
    "Especialista em diagnosticar ambientes críticos, blindar redes corporativas e construir automações com código.",
  url: "https://portfolio.local",
  knowsAbout: [
    "Infraestrutura de TI",
    "Active Directory",
    "Redes Corporativas (DNS, DHCP, VPN)",
    "pfSense & UniFi",
    "Microsoft 365 (Exchange & SharePoint)",
    "Google Workspace",
    "Google Apps Script",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Docker",
    "DevOps",
    "Engenharia de Software",
    "Clean Code & SOLID",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-graphite-950 text-zinc-100 antialiased min-h-screen flex flex-col selection:bg-blue-500/20">
        <Header />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
