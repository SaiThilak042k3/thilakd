import type { ReactNode } from "react"
import { Reveal } from "./reveal"

export function SectionHead({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  className?: string
}) {
  return (
    <Reveal className={`max-w-4xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-h2 font-semibold text-balance">{title}</h2>
      {lead ? <p className="mt-6 max-w-prose text-lead text-mute text-pretty">{lead}</p> : null}
    </Reveal>
  )
}
