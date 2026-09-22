"use client"

import { useState, type FormEvent } from "react"
import { Check, Send } from "lucide-react"

const inputClass =
  "w-full rounded-[var(--iron-radius-md)] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-[var(--iron-accent-ring)] focus:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--iron-accent-ring)]"

// Placeholder contact form — does not submit anywhere (prototype). Shows a local
// confirmation state so the flow feels complete without a backend.
export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="glass scale-in flex min-h-[420px] flex-col items-center justify-center rounded-[var(--iron-radius-xl)] p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--iron-accent)] text-zinc-950">
          <Check className="h-7 w-7" strokeWidth={3} />
        </span>
        <h2 className="mt-6 text-2xl font-bold text-zinc-50">Message received.</h2>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">
          This is a prototype, so nothing was actually sent. In production, Marcus would reply
          within one business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 rounded-[var(--iron-radius-md)] border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:text-white"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-[var(--iron-radius-xl)] p-6 sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-300">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="goal" className="text-sm font-medium text-zinc-300">
            Primary goal
          </label>
          <select id="goal" name="goal" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a goal
            </option>
            <option value="fat-loss">Fat loss</option>
            <option value="strength">Build strength</option>
            <option value="energy">More energy</option>
            <option value="general">General performance</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-zinc-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell Marcus about your schedule and what you're after..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-[var(--iron-radius-md)] bg-[var(--iron-accent)] px-5 py-3 text-sm font-semibold text-zinc-950 transition-all duration-150 hover:bg-[var(--iron-accent-hover)] hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-[var(--iron-accent-ring)]"
        >
          Send message
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  )
}
