// Loss landscapes and optimisers for the Gradient Descent game.
// Pure functions, no DOM, so they can be unit-checked in Node.

export type Vec = { x: number; y: number }
export type Bounds = { x0: number; x1: number; y0: number; y1: number }

export type Landscape = {
  id: "bowl" | "ravine" | "craters"
  name: string
  blurb: string
  bounds: Bounds
  start: Vec
  f: (x: number, y: number) => number
}

const gauss = (x: number, y: number, cx: number, cy: number, s: number) =>
  Math.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * s * s))

export const landscapes: Landscape[] = [
  {
    id: "bowl",
    name: "Bowl",
    blurb: "Convex and stretched. One minimum, but push the learning rate too far and the steep side throws you out.",
    bounds: { x0: -3, x1: 3, y0: -3, y1: 3 },
    start: { x: -2.5, y: 2.2 },
    f: (x, y) => 0.5 * x * x + 4 * y * y,
  },
  {
    id: "ravine",
    name: "Ravine",
    blurb: "A curved, flat-bottomed valley (Rosenbrock). Plain SGD crawls. Momentum or Adam earn their keep here.",
    bounds: { x0: -2, x1: 2, y0: -1, y1: 3 },
    start: { x: -1.5, y: 2.5 },
    f: (x, y) => (1 - x) ** 2 + 10 * (y - x * x) ** 2,
  },
  {
    id: "craters",
    name: "Craters",
    blurb: "Several basins, one deepest. Where you start and how much momentum you carry decide where you end up.",
    bounds: { x0: -3, x1: 3, y0: -3, y1: 3 },
    start: { x: 2.5, y: 0.5 },
    f: (x, y) =>
      0.06 * (x * x + y * y) -
      1.6 * gauss(x, y, 1.4, -1.1, 0.55) -
      1.1 * gauss(x, y, -1.4, 1.2, 0.6) -
      0.9 * gauss(x, y, -1.5, -1.5, 0.45) -
      0.7 * gauss(x, y, 1.3, 1.5, 0.5),
  },
]

export const span = (b: Bounds) => b.x1 - b.x0

export function grad(l: Landscape, p: Vec): Vec {
  const h = 1e-5 * span(l.bounds)
  return {
    x: (l.f(p.x + h, p.y) - l.f(p.x - h, p.y)) / (2 * h),
    y: (l.f(p.x, p.y + h) - l.f(p.x, p.y - h)) / (2 * h),
  }
}

export type Stats = { min: Vec; fmin: number; fmax: number }

/** Global minimum and loss range, found by a dense grid search plus a short refine. */
export function analyse(l: Landscape, n = 240): Stats {
  const { x0, x1, y0, y1 } = l.bounds
  let best = { x: 0, y: 0 }
  let fmin = Infinity
  let fmax = -Infinity
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      const x = x0 + ((x1 - x0) * i) / n
      const y = y0 + ((y1 - y0) * j) / n
      const v = l.f(x, y)
      if (v < fmin) {
        fmin = v
        best = { x, y }
      }
      if (v > fmax) fmax = v
    }
  }
  const p = settle(l, best)
  return { min: p, fmin: Math.min(fmin, l.f(p.x, p.y)), fmax }
}

/** Small, stable gradient steps until the point comes to rest in its basin. */
export function settle(l: Landscape, from: Vec, iters = 6000): Vec {
  let p = { ...from }
  for (let k = 0; k < iters; k++) {
    const g = grad(l, p)
    p = { x: p.x - 1e-3 * g.x, y: p.y - 1e-3 * g.y }
  }
  return p
}

export type OptimizerId = "sgd" | "momentum" | "adam"

export type RunState = {
  p: Vec
  v: Vec
  m: Vec
  s: Vec
  t: number
  path: Vec[]
  losses: number[]
  still: number
}

export type Outcome =
  | { kind: "running" }
  | { kind: "converged"; steps: number }
  | { kind: "local"; steps: number }
  | { kind: "stalled"; steps: number }
  | { kind: "diverged"; steps: number }
  | { kind: "timeout"; steps: number }

