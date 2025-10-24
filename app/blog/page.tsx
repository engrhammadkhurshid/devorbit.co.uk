import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Small Business Operations",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the way SMBs operate and compete in today's market. From automation to predictive analytics, learn how AI can transform your business.",
      content:
        "Artificial intelligence is no longer just for tech giants. Small and medium businesses are increasingly leveraging AI to streamline operations, reduce costs, and gain competitive advantages...",
      author: "Sarah Mitchell",
      date: "2024-12-15",
      readTime: "5 min read",
      category: "AI Development",
      image: "/ai-technology-business.png",
      tags: ["AI", "Automation", "SMB", "Technology"],
    },
    {
      id: 2,
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt:
        "Learn why mobile-first approach is crucial for modern web development and user experience. Discover the strategies that drive higher engagement and conversions.",
      content:
        "With over 60% of web traffic coming from mobile devices, designing for mobile-first isn't just a trend—it's a necessity. This approach fundamentally changes how we think about user experience...",
      author: "Michael Rodriguez",
      date: "2024-12-12",
      readTime: "4 min read",
      category: "Web Development",
      image: "/mobile-app-interface.png",
      tags: ["Mobile", "UX Design", "Web Development", "Responsive"],
    },
    {
      id: 3,
      title: "Scaling Your Startup: Technology Decisions That Matter",
      excerpt:
        "Key technology choices that can make or break your startup's growth trajectory. Learn from successful startups and avoid common pitfalls.",
      content:
        "The technology decisions you make in your startup's early days will impact your ability to scale for years to come. Here's what successful founders wish they knew...",
      author: "Emma Chen",
      date: "2024-12-10",
      readTime: "6 min read",
      category: "Business Strategy",
      image: "/startup-technology-growth.png",
      tags: ["Startup", "Scaling", "Technology", "Strategy"],
    },
    {
      id: 4,
      title: "Custom Software vs. Off-the-Shelf: Making the Right Choice",
      excerpt:
        "When should you invest in custom software development versus using existing solutions? A comprehensive guide to making the right decision for your business.",
      content:
        "One of the most critical decisions growing businesses face is whether to build custom software or use off-the-shelf solutions. The answer isn't always obvious...",
      author: "David Park",
      date: "2024-12-08",
      readTime: "7 min read",
      category: "Custom Software",
      image: "/fintech-dashboard.png",
      tags: ["Custom Software", "Business Decision", "ROI", "Development"],
    },
    {
      id: 5,
      title: "The ROI of Good UX Design: Numbers That Matter",
      excerpt:
        "Quantifying the business impact of user experience design. Real data showing how good UX translates to better business outcomes.",
      content:
        "Good UX design isn't just about making things look pretty—it's about driving measurable business results. Here's the data that proves it...",
      author: "Lisa Thompson",
      date: "2024-12-05",
      readTime: "5 min read",
      category: "UI/UX Design",
      image: "/ui-ux-mockups.png",
      tags: ["UX Design", "ROI", "Business Impact", "Conversion"],
    },
    {
      id: 6,
      title: "API-First Development: Building for the Future",
      excerpt:
        "Why API-first architecture is essential for modern applications. Learn how this approach enables scalability, integration, and future-proofing.",
      content:
        "API-first development has become the gold standard for building scalable, maintainable applications. Here's why this approach matters for your next project...",
      author: "James Wilson",
      date: "2024-12-03",
      readTime: "6 min read",
      category: "Web Development",
      image: "/responsive-web-development.png",
      tags: ["API", "Architecture", "Scalability", "Development"],
    },
    {
      id: 7,
      title: "Healthcare Technology: Compliance and Innovation",
      excerpt:
        "Navigating the complex world of healthcare technology development. How to innovate while maintaining HIPAA compliance and security standards.",
      content:
        "Healthcare technology presents unique challenges that require specialized knowledge and careful planning. Here's how to build compliant, innovative solutions...",
      author: "Dr. Rachel Green",
      date: "2024-12-01",
      readTime: "8 min read",
      category: "Healthcare Tech",
      image: "/healthcare-app-interface.png",
      tags: ["Healthcare", "HIPAA", "Compliance", "Innovation"],
    },
    {
      id: 8,
      title: "E-commerce Optimization: Converting Browsers to Buyers",
      excerpt:
        "Proven strategies to increase your e-commerce conversion rates. From checkout optimization to personalization, learn what actually works.",
      content:
        "E-commerce success isn't just about driving traffic—it's about converting that traffic into sales. Here are the optimization strategies that deliver results...",
      author: "Alex Kumar",
      date: "2024-11-28",
      readTime: "5 min read",
      category: "E-commerce",
      image: "/ecommerce-mobile-app.png",
      tags: ["E-commerce", "Conversion", "Optimization", "Sales"],
    },
  ]

  const categories = [
    "All",
    "AI Development",
    "Web Development",
    "Business Strategy",
    "UI/UX Design",
    "Healthcare Tech",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights for <span className="text-primary">Growth-Minded</span> Businesses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stay ahead with our latest thoughts on technology, business growth, and digital transformation strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "" : "bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Featured Article</h2>
          </div>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <Badge className="mb-4">{blogPosts[0].category}</Badge>
                <CardTitle className="text-2xl mb-4">{blogPosts[0].title}</CardTitle>
                <CardDescription className="text-base mb-6">{blogPosts[0].excerpt}</CardDescription>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button>Read Full Article</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Latest Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-sm">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary p-0">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest insights on technology and business growth delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
            />
            <Button size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our technology solutions can accelerate your growth
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Your Free Consultation
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
