"use client"

import type { ElementType, ReactNode } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
}

// Wraps content in a scroll-reveal animation. `delay` staggers grouped items.
export function Reveal({ children, className, as: Tag = "div", delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
