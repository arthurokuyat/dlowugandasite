import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dlow Uganda - Find Nearby Discounts & Local Shop Deals",
  description: "Discover cheap deals near you! Dlow helps Ugandans find local shop discounts in real-time. Buy, book & save money daily!",
  keywords: "Dlow Uganda, discounts near me Uganda, cheap shops Kampala, affordable groceries Uganda, Ugandan marketplace app, local store deals Uganda, shop discounts, buy & book Uganda, retail deals Uganda, nearby shops Uganda",
  authors: [{ name: "Dlow Uganda" }],
  creator: "Dlow Uganda",
  publisher: "Dlow Uganda",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.dlowuganda.shop',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.dlowuganda.shop',
    title: 'Dlow – Uganda\'s Marketplace for Real Discounts',
    description: 'Book and buy discounted items near you. Save more by shopping smart with Dlow – Uganda\'s discount shopping app.',
    siteName: 'Dlow Uganda',
    images: [
      {
        url: '/images/dlow-logo.png',
        width: 540,
        height: 225,
        alt: 'Dlow Uganda Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dlow – Uganda\'s Marketplace for Real Discounts',
    description: 'Book and buy discounted items near you. Save more by shopping smart with Dlow – Uganda\'s discount shopping app.',
    images: ['/images/dlow-logo.png'],
    creator: '@dlowuganda',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google verification code
  },
  category: 'shopping',
  classification: 'marketplace',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  generator: 'Next.js',
  applicationName: 'Dlow Uganda',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0e053b" />
        <meta name="msapplication-TileColor" content="#0e053b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dlow Uganda" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="UG" />
        <meta name="geo.placename" content="Uganda" />
        <meta name="geo.position" content="0.3476;32.5825" />
        <meta name="ICBM" content="0.3476, 32.5825" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dlow Uganda",
              "description": "Uganda's first location-based marketplace that connects customers to verified local retailers offering real-time discounts within a 500-meter radius.",
              "url": "https://www.dlowuganda.shop",
              "logo": "https://www.dlowuganda.shop/images/dlow-logo.png",
              "image": "https://www.dlowuganda.shop/images/dlow-logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "UG",
                "addressLocality": "Kampala",
                "addressRegion": "Central"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+256750781744",
                "contactType": "customer service",
                "email": "dlowuganda@gmail.com"
              },
              "sameAs": [
                "https://www.facebook.com/dlowuganda",
                "https://www.instagram.com/dlowuganda",
                "https://twitter.com/dlowuganda"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "Uganda"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Uganda"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Local Discounts",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Local Shop Discounts",
                      "description": "Real-time discounts from shops within 500 meters"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
