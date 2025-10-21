"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Code, Smartphone, Palette, Cog } from "lucide-react"

interface MegaMenuProps {
  type: "services" | "case-studies" | "blog"
  isOpen: boolean
  onClose: () => void
}

export function MegaMenu({ type, isOpen, onClose }: MegaMenuProps) {
  const services = [
    {
      category: "Design & Development",
      items: [
        {
          title: "UI/UX Design",
          description: "User-centered designs that convert",
          href: "/services/ui-ux-design",
          icon: Palette,
          badge: "Popular",
        },
        {
          title: "Web Development",
          description: "Fast, scalable websites",
          href: "/services/web-development",
          icon: Code,
          badge: "Most Requested",
        },
        {
          title: "Mobile App Development",
          description: "Native & cross-platform apps",
          href: "/services/mobile-app-development",
          icon: Smartphone,
        },
      ],
    },
    {
      category: "AI & Innovation",
      items: [
        {
          title: "AI Development",
          description: "Custom AI solutions & automation",
          href: "/services/ai-development",
          icon: Sparkles,
          badge: "New",
        },
        {
          title: "Solutions Architecture",
          description: "Enterprise-scale system design",
          href: "/services/solutions-architecture",
          icon: Cog,
        },
      ],
    },
  ]

  const caseStudies = [
    {
      title: "E-commerce Platform Redesign",
      client: "TechRetail Co",
      result: "40% increase in conversions",
      category: "Web Development",
      href: "/case-studies/techretail-ecommerce",
    },
    {
      title: "Mobile Banking App Launch",
      client: "FinServe Bank",
      result: "500K+ downloads in first month",
      category: "Mobile Development",
      href: "/case-studies/finserve-banking",
    },
    {
      title: "AI Customer Service Bot",
      client: "RetailHub Inc",
      result: "70% reduction in support tickets",
      category: "AI Development",
      href: "/case-studies/retailhub-chatbot",
    },
    {
      title: "Healthcare AI Integration",
      client: "MedConnect",
      result: "50K+ users in 6 months",
      category: "AI Development",
      href: "/case-studies/medconnect-healthcare",
    },
  ]

  const blogCategories = [
    {
      category: "Technology",
      items: [
        { title: "The Future of AI in Web Development", href: "/blog/future-of-ai" },
        { title: "Advanced React Patterns in 2024", href: "/blog/react-patterns" },
        { title: "Mobile-First Design Best Practices", href: "/blog/mobile-first" },
      ],
    },
    {
      category: "Business Strategy",
      items: [
        { title: "Digital Transformation Roadmap", href: "/blog/digital-transformation" },
        { title: "Maximizing ROI in Tech Projects", href: "/blog/maximize-roi" },
        { title: "Building Scalable Tech Teams", href: "/blog/scalable-teams" },
      ],
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-transparent z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Container-Width Mega Menu */}
          <motion.div
            className="fixed left-1/2 top-[70px] transform -translate-x-1/2 bg-background/98 backdrop-blur-2xl border border-border shadow-2xl z-50 rounded-lg w-[calc(100%-2rem)] max-w-7xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Inner Container with full width inside modal */}
            <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              {/* Services Menu */}
              {type === "services" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.flatMap((category) =>
                      category.items.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                          <motion.a
                            key={service.title}
                            href={service.href}
                            className="group p-4 rounded-lg border border-transparent hover:border-primary/30 hover:bg-muted/30 transition-all duration-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            whileHover={{ y: -4 }}
                            onClick={onClose}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <IconComponent className="h-6 w-6 text-primary" />
                              {service.badge && (
                                <Badge variant="secondary" className="text-xs">
                                  {service.badge}
                                </Badge>
                              )}
                            </div>
                            <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-2">
                              {service.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">{service.description}</p>
                          </motion.a>
                        )
                      })
                    )}
                  </div>

                  {/* View All Link */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <a
                      href="/services"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      onClick={onClose}
                    >
                      View All Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </motion.div>
                </motion.div>
              )}

              {/* Case Studies Menu */}
              {type === "case-studies" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {caseStudies.map((study, index) => (
                    <motion.a
                      key={study.title}
                      href={study.href}
                      className="group p-4 rounded-lg border border-transparent hover:border-primary/30 hover:bg-muted/30 transition-all duration-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileHover={{ y: -2 }}
                      onClick={onClose}
                    >
                      <Badge variant="outline" className="text-xs mb-3">
                        {study.category}
                      </Badge>
                      <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-2 leading-tight">
                        {study.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">{study.client}</p>
                      <p className="text-xs font-medium text-primary">{study.result}</p>
                    </motion.a>
                  ))}

                  {/* View All Link */}
                  <motion.div
                    className="sm:col-span-2 lg:col-span-4 mt-2 pt-4 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <a
                      href="/case-studies"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      onClick={onClose}
                    >
                      View All Case Studies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </motion.div>
                </motion.div>
              )}

              {/* Blog Menu */}
              {type === "blog" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogCategories.flatMap((categoryGroup) =>
                      categoryGroup.items.map((item, index) => (
                        <motion.a
                          key={item.title}
                          href={item.href}
                          className="group p-4 rounded-lg border border-transparent hover:border-primary/30 hover:bg-muted/30 transition-all duration-200"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          whileHover={{ y: -4 }}
                          onClick={onClose}
                        >
                          <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-2">Read article</p>
                        </motion.a>
                      ))
                    )}
                  </div>

                  {/* View All Link */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <a
                      href="/blog"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      onClick={onClose}
                    >
                      View All Articles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
