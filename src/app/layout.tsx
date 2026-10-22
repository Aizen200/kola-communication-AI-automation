import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kola Communication — AI Automation for Growing Businesses",
  description:
    "Cut manual work in 30 days, without IT company pricing. Tailored automations for SMEs, real estate, finance, and operations teams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Halant:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
