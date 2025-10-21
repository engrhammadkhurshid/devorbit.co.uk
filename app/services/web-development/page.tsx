import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Web Development</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Build Websites That <span className="text-primary">Scale Your Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stop losing customers to slow, outdated websites. Our lightning-fast, conversion-optimized web solutions
                help you capture more leads and grow revenue by 200%+.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Your Website Audit
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/responsive-web-development.png"
                alt="Web Development Showcase"
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
              Why Our Web Development Drives Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build more than websites - we create digital growth engines for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning-Fast Performance",
                description: "Sub-3 second load times that keep visitors engaged and boost SEO rankings",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Mobile-Responsive Design",
                description: "Perfect experience across all devices - desktop, tablet, and mobile",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "SEO-Optimized Structure",
                description: "Built-in SEO best practices to help you rank higher on Google",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Scalable Architecture",
                description: "Future-proof solutions that grow with your business needs",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Security First",
                description: "Enterprise-grade security to protect your business and customers",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Ongoing Support",
                description: "24/7 monitoring and maintenance to keep your site running smoothly",
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">RetailMax Success Story</h3>
                <p className="text-lg mb-6 opacity-90">
                  We rebuilt RetailMax's e-commerce platform from the ground up, resulting in a 150% increase in
                  conversion rates and 200% boost in mobile sales within 3 months.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">150%</div>
                    <div className="opacity-90">Higher Conversions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">200%</div>
                    <div className="opacity-90">Mobile Sales Increase</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/ecommerce-mobile-app.png"
                  alt="RetailMax E-commerce Platform"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Build Your Growth Engine?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free website audit and discover how we can accelerate your online growth
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Start Your Project Today
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
