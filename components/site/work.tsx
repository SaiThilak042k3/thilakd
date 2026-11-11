import { sideWork, work } from "@/lib/content"
import { Reveal } from "./reveal"
import { SectionHead } from "./section"

export function Work() {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="page">
        <SectionHead
          eyebrow="Work"
          title={
            <>
              Evidence before rollout.
              <span className="text-mute"> Building AI, and the work around it that gets it used.</span>
            </>
          }
        />

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
          {work.map((job) => (
            <article key={job.company} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <header className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <Reveal>
                    <h3 className="text-h2 font-semibold">{job.short}</h3>
                    <p className="mt-3 text-mute">{job.company}</p>
                    <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
                      {job.roles.map((r) => (
                        <li key={r.title}>
                          <p className="font-medium">{r.title}</p>
                          <p className="mt-0.5 font-mono text-[0.8rem] text-mute">{r.period}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 font-mono text-[0.8rem] text-mute">{job.place}</p>
                  </Reveal>
                </div>
              </header>

              <div className="lg:col-span-8">
                <Reveal>
                  <p className="max-w-prose text-lead text-pretty">{job.intro}</p>
                </Reveal>
                <ol className="mt-10">
                  {job.themes.map((t, i) => (
                    <li key={t.title} className="border-t border-hairline py-8 md:py-10">
                      <Reveal className="grid gap-3 sm:grid-cols-[3.5rem_1fr]">
                        <span className="font-mono text-sm text-mute">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                          <h4 className="text-h3 font-semibold text-balance">{t.title}</h4>
                          <ul className="mt-4 max-w-prose space-y-3 text-mute">
                            {t.points.map((pt) => (
                              <li key={pt} className="relative pl-4 text-pretty before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-mute/60">
                                {pt}
                              </li>
                            ))}
                          </ul>
                          {t.tags ? (
                            <p className="mt-5 font-mono text-[0.78rem] text-mute/90">{t.tags.join("  ·  ")}</p>
                          ) : null}
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-12 border-t border-hairline pt-14 md:mt-32 md:grid-cols-2 md:gap-14">
          {sideWork.map((s) => (
            <Reveal key={s.title}>
              <p className="font-mono text-[0.8rem] text-mute">{s.period}</p>
              <h3 className="mt-3 text-h3 font-semibold text-balance">{s.title}</h3>
              <p className="mt-1 text-mute">{s.org}</p>
              <ul className="mt-5 space-y-2.5 text-[0.95rem] text-mute">
                {s.points.map((pt) => (
                  <li key={pt} className="relative pl-4 text-pretty before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-mute/60">
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
