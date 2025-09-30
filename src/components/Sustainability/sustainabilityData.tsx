export interface SustainabilityItem {
  id: number;
  category: string;
  title: string;
  description: string;
  icon: string;
}

export const sustainabilityData: SustainabilityItem[] = [
  {
    id: 1,
    category: "Community",
    title: "Community Engagement & Social Investment",
    description: "At the heart of our sustainability approach lies a strong commitment to fostering inclusive growth and empowering the communities around our operations. Through our initiatives in local employment and training, we create meaningful opportunities for skill development and livelihood generation.",
    icon: "👥"
  },
  {
    id: 2,
    category: "Community",
    title: "Health, Safety & Wellbeing",
    description: "Ensuring the health, safety, and overall wellbeing of our workforce and partner communities is a core priority. We implement rigorous on-site HSE training and incident prevention protocols to build a culture of safety and preparedness at every level.",
    icon: "🏥"
  },
  {
    id: 3,
    category: "Environment",
    title: "Mining & Metals Practices",
    description: "Reduced stripping ratio mining, controlled benching and safe slope designs, and low-emission mining & beneficiation equipment ensure minimal environmental impact while maximizing efficiency.",
    icon: "⛏️"
  },
  {
    id: 4,
    category: "Environment",
    title: "Environmental Stewardship",
    description: "Zero Liquid Discharge (ZLD) process engineering, dust suppression & runoff control systems, and reuse feasibility for tailings & sludge demonstrate our commitment to environmental protection.",
    icon: "🌱"
  },
  {
    id: 5,
    category: "Environment",
    title: "Restoration & Biodiversity",
    description: "Native tree plantations, soil regeneration post-mining, and partnerships with ecological NGOs for zone rehabilitation ensure we leave a positive environmental legacy.",
    icon: "🌳"
  },
  {
    id: 6,
    category: "Environment",
    title: "Scope for Intensity Reduction",
    description: "20% reduction target in energy intensity by 2030, feasibility for solar beneficiation integration, and CO₂ benchmarking under implementation showcase our commitment to continuous improvement.",
    icon: "⚡"
  }
];

export default sustainabilityData;
