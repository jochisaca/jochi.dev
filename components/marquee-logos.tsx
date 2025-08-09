"use client"

import * as React from "react"

type Props = { speed?: number } // seconds per full loop (lower = faster)

const logos = [
  { src: "/logos/collabio.svg", alt: "Collabio" },
  { src: "/logos/snapbubu-icon.png", alt: "SnapBubu" },
  { src: "/logos/getui-logo.png", alt: "getui" },
  { src: "/logos/chum-black-eclipse.png", alt: "Chum Black Eclipse" },
]

export function MarqueeLogos({ speed = 12 }: Props) {
  // Faster default than before; clamp to avoid extremes
  const duration = Math.max(4, Math.min(40, speed))
  const list = React.useMemo(() => logos, [])
  const loop = React.useMemo(() => [...list, ...list], [list])

  return (
    <div className="relative w-full overflow-hidden bg-[#CDEAF2] py-6">
      {/* content wrapper with safe horizontal padding so nothing kisses the edge */}
      <div className="relative mx-auto w-full px-4 sm:px-6" aria-label="Client logos carousel">
        <div
          className="marquee-track flex items-center gap-10 sm:gap-16 will-change-transform"
          style={
            {
              // @ts-ignore custom prop
              "--marquee-duration": `${duration}s`,
            } as React.CSSProperties
          }
        >
          {loop.map((item, i) => {
            const isChum = /chum/i.test(item.alt)
            const size = isChum ? "h-16 sm:h-20" : "h-12 sm:h-16"
            return (
              <div key={`${item.alt}-${i}`} className="shrink-0">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`${size} w-auto max-w-none object-contain opacity-95`}
                  height={80}
                  width={160}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        /* Rendered list is duplicated once, so -50% = perfect seamless loop */
        .marquee-track {
          width: max-content;
          animation: marquee var(--marquee-duration) linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
