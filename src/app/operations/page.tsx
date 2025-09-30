import ScrollUp from "@/components/Common/ScrollUp";
import MeghnagarHero from "@/components/Operations/MeghnagarHero";
import HirapurHero from "@/components/Operations/HirapurHero";
import Operations from "@/components/Operations";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Operations - Samruddha Minechem",
  description: "Explore our mining operations across Meghnagar and Hirapur in Madhya Pradesh. Discover our strategic locations, reserves, and expansion plans.",
};

export default function OperationsPage() {
  return (
    <>
      {/* <Operations /> */}
      <Breadcrumb
        pageName="Operations"
        description="Explore our mining operations across Meghnagar and Hirapur in Madhya Pradesh. Discover our strategic locations, reserves, and expansion plans."
      />
      <ScrollUp />
      <MeghnagarHero />
      <HirapurHero />
    </>
  );
}
