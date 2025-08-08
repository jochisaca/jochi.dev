"use client"

const tabs = [
  { label: "About", target: "about" },
  { label: "Work", target: "work" },
  { label: "Notes", target: "notes" },
]

export function EdgeTabs() {
  function scrollTo(id: string) {
    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (id === "notes") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <nav className="fixed right-1 top-28 z-20 hidden md:flex flex-col gap-2" aria-label="Section tabs">
      {tabs.map((t) => (
        <button
          key={t.target}
          onClick={() => scrollTo(t.target)}
          className="rounded-l-md border border-[#7ec1d3] px-3 py-2 shadow-sm text-[11px] uppercase tracking-widest text-[#0b0b0b]/80 bg-white/90 hover:bg-white"
          aria-controls={t.target}
        >
          {t.label}
        </button>
      ))}
    </nav>
  )
}
