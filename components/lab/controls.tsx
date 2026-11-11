"use client"

import { useId } from "react"
import { cn } from "@/lib/utils"

export function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
}) {
  return (
    <fieldset>
      <legend className="eyebrow">{label}</legend>
      <div className="mt-3 inline-flex w-full rounded-full bg-ink/[0.06] p-1 sm:w-auto">
        {options.map((o) => {
          const on = o.value === value
          return (
            <button
              key={String(o.value)}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(o.value)}
              className={cn(
                "min-h-10 flex-1 rounded-full px-4 text-sm font-medium transition-all duration-300 ease-apple sm:flex-none",
                on ? "bg-canvas text-ink shadow-[0_1px_3px_rgb(0_0_0/0.12)]" : "text-mute hover:text-ink",
              )}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  disabled,
  hint,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  disabled?: boolean
  hint?: string
  onChange: (v: number) => void
}) {
  const id = useId()
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="eyebrow">
          {label}
        </label>
        <output htmlFor={id} className={cn("font-mono text-sm tabular-nums", disabled && "text-mute")}>
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className="gd-range mt-2 h-11 w-full cursor-pointer transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        style={{ "--pct": `${pct}%` } as React.CSSProperties}
      />
      {hint ? <p className="text-[0.8rem] text-mute">{hint}</p> : null}
    </div>
  )
}
