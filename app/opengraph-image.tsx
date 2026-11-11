import { ImageResponse } from "next/og"

export const alt = "Thilak D, AI Data Scientist in healthcare AI"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#FBFBFA",
          color: "#111114",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#66666C" }}>THILAKD.VERCEL.APP</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Thilak D</div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 24, color: "#2F5BEA", letterSpacing: -1 }}>
            I build and evaluate AI that doctors trust.
          </div>
        </div>
        <div style={{ display: "flex", gap: 48, fontSize: 26, color: "#66666C" }}>
          <span>AI Data Scientist</span>
          <span>Healthcare AI · LLMs · Evaluation</span>
          <span>Hyderabad</span>
        </div>
      </div>
    ),
    size,
  )
}
