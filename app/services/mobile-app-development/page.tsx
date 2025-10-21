import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Mobile App Development</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Launch Apps That <span className="text-primary">Users Actually Love</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stop wasting money on apps that nobody uses. Our user-centric mobile apps achieve 4.8+ star ratings and
                drive 300% higher user engagement than industry average.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Your App Strategy
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                  View App Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-mobile-app-interfaces.png"
                alt="Mobile App Development Showcase"
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Our Apps Dominate App Stores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't just build apps - we create mobile experiences that users can't put down
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Native & Cross-Platform",
                description: "iOS, Android, or both - we build for maximum reach and performance",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "User-Centric Design",
                description: "Intuitive interfaces that users love, leading to higher retention rates",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "App Store Optimization",
                description: "Built-in ASO strategies to help your app rank higher and get discovered",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Real-Time Analytics",
                description: "Track user behavior and app performance with detailed analytics",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Push Notifications",
                description: "Smart notification system to re-engage users and boost retention",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                title: "Offline Functionality",
                description: "Apps that work seamlessly even without internet connection",
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">MedConnect Achievement</h3>
                <p className="text-lg mb-6 opacity-90">
                  Our HIPAA-compliant telemedicine app for MedConnect reached 50,000+ active users within 6 months and
                  maintains a 4.9-star rating across both app stores.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="opacity-90">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4.9★</div>
                    <div className="opacity-90">App Store Rating</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/healthcare-app-interface.png"
                  alt="MedConnect Telemedicine App"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Launch Your Winning App?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free app strategy session and discover how we can bring your vision to life
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Start Your App Project
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
