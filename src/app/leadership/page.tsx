import Breadcrumb from "@/components/Common/Breadcrumb";
import DetailedLeadership from "@/components/Leadership/DetailedLeadership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Leadership - Samruddha Minechem | Meet Our Leadership Team",
  description: "Meet the experienced leadership team at Samruddha Minechem. Our directors bring decades of expertise in mining, business development, and strategic management to drive India's phosphate ecosystem development.",
  keywords: "Samruddha Minechem leadership, executive team, mining company directors, phosphate industry leaders, business leadership India, mining executives",
};

const LeadershipPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Executive Leadership"
        description="Meet our experienced leadership team that drives Samruddha Minechem's vision of solving India's phosphate challenge through strategic expertise and innovative solutions."
      />
      <DetailedLeadership />
    </>
  );
};

export default LeadershipPage;
