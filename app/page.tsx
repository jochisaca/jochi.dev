import { Binding } from "@/components/binding"
import { StickyLogo } from "@/components/sticky-logo"
import { HeaderMeta } from "@/components/header-meta"
import { Hero } from "@/components/hero"
import { MarqueeLogos } from "@/components/marquee-logos"
import { WorkGrid } from "@/components/work-grid"
import { Section } from "@/components/section"
import { EdgeTabs } from "@/components/edge-tabs"

export default function Page() {
  return (
    <main className="relative min-h-dvh w-full bg-[#CDEAF2] text-[#0b0b0b]">
      <Binding />
      <EdgeTabs />

      {/* Ensure content never falls under the binder on small screens */}
      <div className="relative mx-auto max-w-[980px] pl-16 sm:pl-20 lg:pl-24 pr-4 md:pr-6 lg:pr-10 pt-6 pb-24">
        <HeaderMeta />

        <div className="relative" id="top">
          <StickyLogo />
          <Hero />
        </div>

        {/* Full-bleed marquee right below hero */}
        <div
          className="mt-8 relative z-0"
          style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
        >
          {/* Single dotted line above */}
          <div className="w-screen"><div className="dotted-rule" /></div>

          <div className="w-screen overflow-hidden py-2">
            <MarqueeLogos direction="left" speed={320} />
          </div>

          {/* Single dotted line below */}
          <div className="w-screen"><div className="dotted-rule" /></div>
        </div>

        {/* Work */}
        <section className="mt-12 scroll-mt-24" id="work">
          <h2 className="sr-only">Work</h2>
          <WorkGrid />
        </section>

        {/* Selected extras (Notes anchor) */}
        <Section title="Selected extras" className="mt-12 scroll-mt-24" id="notes">
          <ul className="list-disc pl-5 space-y-2">
            <li>Clover ↔ Shopify inventory sync and SKU cleanup.</li>
            <li>getui — a curated UI index with Firebase storage and admin tools.</li>
            <li>Automations: small scrapers, queues, and dashboards for real data.</li>
          </ul>
        </Section>

        {/* About */}
        <Section title="About" className="mt-10 scroll-mt-24" id="about">
          <p className="font-body text-[16px] md:text-[17px] leading-7" style={{ ["textWrap" as any]: "pretty" }}>
            I’m a self-taught developer focused on React, React Native, and Firebase. I like taking a sketch to production,
            wiring data models that won’t fight you later, and shipping features that real people use. I completed
            FreeCodeCamp certificates in 2024 and have been building ever since.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-7">
            {"Before coding full-time, I directed and produced music videos and commercial projects for major labels and brands — see my video work "}
            <a className="underline" href="https://www.jochisaca.com" target="_blank" rel="noreferrer">
              here
            </a>
            {"."}
          </p>
        </Section>

        {/* Strengths */}
        <Section title="Strengths" className="mt-8">
          <p className="font-body text-[16px] md:text-[17px] leading-7" style={{ ["textWrap" as any]: "pretty" }}>
            {"Product-minded engineering, rapid MVPs, clean data flows, pragmatic AI, payments, and admin tooling. Based "}
            <span className="whitespace-nowrap">in Miami.</span>
          </p>
        </Section>

        {/* Skills */}
        <Section title="Skills" className="mt-8">
          <p className="font-body text-[16px] md:text-[17px] leading-7">
            React / React Native • TypeScript/JavaScript • Firebase (Auth, Firestore, Storage, Functions) • Stripe • Qdrant /
            vector search • Node • Playwright • Cloud storage/CDN • Basic Docker • CI/CD
          </p>
        </Section>

        {/* Contact */}
        <Section title="Contact" className="mt-8">
          <p className="font-body text-[16px] md:text-[17px] leading-7">
            Let’s build something useful. {" "}
            <a className="underline" href="https://linkedin.com/in/jochisaca" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            • {" "}
            <a className="underline" href="mailto:jochisaca@gmail.com">
              Email
            </a>{" "}
            • {" "}
            <a className="underline" href="https://github.com/jochisaca" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </Section>
      </div>
    </main>
  )
}
