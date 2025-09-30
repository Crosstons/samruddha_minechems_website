import ScrollUp from "@/components/Common/ScrollUp";
import WhatIsRockPhosphate from "@/components/Products/WhatIsRockPhosphate";
import RunOfMinesHero from "@/components/Products/RunOfMinesHero";
import GroundRockHero from "@/components/Products/GroundRockHero";
import BeneficiatedRockHero from "@/components/Products/BeneficiatedRockHero";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Products - Samruddha Minechem",
  description: "Explore our comprehensive range of rock phosphate products from raw run-of-mines to high-grade beneficiated rock phosphate. Discover applications, specifications, and packaging options.",
};

export default function ProductsPage() {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Products"
        description="Explore our comprehensive range of rock phosphate products from raw run-of-mines to high-grade beneficiated rock phosphate. Discover applications, specifications, and packaging options."
      />
      <WhatIsRockPhosphate />
      <RunOfMinesHero />
      <GroundRockHero />
      <BeneficiatedRockHero />
    </>
  );
}
