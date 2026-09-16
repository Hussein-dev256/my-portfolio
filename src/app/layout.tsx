import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { Footer } from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans-custom",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Mafabi Hussein | Software Engineering Portfolio",
  description:
    "A recruiter and technical reviewer-focused software engineering portfolio for Mafabi Hussein, featuring full-stack projects, backend-oriented decisions, architecture, and technical trade-offs.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mhussein.vercel.app"),
  icons: {
    icon: "/my%20logo.svg",
    shortcut: "/my%20logo.svg",
    apple: "/my%20logo.svg",
  },
  openGraph: {
    title: "Mafabi Hussein | Software Engineering Portfolio",
    description:
      "Inspect Hussein's software engineering work, architecture decisions, project ownership, and technical case studies.",
    type: "website",
    images: ["/my%20logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mafabi Hussein | Software Engineering Portfolio",
    description:
      "Full-stack and backend-oriented software engineering portfolio with project evidence and engineering depth.",
    images: ["/my%20logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <head>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                cookie_domain: location.hostname,
                cookie_flags: 'SameSite=None;Secure',
                send_page_view: true
              });
            `}
          </Script>
        </head>
      ) : (
        <head />
      )}
      <body
        className="bg-background text-foreground antialiased"
      >
        <MotionProvider>
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
