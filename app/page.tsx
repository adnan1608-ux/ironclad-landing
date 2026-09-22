import { AmbientGlow } from "@/components/ambient-glow"
import { BackToTop } from "@/components/back-to-top"
import { CoachSection } from "@/components/coach-section"
import { CtaProvider } from "@/components/cta-provider"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { Hero } from "@/components/hero"
import { JsonLd } from "@/components/json-ld"
import { Pricing } from "@/components/pricing"
import { ProgramSection } from "@/components/program-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StatsBand } from "@/components/stats-band"
import { Testimonials } from "@/components/testimonials"
import { faqSchema, organizationSchema, productSchema } from "@/lib/structured-data"

export default function Page() {
  return (
    <CtaProvider>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={productSchema()} />
      <JsonLd data={faqSchema()} />

      <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50 selection:bg-[var(--iron-accent)] selection:text-zinc-950">
        <AmbientGlow />
        <SiteHeader />
        <main>
          <Hero />
          <StatsBand />
          <ProgramSection />
          <CoachSection />
          <Testimonials />
          <Pricing />
          <Faq />
          <FinalCta />
        </main>
        <SiteFooter />
        <BackToTop />
      </div>
    </CtaProvider>
  )
}
