import { Dumbbell, LineChart, Users, Utensils, type LucideIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { features } from "@/lib/content"

const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  Utensils,
  LineChart,
  Users,
}

export function ProgramSection() {
  return (
    <section id="method" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
            The method
          </p>
          <h2 className="max-w-md text-4xl font-bold leading-tight tracking-[-0.01em] text-zinc-50 sm:text-5xl">
            Performance is a practice.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
            You do not need more information. You need a system that survives busy seasons,
            travel, and the days when motivation does not show up.
          </p>
        </Reveal>

        <div id="program" className="grid scroll-mt-24 gap-3 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Dumbbell
            return (
              <Reveal
                key={feature.title}
                delay={index * 80}
                className="glass group rounded-[var(--iron-radius-lg)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--iron-accent-ring)]"
              >
                <div className="mb-10 flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-[var(--iron-radius-md)] border border-[var(--iron-accent-ring)] bg-[var(--iron-accent-soft)] text-[var(--iron-accent)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-zinc-600">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-50">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{feature.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
