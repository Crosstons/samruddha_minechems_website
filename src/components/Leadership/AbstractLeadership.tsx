import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import leadershipData from "./leadershipData";

const AbstractLeadership = () => {
  return (
    <>
      <section id="leadership" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Executive Leadership"
            paragraph="Our experienced leadership team brings together decades of expertise in mining, business development, and strategic management to drive Samruddha Minechem's vision of solving India's phosphate challenge."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {leadershipData.map((leader) => (
              <div key={leader.id} className="w-full">
                <div className="wow fadeInUp text-center" data-wow-delay=".15s">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full shadow-lg">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-bold text-black">
                      {leader.name}
                    </h3>
                    <p className="mb-3 text-base font-semibold text-primary">
                      {leader.position}
                    </p>
                    <p className="mb-4 text-sm text-body-color">
                      {leader.experience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Link
              href="/leadership"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Meet Our Leadership Team
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AbstractLeadership;
