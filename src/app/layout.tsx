import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mafabi Hussein | Software Engineer & Digital Solutions Builder",
  description:
    "Portfolio of Mafabi Hussein, a software engineer building reliable, scalable digital solutions: websites, apps, automations, and software systems.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mhussein.vercel.app"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Mafabi Hussein | Software Engineer & Digital Solutions Builder",
    description:
      "Software engineer focused on high-performance websites, applications, and automations that drive real business results.",
    type: "website",
    images: ["/favicon.svg"],
  },
  twitter: {
    card: "summary",
    title: "Mafabi Hussein | Software Engineer & Digital Solutions Builder",
    description:
      "Software engineer focused on high-performance websites, applications, and automations that drive real business results.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <head>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="beforeInteractive"
          />
          <Script id="ga4-init" strategy="beforeInteractive">
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
        className={`${poppins.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
