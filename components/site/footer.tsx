import { site } from "@/lib/content"
import { ArrowUp } from "./icons"

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="page flex flex-col gap-4 py-10 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Designed and built by Thilak in Hyderabad.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
          Back to top <ArrowUp width={15} height={15} />
        </a>
      </div>
    </footer>
  )
}
