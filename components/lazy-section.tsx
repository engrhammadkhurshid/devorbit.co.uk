"use client"

import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
}

export function LazySection({
  children,
  fallback = <div className="h-96 bg-muted animate-pulse" />,
  rootMargin = "100px",
}: LazySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: rootMargin })

  return <div ref={ref}>{isInView ? children : fallback}</div>
}
