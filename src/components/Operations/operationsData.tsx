export interface Operation {
  id: number;
  location: string;
  state: string;
  miningLeases: number;
  reserves: string;
  miningArea: string;
  capacity: string;
  landAllotted: string;
  plantCapacity: string;
  timeline: string;
  status: string;
}

export const operationsData: Operation[] = [
  {
    id: 1,
    location: "Meghnagar",
    state: "Madhya Pradesh",
    miningLeases: 6,
    reserves: "~23 million tons of Rock Phosphate",
    miningArea: "150+ hectares",
    capacity: "To be enhanced up to 1 million tons annually by Dec 2026",
    landAllotted: "13.2 hectares allotted by MPIDC (adjacent to mines)",
    plantCapacity: "0.4 million tons of 31.5% P₂O₅ output",
    timeline: "Plant erection and commissioning targeted by Dec 2026",
    status: "Environmental Clearance: Secured in June 2025"
  },
  {
    id: 2,
    location: "Hirapur",
    state: "Madhya Pradesh",
    miningLeases: 4,
    reserves: "~22 million tons of Rock Phosphate",
    miningArea: "175+ hectares",
    capacity: "To be enhanced up to 1 million tons annually by Dec 2028",
    landAllotted: "17 hectares allotted by MPIDC (adjacent to mines)",
    plantCapacity: "0.4 million tons of 31.5% P₂O₅ output",
    timeline: "Plant erection and commissioning scheduled by 2028",
    status: "Development Phase"
  }
];

export default operationsData;
