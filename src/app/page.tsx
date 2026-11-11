import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DomainsSection } from "@/components/sections/DomainsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechLabSection } from "@/components/sections/TechLabSection";
import { StudiesSection } from "@/components/sections/StudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full pb-20 md:pb-32">
      {/* Hero sem ScrollReveal — é o conteúdo above-the-fold */}
      <HeroSection />

      <ScrollReveal className="w-full" delay={0}>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal className="w-full" delay={0.04}>
        <DomainsSection />
      </ScrollReveal>

      {/* SkillsSection já tem seu próprio useInView interno */}
      <SkillsSection />

      <ScrollReveal className="w-full" delay={0}>
        <ExperienceSection />
      </ScrollReveal>

      <ScrollReveal className="w-full" delay={0.04}>
        <ProjectsSection />
      </ScrollReveal>

      <ScrollReveal className="w-full" delay={0}>
        <TechLabSection />
      </ScrollReveal>

      <ScrollReveal className="w-full" delay={0.04}>
        <StudiesSection />
      </ScrollReveal>

      <ScrollReveal className="w-full" delay={0}>
        <ContactSection />
      </ScrollReveal>
    </main>
  );
}
