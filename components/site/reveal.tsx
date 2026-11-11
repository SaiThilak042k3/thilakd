"use client"

import { m, type HTMLMotionProps } from "framer-motion"

/** Fades and lifts its children into place once, as they scroll into view. */
export function Reveal({
  delay = 0,
  y = 28,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    />
  )
}
