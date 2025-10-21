"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  Award,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Heart,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Hammad Khurshid",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 8+ years of experience building scalable web and mobile applications. Expert in React, Node.js, and cloud architecture.",
      image: "/team-member-1.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Head of Design",
      bio: "Award-winning UI/UX designer focused on creating conversion-optimized interfaces. Specialized in design systems and user research.",
      image: "/team-member-2.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "AI & Backend Specialist",
      bio: "Machine learning engineer and backend architect. Passionate about building intelligent systems that solve real business problems.",
      image: "/team-member-3.jpg",
    },
    {
      id: 4,
      name: "Emma Williams",
      role: "Project Manager",
      bio: "Certified Agile PM with a track record of delivering complex projects on time. Ensures seamless communication and alignment.",
      image: "/team-member-4.jpg",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Growth-Focused",
      description: "Every solution is built with measurable business growth as the primary objective.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We go above and beyond to ensure client satisfaction.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to stay ahead of the curve.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We deliver high-quality solutions with attention to every detail.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in transparent communication and working as an extension of your team.",
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We're committed to creating meaningful change through technology.",
    },
  ]

  const achievements = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "500%", label: "Average Client Growth" },
    { number: "99%", label: "Client Retention Rate" },
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
      <Header />

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
              Transforming Businesses Through <span className="text-primary">Innovative Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Since 2016, DevOrbit has been partnering with ambitious businesses to accelerate their growth through
              cutting-edge technology solutions and strategic innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <div className="mb-4">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower ambitious businesses with innovative technology solutions that drive measurable growth and
                create lasting competitive advantage. We believe that great technology should be accessible to businesses
                of all sizes.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-4">
                <Lightbulb className="h-12 w-12 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the trusted technology partner for growth-focused businesses worldwide. We envision a future where
                innovative technology is the foundation of every successful business, and we're here to make that happen
                for our clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Impact</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-card rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-foreground font-semibold">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and define how we work with our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => {
              const ValueIcon = value.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4">
                        <div className="inline-flex p-3 rounded-lg bg-primary/10">
                          <ValueIcon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Meet the Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented developers, designers, and strategists committed to your success.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge className="w-fit mb-3">{member.role}</Badge>
                    <CardDescription className="text-sm text-muted-foreground">{member.bio}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Work With Us?</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              "Proven track record of delivering 500%+ average client growth",
              "99% client retention rate speaks to our commitment",
              "Dedicated team approach - you get personal attention",
              "Transparent communication and regular progress updates",
              "Latest technology stack and best practices",
              "Custom solutions tailored to your unique challenges",
            ].map((reason, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help you achieve explosive growth and transform your business.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get in Touch Today
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
