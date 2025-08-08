"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type Props = { speed?: number }

// Provided assets for the marquee set
const logos = [
  { src: "/logos/collabio.svg", alt: "Collabio" },
  { src: "/logos/snapbubu-icon.png", alt: "SnapBubu" },
  { src: "/logos/getui-logo.png", alt: "getui" },
  { src: "/logos/chum-black-eclipse.png", alt: "Chum Black Eclipse" },
]

export function MarqueeLogos({ speed = 20 }: Props) {
  const measureRef = useRef<HTMLDivElement | null>(null)
  const [repeat, setRepeat] = useState(6)

  // Build two identical halves so we can translate -50% for a seamless loop
  const group = useMemo(() => Array.from({ length: repeat }).flatMap(() => logos), [repeat])
  const full = useMemo(() => [...group, ...group], [group])
  const duration = Math.max(6, Math.min(60, speed))

  // Ensure each half is at least viewport width to avoid gaps on ultra-wide screens
  useEffect(() => {
    const measure = () => {
      const el = measureRef.current
      if (!el) return
      // Render with a single group to measure its width
      const groupWidth = el.scrollWidth
      const vw = Math.max(window.innerWidth, 1)
      if (groupWidth < vw) {
        const factor = Math.ceil(vw / Math.max(groupWidth, 1)) + 1
        setRepeat((prev) => Math.max(prev, (prev || 1) * factor))
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  return (
    <div className="relative overflow-hidden w-full z-0 bg-[#CDEAF2] py-6">
      {/* Measuring group: offscreen, 1x render of current group size to get width */}
      <div className="absolute -z-10 -left-[9999px] top-0" ref={measureRef}>
        <div className="flex gap-14 md:gap-20">
          {group.map((item, i) => (
            <img key={`m-${i}`} src={item.src} alt="" className="h-16 w-auto" />
          ))}
        </div>
      </div>

      <div
        className="flex gap-14 md:gap-20 will-change-transform"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          width: "max-content",
        }}
        aria-label="Logos marquee"
      >
        {full.map((item, i) => {
          const size = /chum/i.test(item.alt) ? "h-20 md:h-24" : "h-16 md:h-18"
          return (
            <div key={i} className="shrink-0">
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className={`${size} w-auto object-contain opacity-95`}
                height={64}
                width={160}
              />
            </div>
          )
        })}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
