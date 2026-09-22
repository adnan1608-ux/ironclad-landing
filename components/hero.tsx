"use client"

import Image from "next/image"
import { ArrowRight, Flame, Sparkles } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { site } from "@/lib/content"

export function Hero() {
  return (
    <section id="top" className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-32 sm:pt-40 lg:pb-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="fade-in-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--iron-accent-ring)] bg-[var(--iron-accent-soft)] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
            <Sparkles className="h-3.5 w-3.5" />
            The executive advantage
          </div>

          <h1 className="text-balance text-5xl font-extrabold leading-[1.02] tracking-[-0.02em] text-zinc-50 sm:text-6xl lg:text-[4.5rem]">
            Built for the{" "}
            <span className="text-[var(--iron-accent)]">relentless.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CtaButton size="lg" />
            <a
              href="#method"
              className="group inline-flex items-center gap-2 px-2 py-3 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-xs text-zinc-500">
            <span className="flex -space-x-2">
              {["JD", "MR", "SK"].map((initials, index) => (
                <span
                  key={initials}
                  className={`grid h-7 w-7 place-items-center rounded-full border-2 border-zinc-950 text-[9px] font-bold text-zinc-950 ${
                    index === 0
                      ? "bg-[var(--iron-accent)]"
                      : index === 1
                        ? "bg-emerald-300"
                        : "bg-emerald-200"
                  }`}
                >
                  {initials}
                </span>
              ))}
            </span>
            <span>Trusted by 500+ high-performers</span>
          </div>
        </div>

        <div className="scale-in relative lg:pl-8">
          <div className="absolute -inset-8 rounded-full bg-[var(--iron-accent-soft)] blur-3xl" aria-hidden="true" />
          <div className="glass relative overflow-hidden rounded-[var(--iron-radius-xl)] p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--iron-radius-lg)] bg-zinc-900">
              <Image
                src="/coach-portrait.png"
                alt={`${site.coach}, ${site.name} performance coach`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
                  The system
                </p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-zinc-50">
                  Discipline, made practical.
                </p>
              </div>
            </div>
          </div>

          <div className="glass absolute -bottom-5 -left-3 flex items-center gap-3 rounded-[var(--iron-radius-lg)] px-4 py-3 sm:-left-8">
            <span className="grid h-9 w-9 place-items-center rounded-[var(--iron-radius-md)] bg-[var(--iron-accent)] text-zinc-950">
              <Flame className="h-4 w-4 fill-current" />
            </span>
            <div>
              <p className="text-sm font-semibold text-zinc-50">12-week system</p>
              <p className="text-xs text-zinc-500">Built around your life</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
