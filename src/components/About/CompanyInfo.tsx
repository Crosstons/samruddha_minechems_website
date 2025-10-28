import React from "react";
import Image from "next/image";

const CompanyInfo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* What We Do & Plan to Do Section with Image */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div className="w-full">
              <h3 className="mb-6 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                What We Do & Plan to Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                  <p className="text-base font-medium text-body-color">
                    Rock Phosphate Mining
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                  <p className="text-base font-medium text-body-color">
                    Beneficiation into high-grade BRP (30–31.5% P₂O₅) by January, 2027
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="mb-3 text-lg font-semibold text-black">
                    Future Product Lines:
                  </h4>
                  <div className="space-y-2 pl-4">
                    <div className="flex items-start">
                      <span className="mr-2 text-primary">→</span>
                      <p className="text-base text-body-color">
                        Phosphoric Acid (Industrial & Fertilizer Grade)
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-primary">→</span>
                      <p className="text-base text-body-color">
                        Customized NPK Fertilizer Blends
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-primary">→</span>
                      <p className="text-base text-body-color">
                        Yellow Phosphorus (Agrochemicals & Industrial Use)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://cms.clubduelz.in/uploads/Whats_App_Image_2025_10_28_at_3_01_04_PM_7ca84be730.jpeg"
                  alt="Samruddha Minechem Mining Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Purpose Section */}
        <div className="mb-20">
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
              Our Purpose
            </h3>
            <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-8">
              <p className="text-2xl font-bold text-primary">
                "To Solve India's Phosphate Problem"
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section with Image */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="w-full lg:order-1">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://cms.clubduelz.in/uploads/1_67936b413d.jpg"
                  alt="Samruddha Minechem Beneficiation Plant"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:order-2">
              {/* Vision */}
              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                  Vision
                </h3>
                <p className="text-base leading-relaxed text-body-color">
                  To be India's most trusted and integrated Rock Phosphate company,
                  enabling secure fertilizer and chemical supply chains.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                  Mission
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-base text-body-color">
                      Unlock reserves sustainably
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-base text-body-color">
                      Maximize beneficiation efficiency
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-base text-body-color">
                      Build scalable phosphate-based ecosystems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div>
          <div className="text-center">
            <h3 className="mb-12 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
              Our Values
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
                <h4 className="mb-3 text-lg font-semibold text-primary">Sustainability</h4>
                <p className="text-sm text-body-color">
                  Long-term environmental responsibility
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
                <h4 className="mb-3 text-lg font-semibold text-primary">Transparency</h4>
                <p className="text-sm text-body-color">
                  Ethical reporting & compliance
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
                <h4 className="mb-3 text-lg font-semibold text-primary">Innovation</h4>
                <p className="text-sm text-body-color">
                  Continuous process & product improvement
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
                <h4 className="mb-3 text-lg font-semibold text-primary">Responsibility</h4>
                <p className="text-sm text-body-color">
                  Safety and social impact at the core
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
                <h4 className="mb-3 text-lg font-semibold text-primary">Partnership</h4>
                <p className="text-sm text-body-color">
                  Trusted collaboration with clients & stakeholders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
