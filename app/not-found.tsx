"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { ArrowLeft, Home, Mail, Phone, MapPin } from "lucide-react"

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl w-full">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated 404 */}
            <motion.div
              className="mb-8"
              variants={itemVariants}
            >
              <div className="relative inline-block">
                <motion.div
                  className="text-9xl md:text-[150px] font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  404
                </motion.div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              Page Not Found
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Oops! Looks like this page took a wrong turn into the digital void. Don't worry, our team is always here to help you find what you're looking for.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Home
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="my-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              variants={itemVariants}
            />

            {/* Contact Info */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 mt-12"
              variants={containerVariants}
            >
              {/* Phone */}
              <motion.div
                className="bg-card border border-border rounded-lg p-6"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5rgb(0 0 0 / 0.1)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Chat via WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Reach out directly to our support team
                </p>
                <a
                  href="https://wa.me/447453217283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium text-sm"
                >
                  +44 7453 217283
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                className="bg-card border border-border rounded-lg p-6"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5rgb(0 0 0 / 0.1)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We'll respond within 24 hours
                </p>
                <a
                  href="mailto:hello@devorbit.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium text-sm break-all"
                >
                  hello@devorbit.co.uk
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                className="bg-card border border-border rounded-lg p-6"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5rgb(0 0 0 / 0.1)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Located in Finsbury Park, London
                </p>
                <a
                  href="https://maps.app.goo.gl/tXX62RZ2YeGiJrsvg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium text-sm hover:text-primary/80 transition-colors"
                >
                  18 Fonthill Rd<br />
                  London, N4 3HX
                </a>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="mt-16 pt-12 border-t border-border"
              variants={containerVariants}
            >
              <motion.p
                className="text-muted-foreground mb-6"
                variants={itemVariants}
              >
                Quick navigation
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={containerVariants}
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "About", href: "/about" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
