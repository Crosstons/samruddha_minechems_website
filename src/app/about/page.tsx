import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import CompanyInfo from "@/components/About/CompanyInfo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Samruddha Minechem | India's Leading Phosphate Mining Company",
  description: "Learn about Samruddha Minechem's mission to solve India's phosphate challenge. Discover our vision, values, and comprehensive approach to phosphate mining, beneficiation, and forward integration into phosphate-based products.",
  keywords: "Samruddha Minechem about, phosphate mining company mission, India phosphate vision, sustainable mining values, phosphate beneficiation company, rock phosphate processing",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Learn about Samruddha Minechem's mission to solve India's phosphate challenge through forward integration and the creation of a robust phosphate-based ecosystem."
      />
      <AboutSectionOne />
      <CompanyInfo />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
