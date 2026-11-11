"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "./icons"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const dark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-11 w-11 place-items-center rounded-full text-mute transition-colors hover:bg-ink/5 hover:text-ink"
    >
      {mounted ? dark ? <Sun /> : <Moon /> : <span className="h-[18px] w-[18px]" />}
    </button>
  )
}
