import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">UI/UX Design</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Transform Visitors Into <span className="text-primary">Paying Customers</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stop losing potential customers to poor design. Our conversion-focused UI/UX design increases your
                revenue by up to 300% through data-driven user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Your Design Audit
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/ui-ux-mockups.png"
                alt="UI/UX Design Showcase"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our UI/UX Design Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't just make things look pretty - we design experiences that drive business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Conversion-Focused Design",
                description: "Every element is strategically placed to guide users toward your business goals",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Mobile-First Approach",
                description: "Designs that work flawlessly across all devices and screen sizes",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "User Research & Testing",
                description: "Data-driven decisions based on real user behavior and feedback",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Brand Consistency",
                description: "Cohesive visual identity that builds trust and recognition",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Fast Turnaround",
                description: "Get your designs delivered in 2-3 weeks, not months",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Unlimited Revisions",
                description: "We work until you're 100% satisfied with the final result",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="mb-3">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Example */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Real Results from Real Clients</h3>
                <p className="text-lg mb-6 opacity-90">
                  TechFlow Solutions saw a 300% increase in user engagement after we redesigned their platform with a
                  focus on user experience and conversion optimization.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">300%</div>
                    <div className="opacity-90">Increase in Engagement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">150%</div>
                    <div className="opacity-90">Higher Conversion Rate</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/fintech-dashboard.png"
                  alt="TechFlow Solutions Dashboard"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your User Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free design audit and discover how we can increase your conversions
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Book Your Free Consultation
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
