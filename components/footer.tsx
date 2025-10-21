"use client"

import { motion } from "framer-motion"
import { Sparkles, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">DevOrbit</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered tech solutions for startups and SMBs. Transform your business with cutting-edge technology.
            </p>
            <div className="space-y-3 mb-4 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>18 Fonthill Rd, Finsbury Park, London N4 3HX, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="https://wa.me/447453217283" className="hover:text-primary transition-colors">
                  WhatsApp: +44 7453 217283
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:hello@devorbit.co.uk" className="hover:text-primary transition-colors">
                  hello@devorbit.co.uk
                </a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">© 2025 DevOrbit. All rights reserved.</p>
          </motion.div>

          {/* Column 2 - Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="/services/web-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/mobile-app-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="/services/ui-ux-design" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="/services/ai-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Development
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4 - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for latest updates and insights.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 rounded-lg border-2 border-primary/30 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm placeholder:text-muted-foreground/40"
              />
              <button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-2 rounded-lg transition-all text-sm">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">© 2025 DevOrbit. All rights reserved.</p>
          <div className="flex space-x-4">
            {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <span className="text-xs font-semibold text-primary">{social[0]}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
