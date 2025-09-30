import Sustainability from "@/components/Sustainability";
import ScrollUp from "@/components/Common/ScrollUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Samruddha Minechem - Responsible Mining for India's Future",
  description: "Discover how Samruddha Minechem is committed to sustainable mining practices, community development, and environmental stewardship in India's phosphate sector.",
};

const SustainabilityPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sustainability"
        description="Building a sustainable future through responsible mining practices, community development, and environmental stewardship."
      />
      
      <ScrollUp />
      
      <Sustainability />
    </>
  );
};

export default SustainabilityPage;
