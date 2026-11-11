"use client"

import { m, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { nav, site } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Close, Download, Menu } from "./icons"
import { ThemeToggle } from "./theme-toggle"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500",
          scrolled || open
            ? "border-b border-hairline/80 bg-canvas/75 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent",
        )}
      >
        <div className="page flex h-14 items-center justify-between md:h-16">
          <a href="#top" className="text-[0.95rem] font-semibold tracking-tight" onClick={() => setOpen(false)}>
            Thilak D<span className="text-accent">.</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === n.href.slice(1) ? "text-ink" : "text-mute hover:text-ink",
                )}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href={site.resume}
              target="_blank"
              rel="noopener"
              className="ml-1 hidden h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-medium text-canvas transition-opacity hover:opacity-85 sm:inline-flex"
            >
              Résumé <Download width={15} height={15} />
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
        <m.div aria-hidden className="h-px origin-left bg-accent/70" style={{ scaleX: progress }} />
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-canvas transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="page flex h-full flex-col pt-24 pb-10">
          <ul className="space-y-1">
            {nav.map((n, i) => (
              <li
                key={n.href}
                className={cn("transition-all duration-500 ease-apple", open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
              >
                <a
                  href={n.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[2.5rem] font-semibold tracking-[-0.04em]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener"
            tabIndex={open ? 0 : -1}
            className="btn-primary mt-auto w-full"
          >
            Download résumé <Download width={16} height={16} />
          </a>
        </nav>
      </div>
    </>
  )
}
