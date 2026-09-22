"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import { CtaModal } from "@/components/cta-modal"

type CtaContextValue = {
  open: () => void
  close: () => void
  isOpen: boolean
}

const CtaContext = createContext<CtaContextValue | null>(null)

// Provides a single shared CTA modal for the whole tree. No external state lib —
// just local React state exposed through context so every CTA can trigger it.
export function CtaProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <CtaContext.Provider value={{ open, close, isOpen }}>
      {children}
      <CtaModal open={isOpen} onClose={close} />
    </CtaContext.Provider>
  )
}

export function useCta() {
  const ctx = useContext(CtaContext)
  if (!ctx) throw new Error("useCta must be used within a CtaProvider")
  return ctx
}
