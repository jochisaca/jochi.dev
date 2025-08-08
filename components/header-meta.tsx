"use client"

export function HeaderMeta() {
  return (
    <div className="mb-6">
      {/* tiny meta labels */}
      <div className="grid grid-cols-3 text-[10px] tracking-[0.08em] text-[#0b0b0b]/85 uppercase font-ui">
        <div>JS—25—PF—PR—01</div>
        <div className="text-center">[JOCHI_INDEX_2025]</div>
        <div className="text-right">jochisaca.com</div>
      </div>
      {/* hairline with elbow corners */}
      <div className="relative mt-2">
        <div className="h-[2px] w-full bg-[#0b0b0b]" />
        <div className="absolute -left-[2px] -bottom-[6px] h-[6px] w-[2px] bg-[#0b0b0b]" />
        <div className="absolute -right-[2px] -bottom-[6px] h-[6px] w-[2px] bg-[#0b0b0b]" />
      </div>
    </div>
  )
}
