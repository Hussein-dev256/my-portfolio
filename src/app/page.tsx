import { Hero } from "@/components/Hero";
import { ProfessionalProfileSection } from "@/components/ProfessionalProfileSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { ApproachSection } from "@/components/ApproachSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EngineeringGatewaySection } from "@/components/EngineeringGatewaySection";
import { ContactSection } from "@/components/ContactSection";
import { Atmosphere } from "@/components/Atmosphere";

export default function Home() {
  return (
    <div className="relative min-h-screen text-neutral-950">
      <Atmosphere />
      <main className="overflow-x-clip">
        <Hero />
        <ProfessionalProfileSection />
        <WhatIDoSection />
        <ProjectsSection />
        <ApproachSection />
        <EngineeringGatewaySection />
        <ContactSection />
      </main>
    </div>
  );
}
