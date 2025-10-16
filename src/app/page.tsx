import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Operations from "@/components/Operations";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samruddha Minechem Private Limited - India's Premier Phosphate Mining Company",
  description: "Samruddha Minechem Private Limited is India's leading phosphate mining company with 45 million tons of rock phosphate reserves across 10 mining leases in Madhya Pradesh. We specialize in sustainable phosphate mining, beneficiation, and forward integration into phosphate-based products for India's agricultural sector.",
  keywords: "Samruddha Minechem, Samruddha Minechem Private Limited, phosphate mining company India, rock phosphate mining Madhya Pradesh, phosphate reserves India, phosphate processing company, phosphate beneficiation India, phosphate fertilizer company, phosphate mining operations, sustainable phosphate mining, phosphate ecosystem India, phosphate products India, phosphate mining company, rock phosphate reserves, phosphate mining leases, phosphate mining Jhabua, phosphate mining Sagar",
  openGraph: {
    title: "Samruddha Minechem Private Limited - India's Premier Phosphate Mining Company",
    description: "Leading phosphate mining company with 45 million tons of rock phosphate reserves. Sustainable mining solutions and phosphate processing for India's agricultural needs.",
    type: "website",
    locale: "en_IN",
    siteName: "Samruddha Minechem",
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
      <Leadership />
      <Testimonials />
      <Video />
      <Brands />
      <Contact />
    </>
  );
}
