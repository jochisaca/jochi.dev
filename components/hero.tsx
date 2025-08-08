"use client"

export function Hero() {
  return (
    <header className="grid grid-cols-1 md:grid-cols-[320px_minmax(0,1fr)] gap-6 md:gap-10 items-start">
      {/* Left visual: keep full vertical aspect (no crop) */}
      <div className="mx-auto md:mx-0">
        <img
          src="/images/hero-photo.jpg"
          alt="Project/portrait visual"
          className="w-[280px] md:w-[320px] h-auto border border-black/30 grayscale-[15%] object-contain"
          width={320}
          height={480}
        />
      </div>

      {/* Headline and blurb */}
      <div className="relative">
        <h1
          className="font-heading text-[40px] md:text-[58px] lg:text-[64px] leading-[1.06] tracking-[-0.03em] font-black"
          style={{ ["textWrap" as any]: "balance" }}
        >
          Jochi Saca
        </h1>

        <p
          className="font-ui mt-3 text-[24px] md:text-[30px] leading-tight tracking-[-0.015em]"
          style={{ ["textWrap" as any]: "balance" }}
        >
          <span className="italic font-black">React</span> & <span className="italic font-black">React Native</span>{" "}
          <span className="font-semibold">developer</span>.
        </p>

        <p className="mt-5 font-body text-[15px] md:text-[16px] leading-7 text-[#0b0b0b]/85 max-w-[62ch]" style={{ ["textWrap" as any]: "pretty" }}>
          I design, ship, and iterate fast. Collabio — music producer deals (offers, counter-bids, splits, Stripe). SnapBubu
          — iOS (React Native) identifies Labubu figures via an AI vector database + custom backend. Other builds — ecommerce
          + POS sync, UI indexing tools, lightweight scraping pipelines, Firebase-first backends.
        </p>

        <div className="font-heading mt-8 text-[30px] md:text-[38px] leading-tight tracking-[-0.02em]">
          Selected Work&nbsp;<span className="text-[#0b0b0b]/60">2024–2025</span>
        </div>
      </div>
    </header>
  )
}
