import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import AbstractLeadership from "@/components/Leadership/AbstractLeadership";
import Operations from "@/components/Operations";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samruddha Minechem - Solving India's Phosphate Problem | Leading Rock Phosphate Mining Company",
  description: "Samruddha Minechem Private Limited is India's premier phosphate mining company with 45 million tons of rock phosphate reserves across 10 mining leases in Madhya Pradesh. Building an integrated rock phosphate ecosystem for a self-reliant India through sustainable mining, beneficiation, and forward integration.",
  keywords: "Samruddha Minechem, Samruddha, phosphate mining India, rock phosphate mining, phosphate problem India, phosphate reserves Madhya Pradesh, sustainable mining, phosphate beneficiation, BRP production, phosphate fertilizer, mining company India, phosphate ecosystem, Jhabua mining, Sagar mining, phosphate processing, rock phosphate supplier India, mining operations Madhya Pradesh",
  alternates: {
    canonical: "https://samruddhaminechem.com",
  },
  openGraph: {
    title: "Samruddha Minechem - Solving India's Phosphate Problem",
    description: "India's premier phosphate mining company with 45 million tons of rock phosphate reserves. Building an integrated phosphate ecosystem for a self-reliant India.",
    type: "website",
    url: "https://samruddhaminechem.com",
    locale: "en_IN",
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
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Products /> */}
      {/* <Operations /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Sustainability />
      <AbstractLeadership />
      {/* <Testimonials /> */}
      {/* <Video /> */}
      <Brands />
      <Contact />
    </>
  );
}
