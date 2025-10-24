"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { motion } from "framer-motion"
import {
  Code,
  Smartphone,
  Palette,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  Lightbulb,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Lightning-fast, scalable web solutions that convert visitors into customers.",
      icon: Code,
      benefits: [
        "High-performance React & Next.js apps",
        "SEO-optimized for organic growth",
        "Mobile-responsive design",
        "Conversion rate optimization",
      ],
      link: "/services/web-development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform apps that users love and keep coming back to.",
      icon: Smartphone,
      benefits: [
        "iOS and Android expertise",
        "User-centric design approach",
        "App Store optimization",
        "Real-time analytics integration",
      ],
      link: "/services/mobile-app-development",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Stunning interfaces that drive engagement and multiply your revenue.",
      icon: Palette,
      benefits: [
        "Data-driven design decisions",
        "Conversion optimization",
        "Accessibility standards compliance",
        "User research & testing",
      ],
      link: "/services/ui-ux-design",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "AI Development",
      description: "Custom AI solutions that automate operations and unlock new revenue streams.",
      icon: Sparkles,
      benefits: [
        "Machine learning models",
        "Predictive analytics",
        "Process automation",
        "AI integration with existing systems",
      ],
      link: "/services/ai-development",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const serviceFeatures = [
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your own team of expert developers and designers committed to your success.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile methodology ensures rapid prototyping and quick time-to-market.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Every solution is built to drive measurable business results and ROI.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to give you a competitive advantage.",
    },
  ]

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Services Designed for <span className="text-primary">Explosive Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From web development to AI integration, we offer comprehensive technology solutions that transform your
              business and drive unprecedented growth.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Get Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <motion.div key={service.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow group overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${service.color}`} />
                    <CardHeader>
                      <div className="mb-4">
                        <div
                          className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          {service.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="w-full group/btn"
                          onClick={() => (window.location.href = service.link)}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose DevOrbit?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with a deep understanding of business growth to deliver solutions that
              matter.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {serviceFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10">
                      <FeatureIcon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss which services are right for your goals and create a custom strategy for explosive growth.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Schedule Your Free Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
