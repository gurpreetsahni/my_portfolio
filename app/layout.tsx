import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `${profile.name} \u2014 ${profile.title}`,
  description: profile.about,
  keywords: [
    "Cloud Architect",
    "AWS",
    "Kubernetes",
    "Terraform",
    "DevOps",
    "Infrastructure Automation",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} \u2014 ${profile.title}`,
    description: profile.headline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} \u2014 ${profile.title}`,
    description: profile.headline,
  },
  metadataBase: new URL("https://gurpreetsahni.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
          
          :root {
            --font-display: 'Space Grotesk', system-ui, -apple-system, sans-serif;
            --font-body: 'Inter', system-ui, -apple-system, sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
          }
        `}</style>
      </head>
      <body className="bg-base-bg font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
