"use client"

// Sticky JS circle logo that tracks scroll next to the hero.
// 200% larger than before.
export function StickyLogo() {
  return (
    // Use an absolutely positioned wrapper so this element doesn't add vertical
    // space to the normal flow, while the inner element remains sticky.
    <div
      className="hidden md:block absolute inset-0 -ml-48 lg:-ml-56 z-10 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="sticky top-24">
        <img
          src="/images/js-circle.png"
          alt="JS circle logo"
          width={224}
          height={224}
          className="h-40 w-40 lg:h-48 lg:w-48 object-contain opacity-95"
        />
      </div>
    </div>
  )
}
