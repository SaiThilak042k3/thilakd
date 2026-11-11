import { site } from "@/lib/content"
import { ArrowUpRight, Calendar, GitHub, LinkedIn, Mail, Phone } from "./icons"
import { MapFacade } from "./map-facade"
import { Reveal } from "./reveal"

const rows = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "LinkedIn", value: "in/thilak-d", href: site.links.linkedin, Icon: LinkedIn },
  { label: "GitHub", value: "SaiThilak042k3", href: site.links.github, Icon: GitHub },
  { label: "Book a call", value: "cal.com/thilak-d", href: site.links.cal, Icon: Calendar },
  { label: "WhatsApp", value: site.phone, href: site.links.whatsapp, Icon: Phone },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="page">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 text-display font-semibold">
            Let’s <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.02em] text-accent">talk.</span>
          </h2>
          <p className="mt-8 max-w-prose text-lead text-mute text-pretty">{site.status}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Résumé <ArrowUpRight width={16} height={16} />
            </a>
            <a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="btn border border-hairline hover:border-ink/40">
              Full portfolio <ArrowUpRight width={16} height={16} />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-12 lg:gap-14">
          <Reveal className="min-w-0 lg:col-span-7">
            <ul>
              {rows.map(({ label, value, href, Icon }) => (
                <li key={label} className="border-t border-hairline last:border-b">
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex min-h-[4.25rem] items-center gap-4 py-4 transition-colors"
                  >
                    <Icon aria-label={label} className="shrink-0 text-mute transition-colors group-hover:text-accent" />
                    <span className="hidden w-36 shrink-0 text-sm text-mute sm:block">{label}</span>
                    <span className="min-w-0 flex-1 truncate text-[1.05rem] font-medium transition-colors group-hover:text-accent sm:text-lg">
                      {value}
                    </span>
                    <ArrowUpRight className="shrink-0 text-mute transition-all duration-300 ease-apple group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="min-w-0 lg:col-span-5" delay={0.08}>
            <MapFacade />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
