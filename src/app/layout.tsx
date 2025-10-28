import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samruddha Minechem - India's Leading Phosphate Mining Company | Rock Phosphate Mining & Processing",
  description: "Samruddha Minechem Private Limited is India's premier phosphate mining company with 45 million tons of rock phosphate reserves across 10 mining leases in Madhya Pradesh. We provide sustainable mining solutions, phosphate processing, and forward integration into phosphate-based products for India's agricultural sector.",
  keywords: "Samruddha Minechem, Samruddha, phosphate mining India, rock phosphate mining, phosphate reserves, mining company Madhya Pradesh, phosphate processing, sustainable mining, phosphate beneficiation, BRP production, phosphate fertilizer, mining operations India, phosphate ecosystem, Jhabua mining, Sagar mining, phosphate products India, mining company Mumbai, rock phosphate supplier",
  authors: [{ name: "Samruddha Minechem Private Limited" }],
  metadataBase: new URL('https://samruddhaminechem.com'),
  alternates: {
    canonical: 'https://samruddhaminechem.com',
  },
  openGraph: {
    title: "Samruddha Minechem - India's Leading Phosphate Mining Company",
    description: "India's premier phosphate mining company with 45 million tons of rock phosphate reserves. Sustainable mining solutions and phosphate processing for India's agricultural needs.",
    type: "website",
    locale: "en_IN",
    url: "https://samruddhaminechem.com",
    siteName: "Samruddha Minechem",
    images: [
      {
        url: "https://samruddhaminechem.com/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Samruddha Minechem - Leading Phosphate Mining Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samruddha Minechem - India's Leading Phosphate Mining Company",
    description: "India's premier phosphate mining company with 45 million tons of rock phosphate reserves. Sustainable mining solutions for India's agricultural needs.",
    images: ["https://samruddhaminechem.com/images/logo/logo.svg"],
  },
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d1ab7a" />
        <link rel="canonical" href="https://samruddhaminechem.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Samruddha Minechem Private Limited",
              "alternateName": ["Samruddha Minechem", "Samruddha"],
              "url": "https://samruddhaminechem.com",
              "logo": "https://samruddhaminechem.com/images/logo/logo.svg",
              "description": "Samruddha Minechem Private Limited is India's premier phosphate mining company with 45 million tons of rock phosphate reserves across 10 mining leases in Madhya Pradesh. We provide sustainable mining solutions and phosphate processing for India's agricultural sector.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6th Floor, 'A' Block, Shivsagar Estate, Dr. Annie Besant Road, Worli",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400018",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-93740-73434",
                "contactType": "customer service",
                "email": "yash.parikh@samruddha.in"
              },
              "sameAs": [
                "https://www.linkedin.com/company/samruddha-minechem-private-limited/"
              ],
              "industry": "Mining",
              "foundingDate": "2020",
              "numberOfEmployees": "50-200",
              "knowsAbout": [
                "Phosphate Mining",
                "Rock Phosphate",
                "Phosphate Processing",
                "Sustainable Mining",
                "Phosphate Beneficiation",
                "Phosphate Reserves",
                "Mining Operations",
                "Phosphate Products"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Phosphate Mining Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rock Phosphate Mining"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Phosphate Beneficiation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Phosphate Processing"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

import { Providers } from "./providers";

