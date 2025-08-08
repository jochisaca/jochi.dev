"use client"

import { useState } from "react"
import { Paperclip, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

export function FolderCard() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      {/* Folder body */}
      <div
        className={cn(
          "relative w-[min(92vw,920px)] rounded-[18px] border border-neutral-200 bg-neutral-50 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500",
          open ? "pt-16 md:pt-20 pb-14 md:pb-16 h-[720px]" : "pt-12 md:pt-16 pb-10 md:pb-12 h-[560px]",
        )}
        aria-label="Archive Folder"
      >
        {/* Paper edge embellishment */}
        <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/40" />

        {/* Brand + number (top-left inside) */}
        <div className="px-6 md:px-10">
          <div className="flex items-start gap-4 text-neutral-800">
            <div className="font-black tracking-tight text-[28px] leading-none select-none" aria-hidden="true">
              {"VRA"}
              <sup className="align-top text-xs ml-1">™</sup>
            </div>
            <div className="text-[26px] leading-none tracking-[0.25em] font-medium mt-[2px] select-none">0110</div>
          </div>
        </div>

        {/* Pinned image (center-top area) */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <div className="relative">
            {/* faux paperclip */}
            <div className="absolute -right-5 -top-4 text-neutral-400">
              <Paperclip className="h-7 w-7" aria-hidden="true" />
            </div>

            <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
              {/* Using the provided source URL directly per user instruction. 
                 We avoid next/image to keep this self-contained for a remote URL [^2]. */}
              <img
                src="https://sjc.microlink.io/-iu8Mrbd9EQKqUItKOLGaSnHCYAaT1agybcHhWG4Acfq7UhQxE6wYQSHQrRv6r71HgFxf9G-SlY3hjIG2pyfEw.jpeg"
                alt="Pinned portrait reference"
                width={360}
                height={360}
                className="h-[220px] w-[220px] md:h-[260px] md:w-[260px] object-cover grayscale"
              />
            </div>
          </div>
        </div>

        {/* Large seal (bottom-left inside) */}
        <div className="absolute left-6 md:left-10 bottom-40 md:bottom-44 opacity-70">
          <img
            src="/dragon-seal-monochrome.png"
            alt="Official correspondence seal"
            width={140}
            height={140}
            className="h-24 w-24 md:h-36 md:w-36 object-contain"
          />
        </div>

        {/* Headline */}
        <div className="absolute left-6 right-6 md:left-10 md:right-10 bottom-6 md:bottom-8">
          <h1 className="font-extrabold tracking-[-0.01em] leading-tight text-neutral-900 text-[26px] md:text-[36px]">
            {"The Virgil Abloh Archive™"}
            <br />
            {"Announces Virgil Abloh: The "}
            <span className="whitespace-nowrap">{"Codes, a Grand Palais Exhibition"}</span>
            {" in "}
            <span className="whitespace-nowrap">{"Partnership with NIKE"}</span>
          </h1>
        </div>

        {/* Right-side file tab */}
        <button
          type="button"
          aria-pressed={open}
          aria-label={open ? "Close folder" : "Open folder"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "group absolute -right-6 md:-right-8 top-24 h-44 md:h-56 w-10 md:w-12 rounded-r-[14px] border border-l-0 border-neutral-200 bg-neutral-100 shadow-md flex items-center justify-center",
            "transition-transform duration-500",
            open ? "translate-x-0" : "translate-x-0",
          )}
        >
          {/* Tab spine */}
          <div className="absolute inset-y-0 left-0 w-[3px] bg-sky-200 rounded-tl-lg rounded-bl-lg" aria-hidden="true" />
          <div className="flex flex-col items-center justify-between py-3 h-full text-neutral-600">
            <ChevronRight
              className={cn("h-4 w-4 transition-transform", open ? "rotate-180" : "rotate-0")}
              aria-hidden="true"
            />
            <div className="-rotate-90 text-[11px] tracking-widest uppercase">Open</div>
            <div className="text-[10px] text-neutral-400">No. 1</div>
          </div>
        </button>

        {/* Expanded content (revealed when open) */}
        <div
          className={cn(
            "pointer-events-none transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute inset-x-6 md:inset-x-10 top-[58%] md:top-[60%]">
            <div className="grid gap-3 text-sm md:text-base text-neutral-700">
              <p className="max-w-[70ch]">
                {"Exploring the design and cultural lexicon established by Virgil Abloh through ephemera, prototypes, and archival correspondences. This dossier-style interface nods to studio files and official communications."}
              </p>
              <p className="max-w-[70ch]">
                {"Tap the tab to collapse. The visual language intentionally embraces utility, paper textures, and typographic precision."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
