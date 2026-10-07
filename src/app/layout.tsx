import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://freeai.today"),
  title: {
    default: "FreeAI.today — Free AI available today",
    template: "%s · FreeAI.today",
  },
  alternates: {
    canonical: "/",
  },
  description:
    "Track which AI models are free right now: free tiers, free credits, aggregators, local models, and coding-harness compatibility. Verified sources, change history, live status.",
  keywords: ["free AI models", "free LLM", "free AI API", "open source models", "AI coding harness", "Claude Code", "OpenCode"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}