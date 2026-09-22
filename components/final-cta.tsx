import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 lg:pb-24">
      <Reveal className="glass-featured relative overflow-hidden rounded-[var(--iron-radius-xl)] px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--iron-accent-soft)] blur-3xl"
          aria-hidden="true"
        />
        <p className="relative mb-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
          The final rep
        </p>
        <h2 className="relative mx-auto max-w-2xl text-balance text-4xl font-bold leading-tight tracking-[-0.01em] text-zinc-50 sm:text-5xl">
          Your future self is already training.
        </h2>
        <p className="relative mx-auto mt-5 max-w-md leading-relaxed text-zinc-400">
          Twelve weeks from now, you will either have the results or the excuses. Choose the
          version that shows up.
        </p>
        <div className="relative mt-8 flex justify-center">
          <CtaButton size="lg" />
        </div>
      </Reveal>
    </section>
  )
}
