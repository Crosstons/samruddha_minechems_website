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
  title: "Samruddha Minechem - Solving India's Phosphate Problem",
  description: "Building an integrated rock phosphate ecosystem for a self-reliant India. Mining, beneficiation, and forward integration into phosphate-based products.",
  // other metadata
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
