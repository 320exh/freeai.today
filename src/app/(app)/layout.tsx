import { Nav } from "@/components/Nav";
import { DataBanner } from "@/components/DataBanner";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <DataBanner />
      <main className="flex-1 w-full mx-auto max-w-[1400px] px-4 sm:px-6 py-6">{children}</main>
      <footer className="border-t border-[var(--border)] mt-10 py-6 text-center text-xs text-[var(--fg-mute)]">
        FreeAI.today · Community-curated free AI availability · Verify sources before relying on data.
      </footer>
    </>
  );
}