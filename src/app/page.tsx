import { Hero } from "@/components/Hero";
import { ValueSection } from "@/components/ValueSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WhyMeSection } from "@/components/WhyMeSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex flex-col gap-8 pb-16 pt-4 md:gap-16 md:pt-8">
        <Hero />

        <div className="section-separator" aria-hidden="true" />
        <ValueSection />

        <div className="section-separator" aria-hidden="true" />
        <ServicesSection />

        <div className="section-separator" aria-hidden="true" />
        <ProjectsSection />

        <div className="section-separator" aria-hidden="true" />
        <WhyMeSection />

        <div className="section-separator" aria-hidden="true" />
        <FaqSection />

        <div className="section-separator" aria-hidden="true" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
