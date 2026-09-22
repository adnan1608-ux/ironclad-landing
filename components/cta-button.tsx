"use client"

import { ArrowRight } from "lucide-react"
import { useCta } from "@/components/cta-provider"
import { ctaLabel } from "@/lib/content"
import { cn } from "@/lib/utils"

type CtaButtonProps = {
  label?: string
  size?: "md" | "lg"
  variant?: "solid" | "outline"
  className?: string
  showArrow?: boolean
}

// Reusable accent CTA. Opens the shared modal via context. Used across header,
// hero, pricing, final banner, and footer.
export function CtaButton({
  label = ctaLabel,
  size = "md",
  variant = "solid",
  className,
  showArrow = true,
}: CtaButtonProps) {
  const { open } = useCta()

  return (
    <button
      onClick={open}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-[var(--iron-radius-md)] font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-[var(--iron-accent-ring)]",
        size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-3 text-sm",
        variant === "solid"
          ? "bg-[var(--iron-accent)] text-zinc-950 shadow-[0_0_28px_rgba(16,185,129,0.18)] hover:bg-[var(--iron-accent-hover)] hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
          : "border border-white/15 bg-white/[0.04] text-zinc-50 hover:border-[var(--iron-accent-ring)] hover:bg-white/[0.08]",
        className,
      )}
    >
      {label}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
      )}
    </button>
  )
}
