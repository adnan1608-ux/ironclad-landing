import Image from "next/image"
import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { coach, blueprintItems } from "@/lib/content"

export function CoachSection() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 lg:pb-24">
      <Reveal className="glass overflow-hidden rounded-[var(--iron-radius-xl)] p-2">
        <div className="grid items-center gap-8 rounded-[var(--iron-radius-lg)] bg-zinc-900/60 p-6 sm:p-10 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
              Inside the blueprint
            </p>
            <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-[-0.01em] text-zinc-50 sm:text-4xl">
              Your next level, mapped out.
            </h2>
            <div className="mt-5 space-y-3">
              {coach.bio.map((paragraph) => (
                <p key={paragraph} className="max-w-md text-sm leading-relaxed text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-7 space-y-3">
              {blueprintItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-200">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--iron-accent)] text-zinc-950">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[var(--iron-radius-lg)] border border-white/10">
            <Image
              src="/dashboard-preview.png"
              alt="Preview of the Ironclad performance dashboard"
              width={900}
              height={650}
              className="w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
