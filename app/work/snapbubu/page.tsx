import Link from "next/link"
import { Binding } from "@/components/binding"
import { Section } from "@/components/section"

export default function SnapBubuPage() {
  return (
    <main className="relative min-h-dvh w-full bg-[#CDEAF2] text-[#0b0b0b]">
      <Binding />
      <div className="relative mx-auto max-w-[920px] px-4 md:px-6 lg:px-10 pt-8 pb-24">
        <Link href="/" className="text-sm underline">← Back</Link>
        <h1 className="mt-4 text-[32px] md:text-[40px] font-extrabold tracking-[-0.01em]">SnapBubu</h1>
        <Section title="Role">
          <p>Founder & full-stack developer (mobile + backend)</p>
        </Section>
        <Section title="What it is">
          <p>
            An iOS app that identifies Labubu figures from a photo and helps collectors track sets.
          </p>
        </Section>
        <Section title="How it works">
          <ul className="list-disc pl-5 space-y-2">
            <li>On-device → backend: image uploads to a custom inference API</li>
            <li>Vector search: embeddings + AI vector database for nearest-match results</li>
            <li>Collection: log items, view series, see what you’re missing</li>
            <li>Stack: React Native, Firebase, custom AI service, vector DB (Qdrant), queueing & caching</li>
          </ul>
        </Section>
        <Section title="Why it matters">
          <p>Fast ID and clean record-keeping for a niche but passionate community.</p>
        </Section>
      </div>
    </main>
  )
}
