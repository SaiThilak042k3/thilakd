import { capabilities, education, recognition } from "@/lib/content"
import { Reveal } from "./reveal"
import { SectionHead } from "./section"

export function About() {
  return (
    <section id="about" className="bg-surface py-24 md:py-36">
      <div className="page">
        <SectionHead
          eyebrow="Capabilities"
          title={
            <>
              From fine-tuning a model
              <span className="text-mute"> to the P&amp;L that funds it.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.group} delay={i * 0.06}>
              <h3 className="border-t border-ink pt-4 text-sm font-semibold">{c.group}</h3>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] text-mute">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-28 grid gap-12 md:mt-36 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Education</p>
              <h2 className="mt-5 text-h3 font-semibold text-balance">Data science by training. Strategy by choice.</h2>
            </Reveal>
          </div>
          <ul className="lg:col-span-8">
            {education.map((e) => (
              <li key={e.degree} className="border-t border-hairline py-6 last:border-b">
                <Reveal className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <p className="text-lg font-medium">{e.degree}</p>
                    <p className="mt-1 text-mute">
                      {e.school}
                      {e.note ? ` · ${e.note}` : ""}
                    </p>
                  </div>
                  <p className="font-mono text-[0.8rem] text-mute sm:pt-1.5">{e.period}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-28 md:mt-36">
          <Reveal>
            <p className="eyebrow">Recognition</p>
            <h2 className="mt-5 max-w-3xl text-h3 font-semibold text-balance">
              Conferences on three countries’ stages, a national ranking, and the things I led along the way.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {recognition.map((g) => (
              <Reveal key={g.group}>
                <h3 className="text-sm font-semibold">{g.group}</h3>
                <ul className="mt-4">
                  {g.items.map((it) => (
                    <li
                      key={it.title}
                      className="flex flex-col gap-0.5 border-t border-hairline py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="text-[0.95rem]">{it.title}</span>
                      <span className="shrink-0 font-mono text-[0.75rem] text-mute">{it.meta}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
