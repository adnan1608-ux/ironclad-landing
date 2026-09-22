import Link from "next/link"
import { Zap } from "lucide-react"
import { site } from "@/lib/content"
import { cn } from "@/lib/utils"

export function BrandLogo({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-7 w-7" : "h-8 w-8"
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${site.name} home`}
    >
      <span className={cn("grid place-items-center rounded-[var(--iron-radius-sm)] bg-[var(--iron-accent)] text-zinc-950", box)}>
        <Zap className={cn("fill-current", icon)} />
      </span>
      <span className="text-sm font-bold tracking-[0.18em] text-zinc-50">
        {site.shortName.toUpperCase()}
        <span className="text-[var(--iron-accent)]">.</span>
      </span>
    </Link>
  )
}
