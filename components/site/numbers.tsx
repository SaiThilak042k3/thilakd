"use client"

import {
  m as Motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { useRef, useState } from "react"
import { metrics } from "@/lib/content"
import { cn } from "@/lib/utils"

type Metric = (typeof metrics)[number]
const fmt = new Intl.NumberFormat("en-US")

function Figure({ m, children }: { m: Metric; children: React.ReactNode }) {
  return (
    <>
      <p className="text-metric font-semibold tabular-nums">
        {"prefix" in m && m.prefix ? <span className="text-signal">{m.prefix}</span> : null}
        {children}
        {m.suffix ? <span className="text-signal">{m.suffix}</span> : null}
      </p>
      <p className="mt-6 text-h3 font-medium text-balance">{m.label}</p>
      <p className="mt-3 max-w-md text-[0.95rem] text-white/55 text-pretty">{m.note}</p>
    </>
  )
}

function Slide({ m, i, n, progress }: { m: Metric; i: number; n: number; progress: MotionValue<number> }) {
  const s = i / n
  const e = (i + 1) / n
  const f = 0.3 / n
  const first = i === 0
  const last = i === n - 1
  // Each slide owns [s, e]. It fades in over the first `f` and out over the last `f`,
  // so neighbours never overlap. Computed in JS (function transforms) on purpose:
  // the native scroll-timeline path mis-times multi-stop opacity on some browsers.
  const opacity = useTransform(progress, (p) => {
    if (!first && p < s) return 0
    if (!last && p > e) return 0
    if (!first && p < s + f) return (p - s) / f
    if (!last && p > e - f) return (e - p) / f
    return 1
  })
  const y = useTransform(progress, (p) => {
    if (!first && p < s + f) return 60 * (1 - Math.max(0, (p - s) / f))
    if (!last && p > e - f) return -60 * Math.min(1, (p - (e - f)) / f)
    return 0
  })
  const scale = useTransform(y, (v) => 1 - Math.abs(v) / 1000)
  const text = useTransform(progress, (p) => {
    const t = first ? Math.min(1, p / (f * 1.6)) : Math.min(1, Math.max(0, (p - s) / (f * 1.6)))
    const eased = 1 - (1 - t) ** 3
    return fmt.format(Math.round(eased * m.value))
  })

  return (
    <Motion.div style={{ opacity, y, scale }} className="absolute inset-0 flex flex-col justify-center">
      <Figure m={m}>
        <Motion.span>{text}</Motion.span>
      </Figure>
    </Motion.div>
  )
}

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const [active, setActive] = useState(0)
  const n = metrics.length
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(n - 1, Math.floor(v * n))))

  return (
    <section
      aria-labelledby="numbers-title"
      className="relative bg-[#050506] text-[#F5F5F7] dark:border-y dark:border-hairline"
    >
      <h2 id="numbers-title" className="sr-only">
        By the numbers
      </h2>

      {reduce ? (
        <div className="page grid gap-16 py-24 md:grid-cols-2">
          {metrics.map((m) => (
            <div key={m.label}>
              <Figure m={m}>{fmt.format(m.value)}</Figure>
            </div>
          ))}
        </div>
      ) : (
        <>
          <ul className="sr-only">
            {metrics.map((m) => (
              <li key={m.label}>
                {"prefix" in m ? m.prefix : ""}
                {fmt.format(m.value)}
                {m.suffix} {m.label}: {m.note}
              </li>
            ))}
          </ul>
          <div ref={ref} aria-hidden className="relative" style={{ height: `${n * 85}svh` }}>
            <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
              <div className="page grid w-full gap-10 lg:grid-cols-12">
                <div className="flex items-start justify-between lg:col-span-3 lg:flex-col lg:justify-center">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">By the numbers</p>
                  <ol className="flex gap-2 lg:mt-8 lg:flex-col lg:gap-3">
                    {metrics.map((m, i) => (
                      <li
                        key={m.label}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-500 ease-apple lg:h-6 lg:w-1.5",
                          i === active ? "w-6 bg-white lg:h-10" : "w-1.5 bg-white/25",
                        )}
                      />
                    ))}
                  </ol>
                </div>
                <div className="relative h-[62svh] lg:col-span-9">
                  {metrics.map((m, i) => (
                    <Slide key={m.label} m={m} i={i} n={n} progress={scrollYProgress} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
