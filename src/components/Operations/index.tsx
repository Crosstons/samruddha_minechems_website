import SectionTitle from "../Common/SectionTitle";
import SingleOperation from "./SingleOperation";
import operationsData from "./operationsData";

const Operations = () => {
  return (
    <>
      <section id="operations" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Operations Overview"
            paragraph="Our comprehensive mining operations span across strategic locations in Madhya Pradesh, ensuring sustainable extraction and processing of rock phosphate reserves."
            center
          />
        </div>
      </section>
    </>
  );
};

export default Operations;
