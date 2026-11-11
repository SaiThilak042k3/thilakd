"use client"

import { memo } from "react"

function SparklineImpl({ values, floor }: { values: number[]; floor: number; tick: number }) {
  const W = 300
  const H = 56
  const pts = values.map((v) => Math.log10(Math.max(v - floor, 1e-6)))
  const finite = pts.filter(Number.isFinite)
  const hi = finite.length ? Math.max(...finite) : 1
  const lo = finite.length ? Math.min(...finite, hi - 1) : 0
  const n = Math.max(values.length - 1, 1)
  const d = pts
    .map((p, i) => {
      const x = (i / n) * W
      const y = H - 4 - ((Math.min(Math.max(p, lo), hi) - lo) / (hi - lo || 1)) * (H - 8)
      return `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join("")

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="mt-3 h-14 w-full" aria-hidden>
      <line x1="0" x2={W} y1={H - 0.5} y2={H - 0.5} className="stroke-hairline" strokeWidth="1" />
      {values.length > 1 ? (
        <path d={d} fill="none" className="stroke-accent" strokeWidth="1.75" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
      ) : null}
    </svg>
  )
}

export const Sparkline = memo(SparklineImpl, (a, b) => a.tick === b.tick && a.floor === b.floor)
