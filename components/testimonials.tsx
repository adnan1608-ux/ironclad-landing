import { Reveal } from "@/components/reveal"
import { testimonials } from "@/lib/content"

export function Testimonials() {
  return (
    <section id="results" className="relative z-10 scroll-mt-24 border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
              Proof of work
            </p>
            <h2 className="text-4xl font-bold tracking-[-0.01em] text-zinc-50 sm:text-5xl">
              Results speak louder.
            </h2>
          </Reveal>
          <Reveal delay={100} className="max-w-xs text-sm leading-relaxed text-zinc-400">
            Real people. Real schedules. Results that compound.
          </Reveal>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 100}
              as="figure"
              className="glass flex min-h-[240px] flex-col justify-between rounded-[var(--iron-radius-lg)] p-6 transition-all duration-500 hover:-translate-y-1"
            >
              <blockquote className="text-lg leading-relaxed text-zinc-200">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-semibold text-zinc-50">{item.name}</p>
                    <p className="mt-1 text-xs text-zinc-500">{item.role}</p>
                  </div>
                  <span className="rounded-full bg-[var(--iron-accent-soft)] px-2.5 py-1 font-mono text-[10px] text-[var(--iron-accent)]">
                    {item.result}
                  </span>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
