"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring for Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("[v0] LCP:", entry.startTime)
          }
        })
      })

      try {
        observer.observe({ entryTypes: ["largest-contentful-paint"] })
      } catch (e) {
        // Fallback for browsers that don't support the observer
        console.log("[v0] Performance monitoring not supported")
      }

      // Monitor First Input Delay (FID) and Interaction to Next Paint (INP)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === "first-input") {
            console.log("[v0] FID:", entry.processingStart - entry.startTime)
          }
        })
      })

      try {
        fidObserver.observe({ entryTypes: ["first-input"] })
      } catch (e) {
        console.log("[v0] FID monitoring not supported")
      }

      // Cleanup
      return () => {
        observer.disconnect()
        fidObserver.disconnect()
      }
    }
  }, [])

  return null
}
