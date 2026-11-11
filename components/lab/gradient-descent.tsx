"use client"

import { useTheme } from "next-themes"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  MAX_STEPS,
  analyse,
  initRun,
  landscapes,
  level,
  lrFromSlider,
  sliderFromLr,
  span,
  step,
  type Landscape,
  type OptimizerId,
  type Outcome,
  type RunState,
  type Stats,
  type Vec,
} from "@/lib/landscapes"
import { cn } from "@/lib/utils"
import { Segmented, Slider } from "./controls"
import { Sparkline } from "./sparkline"

const OPTIMIZERS: { id: OptimizerId; label: string }[] = [
  { id: "sgd", label: "SGD" },
  { id: "momentum", label: "Momentum" },
  { id: "adam", label: "Adam" },
]
const STEPS_PER_FRAME = 2
const BANDS = 13

type RGB = [number, number, number]
const readVar = (name: string): RGB => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim()
  const [r, g, b] = raw.split(/\s+/).map(Number)
  return [r || 0, g || 0, b || 0]
}
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]

function message(o: Outcome | null, best: number | undefined, isBest: boolean) {
  if (!o) return { tone: "idle", text: "Tap the map to choose a start point, set the dials, then run." }
  switch (o.kind) {
    case "running":
      return { tone: "idle", text: "Descending…" }
    case "converged":
      return {
        tone: "good",
        text: `Converged in ${o.steps} steps.${isBest ? " New best for this level." : best ? ` Your best is ${best}.` : ""}`,
      }
    case "local":
      return { tone: "warn", text: `Stuck in a local minimum after ${o.steps} steps. More momentum, or another start, could carry you over the ridge.` }
    case "stalled":
      return { tone: "warn", text: "Barely moving. The learning rate is too low to get anywhere in time." }
    case "diverged":
      return { tone: "bad", text: `Diverged after ${o.steps} steps. The learning rate is too high, so every step overshoots further.` }
    case "timeout":
      return { tone: "warn", text: `Out of steps (${MAX_STEPS}). Still heading downhill: try a higher learning rate or more momentum.` }
  }
}

const loadBest = (): Record<string, number> => {
  try {
    return JSON.parse(localStorage.getItem("gd-best") || "{}")
  } catch {
    return {}
  }
}
const saveBest = (b: Record<string, number>) => {
  try {
    localStorage.setItem("gd-best", JSON.stringify(b))
  } catch {}
}

