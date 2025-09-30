export interface Leader {
  id: number;
  name: string;
  position: string;
  age: number;
  education: string;
  experience: string;
  background: string;
  image: string;
}

export const leadershipData: Leader[] = [
  {
    id: 1,
    name: "Mr. Vinay Patil",
    position: "Director",
    age: 53,
    education: "B.E. (Electronics) from VJTI, Mumbai, and MBA (International Business) from The Ohio State University, USA",
    experience: "Over two decades in mining business",
    background: "Earlier worked as Marketing Analyst with Copeland Corporation (International Division, USA) and Marketing Engineer with Mafatlal Consultancy Services Limited, Mumbai. An entrepreneur by profession, he oversees the overall management and strategic direction of the company.",
    image: "/images/leadership/vinay-patil.jpeg"
  },
  {
    id: 2,
    name: "Mr. Sachin Parikh",
    position: "Director",
    age: 59,
    education: "Commerce graduate",
    experience: "More than 36 years of rich experience across multiple industries",
    background: "Founder & Managing Director of Yash Polychem Private Limited, an Authorized Distributor and DCA for IOCL and BPCL, with annual revenues exceeding ₹1,200 crore. His vision and leadership have been instrumental in the establishment of Samruddha Minechem.",
    image: "/images/leadership/sachin-parikh.jpeg"
  },
  {
    id: 3,
    name: "Mr. Yash Parikh",
    position: "Director",
    age: 30,
    education: "B.S. in Economics and MBA in Supply Chain Management, both from Pennsylvania State University, USA",
    experience: "12 years in the United States, founded and successfully exited Go2Gro, worked with Shipt (Target Corporation subsidiary)",
    background: "Since moving back to India in 2023, he has been actively involved in Samruddha Minechem, contributing to business development, finance, sales, and the company's strategic initiatives.",
    image: "/images/leadership/yash-parikh.jpeg"
  },
  {
    id: 4,
    name: "Mr. Ashish Bahadur",
    position: "Director",
    age: 58,
    education: "Graduate in Arts",
    experience: "Over 30 years of diverse business experience",
    background: "Specializes in Business Research and Development, focusing on project-specific assignments. His expertise lies in managing project implementation, particularly in legal, compliance, and government affairs, where he plays a critical role in supporting the company's expansion.",
    image: "/images/leadership/ashish-bahadur.jpeg"
  }
];

export default leadershipData;
