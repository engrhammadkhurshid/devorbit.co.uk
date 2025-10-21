import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Poppins } from "next/font/google"
import { Header } from "@/components/header"
import { Chatbot } from "@/components/chatbot"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "DevOrbit - AI-Powered Tech Solutions for Startups & SMBs",
    template: "%s | DevOrbit",
  },
  description:
    "Transform your business with DevOrbit's cutting-edge AI solutions. From web development to custom software, we help startups and SMBs scale faster with measurable ROI.",
  keywords: [
    "AI development",
    "web development",
    "mobile app development",
    "UI/UX design",
    "custom software",
    "startups",
    "SMB solutions",
    "London tech company",
    "digital transformation",
    "business automation",
  ],
  authors: [{ name: "DevOrbit Team" }],
  creator: "DevOrbit",
  publisher: "DevOrbit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devorbit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevOrbit - AI-Powered Tech Solutions for Startups & SMBs",
    description:
      "Transform your business with cutting-edge AI solutions. We help startups and SMBs scale faster with measurable ROI.",
    url: "https://devorbit.com",
    siteName: "DevOrbit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevOrbit - AI-Powered Tech Solutions",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOrbit - AI-Powered Tech Solutions",
    description: "Transform your business with cutting-edge AI solutions for startups and SMBs.",
    images: ["/twitter-image.png"],
    creator: "@devorbit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#007BFF" />
        <meta name="msapplication-TileColor" content="#007BFF" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DevOrbit",
              description: "AI-Powered Tech Solutions for Startups & SMBs",
              url: "https://devorbit.com",
              logo: "https://devorbit.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-20-1234-5678",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Street",
                addressLocality: "London",
                postalCode: "EC2A 4DP",
                addressCountry: "GB",
              },
              sameAs: [
                "https://linkedin.com/company/devorbit",
                "https://twitter.com/devorbit",
                "https://github.com/devorbit",
              ],
              offers: {
                "@type": "Offer",
                description: "Free Strategy Session",
                price: "0",
                priceCurrency: "GBP",
              },
            }),
          }}
        />
      </head>
      <body className="scroll-smooth">
        <Header />
        <Chatbot />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
