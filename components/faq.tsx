"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { faqs } from "@/lib/content"

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative z-10 mx-auto max-w-3xl scroll-mt-24 px-6 py-16 lg:py-24">
      <Reveal className="mb-10 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--iron-accent)]">
          Questions, answered
        </p>
        <h2 className="text-4xl font-bold tracking-[-0.01em] text-zinc-50 sm:text-5xl">
          The details matter.
        </h2>
      </Reveal>

      <Reveal className="divide-y divide-white/10 border-y border-white/10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={faq.question}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium text-zinc-100 transition-colors hover:text-[var(--iron-accent)] focus-visible:outline-none focus-visible:text-[var(--iron-accent)]"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--iron-accent)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <p className="min-h-0 overflow-hidden text-sm leading-relaxed text-zinc-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
