import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import leadershipData from "./leadershipData";

const DetailedLeadership = () => {
  return (
    <>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">

          <div className="space-y-16">
            {leadershipData.map((leader, index) => (
              <div
                key={leader.id}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Leader Image */}
                <div className="w-full lg:w-1/3">
                  <div className="relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Leader Details */}
                <div className="w-full lg:w-2/3">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center lg:text-left">
                      <h2 className="mb-2 text-3xl font-bold text-black">
                        {leader.name}
                      </h2>
                      <p className="mb-1 text-xl font-semibold text-primary">
                        {leader.position}
                      </p>
                      <p className="text-lg text-body-color">
                        Aged {leader.age} years
                      </p>
                    </div>

                    {/* Education */}
                    <div className="rounded-lg bg-gray-50 p-6">
                      <h3 className="mb-3 text-lg font-bold text-black">
                        Education & Qualifications
                      </h3>
                      <p className="text-base text-body-color">
                        {leader.education}
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="rounded-lg bg-primary/5 p-6">
                      <h3 className="mb-3 text-lg font-bold text-black">
                        Professional Experience
                      </h3>
                      <p className="text-base text-body-color">
                        {leader.experience}
                      </p>
                    </div>

                    {/* Background */}
                    <div className="rounded-lg border border-gray-200 p-6">
                      <h3 className="mb-3 text-lg font-bold text-black">
                        Professional Background
                      </h3>
                      <p className="text-base leading-relaxed text-body-color">
                        {leader.background}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Philosophy Section */}
          <div className="mt-20">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12">
              <div className="text-center">
                <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl">
                  Our Leadership Philosophy
                </h2>
                <div className="mx-auto max-w-4xl space-y-6">
                  <p className="text-lg leading-relaxed text-body-color">
                    At Samruddha Minechem, our leadership team is united by a shared commitment to
                    solving India's phosphate challenge through strategic vision, operational excellence,
                    and sustainable practices. Each leader brings unique expertise that collectively
                    drives our mission forward.
                  </p>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                      <h3 className="mb-3 font-semibold text-primary">
                        Strategic Vision
                      </h3>
                      <p className="text-sm text-body-color">
                        Forward-thinking approach to phosphate ecosystem development
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                      <h3 className="mb-3 font-semibold text-primary">
                        Operational Excellence
                      </h3>
                      <p className="text-sm text-body-color">
                        Decades of experience in mining and business operations
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                      <h3 className="mb-3 font-semibold text-primary">
                        Sustainable Growth
                      </h3>
                      <p className="text-sm text-body-color">
                        Commitment to environmental responsibility and community development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailedLeadership;
