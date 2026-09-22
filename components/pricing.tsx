import { ShieldCheck } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/content"

export function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
            Start the shift
          </p>
          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-[-0.01em] text-zinc-50 sm:text-5xl">
            Stop waiting for the{" "}
            <span className="text-[var(--iron-accent)]">right time.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
            The right time is when you decide your performance is part of the job. Start
            building the version of you that can handle more.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="glass-featured relative rounded-[var(--iron-radius-xl)] p-7 sm:p-9"
        >
          <div className="absolute right-6 top-6 rounded-full bg-[var(--iron-accent)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-950">
            Limited launch
          </div>
          <p className="text-sm text-zinc-400">The Ironclad Blueprint</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-6xl font-bold tracking-tight text-zinc-50">
              ${site.price}
            </span>
            <span className="text-sm text-zinc-500">one-time</span>
          </div>
          <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-zinc-300">
            Everything you need to run the 12-week system and make it yours.
          </p>
          <div className="mt-7">
            <CtaButton size="lg" className="w-full" />
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-zinc-500">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--iron-accent)]" />
            30-day money-back guarantee
          </p>
        </Reveal>
      </div>
    </section>
  )
}
