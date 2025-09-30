export interface Product {
  id: number;
  name: string;
  grade: string;
  applications: string[];
  packaging: string;
  dispatch: string;
  description: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Rock Phosphate Run Of Mines",
    grade: "12–14% P₂O₅",
    applications: [
      "Manufacturing BRP",
      "Organic Rock Phosphate Fertilizer",
      "Blending with Commercial Grade Rock Phosphate"
    ],
    packaging: "Bulk Loose (300 - 400 mm Boulders)",
    dispatch: "Ex-plant, Rail, or Road",
    description: "Raw rock phosphate extracted directly from our mining operations, ready for further processing or direct application in organic farming."
  },
  {
    id: 2,
    name: "Ground Rock Phosphate",
    grade: "12–14% P₂O₅",
    applications: [
      "Manufacturing BRP",
      "Organic Rock Phosphate Fertilizer",
      "Blending with Commercial Grade Rock Phosphate",
      "PROM (Phosphate Rock of Morocco)"
    ],
    packaging: "Bulk Loose, or Jumbo Bags (100 mesh powder)",
    dispatch: "Ex-plant, Rail, or Road",
    description: "Finely ground rock phosphate powder, processed to 100 mesh for enhanced solubility and better plant absorption."
  },
  {
    id: 3,
    name: "Beneficiated Rock Phosphate (BRP)",
    grade: "30–31.5% P₂O₅",
    applications: [
      "Direct-Application Fertilizer",
      "Phosphoric Acid Production",
      "Di-Calcium Phosphate",
      "Single Super Phosphate",
      "Tri-Calcium Phosphate",
      "Yellow Phosphorus"
    ],
    packaging: "Bulk Loose, or Jumbo Bags",
    dispatch: "Ex-plant, Rail, or Road",
    description: "High-grade beneficiated rock phosphate with significantly enhanced P₂O₅ content, suitable for premium fertilizer and chemical applications."
  }
];

export default productsData;
