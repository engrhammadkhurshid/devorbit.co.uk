import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AIDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">AI Development</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Automate Your Way to <span className="text-primary">10x Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stop wasting 40+ hours per week on repetitive tasks. Our custom AI solutions automate your operations,
                reduce costs by 60%, and accelerate growth like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Your AI Assessment
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                  View AI Solutions
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/ai-dashboard-visualization.png"
                alt="AI Development Showcase"
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
              Why Our AI Solutions Transform Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build AI that actually works for your business - not just impressive demos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Process Automation",
                description: "Automate repetitive tasks and free up your team for strategic work",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Predictive Analytics",
                description: "Make data-driven decisions with AI-powered insights and forecasting",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Customer Service AI",
                description: "24/7 intelligent chatbots that provide human-like customer support",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Content Generation",
                description: "AI-powered content creation for marketing, social media, and more",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Data Processing",
                description: "Process massive datasets in seconds, not hours or days",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Custom AI Models",
                description: "Tailored AI solutions built specifically for your industry and needs",
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">TechFlow AI Transformation</h3>
                <p className="text-lg mb-6 opacity-90">
                  Our AI integration saved TechFlow Solutions 40 hours per week in manual data processing and increased
                  their operational efficiency by 300% within 3 months.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">40hrs</div>
                    <div className="opacity-90">Weekly Time Saved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">300%</div>
                    <div className="opacity-90">Efficiency Increase</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/ai-technology-business.png"
                  alt="AI Technology Dashboard"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Automate Your Success?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free AI assessment and discover how we can transform your business operations
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Start Your AI Journey
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
