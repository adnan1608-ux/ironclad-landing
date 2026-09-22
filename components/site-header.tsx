"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { CtaButton } from "@/components/cta-button"
import { MobileNav } from "@/components/mobile-nav"
import { nav } from "@/lib/content"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <BrandLogo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <CtaButton />
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--iron-accent-ring)] lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
