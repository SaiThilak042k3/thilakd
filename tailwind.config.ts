import type { Config } from "tailwindcss"

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        ink: token("ink"),
        mute: token("mute"),
        hairline: token("hairline"),
        accent: token("accent"),
        signal: token("signal"),
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 8vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.045em" }],
        h1: ["clamp(2.25rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        h2: ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
        h3: ["clamp(1.375rem, 2.4vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        lead: ["clamp(1.125rem, 1.6vw, 1.375rem)", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        metric: ["clamp(4.5rem, 16vw, 13rem)", { lineHeight: "0.9", letterSpacing: "-0.06em" }],
      },
      maxWidth: {
        page: "75rem",
        prose: "65ch",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
        lift: {
          from: { transform: "translateY(0.28em)" },
          to: { transform: "none" },
        },
        cue: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        rise: "rise 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        lift: "lift 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
        cue: "cue 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite",
      },
    },
  },
  plugins: [],
}

export default config
