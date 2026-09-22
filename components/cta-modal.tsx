"use client"

import { useEffect, useRef } from "react"
import { Check, ShieldCheck, X } from "lucide-react"
import { site, blueprintItems } from "@/lib/content"

// Placeholder CTA modal — no email capture, no submission. Accessible dialog with
// focus handling, Escape-to-close, and backdrop dismiss.
export function CtaModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cta-modal-title"
    >
      <div
        className="fade-in absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="scale-in relative w-full max-w-md rounded-[var(--iron-radius-xl)] border border-white/10 bg-zinc-900/95 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-8">
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--iron-accent-ring)]"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--iron-accent-soft)] px-3 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
          The Ironclad Blueprint
        </span>

        <h2
          id="cta-modal-title"
          className="mt-4 text-2xl font-bold tracking-tight text-zinc-50"
        >
          You're one decision away.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          This is a prototype. Enrollment and checkout will be wired up here. For now, here's
          exactly what the 12-week system includes:
        </p>

        <ul className="mt-5 space-y-2.5">
          {blueprintItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-zinc-200">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--iron-accent)] text-zinc-950">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-baseline gap-2 border-t border-white/10 pt-5">
          <span className="text-3xl font-bold tracking-tight text-zinc-50">${site.price}</span>
          <span className="text-sm text-zinc-500">one-time</span>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-[var(--iron-radius-md)] bg-[var(--iron-accent)] px-5 py-3 text-sm font-semibold text-zinc-950 transition-all duration-150 hover:bg-[var(--iron-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 focus-visible:ring-[var(--iron-accent-ring)]"
        >
          Reserve my spot
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-zinc-500">
          <ShieldCheck className="h-3.5 w-3.5 text-[var(--iron-accent)]" />
          30-day money-back guarantee
        </p>
      </div>
    </div>
  )
}
