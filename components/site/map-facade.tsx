"use client"

import { useState } from "react"
import { Pin } from "./icons"

const SRC = "https://www.google.com/maps?q=Hyderabad,+Telangana,+India&z=11&output=embed"

/** A static placeholder that only loads Google Maps when asked, so it costs nothing up front. */
export function MapFacade() {
  const [on, setOn] = useState(false)

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-surface ring-1 ring-hairline lg:aspect-auto lg:h-full lg:min-h-[22rem]">
      {on ? (
        <iframe
          title="Map of Hyderabad, India"
          src={SRC}
          className="absolute inset-0 h-full w-full grayscale dark:invert dark:hue-rotate-180"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          onClick={() => setOn(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-center"
        >
          <svg aria-hidden className="absolute inset-0 h-full w-full text-ink/[0.07]" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <path d="M-20 220 C 120 160, 220 260, 360 190 S 620 120, 900 210" fill="none" stroke="currentColor" strokeWidth="10" />
            <path d="M160 -20 C 200 120, 140 260, 240 420" fill="none" stroke="currentColor" strokeWidth="6" />
          </svg>
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-ink text-canvas shadow-lg transition-transform duration-500 ease-apple group-hover:-translate-y-1">
            <Pin width={22} height={22} />
          </span>
          <span className="relative">
            <span className="block font-medium">Hyderabad, Telangana</span>
            <span className="mt-1 block text-sm text-accent">Show map</span>
          </span>
        </button>
      )}
    </div>
  )
}
