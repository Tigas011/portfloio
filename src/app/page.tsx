import { HeroSection } from "@/components/sections/HeroSection";
import { DriveAuditFeature } from "@/components/sections/DriveAuditFeature";
import { AboutSection } from "@/components/sections/AboutSection";
import { DomainsSection } from "@/components/sections/DomainsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechLabSection } from "@/components/sections/TechLabSection";
import { StudiesSection } from "@/components/sections/StudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full pb-12 md:pb-16">
      <HeroSection />
      <DriveAuditFeature />
      <ProjectsSection />
      <AboutSection />
      <DomainsSection />
      <SkillsSection />
      <ExperienceSection />
      <TechLabSection />
      <StudiesSection />
      <ContactSection />
    </main>
  );
}
