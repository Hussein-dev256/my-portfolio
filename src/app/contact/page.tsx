import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { RouteHeader } from "@/components/RouteHeader";

export const metadata: Metadata = {
  title: "Contact | Mafabi Hussein",
  description:
    "Contact Mafabi Hussein for software engineering opportunities, technical review conversations, or recruiting inquiries.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-[#050505] text-white">
      <RouteHeader
        kicker="Contact"
        title={
          <>
            One clear path to{" "}
            <span className="editorial-type font-normal text-yellow-700">reach me.</span>
          </>
        }
      >
        Send role context, interview details, or a technical question. The form
        and professional links are intentionally direct.
      </RouteHeader>
      <ContactSection />
    </main>
  );
}
