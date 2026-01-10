import { Hero } from "@/components/Hero";
import { ValueSection } from "@/components/ValueSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WhyMeSection } from "@/components/WhyMeSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="space-y-16 pb-16 pt-4 md:space-y-20 md:pt-8">
        <Hero />
        <ValueSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyMeSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
