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
    <main className="flex min-h-screen flex-col items-center w-full pb-20 md:pb-32">
      <HeroSection />
      <DriveAuditFeature />

      <div className="w-full">
        <ProjectsSection />
      </div>

      <div className="w-full">
        <AboutSection />
      </div>

      <div className="w-full">
        <DomainsSection />
      </div>

      <SkillsSection />

      <div className="w-full">
        <ExperienceSection />
      </div>

      <div className="w-full">
        <TechLabSection />
      </div>

      <div className="w-full">
        <StudiesSection />
      </div>

      <div className="w-full">
        <ContactSection />
      </div>
    </main>
  );
}
