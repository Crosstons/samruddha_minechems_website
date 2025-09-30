import SectionTitle from "../Common/SectionTitle";
import SingleLeader from "./SingleLeader";
import leadershipData from "./leadershipData";

const Leadership = () => {
  return (
    <>
      <section id="leadership" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Executive Leadership"
            paragraph="Our experienced leadership team brings together decades of expertise in mining, business development, and strategic management to drive Samruddha Minechem's vision of solving India's phosphate challenge."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
            {leadershipData.map((leader) => (
              <SingleLeader key={leader.id} leader={leader} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
