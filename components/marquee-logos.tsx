"use client"

import * as React from "react"

type Props = { speed?: number } // seconds per full loop (lower = faster)

const logos = [
  { src: "/logos/collabio.svg", alt: "Collabio" },
  { src: "/logos/snapbubu-icon.png", alt: "SnapBubu" },
  { src: "/logos/getui-logo.png", alt: "getui" },
  { src: "/logos/chum-black-eclipse.png", alt: "Chum Black Eclipse" },
]

export function MarqueeLogos({ speed = 10 }: Props) {
  const duration = Math.max(4, Math.min(40, speed))
  const list = React.useMemo(() => logos, [])
  const loop = React.useMemo(() => [...list, ...list], [list])

  return (
    <div className="relative w-full bg-[#CDEAF2] py-6 px-4 sm:px-6">
      {/* Make the CLIPPER full-bleed so the edge is the actual viewport, not the padded content box */}
      <div className="overflow-hidden mx-[-1rem] sm:mx-[-1.5rem]">
        <div
          className="marquee-track flex items-center gap-10 sm:gap-16 will-change-transform px-4 sm:px-6"
          style={
            {
              // @ts-ignore custom CSS var
              "--marquee-duration": `${duration}s`,
            } as React.CSSProperties
          }
          aria-label="Client logos carousel"
        >
          {loop.map((item, i) => {
            const isChum = /chum/i.test(item.alt)
            const size = isChum ? "h-16 sm:h-20" : "h-12 sm:h-16"
            return (
              <div key={`${item.alt}-${i}`} className="shrink-0">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`${size} w-auto max-w-none object-contain`}
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
        /* duplicated list => shift -50% for perfect loop */
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
