"use client"

import * as React from "react"

type Props = { speed?: number } // speed in seconds for one full cycle

const logos = [
  { src: "/logos/collabio.svg", alt: "Collabio" },
  { src: "/logos/snapbubu-icon.png", alt: "SnapBubu" },
  { src: "/logos/getui-logo.png", alt: "getui" },
  { src: "/logos/chum-black-eclipse.png", alt: "Chum Black Eclipse" },
]

export function MarqueeLogos({ speed = 20 }: Props) {
  // clamp duration a bit so it never gets silly-fast/slow
  const duration = Math.max(6, Math.min(60, speed))

  // Build the looping list (rendered twice for seamless scroll)
  const track = React.useMemo(() => logos, [])
  const loop = React.useMemo(() => [...track, ...track], [track])

  return (
    <div className="relative w-full overflow-hidden bg-[#CDEAF2] py-6 px-4 sm:px-6">
      {/* Visually-hidden label for a11y */}
      <span className="sr-only">Client logos carousel</span>

      <div
        className="marquee-track flex items-center gap-10 sm:gap-16 will-change-transform"
        style={
          {
            // one full slide across 50% width (because we duplicated the list)
            // @ts-ignore - CSS var type
            "--marquee-duration": `${duration}s`,
          } as React.CSSProperties
        }
        aria-hidden
      >
        {loop.map((item, i) => {
          // Small size tweaks
          const isChum = /chum/i.test(item.alt)
          const size = isChum ? "h-16 sm:h-20" : "h-12 sm:h-16"
          return (
            <div key={`${item.alt}-${i}`} className="shrink-0">
              <img
                src={item.src}
                alt={item.alt}
                className={`${size} w-auto object-contain opacity-95`}
                height={80}
                width={160}
                loading="lazy"
                decoding="async"
              />
            </div>
          )
        })}
      </div>

      {/* Styles scoped to this component */}
      <style>{`
        /* The track is twice the content (we rendered list twice), so moving -50% loops perfectly */
        .marquee-track {
          width: max-content;
          animation: marquee var(--marquee-duration) linear infinite;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
