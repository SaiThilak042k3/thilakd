import Image from "next/image"
import { also, beyond, interests } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"
import { SectionHead } from "./section"

const spans = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
]

export function Beyond() {
  return (
    <section aria-labelledby="beyond-title" className="bg-surface py-24 md:py-36">
      <div className="page">
        <SectionHead
          eyebrow="Beyond work"
          title={
            <span id="beyond-title">
              Stages, studios and
              <span className="text-mute"> a house to captain.</span>
            </span>
          }
          lead="Most of what I know about leading people I learned outside the job: captaining a house to a championship, running student clubs, teaching, and producing music and video."
        />
      </div>

      <Reveal className="mt-14 md:mt-20">
        <ul
          aria-label="Photos"
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 scroll-px-5 md:mx-auto md:grid md:max-w-page md:auto-rows-[15rem] md:grid-cols-12 md:gap-4 md:overflow-visible md:px-8 lg:auto-rows-[19rem] lg:px-12"
        >
          {beyond.map((p, i) => (
            <li
              key={p.src}
              className={cn(
                "relative aspect-[4/5] w-[78vw] max-w-sm shrink-0 snap-start overflow-hidden rounded-[18px] bg-ink/5 md:aspect-auto md:w-auto md:max-w-none",
                spans[i],
              )}
            >
              <figure className="h-full">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 58vw, 78vw" : "(min-width: 768px) 40vw, 78vw"}
                  className="object-cover transition-transform duration-[1.2s] ease-apple hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-12 text-[0.85rem] text-white">
                  {p.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="page mt-20 grid gap-12 md:mt-28 md:grid-cols-2">
        <Reveal>
          <h3 className="text-sm font-semibold">Also</h3>
          <ul className="mt-4">
            {also.map((a) => (
              <li key={a} className="border-t border-hairline py-3.5 text-[0.95rem] text-mute">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="text-sm font-semibold">Off the clock</h3>
          <p className="mt-4 border-t border-hairline pt-3.5 text-[0.95rem] text-mute">{interests.join("  ·  ")}</p>
        </Reveal>
      </div>
    </section>
  )
}