export const MAX_STEPS = 300

export function initRun(start: Vec, l: Landscape): RunState {
  return {
    p: { ...start },
    v: { x: 0, y: 0 },
    m: { x: 0, y: 0 },
    s: { x: 0, y: 0 },
    t: 0,
    path: [{ ...start }],
    losses: [l.f(start.x, start.y)],
    still: 0,
  }
}

/** Advance one optimiser step in place and report the outcome so far. */
export function step(
  r: RunState,
  l: Landscape,
  stats: Stats,
  opt: OptimizerId,
  lr: number,
  beta: number,
): Outcome {
  const g = grad(l, r.p)
  const prev = { ...r.p }
  r.t += 1

  if (opt === "sgd") {
    r.p = { x: r.p.x - lr * g.x, y: r.p.y - lr * g.y }
  } else if (opt === "momentum") {
    r.v = { x: beta * r.v.x - lr * g.x, y: beta * r.v.y - lr * g.y }
    r.p = { x: r.p.x + r.v.x, y: r.p.y + r.v.y }
  } else {
    const b2 = 0.999
    r.m = { x: beta * r.m.x + (1 - beta) * g.x, y: beta * r.m.y + (1 - beta) * g.y }
    r.s = { x: b2 * r.s.x + (1 - b2) * g.x * g.x, y: b2 * r.s.y + (1 - b2) * g.y * g.y }
    const c1 = 1 - beta ** r.t
    const c2 = 1 - b2 ** r.t
    r.p = {
      x: r.p.x - (lr * (r.m.x / c1)) / (Math.sqrt(r.s.x / c2) + 1e-8),
      y: r.p.y - (lr * (r.m.y / c1)) / (Math.sqrt(r.s.y / c2) + 1e-8),
    }
  }

  const loss = l.f(r.p.x, r.p.y)
  r.path.push({ ...r.p })
  r.losses.push(loss)

  const w = span(l.bounds)
  const { x0, x1, y0, y1 } = l.bounds
  const far = r.p.x < x0 - w || r.p.x > x1 + w || r.p.y < y0 - w || r.p.y > y1 + w
  if (!Number.isFinite(loss) || far) return { kind: "diverged", steps: r.t }

  const range = stats.fmax - stats.fmin
  const dist = Math.hypot(r.p.x - stats.min.x, r.p.y - stats.min.y)
  if (dist < 0.025 * w && loss - stats.fmin < 0.002 * range) return { kind: "converged", steps: r.t }

  const moved = Math.hypot(r.p.x - prev.x, r.p.y - prev.y)
  r.still = moved < 2e-4 * w ? r.still + 1 : 0
  if (r.still >= 12) {
    // Barely moving. Roll a careful probe downhill from here: if it reaches the global
    // minimum, the run was just too slow; otherwise it is sitting in another basin.
    const end = settle(l, r.p)
    const resting = Math.hypot(end.x - r.p.x, end.y - r.p.y) < 0.05 * w
    const global = Math.hypot(end.x - stats.min.x, end.y - stats.min.y) < 0.05 * w
    return resting && !global ? { kind: "local", steps: r.t } : { kind: "stalled", steps: r.t }
  }

  if (r.t >= MAX_STEPS) return { kind: "timeout", steps: r.t }
  return { kind: "running" }
}

/** 0 at the global minimum, 1 at the highest point: square-root eased for contour colouring. */
export function level(stats: Stats, v: number) {
  const t = (v - stats.fmin) / (stats.fmax - stats.fmin)
  return Math.sqrt(Math.min(1, Math.max(0, t)))
}

/** Learning-rate slider: 0..1000 on a log scale from 0.001 to 0.5. */
export const LR_MIN = 0.001
export const LR_MAX = 0.5
export const lrFromSlider = (s: number) => LR_MIN * (LR_MAX / LR_MIN) ** (s / 1000)
export const sliderFromLr = (lr: number) => (1000 * Math.log(lr / LR_MIN)) / Math.log(LR_MAX / LR_MIN)
