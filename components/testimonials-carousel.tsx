"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  location: string
  image: string
  content: string
  service: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    role: "CEO",
    location: "Singapore",
    image: "/professional-woman.png",
    content:
      "DevOrbit's web development team transformed our outdated platform into a modern, scalable application. The results exceeded our expectations - 300% increase in user engagement within 3 months!",
    service: "Web Development",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "FinTech Innovations",
    role: "Product Manager",
    location: "USA",
    image: "/professional-man.png",
    content:
      "The mobile app development services were exceptional. The team understood our vision perfectly and delivered a seamless iOS and Android experience that our users love.",
    service: "Mobile App Development",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Thompson",
    company: "Digital Ventures Ltd",
    role: "Founder",
    location: "UK",
    image: "/professional-woman-ceo.png",
    content:
      "Their UI/UX design expertise elevated our product from good to extraordinary. The design system they created is intuitive, beautiful, and has significantly reduced support tickets.",
    service: "UI/UX Design",
    rating: 5,
  },
  {
    id: 4,
    name: "Raj Patel",
    company: "DataSync Analytics",
    role: "CTO",
    location: "India",
    image: "/professional-man-cto.png",
    content:
      "The AI development solutions they provided gave us competitive advantage. Their machine learning models improved our data processing accuracy by 45%.",
    service: "AI Development",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wong",
    company: "E-Commerce Plus",
    role: "VP Marketing",
    location: "Hong Kong",
    image: "/professional-woman.png",
    content:
      "DevOrbit helped us build a CMS that non-technical team members can easily manage. Their support and training were fantastic. Highly recommend!",
    service: "CMS Development",
    rating: 5,
  },
  {
    id: 6,
    name: "James Murphy",
    company: "HealthTech Solutions",
    role: "CEO",
    location: "Australia",
    image: "/professional-man.png",
    content:
      "The hybrid app solution they developed allows us to reach both iOS and Android users efficiently. Quality is enterprise-grade and the ROI is impressive.",
    service: "Mobile App Development",
    rating: 5,
  },
  {
    id: 7,
    name: "Priya Sharma",
    company: "EduLearn Platform",
    role: "Founder",
    location: "India",
    image: "/professional-woman-founder.png",
    content:
      "DevOrbit's web development expertise helped us build a platform that now serves 100K+ students. Their scalable architecture has been crucial for our growth.",
    service: "Web Development",
    rating: 5,
  },
  {
    id: 8,
    name: "Carlos Mendez",
    company: "LogisticsTech",
    role: "Operations Director",
    location: "Mexico",
    image: "/professional-man.png",
    content:
      "The AI automation solutions reduced our manual processes by 70%. DevOrbit's team was responsive, professional, and delivered on time and on budget.",
    service: "AI Development",
    rating: 5,
  },
  {
    id: 9,
    name: "Yuki Tanaka",
    company: "Creative Agency Tokyo",
    role: "Design Director",
    location: "Japan",
    image: "/professional-woman-cto.jpg",
    content:
      "Their UI/UX design thinking transformed our client work. The design processes they introduced have made our agency more efficient and our output more impactful.",
    service: "UI/UX Design",
    rating: 5,
  },
  {
    id: 10,
    name: "Ahmed Hassan",
    company: "StartUp Arabia",
    role: "Founder",
    location: "UAE",
    image: "/professional-man.png",
    content:
      "From concept to launch, DevOrbit guided us through every step. Their full-stack expertise and strategic thinking made all the difference. Fantastic partner!",
    service: "Web Development",
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const getDisplayedTestimonials = () => {
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
    ]
  }

  return (
    <section className="py-20 lg:py-32 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Global Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients across the globe say about working with DevOrbit
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {getDisplayedTestimonials().map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className="bg-background border border-border rounded-3xl p-8 md:p-10"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base md:text-lg text-foreground mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Location & Service */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full h-12 w-12"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Indicators - Only show dots for page pairs */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index * 2)
                    setAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / 2) === index ? "w-8 bg-primary" : "w-2 bg-muted"
                  }`}
                  aria-label={`Go to testimonials page ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full h-12 w-12"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
