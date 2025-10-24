"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { ResponsiveContainer } from "@/components/responsive-container"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { MobileOptimizedLayout } from "@/components/mobile-optimized-layout"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { motion } from "framer-motion"
import {
  Sparkles,
  Zap,
  Play,
  Star,
  Mail,
  Phone,
  MapPin,
  Send,
  Code,
  Smartphone,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    company: "",
    service: "",
    budget: "",
    message: "",
    privacy: false,
  })

  const handleFormChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <MobileOptimizedLayout>
      <PerformanceMonitor />
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(106,85,205,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(74,144,226,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 sm:pt-6 lg:pt-4 xl:pt-2 pb-8 sm:pb-12 lg:pb-16 xl:pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(106,85,205,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(74,144,226,0.1),transparent_50%)]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <ResponsiveContainer className="relative">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-14 items-center -mt-4 sm:-mt-2">
              {/* Left Content */}
              <div className="text-center lg:text-left px-4 sm:px-0">
                <motion.div
                  className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>AI-Powered Solutions</span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Turn Ideas Into{" "}
                  <motion.span
                    className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block lg:inline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Scalable Reality
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  DevOrbit's AI-driven tech solutions help startups and SMBs dominate their market faster than they
                  imagined.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto touch-manipulation"
                      style={{ minHeight: "48px" }}
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">Get Your Free Strategy Session</span>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 hover:bg-primary hover:border-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group bg-transparent w-full sm:w-auto touch-manipulation transition-all duration-300"
                      style={{ minHeight: "48px" }}
                      asChild
                    >
                      <Link href="/case-studies">
                        <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm sm:text-base">View Our Work</span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">50+ Happy Clients</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Visual */}
              <motion.div
                className="relative mt-8 lg:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative h-[700px] sm:h-[800px] lg:h-[900px] xl:h-screen flex items-center justify-center">
                  {/* Animated Glow Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />

                  {/* Hero Image with Animation */}
                  <motion.div
                    className="relative z-10 w-full h-full flex items-center justify-center scale-150"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <img
                      src="/hero-mockup.webp"
                      alt="DevOrbit Solutions - Web, Mobile, and AI Development"
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Floating Glow Orbs */}
                  <motion.div
                    className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  />
                </div>
              </motion.div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Stats Section */}
        <section className="py-20 sm:py-24 lg:py-32 bg-muted/30">
          <ResponsiveContainer>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                How We Help Businesses{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Grow</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "E-Commerce Growth",
                  description: "Average revenue increase",
                  stat: "340%",
                  icon: "🛍️",
                },
                {
                  title: "Mobile Subscriptions",
                  description: "User acquisition rate",
                  stat: "500K+",
                  icon: "📱",
                },
                {
                  title: "SaaS Platforms",
                  description: "Monthly recurring revenue",
                  stat: "3x",
                  icon: "☁️",
                },
                {
                  title: "Staff Augmentation",
                  description: "Project delivery rate",
                  stat: "98%",
                  icon: "👥",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.stat}</div>
                  <h3 className="font-semibold mb-2">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Preview */}
        <section className="py-20 sm:py-24 lg:py-32">
          <ResponsiveContainer>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Services That{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Scale</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From AI-powered solutions to cutting-edge development, we deliver results that matter.
              </p>
            </motion.div>

            {/* Web Development Category */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span>Web Development</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "UI/UX Design",
                    description: "Beautiful, user-centered designs that convert",
                    tools: ["Figma", "Adobe XD", "Adobe Illustrator", "InDesign"],
                    href: "/services/ui-ux-design",
                    image: "/services-uiux-thumbnail.webp",
                  },
                  {
                    title: "Web Development",
                    description: "High-performance web applications",
                    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                    href: "/services/web-development",
                    image: "/services-web-thumbnail.webp",
                  },
                  {
                    title: "CMS Development",
                    description: "Flexible content management systems",
                    tools: ["WordPress", "Shopify", "Framer", "Wix"],
                    href: "/services/cms-development",
                    image: "/services-cms-thumbnail.webp",
                  },
                ].map((service, index) => (
                  <motion.a
                    key={index}
                    href={service.href}
                    className="group block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-card border border-border rounded-2xl overflow-hidden h-full group-hover:shadow-xl transition-all duration-300 group-hover:border-primary/20 flex flex-col">
                      {/* Image Section */}
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <div className="w-full h-48 bg-muted animate-pulse flex items-center justify-center">
                          <div className="text-muted-foreground">Image coming soon</div>
                        </div>
                      )}
                      {/* Content Section */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool) => (
                            <span key={tool} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* App Development Category */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <span>App Development</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Native iOS Apps",
                    description: "Premium iOS applications",
                    tools: ["Swift", "SwiftUI", "Xcode", "iOS SDK"],
                    href: "/services/ios-development",
                    image: "/services-ios-thumbnail.webp",
                  },
                  {
                    title: "Android Apps",
                    description: "Robust Android applications",
                    tools: ["Kotlin", "Java", "Android Studio", "Firebase"],
                    href: "/services/android-development",
                    image: "/services-androiddevelopment-thumbnail.png",
                  },
                  {
                    title: "Hybrid Apps",
                    description: "Cross-platform mobile solutions",
                    tools: ["Flutter", "Dart", "React Native", "Expo"],
                    href: "/services/hybrid-development",
                    image: "/services-hybrid-thumbnail.webp",
                  },
                ].map((service, index) => (
                  <motion.a
                    key={index}
                    href={service.href}
                    className="group block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-card border border-border rounded-2xl overflow-hidden h-full group-hover:shadow-xl transition-all duration-300 group-hover:border-primary/20 flex flex-col">
                      {/* Image Section */}
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <div className="w-full h-48 bg-muted animate-pulse flex items-center justify-center">
                          <div className="text-muted-foreground">Image coming soon</div>
                        </div>
                      )}
                      {/* Content Section */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool) => (
                            <span key={tool} className="text-xs bg-green-500/10 text-green-700 px-3 py-1 rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* AI Development Category */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span>AI Development</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Machine Learning",
                    description: "Custom ML models and solutions",
                    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Python"],
                    href: "/services/machine-learning",
                    image: "/services-ai-thumbnail.png",
                  },
                  {
                    title: "AI Automation",
                    description: "Intelligent process automation",
                    tools: ["OpenAI", "LangChain", "Hugging Face", "GPT"],
                    href: "/services/ai-automation",
                    image: null, // Skeleton placeholder
                  },
                  {
                    title: "Data Analytics",
                    description: "Advanced data insights and visualization",
                    tools: ["Tableau", "Power BI", "Pandas", "SQL"],
                    href: "/services/data-analytics",
                    image: null, // Skeleton placeholder
                  },
                ].map((service, index) => (
                  <motion.a
                    key={index}
                    href={service.href}
                    className="group block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-card border border-border rounded-2xl overflow-hidden h-full group-hover:shadow-xl transition-all duration-300 group-hover:border-primary/20 flex flex-col">
                      {/* Image Section */}
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <div className="w-full h-48 bg-muted animate-pulse flex items-center justify-center">
                          <div className="text-muted-foreground">Image coming soon</div>
                        </div>
                      )}
                      {/* Content Section */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool) => (
                            <span key={tool} className="text-xs bg-purple-500/10 text-purple-700 px-3 py-1 rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Marketing Category */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <span>Marketing & Growth</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Meta Ads Management",
                    description: "Facebook & Instagram advertising",
                    tools: ["Meta Ads Manager", "Pixel Tracking", "A/B Testing", "Analytics"],
                    href: "/services/meta-ads",
                  },
                  {
                    title: "Google Ads Management",
                    description: "Search & display campaigns",
                    tools: ["Google Ads", "Search Console", "Analytics 4", "Conversion Tracking"],
                    href: "/services/google-ads",
                  },
                  {
                    title: "TikTok Ads & Strategy",
                    description: "Viral content and TikTok advertising",
                    tools: ["TikTok Ads", "Content Creation", "Influencer Marketing", "Analytics"],
                    href: "/services/tiktok-ads",
                  },
                ].map((service, index) => (
                  <motion.a
                    key={index}
                    href={service.href}
                    className="group block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-card border border-border rounded-2xl p-6 h-full group-hover:shadow-xl transition-all duration-300 group-hover:border-primary/20">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool) => (
                          <span key={tool} className="text-xs bg-orange-500/10 text-orange-700 px-3 py-1 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* View All Services Button */}
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
              >
                <a href="/services" className="flex items-center space-x-2">
                  <span>View All Services</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </ResponsiveContainer>
        </section>

        <section className="py-20 sm:py-24 lg:py-32">
          <ResponsiveContainer>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Recent{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how we've helped businesses transform with our solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform Redesign",
                  client: "RetailMax Ltd",
                  result: "340% increase in conversions",
                  category: "Web Development",
                  image: "/ecommerce-platform.jpg",
                },
                {
                  title: "AI-Powered Analytics Dashboard",
                  client: "DataFlow Inc",
                  result: "2.5M+ data points processed daily",
                  category: "AI Development",
                  image: "/analytics-dashboard.png",
                },
                {
                  title: "Mobile App for Subscriptions",
                  client: "StreamHub",
                  result: "500K+ active users in 6 months",
                  category: "Mobile Development",
                  image: "/mobile-app-subscription.jpg",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-card border border-border rounded-2xl overflow-hidden group-hover:shadow-xl transition-all duration-300 group-hover:border-primary/20 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
                      <p className="text-sm font-semibold text-primary mt-auto">{project.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Projects Button */}
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
              >
                <a href="/case-studies" className="flex items-center space-x-2">
                  <span>View All Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <TestimonialsCarousel />

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
            />
          </div>

          <ResponsiveContainer className="relative">
            <motion.div
              className="text-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Business?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join 50+ successful businesses that chose DevOrbit to accelerate their growth with AI-powered solutions.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation w-full sm:w-auto"
                  style={{ minHeight: "48px" }}
                >
                  <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Start Your Project Today</span>
                </Button>
              </motion.div>
            </motion.div>
          </ResponsiveContainer>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-24 lg:py-32">
          <ResponsiveContainer>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Company Details */}
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Get In{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have a project in mind? Let's discuss how we can help you achieve your goals.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <a href="https://share.google/98vRXKRnnCN7akr6m" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        18 Fonthill Rd, Finsbury Park, London N4 3HX, United Kingdom
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a href="https://wa.me/447453217283" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        +44 7453 217283
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:hello@devorbit.co.uk" className="text-muted-foreground hover:text-primary transition-colors">
                        hello@devorbit.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                  <div className="flex space-x-4">
                    {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social) => (
                      <motion.a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-xs font-semibold text-primary">{social[0]}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 sm:p-10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-primary/30 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/40"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-primary/30 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/40"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-primary/30 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/40"
                        placeholder="+44 7453 217283"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-primary/30 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/40"
                      placeholder="Your company"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Services Interested In *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-primary/30 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/40"
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="ai">AI Development</option>
                        <option value="marketing">Marketing & Growth</option>
                        <option value="custom">Custom Software</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range *</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-primary/30 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/40"
                      >
                        <option value="">Select budget</option>
                        <option value="small">Small: &lt;$5,000</option>
                        <option value="medium">Medium: &lt;$15,000</option>
                        <option value="large">Higher: &gt;$25,000</option>
                        <option value="open">Open to Discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-primary/30 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-muted-foreground/40"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      checked={formData.privacy}
                      onChange={handleFormChange}
                      required
                      className="w-5 h-5 rounded border-border mt-1 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                      I agree to the privacy policy and terms of service
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-16 sm:py-20">
          <ResponsiveContainer>
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
                  <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    DevOrbit
                  </h3>
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
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {["About Us", "Our Process", "Pricing", "Blog", "Contact"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 3 - Services Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  {["Web Development", "Mobile Apps", "AI Development", "Marketing", "Custom Software"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 4 - Newsletter & Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-4">Subscribe to get the latest updates and insights.</p>
                <div className="flex gap-2 mb-6">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex space-x-3">
                  {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors text-xs font-semibold text-primary"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social[0]}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Bottom */}
            <motion.div
              className="border-t border-border pt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted-foreground">
                Made with <span className="text-red-500">❤️</span> by DevOrbit | Privacy Policy | Terms of Service
              </p>
            </motion.div>
          </ResponsiveContainer>
        </footer>
      </div>
    </MobileOptimizedLayout>
  )
}
