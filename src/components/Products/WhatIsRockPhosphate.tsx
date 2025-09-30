const WhatIsRockPhosphate = () => {
  return (
    <>
      <section
        id="what-is-rock-phosphate"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  What is Rock Phosphate?
                </h1>
                <p className="mb-12 text-base leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Understanding the foundation of modern agriculture and India&apos;s path to phosphate self-reliance.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-[570px] lg:mr-0">
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    The Foundation of Modern Agriculture
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-body-color">
                    Rock phosphate is the primary raw material used to manufacture phosphatic fertilizers, which are essential for modern agriculture. Phosphorus, derived from rock phosphate, is one of the three critical macronutrients (NPK – Nitrogen, Phosphorus, Potassium) required for plant growth.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-body-color">
                    It plays a vital role in root development, crop yield, and overall soil health—making it indispensable for global food security.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-black">
                    Global Demand & India&apos;s Challenge
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    According to the Food and Agriculture Organization (FAO), global demand for phosphatic fertilizers is expected to rise steadily over the next decade, driven by population growth and the need for higher agricultural productivity.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-body-color">
                    India, one of the largest consumers of fertilizers, currently imports nearly 90% of its phosphate requirement, creating a heavy dependency on global suppliers and exposing the country to price volatility and supply shocks.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-[570px] lg:ml-0">
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-black">
                    Historical Context & Evolution
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    The use of phosphorus dates back thousands of years, with early civilizations applying ground animal bones and ash to enrich soils. The industrial use of rock phosphate began in the mid-19th century, when it was first processed into superphosphate fertilizer—a discovery that transformed global agriculture.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-body-color">
                    Over time, technological advancements have enabled beneficiation processes that upgrade low-grade phosphate ore into high-grade, fertilizer-ready material. Today, modern techniques in mining, beneficiation, and chemical processing are helping to optimize recovery, reduce environmental impact, and ensure long-term supply security.
                  </p>
                </div>

                <div className="rounded-lg bg-primary/10 p-6">
                  <h3 className="mb-4 text-xl font-bold text-black">
                    India&apos;s Strategic Imperative
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    For India, developing a strong domestic rock phosphate mining and processing ecosystem is a strategic necessity. By harnessing its own reserves and forward-integrating into phosphoric acid and fertilizer production, India can reduce import dependence, secure farmers&apos; access to essential nutrients, and achieve true Atmanirbharta in this critical sector.
                  </p>
                  <p className="text-base leading-relaxed text-body-color font-semibold">
                    At Samruddha Minechem, we are committed to solving India&apos;s phosphate problem by unlocking value from indigenous reserves and building a robust phosphate-based ecosystem that ensures sustainable growth for agriculture and food security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="277"
              r="225"
              fill="url(#paint0_linear_25:220)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:220"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#d1ab7a" />
                <stop offset="1" stopColor="#d1ab7a" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default WhatIsRockPhosphate;