export default function GradientDescent() {
  const { resolvedTheme } = useTheme()
  const [li, setLi] = useState(0)
  const land: Landscape = landscapes[li]
  const stats: Stats = useMemo(() => analyse(land), [land])

  const [opt, setOpt] = useState<OptimizerId>("sgd")
  const [lrS, setLrS] = useState(() => sliderFromLr(0.06))
  const [beta, setBeta] = useState(0.9)
  const [start, setStart] = useState<Vec>(land.start)
  const [outcome, setOutcome] = useState<Outcome | null>(null)
  const [tick, setTick] = useState(0)
  const [best, setBest] = useState<Record<string, number>>({})
  const [isBest, setIsBest] = useState(false)
  const [size, setSize] = useState(0)

  const lr = lrFromSlider(lrS)
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bgRef = useRef<HTMLCanvasElement | null>(null)
  const runRef = useRef<RunState>(initRun(land.start, land))
  const rafRef = useRef(0)
  const visibleRef = useRef(true)
  const params = useRef({ opt, lr, beta })
  params.current = { opt, lr, beta }

  useEffect(() => setBest(loadBest()), [])

  // Track the square canvas size.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setSize(Math.round(e.contentRect.width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Paint the contour map once per level, size or theme.
  useEffect(() => {
    if (!size) return
    const res = Math.min(Math.round(size * Math.min(window.devicePixelRatio || 1, 1.5)), 720)
    const off = document.createElement("canvas")
    off.width = off.height = res
    const ctx = off.getContext("2d")
    if (!ctx) return
    const img = ctx.createImageData(res, res)
    const low = readVar("signal")
    const canvasC = readVar("canvas")
    const mid = mix(low, canvasC, 0.86)
    const high = mix(readVar("accent"), canvasC, 0.72)
    const ink = readVar("ink")
    const { x0, x1, y0, y1 } = land.bounds
    const band = new Uint8Array(res * res)
    for (let j = 0; j < res; j++) {
      const y = y1 - ((j + 0.5) / res) * (y1 - y0)
      for (let i = 0; i < res; i++) {
        const x = x0 + ((i + 0.5) / res) * (x1 - x0)
        band[j * res + i] = Math.min(BANDS - 1, Math.floor(level(stats, land.f(x, y)) * BANDS))
      }
    }
    for (let k = 0; k < res * res; k++) {
      const b = band[k]
      const t = b / (BANDS - 1)
      let c = t < 0.45 ? mix(low, mid, t / 0.45) : mix(mid, high, (t - 0.45) / 0.55)
      const i = k % res
      const edge = (i < res - 1 && band[k + 1] !== b) || (k + res < res * res && band[k + res] !== b)
      if (edge) c = mix(c, ink, 0.14)
      img.data[k * 4] = c[0]
      img.data[k * 4 + 1] = c[1]
      img.data[k * 4 + 2] = c[2]
      img.data[k * 4 + 3] = 255
    }
    ctx.putImageData(img, 0, 0)
    bgRef.current = off
    setTick((t) => t + 1)
  }, [size, land, stats, resolvedTheme])

  const toScreen = useCallback(
    (p: Vec, W: number): [number, number] => {
      const { x0, x1, y0, y1 } = land.bounds
      return [((p.x - x0) / (x1 - x0)) * W, (1 - (p.y - y0) / (y1 - y0)) * W]
    },
    [land],
  )

  // Draw the map, target, path and ball.
  useEffect(() => {
    const c = canvasRef.current
    const bg = bgRef.current
    if (!c || !bg || !size) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const W = size
    if (c.width !== W * dpr) {
      c.width = c.height = W * dpr
    }
    const ctx = c.getContext("2d")
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.imageSmoothingEnabled = true
    ctx.drawImage(bg, 0, 0, W, W)
    const [ir, ig, ib] = readVar("ink")
    const [cr, cg, cb] = readVar("canvas")
    const inkA = (a: number) => `rgba(${ir},${ig},${ib},${a})`

    // Target
    const [tx, ty] = toScreen(stats.min, W)
    ctx.strokeStyle = inkA(0.55)
    ctx.lineWidth = 1.25
    ctx.setLineDash([3, 3])
    ctx.beginPath()
    ctx.arc(tx, ty, 11, 0, Math.PI * 2)
    ctx.stroke()
    ctx.setLineDash([])

    // Path
    const r = runRef.current
    if (r.path.length > 1) {
      ctx.strokeStyle = inkA(0.85)
      ctx.lineWidth = 1.75
      ctx.lineJoin = "round"
      ctx.beginPath()
      r.path.forEach((p, k) => {
        const [x, y] = toScreen(p, W)
        if (k === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      })
      ctx.stroke()
      ctx.fillStyle = inkA(0.6)
      for (let k = 1; k < r.path.length - 1; k += 1) {
        const [x, y] = toScreen(r.path[k], W)
        ctx.beginPath()
        ctx.arc(x, y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Start
    const [sx, sy] = toScreen(start, W)
    ctx.strokeStyle = inkA(0.9)
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(sx, sy, 6, 0, Math.PI * 2)
    ctx.stroke()

    // Ball
    const head = r.path[r.path.length - 1]
    const [bx, by] = toScreen(head, W)
    ctx.fillStyle = inkA(1)
    ctx.strokeStyle = `rgb(${cr},${cg},${cb})`
    ctx.lineWidth = 2.5
    ctx.beginPath()
    ctx.arc(bx, by, 7.5, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  }, [tick, size, start, stats, toScreen])

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = 0
  }, [])

  const reset = useCallback(
    (from: Vec = start) => {
      stop()
      runRef.current = initRun(from, land)
      setOutcome(null)
      setIsBest(false)
      setTick((t) => t + 1)
    },
    [land, start, stop],
  )

  const finish = useCallback(
    (o: Outcome) => {
      setOutcome(o)
      if (o.kind === "converged") {
        setBest((prev) => {
          const old = prev[land.id]
          if (old && old <= o.steps) {
            setIsBest(false)
            return prev
          }
          setIsBest(true)
          const next = { ...prev, [land.id]: o.steps }
          saveBest(next)
          return next
        })
      }
    },
    [land.id],
  )

  const loop = useCallback(() => {
    if (!visibleRef.current) {
      rafRef.current = 0
      return
    }
    const { opt, lr, beta } = params.current
    let o: Outcome = { kind: "running" }
    for (let k = 0; k < STEPS_PER_FRAME && o.kind === "running"; k++) {
      o = step(runRef.current, land, stats, opt, lr, beta)
    }
    setTick((t) => t + 1)
    if (o.kind === "running") {
      rafRef.current = requestAnimationFrame(loop)
    } else {
      rafRef.current = 0
      finish(o)
    }
  }, [land, stats, finish])

  const run = useCallback(() => {
    stop()
    runRef.current = initRun(start, land)
    setIsBest(false)
    setOutcome({ kind: "running" })
    rafRef.current = requestAnimationFrame(loop)
  }, [land, loop, start, stop])

  // Pause while scrolled away; resume when back.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      visibleRef.current = e.isIntersecting
      if (e.isIntersecting && outcome?.kind === "running" && !rafRef.current) {
        rafRef.current = requestAnimationFrame(loop)
      }
    })
    io.observe(el)
    return () => io.disconnect()
  }, [loop, outcome])

  useEffect(() => stop, [stop])

  const chooseLevel = (i: number) => {
    stop()
    const l = landscapes[i]
    setLi(i)
    setStart(l.start)
    runRef.current = initRun(l.start, l)
    setOutcome(null)
    setIsBest(false)
  }

  const placeStart = (p: Vec) => {
    const { x0, x1, y0, y1 } = land.bounds
    const q = { x: Math.min(x1, Math.max(x0, p.x)), y: Math.min(y1, Math.max(y0, p.y)) }
    setStart(q)
    reset(q)
  }

  const onPointer = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (outcome?.kind === "running") return
    const rect = e.currentTarget.getBoundingClientRect()
    const { x0, x1, y0, y1 } = land.bounds
    placeStart({
      x: x0 + ((e.clientX - rect.left) / rect.width) * (x1 - x0),
      y: y1 - ((e.clientY - rect.top) / rect.height) * (y1 - y0),
    })
  }

  const onKey = (e: React.KeyboardEvent) => {
    const d = 0.025 * span(land.bounds)
    const moves: Record<string, Vec> = {
      ArrowLeft: { x: -d, y: 0 },
      ArrowRight: { x: d, y: 0 },
      ArrowUp: { x: 0, y: d },
      ArrowDown: { x: 0, y: -d },
    }
    if (moves[e.key] && outcome?.kind !== "running") {
      e.preventDefault()
      placeStart({ x: start.x + moves[e.key].x, y: start.y + moves[e.key].y })
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      run()
    }
  }

  const r = runRef.current
  const loss = r.losses[r.losses.length - 1] - stats.fmin
  const msg = message(outcome, best[land.id], isBest)
  const running = outcome?.kind === "running"

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <div ref={wrapRef} className="relative aspect-square w-full overflow-hidden rounded-[22px] ring-1 ring-hairline">
          <canvas
            ref={canvasRef}
            onClick={onPointer}
            onKeyDown={onKey}
            tabIndex={0}
            role="img"
            aria-label={`${land.name} loss landscape. Start at x ${start.x.toFixed(2)}, y ${start.y.toFixed(2)}. Arrow keys move the start point, Enter runs.`}
            className={cn("absolute inset-0 h-full w-full touch-manipulation", running ? "cursor-progress" : "cursor-crosshair")}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-4 font-mono text-[0.72rem] text-ink/70">
            <span>
              step {r.t.toString().padStart(3, " ")} / {MAX_STEPS}
            </span>
            <span>loss {Number.isFinite(loss) ? (loss < 1e-3 ? loss.toExponential(1) : loss.toFixed(3)) : "∞"}</span>
          </div>
        </div>
        <p aria-live="polite" className={cn("mt-5 min-h-[3rem] text-[0.95rem] text-pretty", {
          "text-mute": msg.tone === "idle",
          "text-ink": msg.tone !== "idle",
        })}>
          <span
            aria-hidden
            className={cn("mr-2 inline-block h-2 w-2 rounded-full align-middle", {
              "bg-mute/40": msg.tone === "idle",
              "bg-emerald-500": msg.tone === "good",
              "bg-signal": msg.tone === "warn",
              "bg-red-500": msg.tone === "bad",
            })}
          />
          {msg.text}
        </p>
      </div>

      <div className="space-y-8 lg:col-span-5">
        <div>
          <Segmented
            label="Landscape"
            value={li}
            options={landscapes.map((l, i) => ({ value: i, label: l.name }))}
            onChange={chooseLevel}
          />
          <p className="mt-3 text-[0.9rem] text-mute text-pretty">{land.blurb}</p>
        </div>

        <Segmented
          label="Optimiser"
          value={opt}
          options={OPTIMIZERS.map((o) => ({ value: o.id, label: o.label }))}
          onChange={setOpt}
        />

        <Slider
          label="Learning rate"
          value={lrS}
          min={0}
          max={1000}
          step={1}
          display={lr < 0.01 ? lr.toFixed(4) : lr.toFixed(3)}
          onChange={setLrS}
        />
        <Slider
          label={opt === "adam" ? "β₁ (first-moment decay)" : "Momentum"}
          value={beta}
          min={0}
          max={0.99}
          step={0.01}
          display={beta.toFixed(2)}
          disabled={opt === "sgd"}
          hint={opt === "sgd" ? "Plain SGD has no memory of past steps." : undefined}
          onChange={setBeta}
        />

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="btn-primary min-w-[7.5rem]" onClick={running ? () => { stop(); setOutcome(null) } : run}>
            {running ? "Stop" : outcome ? "Run again" : "Run"}
          </button>
          <button type="button" className="btn-ghost" onClick={() => { setStart(land.start); reset(land.start) }}>
            Reset
          </button>
          <span className="ml-auto font-mono text-[0.78rem] text-mute">
            best {best[land.id] ? `${best[land.id]} steps` : "—"}
          </span>
        </div>

        <div>
          <p className="eyebrow">Loss over steps (log scale)</p>
          <Sparkline values={r.losses} floor={stats.fmin} tick={tick} />
        </div>
      </div>
    </div>
  )
}
