import Image from "next/image"
import { hero, site } from "@/lib/content"
import { ArrowRight, Download } from "./icons"

const facts = [
  { k: "Now", v: hero.current },
  { k: "Based in", v: site.location },
  { k: "Published", v: "SAGE, ICCET 2025 (first author)" },
]

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-44">
      <div className="page">
        <div className="flex animate-rise items-center gap-4">
          <Image
            src="/images/people/thilak.jpg"
            alt="Portrait of Thilak D"
            width={128}
            height={128}
            priority
            className="h-14 w-14 rounded-full object-cover grayscale md:h-16 md:w-16"
          />
          <p className="eyebrow">
            {site.name} · {site.role}
          </p>
        </div>
        <h1 className="mt-8 text-display font-semibold md:mt-10">
          <span className="block animate-lift">{hero.title[0]}</span>
          <span className="block animate-lift font-serif text-[1.08em] font-normal italic tracking-[-0.02em] text-accent [animation-delay:90ms]">
            {hero.title[1]}
          </span>
        </h1>

        <div className="mt-12 grid animate-rise gap-8 border-t border-hairline pt-8 [animation-delay:380ms] md:mt-16 md:grid-cols-12 md:pt-10">
          <p className="max-w-prose text-lead text-mute text-pretty md:col-span-7">{hero.summary}</p>
          <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
            <a href={site.resume} target="_blank" rel="noopener" className="btn-primary">
              Download résumé <Download width={16} height={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch <ArrowRight width={16} height={16} />
            </a>
          </div>
        </div>

        <dl className="mt-12 grid animate-rise gap-6 [animation-delay:460ms] sm:grid-cols-3 md:mt-16">
          {facts.map((f) => (
            <div key={f.k}>
              <dt className="eyebrow">{f.k}</dt>
              <dd className="mt-2 text-[0.95rem] text-ink">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
