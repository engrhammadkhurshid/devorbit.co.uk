"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  tapScale?: number
}

export function InteractiveCard({
  children,
  className = "",
  hoverScale = 1.02,
  tapScale = 0.98,
}: InteractiveCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: hoverScale,
        y: -8,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: tapScale,
        transition: { duration: 0.1 },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
