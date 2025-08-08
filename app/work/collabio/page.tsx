import Link from "next/link"
import { Binding } from "@/components/binding"
import { Section } from "@/components/section"

export default function CollabioPage() {
  return (
    <main className="relative min-h-dvh w-full bg-[#CDEAF2] text-[#0b0b0b]">
      <Binding />
      <div className="relative mx-auto max-w-[920px] px-4 md:px-6 lg:px-10 pt-8 pb-24">
        <Link href="/" className="text-sm underline">← Back</Link>
        <h1 className="mt-4 text-[32px] md:text-[40px] font-extrabold tracking-[-0.01em]">Collabio</h1>
        <Section title="Role">
          <p>Founder & full-stack developer</p>
        </Section>
        <Section title="What it is">
          <p>
            A collaboration marketplace for producers. Create offers, counter, lock in splits, and get paid—without email
            chains or guesswork.
          </p>
        </Section>
        <Section title="How it works">
          <ul className="list-disc pl-5 space-y-2">
            <li>Offers & negotiation: bids, counter-offers, expirations, status workflow</li>
            <li>Contracts baked in: royalty splits and deliverables as first-class fields</li>
            <li>Payments: Stripe Checkout + split payouts on sales</li>
            <li>Sales: sell beats; revenue auto-allocates per agreed splits</li>
            <li>Stack: React, Firebase (Auth, Firestore, Storage, Functions), Stripe</li>
          </ul>
        </Section>
        <Section title="Why it matters">
          <p>Producers work faster, deals are clear, and revenue sharing is automatic.</p>
        </Section>
      </div>
    </main>
  )
}
