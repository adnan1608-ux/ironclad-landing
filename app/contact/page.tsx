import type { Metadata } from "next"
import { AmbientGlow } from "@/components/ambient-glow"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"
import { CtaProvider } from "@/components/cta-provider"
import { BrandLogo } from "@/components/brand-logo"
import { BackButton } from "@/components/back-button"
import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contact Marcus",
  description: `Get in touch with ${site.coach} about the ${site.name} 12-week program.`,
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <CtaProvider>
      <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50 selection:bg-[var(--iron-accent)] selection:text-zinc-950">
        <AmbientGlow />

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <BrandLogo />
          <BackButton />
        </header>

        <main className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-20">
          <div className="fade-in-up">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
              Get in touch
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.02em] text-zinc-50 sm:text-5xl">
              Talk to {site.coach.split(" ")[0]}.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-400">
              Not sure if the program is right for your schedule? Send a note and we&apos;ll
              help you figure out the best path forward.
            </p>

            <dl className="mt-10 space-y-6 border-t border-white/10 pt-8">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.08em] text-zinc-500">
                  Email
                </dt>
                <dd className="mt-1 text-sm text-zinc-200">{site.email}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.08em] text-zinc-500">
                  Response time
                </dt>
                <dd className="mt-1 text-sm text-zinc-200">Within 1 business day</dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </main>

        <SiteFooter />
      </div>
    </CtaProvider>
  )
}
