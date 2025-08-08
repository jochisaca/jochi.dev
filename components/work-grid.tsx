"use client"

import Link from "next/link"

export function WorkGrid() {
  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
      <Link href="/work/collabio" className="group block rounded-md border border-black/15 bg-white/40 p-4 hover:bg-white/70">
        <div className="text-sm uppercase tracking-wide text-black/60">Collabio</div>
        <h3 className="mt-1 text-xl font-bold">A React platform for paid music collaborations</h3>
        <p className="mt-2 text-sm text-black/75">
          Firebase for data/auth, Stripe for payments and split revenue, structured offers with counter-bids and royalty
          terms.
        </p>
      </Link>

      <Link href="/work/snapbubu" className="group block rounded-md border border-black/15 bg-white/40 p-4 hover:bg-white/70">
        <div className="text-sm uppercase tracking-wide text-black/60">SnapBubu</div>
        <h3 className="mt-1 text-xl font-bold">React Native iOS app that recognizes Labubu collectibles</h3>
        <p className="mt-2 text-sm text-black/75">
          Image → vector embedding → fast lookup; log your collection and track sets. Built on a custom AI service + vector
          DB + Firebase.
        </p>
      </Link>

      <div className="block rounded-md border border-black/15 bg-white/40 p-4">
        <div className="text-sm uppercase tracking-wide text-black/60">Other builds</div>
        <h3 className="mt-1 text-xl font-bold">ecommerce + POS sync, UI indexing tools, light scrapers</h3>
        <p className="mt-2 text-sm text-black/75">
          Firebase-first backends, small automations, and pragmatic admin dashboards.
        </p>
      </div>
    </div>
  )
}
