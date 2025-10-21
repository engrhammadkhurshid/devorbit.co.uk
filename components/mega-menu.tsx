"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Code, Smartphone, Palette, TrendingUp, Cog } from "lucide-react"

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState("services")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, isMobile])

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
          title: "Custom Software",
          description: "Tailored business solutions",
          href: "/services/custom-software-development",
          icon: Cog,
        },
      ],
    },
    {
      category: "Marketing & Growth",
      items: [
        {
          title: "Meta Ads Management",
          description: "Facebook & Instagram advertising",
          href: "/services/meta-ads",
          icon: TrendingUp,
        },
        {
          title: "Google Ads Management",
          description: "Search & display campaigns",
          href: "/services/google-ads",
          icon: TrendingUp,
        },
        {
          title: "Social Media Management",
          description: "Content & community management",
          href: "/services/social-media-management",
          icon: TrendingUp,
        },
      ],
    },
  ]

  const caseStudies = [
    {
      title: "FinTech Platform Redesign",
      client: "TechFlow Solutions",
      result: "300% engagement increase",
      category: "Web Development",
      href: "/case-studies/techflow-fintech",
    },
    {
      title: "E-commerce Mobile App",
      client: "RetailMax Ltd",
      result: "150% conversion boost",
      category: "Mobile Development",
      href: "/case-studies/retailmax-ecommerce",
    },
    {
      title: "Healthcare AI Integration",
      client: "MedConnect",
      result: "50K+ users in 6 months",
      category: "AI Development",
      href: "/case-studies/medconnect-healthcare",
    },
  ]

  const pages = [
    {
      title: "About DevOrbit",
      description: "Our story, team, and mission",
      href: "/about",
    },
    {
      title: "Our Process",
      description: "How we work with clients",
      href: "/process",
    },
    {
      title: "Pricing",
      description: "Transparent pricing for all services",
      href: "/pricing",
    },
    {
      title: "Blog",
      description: "Latest insights and tutorials",
      href: "/blog",
    },
    {
      title: "Contact",
      description: "Get in touch for a free consultation",
      href: "/contact",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Mega Menu Content */}
          <motion.div
            className={`absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-border shadow-2xl z-50 ${
              isMobile ? "max-h-[80vh] overflow-y-auto" : ""
            } bg-gradient-to-b from-background/98 to-background/95`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Glow Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              {/* Tab Navigation */}
              <div
                className={`flex ${isMobile ? "justify-center" : ""} space-x-4 sm:space-x-8 mb-6 sm:mb-8 border-b border-border overflow-x-auto`}
              >
                {[
                  { id: "services", label: "Services" },
                  { id: "case-studies", label: "Case Studies" },
                  { id: "pages", label: "Pages" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 sm:pb-4 px-3 sm:px-2 text-sm font-medium transition-colors relative whitespace-nowrap min-w-0 flex-shrink-0 ${
                      activeTab === tab.id
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                    } ${isMobile ? "touch-manipulation" : ""}`}
                    style={{ minHeight: "44px" }}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId="activeTab"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Services Tab */}
              {activeTab === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`grid grid-cols-1 ${isMobile ? "gap-6" : "lg:grid-cols-3 gap-8"}`}
                >
                  {services.map((category, categoryIndex) => (
                    <div key={category.category}>
                      <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
                      <div className="space-y-2 sm:space-y-3">
                        {category.items.map((service, serviceIndex) => (
                          <motion.a
                            key={service.title}
                            href={service.href}
                            className={`group flex items-start space-x-3 p-3 sm:p-3 rounded-lg hover:bg-muted/50 transition-colors ${
                              isMobile ? "touch-manipulation active:bg-muted/70" : ""
                            }`}
                            style={{ minHeight: isMobile ? "56px" : "auto" }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: categoryIndex * 0.1 + serviceIndex * 0.05,
                            }}
                            whileHover={!isMobile ? { x: 5 } : {}}
                            whileTap={{ scale: 0.98 }}
                            onClick={onClose}
                          >
                            <div className="flex-shrink-0 mt-1">
                              <service.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                  {service.title}
                                </p>
                                {service.badge && (
                                  <Badge variant="secondary" className="text-xs">
                                    {service.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Case Studies Tab */}
              {activeTab === "case-studies" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`grid grid-cols-1 ${isMobile ? "gap-4" : "md:grid-cols-2 lg:grid-cols-3 gap-6"}`}
                >
                  {caseStudies.map((study, index) => (
                    <motion.a
                      key={study.title}
                      href={study.href}
                      className={`group p-4 sm:p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
                        isMobile ? "touch-manipulation active:scale-98" : ""
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={!isMobile ? { y: -5 } : {}}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClose}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {study.category}
                        </Badge>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {study.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">{study.client}</p>
                      <p className="text-sm font-medium text-primary">{study.result}</p>
                    </motion.a>
                  ))}

                  <motion.div
                    className="md:col-span-2 lg:col-span-3 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent" onClick={onClose}>
                      View All Case Studies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {/* Pages Tab */}
              {activeTab === "pages" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`grid grid-cols-1 ${isMobile ? "gap-2" : "sm:grid-cols-2 lg:grid-cols-3 gap-4"}`}
                >
                  {pages.map((page, index) => (
                    <motion.a
                      key={page.title}
                      href={page.href}
                      className={`group flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors ${
                        isMobile ? "touch-manipulation active:bg-muted/70" : ""
                      }`}
                      style={{ minHeight: isMobile ? "64px" : "auto" }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={!isMobile ? { x: 5 } : {}}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClose}
                    >
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {page.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{page.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </motion.div>
              )}

              {/* CTA Section */}
              <motion.div
                className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div
                  className={`flex ${isMobile ? "flex-col space-y-4" : "flex-col sm:flex-row"} items-center justify-between space-y-4 sm:space-y-0`}
                >
                  <div className={isMobile ? "text-center" : ""}>
                    <h4 className="font-semibold text-foreground mb-1">Ready to get started?</h4>
                    <p className="text-sm text-muted-foreground">
                      Book a free strategy session to discuss your project
                    </p>
                  </div>
                  <Button
                    onClick={onClose}
                    className={isMobile ? "w-full touch-manipulation" : ""}
                    style={{ minHeight: "44px" }}
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
