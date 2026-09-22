import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { CtaButton } from "@/components/cta-button"
import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-sm">
            <BrandLogo />
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              {site.tagline}. A 12-week performance system for professionals who refuse to
              coast.
            </p>
          </div>
          <CtaButton />
        </div>

        <div className="mt-8 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} {site.name}. Prototype — placeholder content.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-500" aria-label="Footer">
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
