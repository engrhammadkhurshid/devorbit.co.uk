"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MegaMenu } from "@/components/mega-menu"
import { ChevronDown, Menu, X, Sparkles } from "lucide-react"

export function Header() {
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90 border-b border-border shadow-lg shadow-primary/5" 
          : "bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/50"
      }`}
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 relative">
          <div className="flex items-center">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  DevOrbit
                </h1>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.a
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Home
            </motion.a>

            <div 
              className="relative"
              onMouseEnter={() => setOpenMegaMenu("services")}
              onMouseLeave={() => setOpenMegaMenu(null)}
            >
              <motion.button
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMegaMenu === "services" ? "rotate-180" : ""}`} />
              </motion.button>
              <MegaMenu type="services" isOpen={openMegaMenu === "services"} onClose={() => setOpenMegaMenu(null)} />
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setOpenMegaMenu("case-studies")}
              onMouseLeave={() => setOpenMegaMenu(null)}
            >
              <motion.button
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span>Case Studies</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMegaMenu === "case-studies" ? "rotate-180" : ""}`} />
              </motion.button>
              <MegaMenu type="case-studies" isOpen={openMegaMenu === "case-studies"} onClose={() => setOpenMegaMenu(null)} />
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setOpenMegaMenu("blog")}
              onMouseLeave={() => setOpenMegaMenu(null)}
            >
              <motion.button
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span>Blog</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMegaMenu === "blog" ? "rotate-180" : ""}`} />
              </motion.button>
              <MegaMenu type="blog" isOpen={openMegaMenu === "blog"} onClose={() => setOpenMegaMenu(null)} />
            </div>

            <motion.a
              href="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              About
            </motion.a>
            <motion.a
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Free Strategy Session
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="p-3 touch-manipulation"
              style={{ minHeight: "44px", minWidth: "44px" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 max-h-[70vh] overflow-y-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-2">
            <a
              href="/"
              className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50 touch-manipulation"
              style={{ minHeight: "48px" }}
            >
              Home
            </a>
            <a
              href="/services"
              className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50 touch-manipulation"
              style={{ minHeight: "48px" }}
            >
              Services
            </a>
            <a
              href="/case-studies"
              className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50 touch-manipulation"
              style={{ minHeight: "48px" }}
            >
              Case Studies
            </a>
            <a
              href="/blog"
              className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50 touch-manipulation"
              style={{ minHeight: "48px" }}
            >
              Blog
            </a>
            <a
              href="/about"
              className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50 touch-manipulation"
              style={{ minHeight: "48px" }}
            >
              About
            </a>
            <a
              href="/contact"
              className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50 touch-manipulation"
              style={{ minHeight: "48px" }}
            >
              Contact
            </a>
            <Button
              className="w-full bg-gradient-to-r from-primary to-secondary mt-4 touch-manipulation"
              style={{ minHeight: "48px" }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Free Strategy Session
            </Button>
          </div>
        </motion.div>
      )}
      </motion.nav>
    </div>
  )
}
