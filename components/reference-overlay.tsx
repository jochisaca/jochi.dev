"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ReferenceOverlay() {
  const [on, setOn] = useState(false)
  return (
    <>
      <div className="fixed right-3 top-3 z-[60]">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setOn((v) => !v)}
          className="bg-white/80 backdrop-blur hover:bg-white"
        >
          {on ? "Hide reference" : "Show reference"}
        </Button>
      </div>
      {on ? (
        <img
          src="/reference/virgilabloh-full.png"
          alt="Reference screenshot"
          className="pointer-events-none fixed inset-0 z-50 mx-auto h-full w-auto opacity-[0.35] mix-blend-multiply"
        />
      ) : null}
    </>
  )
}
