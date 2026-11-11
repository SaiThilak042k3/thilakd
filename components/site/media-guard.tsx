"use client"

import { useEffect } from "react"

/** Blocks the context menu and drag on images, video and image wrappers. Deterrent only: screenshots can't be blocked by any website. */
export function MediaGuard() {
  useEffect(() => {
    const isMedia = (t: EventTarget | null) => {
      if (!(t instanceof Element)) return false
      if (t.closest("img, video, picture, canvas, [data-protect]")) return true
      return !!t.querySelector(":scope > img, :scope > picture, :scope > video")
    }
    const block = (e: Event) => {
      if (isMedia(e.target)) e.preventDefault()
    }
    document.addEventListener("contextmenu", block)
    document.addEventListener("dragstart", block)
    return () => {
      document.removeEventListener("contextmenu", block)
      document.removeEventListener("dragstart", block)
    }
  }, [])
  return null
}
