import SectionTitle from "../Common/SectionTitle";
import SingleSustainability from "./SingleSustainability";
import sustainabilityData from "./sustainabilityData";

const Sustainability = () => {
  return (
    <>
      <section id="sustainability" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Sustainability Commitment"
            paragraph="At Samruddha Minechem, sustainability is not just a goal—it's the foundation of everything we do. From community development to environmental stewardship, we are committed to responsible mining practices that benefit people, planet, and prosperity."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {sustainabilityData.map((item) => (
              <SingleSustainability key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
