import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-[var(--iron-accent-ring)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--iron-accent-ring)]"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
      Back
    </Link>
  )
}
