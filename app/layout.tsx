import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { ThemeProvider } from "@/components/site/theme-provider"
import { site } from "@/lib/content"
import "./globals.css"

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap", preload: false })
const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const title = `${site.name} · ${site.role}, Healthcare AI`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: ["Thilak D", "AI data scientist", "healthcare AI", "LLM evaluation", "medical ASR", "knowledge graphs", "RAG", "Hyderabad"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0C" },
  ],
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: "Mondee Tech Private Limited" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Sri Sathya Sai Institute of Higher Learning" },
    { "@type": "CollegeOrUniversity", name: "BITS Pilani" },
  ],
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  sameAs: [site.links.linkedin, site.links.github],
  knowsAbout: ["Healthcare AI", "LLM evaluation", "Speech recognition", "Knowledge graphs", "Retrieval-augmented generation"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
