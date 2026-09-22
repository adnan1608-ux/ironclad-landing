"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Mail, X } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { nav } from "@/lib/content"

// Slide-in drawer for mobile/tablet. Accessible dialog with Escape-to-close and
// scroll lock. Controlled by the header.
export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-[90] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-white/10 bg-zinc-950/95 backdrop-blur-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-zinc-500">
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--iron-accent-ring)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="rounded-[var(--iron-radius-md)] px-4 py-3.5 text-base text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-2 rounded-[var(--iron-radius-md)] px-4 py-3.5 text-base text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Contact Marcus
          </Link>
        </nav>

        <div className="mt-auto border-t border-white/10 p-6">
          <CtaButton size="lg" className="w-full" />
        </div>
      </div>
    </div>
  )
}
