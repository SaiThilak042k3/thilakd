import Image from "next/image"
import { testimonials } from "@/lib/content"
import { Reveal } from "./reveal"

const { featured, others } = testimonials

export function Testimonials() {
  return (
    <section aria-labelledby="words-title" className="py-24 md:py-36">
      <div className="page">
        <p id="words-title" className="eyebrow">
          In their words
        </p>
        <Reveal>
          <figure className="mt-10">
            <blockquote className="max-w-5xl font-serif text-[clamp(1.875rem,4.4vw,3.75rem)] leading-[1.12] tracking-[-0.015em] text-balance">
              <span className="text-mute">“</span>
              {featured.quote}
              <span className="text-mute">”</span>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <Image src={featured.avatar} alt="" width={96} height={96} className="h-12 w-12 rounded-full object-cover grayscale" />
              <div>
                <p className="font-medium">{featured.name}</p>
                <p className="text-sm text-mute">{featured.title}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-hairline pt-12 md:grid-cols-2">
          {others.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure>
                <blockquote className="max-w-prose text-lead text-pretty">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image src={t.avatar} alt="" width={80} height={80} className="h-10 w-10 rounded-full object-cover grayscale" />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-[0.8rem] text-mute">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
