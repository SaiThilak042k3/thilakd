import { About } from "@/components/site/about"
import { Beyond } from "@/components/site/beyond"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/site/hero"
import { Lab } from "@/components/site/lab"
import { Nav } from "@/components/site/nav"
import { Numbers } from "@/components/site/numbers"
import { Research } from "@/components/site/research"
import { Testimonials } from "@/components/site/testimonials"
import { Work } from "@/components/site/work"

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Numbers />
        <Work />
        <Research />
        <Lab />
        <About />
        <Testimonials />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
