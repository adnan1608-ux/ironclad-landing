import { Reveal } from "@/components/reveal"
import { stats } from "@/lib/content"

export function StatsBand() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-white/[0.02]" aria-label="Program results">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 80}
            className="px-3 py-8 text-center sm:px-4 sm:py-10"
          >
            <p className="font-mono text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              {stat.value}
              <span className="text-[var(--iron-accent)]">{stat.suffix}</span>
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-[0.08em] text-zinc-500">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
