"use client"

export function StickyVAA() {
  // Sticky 'VAA' wordmark that tracks the scroll near the first content block.
  return (
    <div className="sticky top-24 -ml-24 md:-ml-32 lg:-ml-40 mb-4 select-none" aria-hidden="true">
      <div className="flex items-center gap-1 text-[#0b0b0b]">
        <span className="text-[56px] md:text-[72px] lg:text-[84px] font-black tracking-[-0.04em] leading-none">
          VAA
        </span>
        <sup className="text-xs mt-2">™</sup>
      </div>
    </div>
  )
}
