import Image from "next/image"
import { research } from "@/lib/content"
import { ArrowUpRight, GitHub } from "./icons"
import { Reveal } from "./reveal"
import { SectionHead } from "./section"

const { paper, projects, small } = research

function Bars() {
  return (
    <figure className="mt-10">
      <div className="space-y-8">
        {paper.results.map((r) => (
          <div key={r.metric}>
            <p className="text-sm font-medium">{r.metric}</p>
            <div className="mt-3 space-y-2">
              {[
                { label: "SAGE hybrid", v: r.hybrid, cls: "bg-accent" },
                { label: "Vector-only RAG", v: r.baseline, cls: "bg-mute/35" },
              ].map((b) => (
                <div key={b.label} className="grid grid-cols-[7.5rem_1fr_2.75rem] items-center gap-3 text-[0.8rem]">
                  <span className="text-mute">{b.label}</span>
                  <span className="h-2 overflow-hidden rounded-full bg-ink/[0.06]">
                    <span className={`block h-full rounded-full ${b.cls}`} style={{ width: `${b.v * 100}%` }} />
                  </span>
                  <span className="text-right font-mono tabular-nums">{b.v.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-6 text-[0.8rem] text-mute">
        Scores out of 1. The hybrid also had the best ROUGE-1 F1 of the three approaches tested (0.96).
      </figcaption>
    </figure>
  )
}

export function Research() {
  return (
    <section id="research" className="bg-surface py-24 md:py-36">
      <div className="page">
        <SectionHead
          eyebrow="Research"
          title={
            <>
              Retrieval that knows when to ask a graph.
            </>
          }
          lead="Healthcare questions mix facts that live in tables with rules that live in prose. My research combines knowledge graphs and vector search so each answer is grounded in the right one."
        />

        <article className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-accent">{paper.kicker}</p>
            <h3 className="mt-4 text-h3 font-semibold">{paper.title}</h3>
            <p className="mt-2 text-lead text-mute">{paper.subtitle}</p>
            {paper.body.map((b) => (
              <p key={b} className="mt-5 max-w-prose text-mute text-pretty">
                {b}
              </p>
            ))}
            <Bars />
            <p className="mt-8 text-[0.8rem] leading-relaxed text-mute">
              {paper.authors}. {paper.venue}.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <figure data-protect className="overflow-hidden rounded-[22px] bg-white p-3 ring-1 ring-hairline sm:p-5">
              <Image
                src={paper.image}
                alt="SAGE architecture: document processing, ontology schema, knowledge graph and vector database feeding a fine-tuned LLM"
                width={2000}
                height={1159}
                sizes="(min-width: 1024px) 680px, 100vw"
                className="h-auto w-full"
              />
            </figure>
            <p className="mt-3 text-[0.8rem] text-mute">SAGE pipeline, from guideline documents to fused graph and vector answers.</p>
          </Reveal>
        </article>

        <div className="mt-24 grid gap-16 border-t border-hairline pt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <p className="font-mono text-[0.8rem] text-mute">{p.meta}</p>
              <h3 className="mt-3 text-h3 font-semibold text-balance">{p.title}</h3>
              <p className="mt-4 max-w-prose text-mute text-pretty">{p.body}</p>
              <p className="mt-5 font-mono text-[0.78rem] text-mute">{p.tags.join("  ·  ")}</p>
              {"video" in p && p.video ? (
                <video
                  className="mt-8 aspect-[4/3] w-full rounded-[18px] bg-ink/5 object-cover ring-1 ring-hairline"
                  src={p.video}
                  poster={p.poster}
                  controls
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  muted
                  playsInline
                  preload="none"
                  aria-label={`${p.title} demo recording`}
                />
              ) : null}
              {"image" in p && p.image ? (
                <div data-protect className="mt-8 overflow-hidden rounded-[18px] bg-white ring-1 ring-hairline">
                  <Image src={p.image.src} alt={p.image.alt} width={p.image.w} height={p.image.h} sizes="(min-width: 1024px) 360px, 100vw" className="h-auto w-full" />
                </div>
              ) : null}
              {"link" in p && p.link ? (
                <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="link mt-5 inline-flex items-center gap-1.5 text-sm">
                  <GitHub width={15} height={15} /> {p.link.label}
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <p className="eyebrow">Smaller projects</p>
          <ul className="mt-6 grid gap-x-12 md:grid-cols-3">
            {small.map((s) => (
              <li key={s.title} className="border-t border-hairline">
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group block py-6">
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold transition-colors group-hover:text-accent">{s.title}</span>
                    <ArrowUpRight className="shrink-0 text-mute transition-all duration-300 ease-apple group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                  <span className="mt-2 block text-[0.95rem] text-mute text-pretty">{s.body}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
