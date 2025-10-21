import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "FinTech Platform Transformation",
      client: "TechFlow Solutions",
      industry: "Financial Technology",
      challenge: "Low user engagement and poor conversion rates",
      solution: "Complete platform redesign with AI integration and user experience optimization",
      results: [
        { metric: "User Engagement", improvement: "300%", description: "increase in daily active users" },
        { metric: "Conversion Rate", improvement: "150%", description: "boost in sign-up conversions" },
        { metric: "Revenue Growth", improvement: "250%", description: "increase in monthly recurring revenue" },
      ],
      timeline: "3 months",
      services: ["UI/UX Design", "Web Development", "AI Integration"],
      image: "/fintech-dashboard.png",
      testimonial: {
        quote: "DevOrbit transformed our entire digital presence. The results exceeded our expectations.",
        author: "Sarah Johnson, CEO at TechFlow Solutions",
      },
    },
    {
      id: 2,
      title: "E-commerce Mobile Revolution",
      client: "RetailMax Ltd",
      industry: "E-commerce",
      challenge: "Poor mobile experience leading to high cart abandonment",
      solution: "Mobile-first redesign with advanced analytics and conversion optimization",
      results: [
        { metric: "Mobile Conversions", improvement: "200%", description: "increase in mobile sales" },
        { metric: "Cart Abandonment", improvement: "45%", description: "reduction in abandoned carts" },
        { metric: "Page Load Speed", improvement: "60%", description: "faster loading times" },
      ],
      timeline: "4 months",
      services: ["Mobile App Development", "UX Design", "Performance Optimization"],
      image: "/ecommerce-mobile-app.png",
      testimonial: {
        quote: "The mobile app completely transformed our business. Sales doubled within months.",
        author: "Michael Chen, CTO at RetailMax Ltd",
      },
    },
    {
      id: 3,
      title: "Healthcare Digital Innovation",
      client: "MedConnect",
      industry: "Healthcare",
      challenge: "Need for HIPAA-compliant telemedicine platform",
      solution: "Custom telemedicine app with secure video calls and patient management",
      results: [
        { metric: "Active Users", improvement: "50K+", description: "users within 6 months" },
        { metric: "App Store Rating", improvement: "4.9★", description: "average rating across platforms" },
        { metric: "Patient Satisfaction", improvement: "95%", description: "positive feedback score" },
      ],
      timeline: "6 months",
      services: ["Custom Software", "Mobile App", "Security Compliance"],
      image: "/healthcare-app-interface.png",
      testimonial: {
        quote: "DevOrbit delivered a world-class telemedicine platform that our patients love.",
        author: "Emma Williams, Founder at MedConnect",
      },
    },
    {
      id: 4,
      title: "AI-Powered Business Automation",
      client: "DataVision Analytics",
      industry: "Data Analytics",
      challenge: "Manual data processing consuming 40+ hours weekly",
      solution: "Custom AI solution for automated data processing and insights generation",
      results: [
        { metric: "Time Savings", improvement: "40hrs", description: "weekly manual work eliminated" },
        { metric: "Processing Speed", improvement: "500%", description: "faster data analysis" },
        { metric: "Accuracy Rate", improvement: "99.8%", description: "automated processing accuracy" },
      ],
      timeline: "2 months",
      services: ["AI Development", "Custom Software", "Data Processing"],
      image: "/ai-technology-business.png",
      testimonial: {
        quote: "The AI solution revolutionized our operations. We can now focus on strategy instead of manual tasks.",
        author: "David Park, CEO at DataVision Analytics",
      },
    },
    {
      id: 5,
      title: "Startup Growth Acceleration",
      client: "InnovateLab",
      industry: "Technology Startup",
      challenge: "Need for rapid MVP development and market validation",
      solution: "Full-stack web application with integrated analytics and user feedback systems",
      results: [
        { metric: "Time to Market", improvement: "50%", description: "faster than planned launch" },
        { metric: "User Acquisition", improvement: "10K+", description: "users in first month" },
        { metric: "Funding Success", improvement: "£2M", description: "Series A funding raised" },
      ],
      timeline: "3 months",
      services: ["Web Development", "UI/UX Design", "Analytics Integration"],
      image: "/startup-technology-growth.png",
      testimonial: {
        quote: "DevOrbit helped us launch faster and secure funding. They're true partners in our success.",
        author: "Lisa Rodriguez, Founder at InnovateLab",
      },
    },
    {
      id: 6,
      title: "Digital Marketing Transformation",
      client: "GrowthMax Agency",
      industry: "Digital Marketing",
      challenge: "Inefficient campaign management and poor ROI tracking",
      solution: "Custom dashboard with automated reporting and AI-powered campaign optimization",
      results: [
        { metric: "Campaign ROI", improvement: "180%", description: "improvement in client ROI" },
        { metric: "Reporting Time", improvement: "75%", description: "reduction in manual reporting" },
        { metric: "Client Retention", improvement: "90%", description: "client retention rate" },
      ],
      timeline: "2 months",
      services: ["Web Development", "AI Integration", "Analytics"],
      image: "/mobile-app-interface.png",
      testimonial: {
        quote: "The automated dashboard transformed how we manage campaigns. Our clients love the transparency.",
        author: "James Wilson, CEO at GrowthMax Agency",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-primary">
                DevOrbit
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/case-studies" className="text-primary font-medium">
                Case Studies
              </a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button>Get Free Strategy Session</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Real Results from <span className="text-primary">Real Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how we've helped startups and SMBs achieve extraordinary growth through innovative technology
              solutions.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Start Your Success Story
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                  <CardDescription className="text-base">
                    <span className="font-semibold">{study.client}</span> • {study.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {study.results.map((result, index) => (
                          <div key={index} className="text-center p-3 bg-card rounded-lg">
                            <div className="text-2xl font-bold text-primary">{result.improvement}</div>
                            <div className="text-xs text-muted-foreground">{result.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm italic text-foreground mb-2">"{study.testimonial.quote}"</p>
                      <p className="text-xs text-muted-foreground">— {study.testimonial.author}</p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Timeline: {study.timeline}</span>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        View Full Case Study
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the businesses that have transformed their growth with DevOrbit's innovative solutions
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Start Your Transformation
          </Button>
        </div>
      </section>
    </div>
  )
}
