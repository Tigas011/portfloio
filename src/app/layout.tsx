import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const siteUrl = "https://thiagosalmeida.vercel.app";
const description = "Sou Thiago Souza de Almeida. Trabalho com suporte N2, redes e automação. Veja como usei Apps Script para revisar permissões no Google Drive.";

export const metadata: Metadata = {
  title: "Thiago Souza de Almeida | Infraestrutura & Engenharia de Software",
  description,
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Thiago Souza de Almeida" }],
  creator: "Thiago Souza de Almeida",
  alternates: { canonical: "/" },
  openGraph: {
    url: siteUrl,
    title: "Thiago Souza de Almeida | Infraestrutura & Engenharia de Software",
    description,
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
  description,
  url: siteUrl,
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
    <html lang="pt-BR" className="dark motion-safe:scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-graphite-950 text-zinc-100 antialiased min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
