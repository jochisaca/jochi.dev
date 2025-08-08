"use client"

// Larger, perfectly round binder holes with layered inset shadows.
// Fixed to the left; content containers use padding-left to clear it.
export function Binding() {
  const holes = Array.from({ length: 34 }, (_, i) => i)
  const HOLE = 30

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-0 z-30 w-14 sm:w-16 lg:w-20 flex items-start justify-center"
    >
      <div className="mt-3 flex h-full flex-col items-center gap-5 sm:gap-5">
        {holes.map((i) => (
          <div
            key={i}
            className="binder-hole flex-none"
            style={{
              width: HOLE,
              height: HOLE,
            }}
          />
        ))}
      </div>
    </div>
  )
}
